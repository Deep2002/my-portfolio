import React, { useState, useEffect } from "react";

function NavBar(props) {
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    function handleResize() {
      const viewportWidth = window.innerWidth;

      if (viewportWidth >= 1024) {
        setMenuVisible(false);
      }
    }

    // Initial check
    handleResize();

    // Add event listener to window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Imperial+Script&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inconsolata&display=swap"
        rel="stylesheet"
      />
      <div className="bg-[#101417] w-[100%] h-[78px] flex justify-between items-center p-2 pl-5 laptop:pl-20 laptop:pr-20 desktop:pl-20 desktop:pr-20">
        <a href="#home" className="font-impS text-white text-3xl">
          Deep's Portfolio
        </a>

        <span
          onClick={() => setMenuVisible(!menuVisible)}
          className="laptop:hidden desktop:hidden cursor-pointer p-5"
        >
          {/* Ham Burger Menu */}
          {menuVisible ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <g fill="none" fill-rule="evenodd">
                <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                <path
                  fill="white"
                  d="m12 13.414l5.657 5.657a1 1 0 0 0 1.414-1.414L13.414 12l5.657-5.657a1 1 0 0 0-1.414-1.414L12 10.586L6.343 4.929A1 1 0 0 0 4.93 6.343L10.586 12l-5.657 5.657a1 1 0 1 0 1.414 1.414L12 13.414Z"
                />
              </g>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 12h16M4 6h16M4 18h16"
              />
            </svg>
          )}
        </span>

        {/* Menu for laptop and desktop */}
        <span className="hidden desktop:block laptop:block">
          <div className="space-x-8 flex flex-row text-white text-[1.3rem]">
            <a href="#home" className="hover:text-[#FFA234]">
              About Me
            </a>
            <a href="#home" className="hover:text-[#FFA234]">
              Experience
            </a>
            <a href="#home" className="hover:text-[#FFA234]">
              Projects
            </a>
            <a href="#home" className="hover:text-[#FFA234]">
              Contact Me
            </a>
          </div>
        </span>
      </div>
      {menuVisible && <HamMenu />}
    </div>
  );
}

function HamMenu() {
  return (
    <div className="w-screen h-[calc(100vh-78px)] min-h-[375px] tablet:w-[400px] right-0 absolute bg-[#283f46] flex flex-col justify-between p-7 text-white text-[1.7rem] font-inconsolata  desktop:hidden laptop:hidden">
      <div className="space-y-3 ">
        <a href="#home" className="hover:text-[#FFA234]">
          About Me
        </a>
        <hr className="border-gray-400 pb-2" />
        <a href="#home" className="hover:text-[#FFA234]">
          Experience
        </a>
        <hr className="border-gray-400  pb-2" />
        <a href="#home" className="hover:text-[#FFA234]">
          Projects
        </a>
        <hr className="border-gray-400  pb-2" />
        <a href="#home" className="hover:text-[#FFA234]">
          Contact Me
        </a>
        <hr className="border-gray-400  pb-5" />
      </div>
      <button className="bg-[#FFA234] rounded-xl text-[1.4rem] pb-1 pt-1 pl-7 pr-7 ml-auto mr-auto mb-24">
        Download Resume
      </button>
    </div>
  );
}

export default NavBar;
