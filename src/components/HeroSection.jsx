import React from "react";
import ExclusiveNav from "./ExclusiveNav";
import ButtonLinear from "./common/ButtonLinear";

const HeroSection = () => {
  return (
    <>
      <div
        id="HeroSection"
        className="bg-[url(../src/assets/image/HeroSection.webp)] bg-current bg-cover bg-no-repeat "
      >
        <div className="flex h-screen flex-col ">
          <ExclusiveNav />
          <div className=" grow flex items-center justify-center flex-col">
            <div className="container max-w-[1320px] mx-auto px-3">
              <h1 className=" font-Anton font-normal text-[40px] sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[120%] uppercase max-w-[505px] mx-auto text-center">
                Exclusive Games. Pasión por ganar
              </h1>
              <p className=" font-Inter font-medium text-sm sm:text-base text-white leading-[160%] opacity-80 max-w-[727px] mx-auto text-center pt-4">
                En Exclusive Games somos un equipo apasionado de personas
                dedicados al desarrollo de multiplataformas para juegos de azar.
                A lo largo de nuestra vida consumimos todo tipo de juegos hasta
                que un día decidimos crear los propios.
              </p>
              <div className="text-center pt-10">
                <ButtonLinear btnLinear="Empezar" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
