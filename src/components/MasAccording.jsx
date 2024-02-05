import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
function Icon({ id, open }) {
  return (
    <div className="relative ">
      <svg
        xmlns="http://www.w3.oyg/1700/svg"
        width="21"
        height="2"
        viewBox="0 0 21 2"
        fill="white"
        className={`${
          id === open ? "" : "rotate-90 translate-x-[1px]"
        } h-5 w-5   transition-transform`}
      >
        <path
          d="M1.69629 1H19.6963"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <svg
        className="absolute rotate-0 top-[9px]"
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="2"
        viewBox="0 0 21 2"
        fill="white"
      >
        <path
          d="M1.69629 1H19.6963"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
const MasAccording = () => {
  const [open, setOpen] = React.useState(1);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div className=" relative ">
      <div className="w-[120px] sm:w-[150px] h-[120px] sm:h-[150px] rounded-[150px] bg-gradient-to-l from-[#51C8EF] from-[-13.72%] to-[#7AF57A] to-[102.02%] blur-[80px] sm:blur-[115px] absolute tops-[23%] left-0"></div>
      <div className="max-w-[970px] container mx-auto px-3">
        <div className="py-12 sm:py-16 lg:py-[150px]">
          <h2 className="font-Anton font-normal text-white text-4xl sm:text-[40px] lg:text-5xl leading-[120%] text-center pb-5 sm:pb-[60px] ">
            Preguntas más frecuentes
          </h2>
          <Accordion
            className="border border-[#80898D] rounded-[10px] py-4 px-2 sm:px-5 mb-3 sm:mb-4"
            open={open === 1}
            icon={<Icon id={1} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="font-Anton font-normal text-base sm:text-lg md:text-xl text-white leading-[130%] py-0 text-start  "
            >
              ¿Cuáles son las ventajas de elegir Juegos Exclusivos para mis
              plataformas de juegos?
            </AccordionHeader>
            <AccordionBody className="font-Inter text-[13px] sm:text-base font-medium leading-[160%] text-[#CCD0D1] max-w-[880px] pt-2 pb-0 ">
              En Exclusive Games, ofrecemos experiencias únicas y
              personalizadas, respaldadas por más de 15 años de dedicación al
              desarrollo de multiplataformas para juegos de azar.
            </AccordionBody>
          </Accordion>
          <Accordion
            className=" border-[#80898D] border mb-3 sm:mb-4 rounded-[10px] py-4 px-2 sm:px-5  overflow-hidden"
            open={open === 2}
            icon={<Icon id={2} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className="font-Anton text-base sm:text-lg md:text-xl py-0 text-start font-normal text-white leading-[130%]"
            >
              {" "}
              ¿Cómo garantizan la seguridad de las operaciones en sus juegos?
            </AccordionHeader>
            <AccordionBody className="font-Inter text-[13px] sm:text-base font-medium leading-[160%] text-[#CCD0D1] max-w-[880px] pt-2 pb-0 ">
              En Exclusive Games, ofrecemos experiencias únicas y
              personalizadas, respaldadas por más de 15 años de dedicación al
              desarrollo de multiplataformas para juegos de azar.
            </AccordionBody>
          </Accordion>
          <Accordion
            className=" border-[#80898D] border mb-3 sm:mb-4 rounded-[10px] py-4 px-2 sm:px-5 "
            open={open === 3}
            icon={<Icon id={3} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className="font-Anton font-normal text-white text-base sm:text-lg md:text-xl py-0 text-start leading-[130%]"
            >
              {" "}
              ¿Cuáles son las opciones de juego disponibles en las versiones
              Silver, Luxury y Platinum?
            </AccordionHeader>
            <AccordionBody className="font-Inter font-medium text-[#CCD0D1] text-[13px] sm:text-base leading-[160%] max-w-[880px] pt-2 pb-0 ">
              En Exclusive Games, ofrecemos experiencias únicas y
              personalizadas, respaldadas por más de 15 años de dedicación al
              desarrollo de multiplataformas para juegos de azar.
            </AccordionBody>
          </Accordion>
          <Accordion
            className=" border-[#80898D] border mb-3 sm:mb-4 rounded-[10px] py-4 px-2 sm:px-5 "
            open={open === 4}
            icon={<Icon id={4} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(4)}
              className="font-Anton font-normal text-white text-base sm:text-lg md:text-xl leading-[130%] py-0 text-start"
            >
              ¿Cuánto tiempo lleva crear una plataforma con Juegos Exclusivos?
            </AccordionHeader>
            <AccordionBody className="font-Inter font-medium text-[#CCD0D1] text-[13px] sm:text-base leading-[160%] max-w-[880px] pt-2 pb-0 ">
              En Exclusive Games, ofrecemos experiencias únicas y
              personalizadas, respaldadas por más de 15 años de dedicación al
              desarrollo de multiplataformas para juegos de azar.
            </AccordionBody>
          </Accordion>
          <Accordion
            className=" border-[#80898D] border mb-3 sm:mb-4 rounded-[10px] py-4 px-2 sm:px-5 "
            open={open === 5}
            icon={<Icon id={5} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(5)}
              className="font-Anton font-normal text-white text-base sm:text-lg md:text-xl py-0 text-start leading-[130%]"
            >
              ¿Qué métodos de pago aceptan?
            </AccordionHeader>
            <AccordionBody className="font-Inter font-medium text-[#CCD0D1] text-[13px] sm:text-base  leading-[160%] max-w-[880px] pt-2 pb-0 ">
              En Exclusive Games, ofrecemos experiencias únicas y
              personalizadas, respaldadas por más de 15 años de dedicación al
              desarrollo de multiplataformas para juegos de azar.
            </AccordionBody>
          </Accordion>
          <Accordion
            className=" border-[#80898D] border mb-3 sm:mb-4 rounded-[10px] py-4 px-2 sm:px-5 "
            open={open === 6}
            icon={<Icon id={6} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(6)}
              className="font-Anton font-normal text-white text-base sm:text-lg md:text-xl py-0 text-start leading-[130%]"
            >
              ¿Puedo probar sus juegos antes de comprometerme?
            </AccordionHeader>
            <AccordionBody className="font-Inter font-medium text-[13px] sm:text-base text-[#CCD0D1] leading-[160%] max-w-[880px] pt-2 pb-0 ">
              En Exclusive Games, ofrecemos experiencias únicas y
              personalizadas, respaldadas por más de 15 años de dedicación al
              desarrollo de multiplataformas para juegos de azar.
            </AccordionBody>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default MasAccording;
