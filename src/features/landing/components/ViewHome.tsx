import React from "react";
import "@/shared/styles/gradient-shadow.css";
import "@/features/landing/styles/fadeDownAnimation.css";

const ViewHome = () => {
  return (
    <div className="w-fit mx-auto 2xl:mt-[12rem] lg:mt-[10rem] mt-[6rem] gradient-shadow fade-down-delay-3">
      <img
        src="/images/ViewHomeDark.png"
        alt="ViewHome Dark"
        className="2xl:w-[160rem] 2xl:h-[103rem] xl:w-[120rem] xl:h-[80rem] lg:w-[96rem] lg:h-[64rem] md:w-[72rem] md:h-[46rem] w-[38rem] h-[24rem] mx-auto dark:block hidden"
      />
      <img
        src="/images/ViewHomeLight.png"
        alt="ViewHome Light"
        className="2xl:w-[160rem] 2xl:h-[103rem] lg:w-[120rem] lg:h-[80rem] md:w-[72rem] md:h-[46rem] w-[38rem] h-[24rem] mx-auto dark:hidden block"
      />
    </div>
  );
};

export default ViewHome;
