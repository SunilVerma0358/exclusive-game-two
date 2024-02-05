import React from "react";
import buttonLine from "../../assets/image/ButtonLine.webp";
const Button = (props) => {
  return (
    <>
      <div className="relative z-10">
        <button
          className={`${props.className} font-Inter font-bold text-[#fff] text-base leading-[160%] border border-[#fff] p-[13px_46px] rounded-[41px] hover:bg-white hover:text-black duration-300 transition-all ease-linear  `}
        >
          {props.btn}
        </button>
        <span className="absolute -left-1 -bottom-1 max-w-[104px] -z-10">
          <img className="w-full" src={buttonLine} alt="ButtonLine" />
        </span>
      </div>
    </>
  );
};

export default Button;
