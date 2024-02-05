import React from "react";
import Button from "./common/Button";
import ButtonLinear from "./common/ButtonLinear";
import { Marca, Slots } from "./common/Helper";
import uparrow from "../assets/iconSvg/downarrow.svg";
import downarrow from "../assets/iconSvg/uparrow.svg";

const Atributos = () => {
  return (
    <div className="max-[1023px]:bg-white md:bg-[url(../src/assets/image/reactangle.webp)] bg-size  ">
      <div className="max-w-[1140px] px-3 mx-auto container lg:pt-[160px] pb-12 sm:pb-16 lg:pb-[243px] ">
        <h2 className=" font-Anton font-normal text-4xl sm:text-[40px] lg:text-5xl leading-[44px] sm:leading-[57.6px] pt-12 sm:pt-14 md:pt-[60px] text-center">
          Nuestros Atributos de Marca
        </h2>
        <div className="flex flex-wrap flex-row sm:pt-7 relative -mx-3 justify-center lg:justify-normal">
          <div className=" hidden sm:block absolute left-[50%] sm:left-[35%] xl:left-[22%] top-16 w-[200px] xl:max-w-[250px]">
            <img className="w-full" src={uparrow} alt="uparrow" />
          </div>
          <div className=" hidden lg:block absolute right-[24%] xl:right-[22%] top-[45%] w-[200px] xl:max-w-[250px]">
            <img className="w-full" src={downarrow} alt="uparrow" />
          </div>
          {Marca.map((props, index) => (
            <div
              key={index}
              className=" w-full sm:w-1/2 lg:w-1/3 px-3 h-full pt-8"
            >
              <div className=" w-20 sm:w-[100px] h-20 sm:h-[100px] rounded-[73px] bg-[#f5fff5] flex justify-center items-center mx-auto animate-pulse">
                <img
                  className=" w-[36px] sm:w-[48px]"
                  src={props.src}
                  alt="bubls"
                />
              </div>
              <h3 className=" font-Anton font-normal text-lg sm:text-xl text-[#00141B] leading-5 sm:leading-[26px] text-center pt-3 sm:pt-4">
                {props.HeadingOne}
              </h3>
              <p className=" font-Inter font-medium text-sm sm:text-[15px] md:text-base text-[#7d878A] leading-5 sm:leading-[25.6px] max-w-[263px] mx-auto text-center pt-[10px]">
                {props.Phara}
              </p>
            </div>
          ))}
        </div>
        <h2 className=" font-Anton font-normal text-4xl sm:text-[40px] lg:text-5xl text-[#00141B] leading-[44px] sm:leading-[57.6px] text-center  pt-12 sm:pt-16 md:pt-20 lg:pt-[150px]">
          Slots{" "}
        </h2>
        <p className="font-Inter font-medium text-sm sm:text-base text-[#334349] leading-5 sm:leading-[25.6px] max-w-[904px] mx-auto text-center pt-4">
          En Exclusive Games, ofrecemos una selección de más de 600 juegos de
          los principales desarrolladores, como Aristocrat, Amatic, EGT,
          Novomatic, IGT, Playtech, Igrosoft y Tom Horn. Nuestro equipo trabaja
          incansablemente para innovar y ampliar nuestra oferta de experiencias,
          garantizando la máxima seguridad con operaciones protegidas por
          cifrado SSL de 256 bits.
        </p>
        <div className="flex flex-row flex-wrap -mx-3">
          {Slots.map((event, index) => (
            <div key={index} className=" w-full sm:w-1/2 lg:w-1/3 px-3 pt-6">
              <div
                data-aos={event.cardaos}
                className="cursor-pointer group before:hover:bg-gradient-to-l before:hover:from-[#51C8EF] before:hover:from-[-13.72%] before:hover:to-[#7AF57A] before:hover:to-[102.02%] before:top-0 before:left-0 p-[1px] relative before:bg-transparent before:absolute before:w-full before:h-full before:transition-all before:duration-500 before:ease-linear before:rounded-lg"
              >
                {" "}
                <div className="relative overflow-hidden group duration-500 ">
                  <img
                    className="w-full rounded-lg "
                    src={event.src}
                    alt="jet"
                  />
                  <div className="absolute top-0 -right-[100%] group-hover:right-0 bottom-0 h-full w-full rounded-lg  duration-500  bg-[#000000a3] z-20 flex justify-center items-center ">
                    <Button btn="Jugar" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-5 sm:mt-[40px]">
          <ButtonLinear btnLinear="Mostrar más" />
        </div>
      </div>
    </div>
  );
};

export default Atributos;
