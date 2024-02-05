import React from "react";
import PanthomCard from "../assets/image/PathonCard.webp";
import { Correct } from "./common/SvgImport";
import Button from "./common/Button";
import { Ellos } from "./common/Helper";
const Platinum = () => {
  return (
    <div id="traga" className="relative z-2">
      {" "}
      <div className="w-[80px] sm:w-[100px] h-[120px] sm:h-[180px] rounded-[150px] bg-gradient-to-l from-[#51C8EF] from-[-13.72%] to-[#7AF57A] to-[102.02%] blur-[80px] sm:blur-[115px] absolute top-[50%] right-0 -z-3 "></div>
      <div className="w-[80px] sm:w-[180px] h-[120px] sm:h-[180px] rounded-[150px] bg-gradient-to-l from-[#51C8EF] from-[-13.72%] to-[#7AF57A] to-[102.02%] blur-[80px] sm:blur-[115px] absolute top-[-5%] left-0 -z-1 "></div>
      <div className="max-w-[1140px] px-3 mx-auto container">
        <div className="flex md:flex-row flex-wrap  flex-col-reverse mt-[60px] items-center border-[0.5px] border-[#828F92] rounded-2xl p-[35px_20px] sm:p-[45px_24px] lg:p-[78px_32px_78px_32px] bg-[#051F20] mb-8">
          <div className="w-full md:w-5/12 px-3 pt-6 md:pt-0">
            <h3 className=" font-Anton font-normal text-xl sm:text-2xl lg:text-[32px] text-white leading-[32px] sm:leading-[41.6px]">
              Platinum
            </h3>
            <p className=" font-Inter font-medium text-white text-sm sm:text-[15px] md:text-base leading-[25.6px] pt-3 sm:pt-4 opacity-80">
              Diseño totalmente personalizado. Contáctanos para un presupuesto.
            </p>
            <h2 className="font-Anton font-normal text-4xl sm:text-[40px] lg:text-5xl text-white leading-[45px] lg:leading-[57.6px] pt-4 sm:pt-6 lg:pt-8  ">
              Consultar precio
            </h2>
            <p className=" font-Inter font-medium text-sm sm:text-[15px] md:text-base text-white opacity-80 leading-[25.6px] pt-3 sm:pt-4 flex  gap-2">
              <span>
                <Correct />
              </span>
              Personalizable
            </p>
            <Button className="mt-5 sm:mt-7 md:mt-[40px]" btn="Comprar ahora" />
          </div>
          <div className="w-full md:w-7/12 px-3">
            <div className="max-w-[602px] relative z-[20]">
              <img
                className="w-full mix-blend-normal hover:scale-105 duration-300"
                src={PanthomCard}
                alt="PanthomCard"
              />
              <div className="w-[100px] sm:w-[140px] h-[100px] sm:h-[140px] rounded-[150px] bg-gradient-to-l from-[#51C8EF] from-[-13.72%] to-[#7AF57A] to-[102.02%] blur-[30px] sm:blur-[50px] absolute top-0 right-[13%] -z-[2] "></div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="font-Anton font-normal text-4xl sm:text-[40px] lg:text-5xl text-white leading-[57.6px] pt-8 pb-8 sm:pb-10 lg:pb-14 text-center ">
            Ellos eligieron apostar con nosotros
          </h2>
          <div className="flex flex-row flex-wrap -mx-3 justify-center lg:justify-normal">
            {Ellos.map((event, index) => (
              <div key={index} className=" w-full sm:w-1/2 lg:w-1/3 px-3 pt-6">
                <div className="relative overflow-hidden group duration-500 cursor-pointer ">
                  <img
                    className="w-full rounded-lg "
                    src={event.src}
                    alt="jet"
                  />
                  <div className="absolute top-0 -right-[100%] group-hover:right-0 bottom-0 h-full w-full rounded-lg  duration-500  bg-[#000000a3] z-20 flex justify-center items-center">
                    <Button btn="Rcasinovip" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className=" font-Inter font-medium text-white text-sm sm:text-[15px] md:text-base leading-[25.6px] pt-4 opacity-80 text-center max-w-[600px] min-w-[300px] md:max-w-[883px] mx-auto">
            Clientes satisfechos que confiaron en Exclusive Games y han
            disfrutado de emocionantes experiencias de juego.
          </p>
          <p className=" font-Inter font-medium text-white text-sm sm:text-[15px] md:text-base leading-[25.6px] opacity-80 text-center  max-w-[375px] mx-auto">
            Ahora, la próxima apuesta está en tus manos. Elige ganar. Elige
            exclusive game.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Platinum;
