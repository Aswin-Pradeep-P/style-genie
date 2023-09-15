import { useRef, useEffect } from 'react';

export const Navbar = () => {
  const listRef = useRef<any>();
  const disRef = useRef<any>(null);

  useEffect(() => {
    const dis = listRef.current.querySelector('li:first-child');

    disRef.current = dis;
    align(dis);

    listRef.current.querySelectorAll('li').forEach((li: any) => {
      li.addEventListener('click', () => {
        disRef.current = li;
        align(li);
      });
    });

    document.body.addEventListener('keydown', handleKeyDown);
    document.body.addEventListener('keydown', handleArrowKeys);

    return () => {
      document.body.removeEventListener('keydown', handleKeyDown);
      document.body.removeEventListener('keydown', handleArrowKeys);
    };
  }, []);

  const handleKeyDown = (e: any) => {
    if (e.code === 'Tab') {
      e.preventDefault();
      if (disRef.current.nextElementSibling) disRef.current.nextElementSibling.click();
    } else {
      listRef.current.querySelector('li:first-child').click();
    }
  };

  const handleArrowKeys = (e: any) => {
    if (e.keyCode === 37)
      // left
      document.getElementById('showroom')?.animate(
        {
          left: '-=980'
        },
        500
      );
    else if (e.keyCode === 39)
      // right
      document.getElementById('showroom')?.animate(
        {
          left: '+=980'
        },
        500
      );
  };

  const align = (dis: any) => {
    // get index of item
    const index = [...listRef.current.children].indexOf(dis) + 1;

    // add active class to the new item
    listRef.current.querySelectorAll('li').forEach((li: any) => {
      li.classList.remove('active');
    });
    setTimeout(() => {
      dis.classList.add('active');
    }, 100);

    // move the wave
    const left = index * 80 - 98;

    document.getElementById('wave')!.style.left = `${left}px`;
  };

  return (
    <nav>
      <div className='wave-wrap bg-green-1'>
        <svg
          version='1.1'
          id='wave'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          viewBox='0 0 119 26'
        >
          <path className='path' d='M120.8,26C98.1,26,86.4,0,60.4,0C35.9,0,21.1,26,0.5,26H120.8z' />
        </svg>
      </div>

      <ul ref={listRef} className='list-wrap'>
        <li data-color='linear-gradient(to top, #09203f 0%, #537895 100%)' title='Home'>
          <i className='icon ion-ios-home'></i>
        </li>
        <li data-color='#ff6b81' title='Profile'>
          <i className='icon ion-ios-person'></i>
        </li>
        <li data-color='#7bed9f' title='Get a beer!'>
          <i className='icon ion-ios-beer'></i>
        </li>
        <li data-color='#70a1ff' title='Files'>
          <i className='icon ion-ios-folder-open'></i>
        </li>
        <li data-color='#dfe4ea' title='Settings'>
          <i className='icon ion-ios-settings'></i>
        </li>
      </ul>
    </nav>
  );
};
