import React from "react";
import buttongradient from "../../assets/image/buttonGradient.webp";
const ButtonLinear = (event) => {
  return (
    <div className="relative inline-block z-10">
      <button
        className={`${event.classNamegradient} font-Inter font-bold text-black text-base leading-[160%] p-[13px_46px] rounded-[41px] bg-gradient-to-l from-[#51C8EF] from-[-13.72%] to-[#7AF57A] to-[102.02%] hover:bg-gradient-to-l hover:to-[#51C8EF] hover:to-[102.72%]  hover:from-[#7AF57A] hover:from-[-13.02%] hover:text-white duration-300  `}
      >
        {event.btnLinear}
      </button>
      <span className="absolute -left-1 -bottom-1 max-w-[104px] -z-10  ">
        <img className="w-full" src={buttongradient} alt="ButtonLine" />
      </span>
    </div>
  );
};

export default ButtonLinear;
