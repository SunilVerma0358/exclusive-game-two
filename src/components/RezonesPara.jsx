import React from "react";
import ImgPara from "../assets/image/777_Img.webp";
import bulbsOne from "../assets/iconSvg/Bulbs.svg";
import Dollar from "../assets/iconSvg/Dollar.svg";
import SecondMen from "../assets/iconSvg/SecondMen.svg";
const RezonesPara = () => {
  return (
    <div className="relative z-20 overflow-hidden">
      <div className="w-[80px] sm:w-[200px] h-[120px] sm:h-[100px] rounded-[150px] bg-gradient-to-l from-[#51C8EF] from-[-13.72%] to-[#7AF57A] to-[102.02%] blur-[80px] sm:blur-[100px] absolute top-0 lg:top-[-6%] left-0 -z-[3] "></div>
      <div className="w-[80px] sm:w-[100px] h-[120px] sm:h-[250px] rounded-[150px] bg-gradient-to-l from-[#51C8EF] from-[-13.72%] to-[#7AF57A] to-[102.02%] blur-[80px] sm:blur-[80px] absolute bottom-0 lg:bottom-[10%] right-0 -z-[3] "></div>
      <div className="max-w-[1140px] px-3 mx-auto container py-12 sm:py-16 lg:py-20">
        <div className="flex flex-row flex-wrap -mx-3">
          <div
            data-aos="fade-up"
            className="w-full md:w-1/2 lg:w-7/12 xl:w-1/2 lg:pe-6 px-3"
          >
            <div className="max-w-[558px] h-full object-cover mx-auto md:mx-0">
              <img
                className="w-full h-full rounded-2xl"
                src={ImgPara}
                alt="777_img"
              />
            </div>
          </div>
          <div
            data-aos="fade-down"
            className="w-full md:w-1/2 lg:w-5/12 xl:w-1/2 px-3 lg:ps-5 pt-6 md:pt-0"
          >
            <h2 className="font-Anton font-normal text-white text-[31px] sm:text-4xl md:text-[30px] lg:text-5xl leading-[45px] md:leading-[35px] lg:leading-[57.6px] text-center md:text-start">
              Más razones para elegirnos
            </h2>
            <div className="pt-5 md:pt-6 lg:pt-[60px]">
              <div className="max-w-[374px] mx-auto md:mx-0 group before:bg-gradient-to-l before:from-[#51C8EF] before:from-[-13.72%] before:to-[#7AF57A] before:to-[102.02%] before:top-0 before:left-0 p-[0.5px_0.5px_1px_1px] relative before:absolute before:w-full before:h-full before:transition-all before:duration-500 before:ease-linear before:rounded-2xl">
                <div className="rounded-2xl bg-[#051d21] p-[12px] md:p-[16px] lg:p-[24px_0_24px_58px] max-w-[374px] flex items-center gap-5 lg:gap-[37px] relative z-10 duration-300 ">
                  <div className="bg-[#0f2e28] w-[68px] h-[68px] rounded-[73px] flex justify-center items-center group-hover:bg-[#243639bd] duration-300 transition-all ease-linear  ">
                    <img className="max-w-[37px]" src={bulbsOne} alt="bulbs" />
                  </div>
                  <div>
                    <h3 className=" font-Anton font-normal text-xl sm:text-2xl lg:text-[32px] text-white leading-[41.6px]">
                      200
                    </h3>
                    <p className=" font-Inter font-medium text-sm md:text-base text-white leading-[25.6px]">
                      {" "}
                      Páginas creadas
                    </p>
                  </div>
                </div>
              </div>
              <div className="max-w-[374px] mx-auto md:mx-0 group  before:bg-gradient-to-l before:from-[#51C8EF] before:from-[-13.72%] before:to-[#7AF57A] before:to-[102.02%] before:top-0 before:left-0 p-[1px_0.5px_1px_1px] relative before:absolute before:w-full before:h-full before:transition-all before:duration-500 before:ease-linear before:rounded-2xl mt-6 md:mt-4 lg:mt-6">
                <div className="rounded-2xl bg-[#051d21] p-[12px] md:p-[16px] lg:p-[24px_0_24px_58px] max-w-[374px] flex items-center gap-5 lg:gap-[37px] relative z-10 ">
                  <div className="bg-[#0f2e28] w-[68px] h-[68px] rounded-[73px] flex justify-center items-center group-hover:bg-[#243639bd] duration-300 transition-all ease-linear  ">
                    <img className="max-w-[37px]" src={SecondMen} alt="bulbs" />
                  </div>
                  <div>
                    <h3 className=" font-Anton font-normal text-xl sm:text-2xl lg:text-[32px] text-white leading-[41.6px]">
                      98%
                    </h3>
                    <p className=" font-Inter font-medium text-sm md:text-base text-white leading-[25.6px]">
                      {" "}
                      Clientes Satisfechas
                    </p>
                  </div>
                </div>
              </div>
              <div className="max-w-[374px] mx-auto md:mx-0 group  before:bg-gradient-to-l before:from-[#51C8EF] before:from-[-13.72%] before:to-[#7AF57A] before:to-[102.02%] before:top-0 before:left-0 p-[1px] relative before:absolute before:w-full before:h-full before:rounded-2xl mt-6 md:mt-4 lg:mt-6">
                <div className="rounded-2xl bg-[#051d21]  p-[12px] md:p-[16px] lg:p-[24px_0_24px_58px] max-w-[374px] flex items-center gap-5 lg:gap-[37px] relative z-10">
                  <div className="bg-[#0f2e28] w-[68px] h-[68px] rounded-[73px] flex justify-center items-center group-hover:bg-[#243639bd] duration-300 transition-all ease-linear ">
                    <img className="max-w-[37px]" src={Dollar} alt="bulbs" />
                  </div>
                  <div>
                    <h3 className=" font-Anton font-normal text-xl sm:text-2xl lg:text-[32px] text-white leading-[41.6px]">
                      200
                    </h3>
                    <p className=" font-Inter font-medium text-sm md:text-base text-white leading-[25.6px]">
                      {" "}
                      Divisas Disponibles
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RezonesPara;
