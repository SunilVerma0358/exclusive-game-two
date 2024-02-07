import React from "react";
import Jackpot from "../assets/image/Jackpot.webp";
import { Correct } from "./common/SvgImport";
import Button from "./common/Button";
import { Vivo } from "./common/Helper";
const Potenciando = () => {
  return (
    <>
      <div className=" bg-[url(../src/assets/image/jackport-bg.webp)] bg-size bg-center pb-12 sm:pb-16 lg:pb-[100px] relative z-20">
        <div className="w-[80px] sm:w-[200px] h-[120px] sm:h-[180px] rounded-[150px] bg-gradient-to-l from-[#51C8EF] from-[-13.72%] to-[#7AF57A] to-[102.02%] blur-[80px] sm:blur-[115px] absolute bottom-0 lg:bottom-[10%] right-0 -z-[3] "></div>
        <div className="w-[80px] sm:w-[200px] h-[120px] sm:h-[100px] rounded-[150px] bg-gradient-to-l from-[#51C8EF] from-[-13.72%] to-[#7AF57A] to-[102.02%] blur-[80px] sm:blur-[115px] absolute top-0 lg:top-[-6%] left-0 -z-[3] "></div>
        <div className="container mx-auto px-3 max-w-[1140px] pt-12 sm:pt-16 lg:pt-[93px]">
          <div className="flex flex-wrap flex-row -mx-3 items-center pb-12 sm:pb-16 lg:pb-[178px] ">
            <div className="w-full md:w-1/2 px-3 lg:pe-6">
              <div className="max-w-[558px] mx-auto md:mx-0">
                <img className="w-full" src={Jackpot} alt="jackpot" />
              </div>
            </div>
            <div className=" w-full md:w-1/2 px-3 pt-6 md:pt-0">
              <h2 className=" font-Anton font-normal text-white text-[30px] sm:text-[40px] md:text-[30px] lg:text-4xl xl:text-5xl leading-[36px] lg:leading-[45px] xl:leading-[57.6px] max-w-[543px] ">
                Potenciando sus elecciones
              </h2>
              <p className=" font-Inter font-medium text-white text-sm lg:text-base  leading-[16px] lg:leading-[25.6px] pt-3 xl:pt-4  opacity-80">
                Con Exclusive Game lo mejor está de tu lado.
              </p>
              <p className=" font-Inter font-medium text-sm lg:text-base text-white opacity-80 leading-[16px] lg:leading-[25.6px]  pt-4 lg:pt-3 xl:pt-6 flex items-center gap-2">
                <span>
                  <Correct />
                </span>
                Tecnología HTML5
              </p>
              <p className=" font-Inter font-medium text-sm lg:text-base text-white opacity-80 leading-[16px] lg:leading-[25.6px] pt-2 sm:pt-3 flex items-center gap-2">
                <span>
                  <Correct />
                </span>
                Versión PC y móvil
              </p>
              <p className=" font-Inter font-medium text-sm lg:text-base text-white opacity-80 leading-[16px] lg:leading-[25.6px] pt-2 sm:pt-3 flex items-center gap-2">
                <span>
                  <Correct />
                </span>
                Control de RTP (controlás qué porcentaje pagar)
              </p>
              <p className=" font-Inter font-medium text-sm lg:text-base text-white opacity-80 leading-[16px] lg:leading-[25.6px] pt-2 sm:pt-3 flex items-center gap-2 max-w-[412px]">
                <span>
                  <Correct />
                </span>
                Bonos editables, happy hours, Jackpots, códigos promocionales.
              </p>
              <p className=" font-Inter font-medium text-sm lg:text-base text-white opacity-80 leading-[16px] lg:leading-[25.6px] pt-2 sm:pt-3 flex items-center gap-2">
                <span>
                  <Correct />
                </span>
                Aplicación para android y windows de regalo.
              </p>
              <p className="font-Inter font-medium text-white text-sm lg:text-base leading-[16px] lg:leading-[25.6px] pt-4 lg:pt-6 opacity-80">
                Te reintegramos todo lo invertido en fichas en la moneda que
                elijas.
              </p>
            </div>
          </div>
          <div className="border-[0.5px] border-white rounded-2xl py-11 sm:py-14 md:py-24 px-3 sm:px-0 backdrop-blur-[3px] bg-[url(../src/assets/image/groupElips.webp)] bg-cover bg-no-repeat mix-blend-lighten">
            <h2 className=" font-Anton font-normal text-white text-4xl sm:text-[40px] lg:text-5xl leading-[50px] lg:leading-[57.6px] 2xl:leading-[65px] max-w-[543px] text-center mx-auto">
              lanza tu propia plataforma en sólo 2 semanas
            </h2>
          </div>
          <div className="pt-12 sm:pt-16  lg:pt-[122px]">
            <h2 className=" font-Anton font-normal text-white text-4xl sm:text-[40px] lg:text-5xl leading-[57.6px] text-center">
              Juegos en vivo
            </h2>
            <div className="flex flex-row flex-wrap -mx-3 sm:pt-7 lg:pt-16 justify-center lg:justify-normal">
              {Vivo.map((event, index) => (
                <div
                  key={index}
                  className=" w-full sm:w-1/2 lg:w-1/3 px-3 pt-6"
                >
                  {" "}
                  <div
                    data-aos={event.aoscard}
                    className="relative overflow-hidden group duration-500 cursor-pointer "
                  >
                    <img
                      className="w-full rounded-lg "
                      src={event.src}
                      alt="jet"
                    />
                    <div className="absolute top-0 -right-[100%] group-hover:right-0 bottom-0 h-full w-full rounded-lg  duration-500  bg-[#000000a3] z-20 flex justify-center items-center">
                      <Button btn="Reproducir ahora" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Potenciando;
