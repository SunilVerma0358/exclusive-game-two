import React from "react";
import ButtonLinear from "./common/ButtonLinear";
import CasinoNight from "../assets/image/CasinoNight.webp";
const Casino = () => {
  return (
    <>
      <div
        id="Por"
        className="max-md:bg-white sm:bg-[url(../src/assets/image/Por_bg.webp)] bg-size bg-center py-12 sm:py-16 md:py-40 lg:py-52"
      >
        <div className="max-w-[1140px] px-3 mx-auto container">
          <div className="flex md:flex-row flex-wrap -mx-3 items-center flex-col-reverse">
            <div className="w-full md:w-1/2 px-3 pt-6 sm:pt-8 md:pt-0">
              <h2 className=" font-Anton font-normal text-4xl sm:text-[40px] lg:text-5xl text-[#00141B] leading-[50px] sm:leading-[57.6px]">
                Por qué elegirnos
              </h2>
              <p className="font-Inter font-medium text-sm sm:text-[15px] lg:text-base text-[#334349] leading-5 md:leading-[23px] lg:leading-[25.6px] pt-3 sm:pt-4 pb-4 md:pb-6 md:max-w-[526px]">
                Con Exclusive Games tenés Exclusivos beneficios. Te reintegramos
                todo lo invertido en fichas en la moneda que elijas. En
                Exclusive Games siempre sumamos nuevos juegos. Juegos crash, los
                juegos interactivos que más pide la gente. Con Exclusive Games
                empezás a ganar ya! Creamos tu plataforma en solo 2 semanas.
              </p>
              <ButtonLinear btnLinear="Aprende más" />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <div className=" max-w-[558px] mx-auto md:mx-0 overflow-hidden rounded-2xl">
                <img
                  className="w-full rounded-2xl hover:scale-105 duration-300 "
                  src={CasinoNight}
                  alt="night"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Casino;
