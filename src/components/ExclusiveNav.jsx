import React, { useState } from "react";
import logo from "../assets/image/logo.webp";
import Button from "./common/Button";
const ExclusiveNav = () => {
  const [first, setfirst] = useState(false);
  function setopen() {
    setfirst(!first);
    if (first === false) {
      document.body.classList.add("overflow");
    } else {
      document.body.classList.remove("overflow");
    }
  }
  return (
    <div className="bg-[rgba(255,255,255,0.10)] backdrop-blur-[26px] h-[90px]  relative z-40 ">
      <div className="container 2xl:max-w-[1320px] max-w-[1140px] mx-auto px-3 ">
        <nav className="flex justify-between items-center py-[19px]">
          <div className="flex items-center gap-20 xl:gap-[101px]  2xl:gap-36">
            <a href="#!" className="max-w-[210px]">
              <img className="w-full" src={logo} alt="logo" />
            </a>
            <div
              className={`${
                first ? "left-0" : " -left-full"
              } flex  gap-[33px] lg:gap-0 max-[1023px]:w-full h-screen lg:h-full absolute  bg-[#00141B] top-0 items-center justify-center lg:h-unset lg:static lg:left-0  lg:bg-transparent lg:justify-end flex-col lg:flex-row z-30  transition-all ease-linear duration-300 `}
            >
              <ul className="flex items-center gap-7 2xl:gap-10 flex-col lg:flex-row">
                <li>
                  <a
                    href="#HeroSection"
                    onClick={setopen}
                    className=" font-Inter font-medium text-[#fff] text-base leading-[160%] opacity-80 transition-all ease-linear duration-200 hover:text-white hover:opacity-100 relative after:absolute after:w-0 after:h-[1px] after:left-[50%] after:bottom-[-2.5px] after:rounded-[4px] after:bg-[#fff] hover:after:w-full hover:after:left-0 after:duration-300"
                  >
                    Hogar
                  </a>
                </li>
                <li>
                  <a
                    href="#Mission"
                    onClick={setopen}
                    className=" font-Inter font-medium text-[#fff] text-base leading-[160%] opacity-80 transition-all ease-linear duration-200 hover:text-white hover:opacity-100 relative after:absolute after:w-0 after:h-[1px] after:left-[50%] after:bottom-[-2.5px] after:rounded-[4px] after:bg-[#fff] hover:after:w-full hover:after:left-0 after:duration-300"
                  >
                    Misión
                  </a>
                </li>
                <li>
                  <a
                    href="#traga"
                    onClick={setopen}
                    className=" font-Inter font-medium text-[#fff] text-base leading-[160%] opacity-80 transition-all ease-linear duration-200 hover:text-white hover:opacity-100 relative after:absolute after:w-0 after:h-[1px] after:left-[50%] after:bottom-[-2.5px] after:rounded-[4px] after:bg-[#fff] hover:after:w-full hover:after:left-0 after:duration-300"
                  >
                    Tragamonedas
                  </a>
                </li>
                <li>
                  <a
                    href="#Por"
                    onClick={setopen}
                    className=" font-Inter font-medium text-[#fff] text-base leading-[160%] opacity-80 transition-all ease-linear duration-200 hover:text-white hover:opacity-100 relative after:absolute after:w-0 after:h-[1px] after:left-[50%] after:bottom-[-2.5px] after:rounded-[4px] after:bg-[#fff] hover:after:w-full hover:after:left-0 after:duration-300"
                  >
                    Por qué elegirnos
                  </a>
                </li>
                <li>
                  <a
                    href="#Nuestras"
                    onClick={setopen}
                    className=" font-Inter font-medium text-[#fff] text-base leading-[160%] opacity-80 transition-all ease-linear duration-200 hover:text-white hover:opacity-100 relative after:absolute after:w-0 after:h-[1px] after:left-[50%] after:bottom-[-2.5px] after:rounded-[4px] after:bg-[#fff] hover:after:w-full hover:after:left-0 after:duration-300"
                  >
                    Ofertas
                  </a>
                </li>
              </ul>
              <Button className="block sm:hidden " btn="Acceso" />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Button className="hidden sm:block  relative " btn="Acceso" />
            <div onClick={setopen}>
              {first ? (
                <div className="flex lg:hidden flex-col relative z-50 justify-between w-[24px] h-[24px] cursor-pointer  ">
                  {" "}
                  <span className="bg-white w-full h-[2px] relative z-50 mb-[3px] transition-all ease-linear duration-300 rotate-[53deg] -bottom-[11px]"></span>
                  <span className="bg-white w-full h-[2px] relative z-50 mb-[3px] transition-all ease-linear duration-300 -rotate-[56deg] bottom-[8px]"></span>
                </div>
              ) : (
                <div className=" flex lg:hidden flex-col  z-50 justify-between w-[24px] h-[24px] cursor-pointer relative ">
                  {" "}
                  <span className="bg-white w-full h-[2px] relative z-50 mb-[3px] transition-all ease-linear duration-300"></span>
                  <span className="bg-white  w-full h-[2px] relative z-50 mb-[3px] transition-all ease-linear duration-300"></span>
                  <span className="bg-white w-full h-[2px] relative z-50 mb-[3px] transition-all ease-linear duration-300"></span>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default ExclusiveNav;
