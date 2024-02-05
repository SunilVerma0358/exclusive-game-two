import React from "react";
import ButtonLinear from "./common/ButtonLinear";

const Lanza = () => {
  return (
    <div className="pb-12 sm:pb-16 lg:pb-[150px] px-3 xl:px-0">
      <div className="max-w-[1140px] px-3 mx-auto container bg-cover bg-center bg-[url(../src/assets/image/Lanza_bg.webp)] rounded-2xl border-[0.5px] border-[#898f93] py-10 sm:pt-14 lg:py-[104px]">
        <h2 className="font-Anton font-normal text-4xl sm:text-[40px] lg:text-5xl text-white leading-[50px] sm:leading-[57.6px] text-center">
          Lanza tu propia plataforma en sólo 2 semanas
        </h2>
        <div className=" text-center">
          <ButtonLinear
            classNamegradient=" mt-5 sm:mt-8 md:mt-[40px]"
            btnLinear="Leer más"
          />
        </div>
      </div>
    </div>
  );
};

export default Lanza;
