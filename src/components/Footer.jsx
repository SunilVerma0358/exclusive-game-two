import React from "react";
import Logo from "../assets/image/logo.webp";
import { Insta, Facebook, Linkdin, Email, Phone } from "./common/SvgImport";
const Footer = () => {
  const fullyear = new Date();
  const year = fullyear.getFullYear();
  return (
    <div className="bg-black relative overflow-hidden ">
      <div className="w-[120px] sm:w-[150px] h-[120px] sm:h-[150px] rounded-[150px] bg-gradient-to-l from-[#51C8EF] from-[-13.72%] to-[#7AF57A] to-[102.02%] blur-[80px] sm:blur-[115px] absolute bottom-[23%] right-[-50px]"></div>
      <div className="w-[110px] sm:w-[170px] h-[110px] sm:h-[170px] rounded-[180px] bg-gradient-to-l from-[#51C8EF] from-[-13.72%] to-[#7AF57A] to-[102.02%] blur-[80px] sm:blur-[115px] absolute bottom-0 sm:-bottom-[20%] left-[-50px]"></div>
      <div className="max-w-[1140px] mx-auto container px-3 pt-16 pb-12">
        <div className="flex flex-row flex-wrap -mx-3">
          <div className="w-full lg:w-4/12 xl:w-5/12 px-3">
            <a href="#1">
              <img className="max-w-[210px]" src={Logo} alt="FooterLogo" />
            </a>
            <p className="font-Inter font-medium text-white text-sm sm:text-[15px] lg:text-base leading-[25.6px] opacity-85 sm:max-w-[369px] pt-4 ">
              En Exclusive Games somos un equipo apasionado de personas
              dedicadas al desarrollo de multiplataformas para juegos de azar
            </p>
            <div className="flex items-center gap-3 pt-6">
              <div className="hover:-translate-y-2 duration-300">
                <a
                  href="https://www.instagram.com/radialcode/?hl=en"
                  target="blank"
                  className=" w-8 h-8 bg-[#252828] rounded-2xl flex justify-center items-center p-2 duration-500 hover:bg-instagram"
                >
                  <Insta />
                </a>
              </div>
              <div className="hover:-translate-y-2 duration-300">
                <a
                  href="https://www.facebook.com/radialcode/"
                  target="blank"
                  className=" w-8 h-8 bg-[#252828] rounded-2xl flex justify-center items-center p-2 duration-300 hover:bg-[#006aff]  border border-transparent "
                >
                  <Facebook />
                </a>
              </div>
              <div className="hover:-translate-y-2 duration-300">
                <a
                  href="https://www.radialcode.com/"
                  target="blank"
                  className=" w-8 h-8 bg-[#252828] rounded-2xl inline-flex justify-center items-center duration-300 hover:bg-[#008cff] border border-transparent"
                >
                  <Linkdin />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-8/12 xl:w-7/12 px-3">
            <div className="flex flex-row flex-wrap -mx-3 pt-6 md:pt-[10px]">
              <div className="w-1/2 sm:w-3/12 px-3 ">
                <p className=" font-Inter font-bold text-white text-sm sm:text-base leading-[25.6px] pb-1">
                  Menú principal
                </p>
                <ul>
                  <li className="pt-3">
                    <a
                      href="#!"
                      className=" font-Inter font-medium text-white text-sm sm:text-base leading-[25.6px] opacity-80 hover:opacity-100 transition-all durataion-300 ease-linear hover:text-white relative after:absolute after:w-0 after:h-[1px] after:left-[50%] after:bottom-[-2.5px] after:rounded-[4px] after:bg-[#fff] hover:after:w-full hover:after:left-0 after:duration-300 "
                    >
                      Hogar
                    </a>
                  </li>
                  <li className="pt-3">
                    <a
                      href="#!"
                      className=" font-Inter font-medium text-white text-sm sm:text-base leading-[25.6px] opacity-80 hover:opacity-100 transition-all durataion-300 ease-linear hover:text-white relative after:absolute after:w-0 after:h-[1px] after:left-[50%] after:bottom-[-2.5px] after:rounded-[4px] after:bg-[#fff] hover:after:w-full hover:after:left-0 after:duration-300 "
                    >
                      Misión
                    </a>
                  </li>
                  <li className="pt-3">
                    <a
                      href="#!"
                      className=" font-Inter font-medium text-white text-sm sm:text-base leading-[25.6px] opacity-80 hover:opacity-100 transition-all durataion-300 ease-linear hover:text-white relative after:absolute after:w-0 after:h-[1px] after:left-[50%] after:bottom-[-2.5px] after:rounded-[4px] after:bg-[#fff] hover:after:w-full hover:after:left-0 after:duration-300 "
                    >
                      Tragamonedas
                    </a>
                  </li>
                  <li className="pt-3">
                    <a
                      href="#!"
                      className=" font-Inter font-medium text-white text-sm sm:text-base leading-[25.6px] opacity-80 hover:opacity-100 transition-all durataion-300 ease-linear hover:text-white relative after:absolute after:w-0 after:h-[1px] after:left-[50%] after:bottom-[-2.5px] after:rounded-[4px] after:bg-[#fff] hover:after:w-full hover:after:left-0 after:duration-300 "
                    >
                      Por qué elegirnos
                    </a>
                  </li>
                  <li className="pt-3">
                    <a
                      href="#!"
                      className=" font-Inter font-medium text-white text-sm sm:text-base leading-[25.6px] opacity-80 hover:opacity-100 transition-all durataion-300 ease-linear hover:text-white relative after:absolute after:w-0 after:h-[1px] after:left-[50%] after:bottom-[-2.5px] after:rounded-[4px] after:bg-[#fff] hover:after:w-full hover:after:left-0 after:duration-300 "
                    >
                      Ofertas
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-1/2 sm:w-4/12 px-3 lg:ps-5 ">
                <p className=" font-Inter font-bold text-white text-sm sm:text-base leading-[25.6px] pb-1">
                  Atención al cliente
                </p>
                <ul>
                  <li className="pt-3">
                    <a
                      href="#!"
                      className=" font-Inter font-medium text-white text-sm sm:text-base leading-[25.6px] opacity-80 hover:opacity-100 transition-all durataion-300 ease-linear hover:text-white  relative after:absolute after:w-0 after:h-[1px] after:left-[50%] after:bottom-[-2.5px] after:rounded-[4px] after:bg-[#fff] hover:after:w-full hover:after:left-0 after:duration-300"
                    >
                      ¿Necesitas ayuda?
                    </a>
                  </li>
                  <li className="pt-3">
                    <a
                      href="#!"
                      className=" font-Inter font-medium text-white text-sm sm:text-base leading-[25.6px] opacity-80 hover:opacity-100 transition-all durataion-300 ease-linear hover:text-white  relative after:absolute after:w-0 after:h-[1px] after:left-[50%] after:bottom-[-2.5px] after:rounded-[4px] after:bg-[#fff] hover:after:w-full hover:after:left-0 after:duration-300"
                    >
                      política de privacidad
                    </a>
                  </li>
                  <li className="pt-3">
                    <a
                      href="#!"
                      className=" font-Inter font-medium text-white text-sm sm:text-base leading-[25.6px] opacity-80  hover:opacity-100 transition-all durataion-300 ease-linear hover:text-white relative after:absolute after:w-0 after:h-[1px] after:left-[50%] after:bottom-[-2.5px] after:rounded-[4px] after:bg-[#fff] hover:after:w-full hover:after:left-0 after:duration-300"
                    >
                      Términos de servicios
                    </a>
                  </li>
                </ul>
              </div>{" "}
              <div className="w-1/2 sm:w-5/12 px-3 pt-6 sm:pt-0  ">
                <p className=" font-Inter font-bold text-white text-sm sm:text-base leading-[25.6px] pb-1">
                  Ponerse en contacto
                </p>
                <ul>
                  <li className="pt-3">
                    <a
                      href="mailto: juegosexclusivos@gmail.com"
                      className=" font-Inter font-medium text-white text-sm sm:text-base leading-[25.6px] opacity-80 gap-2 flex items-center hover:opacity-100 transition-all durataion-300 ease-linear hover:text-white "
                    >
                      {" "}
                      <span>
                        <Email />
                      </span>
                      juegosexclusivos@gmail.com
                    </a>
                  </li>
                  <li className="pt-3">
                    <a
                      href="tel:(101)342-7873"
                      className=" font-Inter font-medium text-white text-sm sm:text-base leading-[25.6px] opacity-80  flex items-center gap-2 hover:opacity-100 transition-all durataion-300 ease-linear hover:text-white"
                    >
                      <span className=" animate-Phone">
                        <Phone />
                      </span>
                      (101)342-7873
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="border-[#161819] border py-5  font-Inter font-medium text-base text-white leading-[25.6px] opacity-50 text-center">
        © Juegos exclusivos - Todos los derechos reservados {year}
      </p>
    </div>
  );
};

export default Footer;
