import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col 2xl:mx-[16rem] lg:mx-[12rem] md:mx-[3.2rem] mx-[1.6rem] 2xl:mt-[20rem] lg:mt-[14rem] md:mt-[10rem] mt-[12rem] 2xl:pb-[15rem] lg:pb-[10rem] pb-[6rem] ">
      <div className="flex flex-row items-start 2xl:gap-[10rem] lg:gap-[6.8rem] gap-[4.8rem]">
        <div className="flex flex-col md:gap-[0.4rem] gap-[0.6rem]">
          <span className="2xl:text-[2rem] md:text-[1.4rem] text-[1.6rem] font-normal ">
            Product
          </span>
          <Link
            href="/privacy"
            className="2xl:text-[2rem] md:text-[1.4rem] text-[1.6rem] font-normal text-[#808080] hover:text-foreground transition-colors duration-300 ease-in-out w-fit"
          >
            Privacy
          </Link>
          <Link
            href="/termsofuse"
            className="2xl:text-[2rem] md:text-[1.4rem] text-[1.6rem] font-normal text-[#808080] hover:text-foreground transition-colors duration-300 ease-in-out w-fit"
          >
            Terms of Use
          </Link>
          <Link
            href="/rules"
            className="2xl:text-[2rem] md:text-[1.4rem] text-[1.6rem] font-normal text-[#808080] hover:text-foreground transition-colors duration-300 ease-in-out w-fit"
          >
            Rules
          </Link>
          <Link
            href="/updates"
            className="2xl:text-[2rem] md:text-[1.4rem] text-[1.6rem] font-normal text-[#808080] hover:text-foreground transition-colors duration-300 ease-in-out w-fit"
          >
            Updates
          </Link>
        </div>
        <div className="flex flex-col md:gap-[0.4rem] gap-[0.6rem]">
          <span className="2xl:text-[2rem] lg:text-[1.4rem] text-[1.6rem] font-normal ">
            Resources
          </span>
          <Link
            href="/help"
            className="2xl:text-[2rem] md:text-[1.4rem] text-[1.6rem] font-normal text-[#808080] hover:text-foreground transition-colors duration-300 ease-in-out w-fit"
          >
            Help
          </Link>
        </div>
        <div className="flex flex-col md:gap-[0.4rem] gap-[0.6rem]">
          <span className="2xl:text-[2rem] md:text-[1.4rem] text-[1.6rem] font-normal ">
            Connect
          </span>
          <Link
            href="https://x.com/Chiton_io"
            className="2xl:text-[2rem] md:text-[1.4rem] text-[1.6rem] font-normal text-[#808080] hover:text-foreground transition-colors duration-300 ease-in-out w-fit"
          >
            X
          </Link>
          <a
            href="https://www.instagram.com/chiton_io.official"
            className="2xl:text-[2rem] md:text-[1.4rem] text-[1.6rem] font-normal text-[#808080] hover:text-foreground transition-colors duration-300 ease-in-out w-fit"
          >
            Instagram
          </a>
        </div>
      </div>

      <div className="h-[0.1px] w-full bg-[#C5C5C5] 2xl:mt-[6.4rem] lg:mt-[4rem] md:mt-[2.4rem] mt-[1.6rem]"></div>

      <div
        className={`grid md:grid-cols-3 grid-cols-1 items-center 2xl:mt-[6.4rem] lg:mt-[4rem] md:mt-[2.4rem] mt-[1.6rem] w-full`}
      >
        <span className="md:flex hidden items-center justify-start 2xl:text-[2rem] lg:text-[1.6rem] text-[1.2rem] font-normal font-robotoMono">
          Copyright © 2025
        </span>

        <div className="md:flex hidden items-center justify-center">
          <span className="2xl:text-[2rem] lg:text-[1.4rem] text-[1.2rem] font-normal font-robotoMono 2xl:w-[28rem] lg:w-[24rem] md:w-[15rem] w-[10rem] text-center">
            Designed and built by 'Chiton'
          </span>
        </div>

        <div className="md:flex hidden items-center justify-end">
          <span className="2xl:text-[2rem] lg:text-[1.4rem] text-[1.2rem] font-normal font-robotoMono">
            Current Status: Building
          </span>
        </div>

        {/* 모바일일 때 */}
        <div className="flex items-center justify-center md:hidden">
          <span className="text-[1.2rem] font-normal font-robotoMono w-[16rem] text-center">
            Designed and built by 'Chiton'
          </span>
        </div>

        <div className="flex flex-row items-center justify-between md:hidden mt-[3.2rem]">
          <span className="flex items-center justify-start text-[1.2rem] font-normal font-robotoMono">
            Copyright © 2025
          </span>

          <div className="flex items-center justify-end">
            <span className="text-[1.2rem] font-normal font-robotoMono">
              Current Status: Building
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
