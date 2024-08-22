import React from "react";

const HeroCTA = () => {
  return (
    <div className="paddingX absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
      <div className="flex flex-col justify-center items-center mt-5 ml-3">
        <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
        <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
      </div>

      <div className="">
        <h1 className="heroHeadText">
          Hi, I'm{" "}
          <span
            className="text-battleGray sm:text-[90px]
  text-[50px] font-mova
  font-extrabold uppercase"
          >
            Sean
          </span>
        </h1>
        <p
          className={`font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] text-eerieBlack w-[450px]`}
        >
          Front end Developer <br className="sm:block hidden" />
          who writes clean, elegant and effiecient code.
        </p>
      </div>
      <div
        className="w-screen flex flex-col items-start
justify-center sm:-ml-[3rem] xxs:mt-4"
      ></div>
    </div>
  );
};

export default HeroCTA;
