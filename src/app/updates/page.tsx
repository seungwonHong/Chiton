import FooterHeader from "@/features/landing/components/FooterHeader";
import React from "react";
import Link from "next/link";
import Footer from "@/features/landing/components/Footer";
import UpdateComponent from "@/features/landing/components/UpdateComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chiton - Updates",
  description:
    "We publish new features, improvements, deprecations, and policy changes here. Each update includes a brief summary, the effective date, and links to learn more or adjust settings.",
  alternates: {
    canonical: "https://www.Chiton.io/updates",
  },
};
const Updates = () => {
  return (
    <>
      <div className="flex flex-col 2xl:px-[16rem] lg:px-[12rem] md:px-[3.2rem] px-[1.6rem] w-full 2xl:pb-[15rem] lg:pb-[10rem] pb-[6rem]">
        <FooterHeader />

        <div className="flex md:flex-row flex-col md:items-start items-center justify-center 2xl:mt-[16rem] lg:mt-[12rem] md:mt-[10rem] mt-[8rem] 2xl:gap-[10rem] lg:gap-[6.8rem] gap-[4.8rem]">
          <div className="flex flex-col md:items-start items-center justify-center">
            <div className="flex flex-row">
              <div className="flex flex-row items-center justify-center 2xl:gap-[1.6rem] lg:gap-[1rem] md:gap-[0.8rem] gap-[0.6rem]">
                <img
                  src="/icons/LogoBlack.png"
                  alt="logo"
                  className="2xl:w-[72px] 2xl:h-[72px] lg:w-[64px] lg:h-[64px] md:w-[48px] md:h-[48px] w-[42px] h-[42px] dark:hidden block"
                />
                <img
                  src="/icons/LogoWhite.png"
                  alt="logo"
                  className="2xl:w-[72px] 2xl:h-[72px] lg:w-[64px] lg:h-[64px] md:w-[48px] md:h-[48px] w-[42px] h-[42px] dark:block hidden"
                />
              </div>
              <span className="2xl:text-[6.4rem] lg:text-[4.8rem] md:text-[3.2rem] text-[3.6rem] font-normal">
                Updates
              </span>
            </div>
            <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] font-normal 2xl:w-[60rem] xl:w-[50rem] md:w-[32rem] w-[36rem] md:text-start text-center">
              We publish new features, improvements, deprecations, and policy
              changes here. Each update includes a brief summary, the effective
              date, and links to learn more or adjust settings.
            </span>
          </div>

          <UpdateComponent />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Updates;
