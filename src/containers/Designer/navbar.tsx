import React, { useRef, useEffect, Dispatch } from "react";

export const Navbar = ({
  navbarItems,
  activeTab,
  setActiveTab,
}: {
  navbarItems: {
    id: number;
    title: string;
    icon: React.ReactNode;
  }[];
  activeTab: number;
  setActiveTab: Dispatch<React.SetStateAction<number>>;
}) => {
  const listRef = useRef<any>();
  const disRef = useRef<any>(null);

  useEffect(() => {
    const listChild = `li:nth-child(${activeTab + 1})`;
    const dis = listRef.current.querySelector(listChild);

    disRef.current = dis;
    align(dis);

    listRef.current.querySelectorAll("li").forEach((li: any, index) => {
      li.addEventListener("click", () => {
        setActiveTab(index);

        disRef.current = li;
        align(li);
      });
    });

    document.body.addEventListener("keydown", handleKeyDown);
    document.body.addEventListener("keydown", handleArrowKeys);

    return () => {
      document.body.removeEventListener("keydown", handleKeyDown);
      document.body.removeEventListener("keydown", handleArrowKeys);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setActiveTab]);

  const handleKeyDown = (e: any) => {
    if (e.code === "Tab") {
      e.preventDefault();
      if (disRef.current.nextElementSibling)
        disRef.current.nextElementSibling.click();
    } else {
      listRef.current.querySelector("li:first-child").click();
    }
  };

  const handleArrowKeys = (e: any) => {
    if (e.keyCode === 37)
      // left
      document.getElementById("showroom")?.animate(
        {
          left: "-=980",
        },
        500
      );
    else if (e.keyCode === 39)
      // right
      document.getElementById("showroom")?.animate(
        {
          left: "+=980",
        },
        500
      );
  };

  const align = (dis: any) => {
    // get index of item
    const index = [...listRef.current.children].indexOf(dis) + 1;

    // add active class to the new item
    listRef.current.querySelectorAll("li").forEach((li: any) => {
      li.classList.remove("active");
    });
    setTimeout(() => {
      dis.classList.add("active");
    }, 100);

    // move the wave
    const left = index * 80 - 98;

    document.getElementById("wave")!.style.left = `${left}px`;
  };

  return (
    <nav>
      <div className="wave-wrap bg-white">
        <svg
          version="1.1"
          id="wave"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 119 26"
        >
          <path
            className="path"
            d="M120.8,26C98.1,26,86.4,0,60.4,0C35.9,0,21.1,26,0.5,26H120.8z"
          />
        </svg>
      </div>

      <ul ref={listRef} className="list-wrap">
        {navbarItems.map((item, index) => (
          <li
            key={index}
            data-color="linear-gradient(to top, #09203f 0%, #537895 100%)"
            title={item.title}
          >
            <span>{item.icon}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};
