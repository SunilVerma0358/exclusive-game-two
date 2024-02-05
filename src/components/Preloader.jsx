import React from "react";
const Preloader = () => {
  return (
    <div>
      <div className="h-screen  bg-[#00141B] fixed top-0 left-0 right-0 overflow-hidden flex justify-center items-center">
        <div className="w-full relative flex justify-center ">
          <div className=" animate-Load w-16 h-16 border-[10px] border-y-blue-400  border-white rounded-[100%]"></div>
          <div className=" absolute bottom-[-90px] text-[25px] font-Poppins font-medium text-white ">
            Please wait
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
