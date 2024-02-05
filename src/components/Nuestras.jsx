import React from "react";
import CasinoWithCard from "../assets/image/casinoWIthCards.webp";
import CasinoShadow from "../assets/image/seliver_shadow.webp";
import { Correct } from "./common/SvgImport";
import Button from "./common/Button";
import ButtonLinear from "./common/ButtonLinear";
import ItCard from "../assets/image/ItCard.webp";
import Poker from "../assets/image/poker.webp";
import Dice from "../assets/image/Dice.webp";
import HeartCard from "../assets/image/HeartCard.webp";

const Nuestras = () => {
  return (
    <div
      id="Nuestras"
      className="max-w-[1140px] mx-auto px-3 container pt-12 sm:pt-16 lg:pt-36"
    >
      <h2 className="font-Anton font-normal text-4xl sm:text-[40px] lg:text-5xl text-white leading-[57.6px] pt-[6px] text-center">
        Nuestras ofertas
      </h2>
      <p className=" font-Inter font-medium text-white text-sm sm:text-[15px] md:text-base leading-[25.6px] pt-3 md:pt-4 opacity-80 text-center">
        Te ofrecemos las mejores experiencias de juegos para tus clientes.
      </p>
      <div className="flex flex-row flex-wrap mt-7 sm:mt-10 lg:mt-[60px] items-center border-[0.5px] border-[#828F92] rounded-2xl pt-6 md:pt-9 lg:pt-[57px] pb-5 md:pb-[40px] bg-[#051F20] mb-6 md:mb-8">
        <div className=" w-full lg:w-7/12 px-3">
          <div className="max-w-[668px] mx-auto lg:mx-0 relative z-10 ">
            <img
              className="w-full mix-blend-multiply"
              src={CasinoWithCard}
              alt="CasinoWIthCard"
            />
            <div className="max-w-[630px] mx-auto absolute  bottom-0 left-0 ">
              <img className="w-full" src={CasinoShadow} alt="CasinoShadow" />
            </div>
            <div className="w-[100px] sm:w-[120px] h-[100px] sm:h-[120px] rounded-[150px] bg-gradient-to-l from-[#51C8EF] from-[-13.72%] to-[#7AF57A] to-[102.02%] blur-[30px] sm:blur-[60px] absolute top-0 left-[15%] -z-10"></div>
          </div>
        </div>
        <div className="w-full lg:w-5/12 px-3 pt-6 lg:pt-0">
          <h3 className=" font-Anton font-normal text-xl sm:text-2xl lg:text-[32px] text-white leading-[41.6px]">
            Silver
          </h3>
          <p className=" font-Inter font-medium text-white text-sm sm:text-[15px] md:text-base leading-[25.6px] pt-2 sm:pt-4 opacity-80">
            Diseño predeterminado, atractivo y fácil de navegar, tecnología
            HTLM5.
          </p>

          <h2 className="font-Anton font-normal text-4xl sm:text-[40px] lg:text-5xl text-white leading-[57.6px] pt-4 sm:pt-6 md:pt-8  ">
            $5000
          </h2>
          <p className=" font-Inter font-medium text-sm sm:text-base text-white opacity-80 leading-[25.6px] sm:pt-4 flex  gap-2">
            <span>
              <Correct />
            </span>
            Disponibles Payku, Pix, Depósitos en Euros, Criptomonedas, Cargas
            manuales
          </p>
          <p className=" font-Inter font-medium text-sm sm:text-base text-white opacity-80 leading-[25.6px] pt-2 sm:pt-3 flex  gap-2">
            <span>
              <Correct />
            </span>
            Control de RTP (controlás qué porcentaje pagar)
          </p>
          <p className=" font-Inter font-medium text-sm sm:text-base text-white opacity-80 leading-[25.6px] pt-2 sm:pt-3 flex  gap-2">
            <span>
              <Correct />
            </span>
            Bonos Editables, Happy Hours, Jackpots, Códigos Promocionales Regalo
          </p>
          <p className=" font-Inter font-medium text-sm sm:text-base text-white opacity-80 leading-[25.6px] pt-2 sm:pt-3 flex  gap-2">
            <span>
              <Correct />
            </span>
            Aplicación para Android y Windows de regalo.
          </p>
          <p className=" font-Inter font-medium text-sm sm:text-base text-white opacity-80 leading-[25.6px] pt-2 sm:pt-3 flex  gap-2">
            <span>
              <Correct />
            </span>
            Tiempo de creación 2 a 3 semanas
          </p>
          <Button className="mt-5 sm:mt-7 md:mt-[40px]" btn="Comprar ahora" />
        </div>
      </div>
      <div className=" border-[0.5px] border-[#828F92] rounded-2xl bg-[url(../src/assets/image/Luxury_bg.webp)] bg-cover bg-center bg-no-repeat px-3 py-6 sm:py-[46px] relative z-10">
        <div className="  w-14 lg:w-[78px] top-[3%] sm:top-[15%] left-[7%] md:left-[13%] lg:left-[17%] absolute animate-poker ">
          <img className="w-full" src={Poker} alt="ItCard" />
        </div>
        <div className=" w-20 md:w-28 lg:w-[150px] absolute max-[400px]:bottom-0 bottom-[5%] md:bottom-[19%] max-[400px]:hidden left-5 md:left-[3%] lg:left-[11%] -z-1 duration-300 hover:animate-ItCard">
          <img className="w-full" src={ItCard} alt="ItCard" />
        </div>
        <div className=" max-[400px]:w-12 w-20 md:w-28 lg:w-[150px] absolute max-[400px]:top-[30%] top-[22%] sm:top-[19%] right-[5%] md:right-[11%] duration-300 hover:animate-HeartCard">
          <img className="w-full" src={HeartCard} alt="ItCard" />
        </div>
        <div className=" max-[340px]:max-w-11 max-w-[50px] lg:max-w-[66px] absolute max-[365px]:right-0 bottom-3 sm:bottom-[19%] right-[5%] sm:right-[12%] md:right-[18%]">
          <img className="w-full" src={Dice} alt="ItCard" />
        </div>
        <div className="max-w-[490px] mx-auto text-center ">
          <h3 className=" font-Anton font-normal text-xl sm:text-2xl lg:text-[32px] text-white leading-[41.6px]">
            Luxury
          </h3>
          <p className=" font-Inter font-medium text-white text-sm sm:text-[15px] md:text-base leading-[25.6px] pt-3 sm:pt-4 opacity-80 max-w-[391px] mx-auto">
            lleva tu experiencia de juego al siguiente nivel. Con todas las
            características de la versión Silver y la potencia adicional de la
            tecnología React .
          </p>
          <h2 className="font-Anton font-normal text-4xl sm:text-[40px] lg:text-5xl text-white leading-[45px] sm:leading-[57.6px] pt-4 sm:pt-6 md:pt-8  ">
            $9000
          </h2>{" "}
          <p className=" font-Inter font-medium text-sm sm:text-[15px] md:text-base text-white opacity-80 leading-[25.6px] pt-3 sm:pt-4 flex  gap-2">
            <span>
              <Correct />
            </span>
            Disponibles Payku, Pix, Depósitos en Euros, Criptomonedas, Cargas
            manuales
          </p>
          <div className="  pt-3 flex  gap-2">
            <span>
              <Correct />
            </span>
            <div className=" w-full flex items-center justify-center">
              {" "}
              <p className="font-Inter font-medium text-sm sm:text-[15px] md:text-base text-white opacity-80 leading-[25.6px]">
                Control de RTP (controlás qué porcentaje pagar)
              </p>
            </div>
          </div>
          <p className=" font-Inter font-medium text-sm sm:text-[15px] md:text-base text-white opacity-80 leading-[25.6px] pt-3 flex  gap-2">
            <span>
              <Correct />
            </span>
            Bonos Editables, Happy Hours, Jackpots, Códigos Promocionales Regalo
          </p>
          <div className="  pt-3 flex text-center  gap-2">
            <span>
              <Correct />
            </span>
            <div className=" w-full flex items-center justify-center">
              {" "}
              <p className="font-Inter font-medium text-sm sm:text-[15px] md:text-base text-white opacity-80 leading-[25.6px]">
                Aplicación para Android y Windows de regalo.
              </p>
            </div>
          </div>
          <div className="  pt-3 flex text-center  gap-2">
            <span>
              <Correct />
            </span>
            <div className=" w-full flex items-center justify-center">
              <p className="font-Inter  font-medium text-sm sm:text-[15px] md:text-base text-white opacity-80 leading-[25.6px] ">
                Tiempo de creación 2 a 3 semanas
              </p>
            </div>
          </div>
          <ButtonLinear
            classNamegradient="mt-5 sm:mt-7 md:mt-10"
            btnLinear="Comprar ahora"
          />
        </div>
      </div>
    </div>
  );
};

export default Nuestras;
