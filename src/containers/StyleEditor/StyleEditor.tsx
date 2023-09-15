import { ChevronLeft, ChevronRight, UserIcon } from "@assets/icons";
import { ModalImage } from "@assets/images";
import { useState } from "react";
import Logo from "@assets/icons/StyleGenieLogo.png";

const StyleEditor = () => {
  const editorTools = [
    {
      type: "fit",
      label: "Fit",

      options: [
        {
          label: "Full Sleeve",
          imgLabel: "Capsleeve.jpg",
        },
        {
          label: "Cap Sleeve",
          imgLabel: "Capsleeve.jpg",
        },
        {
          label: "DeepV",
          imgLabel: "DeepV.jpg",
        },
      ],
    },
    {
      type: "neckline",
      label: "NeckLine",

      options: [
        {
          label: "Full Sleeve",
          imgLabel: "Capsleeve.jpg",
        },
        {
          label: "Cap Sleeve",
          imgLabel: "Capsleeve.jpg",
        },
        {
          label: "DeepV",
          imgLabel: "DeepV.jpg",
        },
      ],
    },
    {
      type: "sleeve",
      label: "Sleeve",
      options: [
        {
          label: "Full Sleeve",
          imgLabel: "Capsleeve.jpg",
        },
        {
          label: "Cap Sleeve",
          imgLabel: "Capsleeve.jpg",
        },
        {
          label: "DeepV",
          imgLabel: "DeepV.jpg",
        },
      ],
    },
    {
      type: "length",
      label: "Length",

      options: [
        {
          label: "Full Sleeve",
          imgLabel: "Capsleeve.jpg",
        },
        {
          label: "Cap Sleeve",
          imgLabel: "Capsleeve.jpg",
        },
        {
          label: "DeepV",
          imgLabel: "DeepV.jpg",
        },
      ],
    },
  ];
  const [editorToolIndex, setEditorToolIndex] = useState(0);

  const handlePrev = () => {
    setEditorToolIndex(editorToolIndex - 1);
  };
  const handleNext = () => {
    setEditorToolIndex(editorToolIndex + 1);
  };

  return (
    <div className="h-full min-h-screen flex flex-col   justify-center items-center pt-4 px-4 ">
      <header className="flex w-full items-center justify-between h-[100px] p-5">
        <img src={Logo} alt="StyleGenie" className="h-[50px]" />
        <UserIcon className="bg-green-2 rounded-full text-blue-2" />
      </header>
      <div className=" flex justify-between items-center bg-[#70a9a1] mt-16 rounded-md text-center text-lg font-semibold text-white border p-3 w-full ">
        <button onClick={handlePrev} disabled={editorToolIndex <= 0}>
          <ChevronLeft />
        </button>
        {editorTools[editorToolIndex].label}
        <button
          onClick={handleNext}
          disabled={editorToolIndex >= editorTools.length - 1}
        >
          <ChevronRight />
        </button>
      </div>
      <ModalImage className=" object-fit my-12 w-full" />

      <div className="flex  w-full justify-center gap-4 ">
        {editorTools[editorToolIndex].options.map((option, i) => (
          <div key={i}>
            <button className="border border-[#70a9a1]  rounded-md ">
              <img
                src={`/assets/icons/${option.imgLabel}`}
                alt="styles"
                className="w-16 h-20 object-fill"
              />
            </button>
            <div className="text-center text-sm text-[#70a9a1] mt-2">
              {option.label}
            </div>
          </div>
        ))}
      </div>
      <button className="flex justify-center items-center mt-6 w-[300px] p-4 px-6 bg-[#40798C] text-white rounded-md">
        Proceed to checkout
      </button>
    </div>
  );
};

export default StyleEditor;
