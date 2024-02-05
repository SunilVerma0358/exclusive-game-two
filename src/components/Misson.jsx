import React from "react";
import CardImg from "../assets/image/CardImg.webp";
import Aviator from "../assets/image/Aviator.webp";
const Misson = () => {
  return (
    <div className="relative z-[2]">
      <div className="w-[80px] sm:w-[200px] h-[120px] sm:h-[180px] rounded-[150px] bg-gradient-to-l from-[#51C8EF] from-[-13.72%] to-[#7AF57A] to-[102.02%] blur-[80px] sm:blur-[115px] absolute bottom-0 lg:bottom-[-10%] right-0 -z-[3] "></div>
      <div className="w-[80px] sm:w-[200px] h-[120px] sm:h-[100px] rounded-[150px] bg-gradient-to-l from-[#51C8EF] from-[-13.72%] to-[#7AF57A] to-[102.02%] blur-[80px] sm:blur-[115px] absolute top-0 lg:top-[30%] left-0 -z-[3] "></div>
      <div
        id="Mission"
        className="max-w-[1140px] px-3 mx-auto container pt-12 sm:pt-16 md:pt-[75px] pb-12 sm:pb-16 md:pb-24 lg:pb-[160px] relative"
      >
        <div className="w-[80px] sm:w-[200px] h-[120px] sm:h-[200px] rounded-[150px] bg-gradient-to-l from-[#51C8EF] from-[-13.72%] to-[#7AF57A] to-[102.02%] blur-[80px] sm:blur-[115px] absolute top-[30%] left-[35%] -z-[3] "></div>

        <div className=" flex flex-row flex-wrap -mx-3 justify-center md:justify-normal">
          <div className=" w-full  md:w-2/4 px-3 lg:pe-8 lg:ps-3">
            <div className="max-w-[538px] mx-auto md:mx-0">
              <img
                className="w-full rounded-2xl"
                src={CardImg}
                alt="PokerImg"
              />
            </div>
            <h2 className=" font-Anton font-normal text-white text-[32px] sm:text-4xl lg:text-5xl leading-[50px] sm:leading-[57.6px] pt-6 sm:pt-12 md:pt-[60px]">
              Nuestra Visión
            </h2>
            <p className=" font-Inter font-medium text-white text-sm sm:text-[15px] lg:text-base leading-[25.6px] opacity-85 pt-3 sm:pt-4 md:max-w-[444px] pb-4 sm:pb-6">
              Nuestra visión es ser líderes indiscutibles en la industria de los
              juegos de azar y llevar nuestra pasión por el entretenimiento más
              allá de las fronteras. Imagina un mundo donde la emoción y la
              diversión no tengan límites, y ese es el mundo que queremos crear
              contigo.
            </p>
            <a
              href="#!"
              className=" font-Inter font-bold text-[#7AF57A] text-base leading-[25.6px]"
            >
              Aprende más --{">"}
            </a>
          </div>
          <div className=" w-full md:w-2/4 px-3 lg:ps-8 lg:pe-3">
            <h2 className=" font-Anton font-normal text-white text-[32px] sm:text-4xl lg:text-5xl leading-[50px] sm:leading-[57.6px] pt-9 sm:pt-12 md:pt-0">
              Nuestra Misiónmd:
            </h2>
            <p className=" font-Inter font-medium text-white text-sm sm:text-[15px] lg:text-base leading-[25.6px] opacity-85 pt-3 sm:pt-4 md:max-w-[444px] pb-4 sm:pb-6">
              Nuestra misión es simple pero poderosa: proporcionarte la más
              amplia gama de soluciones de entretenimiento de alta calidad y
              rentabilidad. Estamos comprometidos a elevar tus expectativas y
              brindarte experiencias inigualables.
            </p>
            <a
              href="#!"
              className="font-Inter font-bold text-[#7AF57A] text-base leading-[25.6px]"
            >
              Aprende más --{">"}
            </a>
            <div className="max-w-[538px] mx-auto md:mx-0 mt-8 sm:mt-10 md:mt-[60px]">
              <img
                className="w-full rounded-2xl"
                src={Aviator}
                alt="PokerImg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Misson;
