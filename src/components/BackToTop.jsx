import React, { useState } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", toggleVisible);
  return (
    <div>
      <button
        className="group border-[2px] flex justify-center animate-bounce items-center w-[30px] sm:w-[45px] h-[30px] sm:h-[45px] rounded-[100%] bg-white border-black  right-[6px] fixed sm:right-[1.7%] bottom-[6px] sm:bottom-[1.7%] z-30 transition-all ease-linear duration-300 hover:shadow-[0px_0px_5px_5px_#ffffff] "
        onClick={scrollToTop}
        style={{
          display: visible ? "flex " : "none",
        }}
      >
        <svg
          className="flex justify-center items-center transition-all ease-linear duration-300 group-hover:fill-black"
          width="20"
          height="20"
          fill="black"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"
          ></path>
          <path
            fillRule="evenodd"
            d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default BackToTop;
