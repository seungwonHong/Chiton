"use client";
import React, { useState } from "react";
import { CalendarPlus, ChevronDown, ChevronUp } from "lucide-react";
import ProfileImageComponent from "@/shared/components/ProfileImageComponent";

type Props = {};

const MoreProfileInfo = (props: Props) => {
  const [moreInfoOpen, setMoreInfoOpen] = useState(false);

  return (
    <div className="flex flex-col xl:hidden lg:mt-[2.4rem] md:mt-[2rem] mt-[1.6rem] w-full">
      <div
        className={`w-fit flex flex-row items-center lg:px-[1.6rem] px-[0.8rem] lg:py-[0.6rem] py-[0.4rem] gap-[0.8rem] hover:bg-post-filter-background active:bg-post-filter-background transition-all duration-300 cursor-pointer lg:rounded-[0.6rem] rounded-[0.4rem]`}
        onClick={() => setMoreInfoOpen(!moreInfoOpen)}
      >
        <span className="text-[1.4rem] font-normal">More Info</span>
        {moreInfoOpen ? (
          <ChevronUp className="w-[2rem] h-[2rem]" />
        ) : (
          <ChevronDown className="w-[2rem] h-[2rem]" />
        )}
      </div>

      {moreInfoOpen && (
        <div className="flex flex-col mt-[1.4rem] lg:px-[1.6rem] px-[0.8rem]">
          <div className="flex flex-row items-center lg:gap-[0.8rem] gap-[0.6rem]">
            <CalendarPlus
              className="md:w-[2rem] md:h-[2rem] w-[2.4rem] h-[2.4rem]"
              strokeWidth={1.5}
            />
            <span className="lg:text-[1.2rem] text-[1.4rem] font-normal">
              Created Aug 14, 2025
            </span>
          </div>

          {/* Status */}
          <div className="flex flex-col">
            <h2 className="text-[1.6rem] font-medium mt-[4rem]">Status</h2>
            <p className="text-[1.4rem] font-normal text-[#808080] mt-[1.2rem]">
              “Exploring the intersection of code and design.”
            </p>
          </div>

          {/* Introduction */}
          <div className="flex flex-col">
            <h2 className="text-[1.6rem] font-medium mt-[4rem]">
              Introduction
            </h2>
            <p className="text-[1.4rem] font-normal text-[#808080] mt-[1.2rem]">
              I am a front-end developer with a strong interest in creating
              interactive and user-friendly web applications. I enjoy working
              with modern frameworks like Next.js and React, and I value clean
              design as much as solid code. Constantly curious, I explore new
              tools and technologies to improve my skills and bring fresh ideas
              into projects. Beyond coding, I enjoy sharing knowledge,
              collaborating with others, and building meaningful digital
              experiences that connect people.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col w-full mt-[4rem]">
            <h2 className="text-[1.6rem] font-medium">Links</h2>
            <div className="flex flex-col gap-[0.2rem] mt-[1.2rem]">
              {Array.from({ length: 5 }).map((_, index) => (
                <a
                  key={index}
                  href={`https://www.google.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit text-[1.4rem] font-normal text-[#808080] hover:text-primary-color transition-colors duration-300 ease-in-out"
                >
                  instagram
                </a>
              ))}
            </div>
          </div>

          {/* Tech Stacks */}
          <div className="flex flex-col w-full mt-[4rem]">
            <h2 className="text-[1.6rem] font-medium">Tech Stacks</h2>
            <div className="flex flex-row items-center gap-[0.8rem] flex-wrap mt-[1.2rem]">
              {Array.from({ length: 10 }).map((_, index) => (
                <span
                  key={index}
                  className="text-[1.4rem] font-normal text-[#808080]"
                >
                  # Next.js
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoreProfileInfo;
