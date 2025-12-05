import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import "@/shared/styles/hideScrollbar.css";

const Fields = () => {
  return (
    <section
      id="section-1"
      className="flex flex-col items-center justify-center 2xl:mt-[20rem] lg:mt-[14rem] md:mt-[10rem] mt-[12rem]"
    >
      <div className="2xl:w-[72rem] xl:w-[56rem] md:w-[48rem] w-[32rem] mx-auto text-center">
        <h2
          className="2xl:text-[5.6rem] xl:text-[4.8rem] md:text-[3.6rem] text-[2.8rem] font-normal"
          data-aos="fade-up"
        >
          The community for developers across fields
        </h2>
      </div>

      <div
        className="flex flex-row items-center hide-scrollbar 2xl:gap-[2.4rem] lg:gap-[2rem] md:gap-[1.6rem] gap-[1.2rem] 2xl:mt-[6.4rem] lg:mt-[4rem] md:mt-[2.4rem] mt-[1.6rem]"
        data-aos="fade-up"
      >
        <div className="flex flex-col shrink-0 pb-[0.4rem]">
          <img
            src="/images/Programmer.png"
            alt="Programmer"
            className="aspect-square 2xl:w-[51.7rem] lg:w-[42.8rem] md:w-[37.7rem] w-[25.8rem]"
          />
          <span className="2xl:text-[3.2rem] lg:text-[2.4rem] md:text-[2rem] text-[1.8rem] font-normal 2xl:mt-[2rem] lg:mt-[1.6rem] md:mt-[1.2rem] mt-[0.8rem]">
            Programmer
          </span>
          <Link
            href="/"
            className="w-fit flex flex-row items-center cursor-pointer 2xl:mt-[1.4rem] lg:mt-[1.2rem] md:mt-[1rem] mt-[0.8rem] text-[#808080] hover:text-[#6299FF] active:text-[#6299FF] transition-all duration-300 ease-in-out"
          >
            <div className="flex flex-row items-center justify-center rounded-full 2xl:w-[2.8rem] lg:w-[2.4rem] md:w-[2rem] w-[2.4rem] 2xl:h-[2.8rem] lg:h-[2.4rem] md:h-[2rem] h-[2.4rem] border-[1px] border-current">
              <ArrowRight className="2xl:w-[2rem] lg:w-[1.6rem] md:w-[1.2rem] w-[1.6rem] 2xl:h-[2rem] lg:h-[1.6rem] md:h-[1.2rem] h-[1.6rem]" />
            </div>
            <span className="2xl:text-[2rem] lg:text-[1.6rem] md:text-[1.2rem] text-[1.4rem] font-normal 2xl:ml-[1.2rem] lg:ml-[0.8rem] md:ml-[0.6rem] ml-[0.4rem]">
              View more
            </span>
          </Link>
        </div>
        <div className="flex flex-col shrink-0 pb-[0.4rem]">
          <img
            src="/images/VideoCreator.png"
            alt="Video Creator"
            className="aspect-square 2xl:w-[51.7rem] lg:w-[42.8rem] md:w-[37.7rem] w-[25.8rem]"
          />
          <span className="2xl:text-[3.2rem] lg:text-[2.4rem] md:text-[2rem] text-[1.8rem] font-normal 2xl:mt-[2rem] lg:mt-[1.6rem] md:mt-[1.2rem] mt-[0.8rem]">
            Video Creators
          </span>
          <Link
            href="/"
            className="w-fit flex flex-row items-center cursor-pointer 2xl:mt-[1.4rem] lg:mt-[1.2rem] md:mt-[1rem] mt-[0.8rem] text-[#808080] hover:text-[#6299FF] active:text-[#6299FF] transition-all duration-300 ease-in-out"
          >
            <div className="flex flex-row items-center justify-center rounded-full 2xl:w-[2.8rem] lg:w-[2.4rem] md:w-[2rem] w-[2.4rem] 2xl:h-[2.8rem] lg:h-[2.4rem] md:h-[2rem] h-[2.4rem] border-[1px] border-current">
              <ArrowRight className="2xl:w-[2rem] lg:w-[1.6rem] md:w-[1.2rem] w-[1.6rem] 2xl:h-[2rem] lg:h-[1.6rem] md:h-[1.2rem] h-[1.6rem]" />
            </div>
            <span className="2xl:text-[2rem] lg:text-[1.6rem] md:text-[1.2rem] text-[1.4rem] font-normal 2xl:ml-[1.2rem] lg:ml-[0.8rem] md:ml-[0.6rem] ml-[0.4rem]">
              View more
            </span>
          </Link>
        </div>
        <div className="flex flex-col shrink-0 pb-[0.4rem]">
          <img
            src="/images/MusicCreator.png"
            alt="Music Creator"
            className="aspect-square 2xl:w-[51.7rem] lg:w-[42.8rem] md:w-[37.7rem] w-[25.8rem]"
          />
          <span className="2xl:text-[3.2rem] lg:text-[2.4rem] md:text-[2rem] text-[1.8rem] font-normal 2xl:mt-[2rem] lg:mt-[1.6rem] md:mt-[1.2rem] mt-[0.8rem]">
            Audio Creators
          </span>
          <Link
            href="/"
            className="w-fit flex flex-row items-center cursor-pointer 2xl:mt-[1.4rem] lg:mt-[1.2rem] md:mt-[1rem] mt-[0.8rem] text-[#808080] hover:text-[#6299FF] active:text-[#6299FF] transition-all duration-300 ease-in-out"
          >
            <div className="flex flex-row items-center justify-center rounded-full 2xl:w-[2.8rem] lg:w-[2.4rem] md:w-[2rem] w-[2.4rem] 2xl:h-[2.8rem] lg:h-[2.4rem] md:h-[2rem] h-[2.4rem] border-[1px] border-current">
              <ArrowRight className="2xl:w-[2rem] lg:w-[1.6rem] md:w-[1.2rem] w-[1.6rem] 2xl:h-[2rem] lg:h-[1.6rem] md:h-[1.2rem] h-[1.6rem]" />
            </div>
            <span className="2xl:text-[2rem] lg:text-[1.6rem] md:text-[1.2rem] text-[1.4rem] font-normal 2xl:ml-[1.2rem] lg:ml-[0.8rem] md:ml-[0.6rem] ml-[0.4rem]">
              View more
            </span>
          </Link>
        </div>
        <div className="flex flex-col shrink-0 pb-[0.4rem]">
          <img
            src="/images/Designer.png"
            alt="Designer"
            className="aspect-square 2xl:w-[51.7rem] lg:w-[42.8rem] md:w-[37.7rem] w-[25.8rem]"
          />
          <span className="2xl:text-[3.2rem] lg:text-[2.4rem] md:text-[2rem] text-[1.8rem] font-normal 2xl:mt-[2rem] lg:mt-[1.6rem] md:mt-[1.2rem] mt-[0.8rem]">
            Designer
          </span>
          <Link
            href="/"
            className="w-fit flex flex-row items-center cursor-pointer 2xl:mt-[1.4rem] lg:mt-[1.2rem] md:mt-[1rem] mt-[0.8rem] text-[#808080] hover:text-[#6299FF] active:text-[#6299FF] transition-all duration-300 ease-in-out"
          >
            <div className="flex flex-row items-center justify-center rounded-full 2xl:w-[2.8rem] lg:w-[2.4rem] md:w-[2rem] w-[2.4rem] 2xl:h-[2.8rem] lg:h-[2.4rem] md:h-[2rem] h-[2.4rem] border-[1px] border-current">
              <ArrowRight className="2xl:w-[2rem] lg:w-[1.6rem] md:w-[1.2rem] w-[1.6rem] 2xl:h-[2rem] lg:h-[1.6rem] md:h-[1.2rem] h-[1.6rem]" />
            </div>
            <span className="2xl:text-[2rem] lg:text-[1.6rem] md:text-[1.2rem] text-[1.4rem] font-normal 2xl:ml-[1.2rem] lg:ml-[0.8rem] md:ml-[0.6rem] ml-[0.4rem]">
              View more
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Fields;
