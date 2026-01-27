import Link from "next/link";
import React from "react";
import Footer from "@/features/landing/components/Footer";
import FooterHeader from "@/features/landing/components/FooterHeader";
import { SendHorizontal } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chiton - Help",
  description: "Find help, report bugs, and request features on Chiton.",
  alternates: {
    canonical: "https://www.chiton.io/help",
  },
};

const Help = () => {
  return (
    <>
      <div className="2xl:px-[16rem] lg:px-[12rem] md:px-[3.2rem] px-[1.6rem] w-full ">
        <FooterHeader />

        <div className="flex flex-col items-center justify-center 2xl:mt-[16rem] lg:mt-[12rem] md:mt-[10rem] mt-[8rem]">
          <Link
            href="/"
            className="flex flex-row items-center justify-center 2xl:gap-[1.6rem] lg:gap-[1rem] md:gap-[0.8rem] gap-[0.6rem]"
          >
            <img
              src="/icons/ChitonLogoDark.png"
              alt="logo"
              className="2xl:w-[52px] 2xl:h-[52px] lg:w-[48px] lg:h-[48px] md:w-[36px] md:h-[36px] w-[40px] h-[40px] dark:hidden block"
            />
            <img
              src="/icons/ChitonLogoWhite.png"
              alt="logo"
              className="2xl:w-[52px] 2xl:h-[52px] lg:w-[48px] lg:h-[48px] md:w-[36px] md:h-[36px] w-[40px] h-[40px] dark:block hidden"
            />
            <span className="2xl:text-[6.4rem] lg:text-[4.8rem] md:text-[3.2rem] text-[3.6rem] font-normal">
              Chiton
            </span>
          </Link>

          <p className="text-center text-gray-600 dark:text-gray-400 2xl:text-[2rem] lg:text-[1.6rem] md:text-[1.4rem] text-[1.4rem] mt-6 2xl:w-[120rem] lg:w-[80rem] md:w-[64rem] w-[36rem] mx-auto">
            Welcome to Chiton’s Help page. You can report bugs or send simple
            feature and support requests directly to our team. Your feedback
            helps us improve and deliver a better experience.
          </p>

          <div className="flex flex-col 2xl:rounded-[1.6rem] lg:rounded-[1.2rem] md:rounded-[1rem] rounded-[0.8rem] 2xl:w-[100rem] lg:w-[60rem] md:w-[48rem] w-[36rem] mx-auto bg-help-card-background 2xl:mt-[6rem] lg:mt-[4rem] md:mt-[2.4rem] mt-[3.6rem] shadow-lg">
            <div className="w-full flex flex-row items-center 2xl:gap-[1rem] lg:gap-[0.8rem] md:gap-[0.6rem] gap-[0.4rem] 2xl:rounded-t-[1.6rem] lg:rounded-t-[1.2rem] md:rounded-t-[1rem] rounded-t-[0.8rem] 2xl:p-[2rem] lg:p-[1.6rem] md:p-[1.2rem] p-[0.8rem]">
              <img
                src="/icons/ChitonLogoDark.png"
                alt="logo"
                className="2xl:w-[32px] 2xl:h-[32px] lg:w-[28px] lg:h-[28px] md:w-[20px] md:h-[20px] w-[24px] h-[24px] dark:hidden block"
              />
              <img
                src="/icons/ChitonLogoWhite.png"
                alt="logo"
                className="2xl:w-[32px] 2xl:h-[32px] lg:w-[28px] lg:h-[28px] md:w-[20px] md:h-[20px] w-[24px] h-[24px] dark:block hidden"
              />
              <span className="2xl:text-[2rem] lg:text-[1.6rem] md:text-[1.4rem] text-[1.8rem] font-medium line-clamp-1 ">
                Bug Reports, Feedback & Support Requests
              </span>
            </div>

            <div className="w-full relative">
              <input
                type="text"
                placeholder="Bugs & Feedbacks & Support Requests"
                className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.6rem] font-normnal outline-none 2xl:p-[2rem] lg:p-[1.6rem] md:p-[1.2rem] p-[1rem] 2xl:pr-[6rem] lg:pr-[4rem] md:pr-[3rem] pr-[4rem] w-full"
              />
              {/* 색 설정하기(다크모드) */}
              <SendHorizontal className="absolute right-[1rem] top-[50%] translate-y-[-50%] h-[2rem] w-[2rem] cursor-pointer md:h-[1.6rem] md:w-[1.6rem] lg:h-[2rem] lg:w-[2rem] text-gray-400 hover:text-[#454545] transition-colors duration-300 ease-in-out" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default Help;
