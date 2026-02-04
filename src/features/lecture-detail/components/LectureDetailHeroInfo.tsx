"use client";
import { ArrowBigUp } from "lucide-react";
import React, { useState } from "react";

type Props = {};

const LectureDetailHeroInfo = (props: Props) => {
  const [isMore, setIsMore] = useState(false);

  const tags = [
    "#React",
    "#Next.js",
    "#Tailwind CSS",
    "#TypeScript",
    "#JavaScript",
    "#HTML",
    "#CSS",
    "#Vercel",
    "#Supabase",
    "#PostgreSQL",
  ];

  return (
    <div
      className={`flex flex-col w-full bg-side-bar-hover hover:bg-side-panel-hover rounded-[0.8rem] p-[0.8rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] font-normal lg:mt-[1.2rem] md:mt-[1rem] mt-[0.8rem] lg:gap-[0.8rem] md:gap-[0.6rem] gap-[0.4rem] cursor-pointer transition-all duration-300 ease-in-out ${isMore ? "" : "max-h-[9.5rem] overflow-hidden"}`}
      onClick={() => setIsMore(!isMore)}
    >
      <div className="flex flex-row items-center md:gap-[1.2rem] gap-[0.8rem]">
        <span>4 hours ago</span>
        <div className="flex flex-row items-center">
          <ArrowBigUp
            className="w-[1.6rem] h-[1.6rem] text-[#808080]"
            strokeWidth={1.5}
          />
          <span className="text-[1.4rem] font-normal text-[#808080]">100</span>
        </div>
      </div>
      <p className={`${isMore ? "block" : "line-clamp-3"}`}>
        This video is about the first lecture on Chiton
      </p>

      <p className={`text-[#808080] ${isMore ? "block" : "line-clamp-1"}`}>
        {tags.map((tag) => (
          <span
            key={tag}
            className="hover:text-primary-color transition-all duration-300 ease-in-out cursor-pointer mr-[0.6rem] inline-block"
          >
            {tag}
          </span>
        ))}
      </p>
    </div>
  );
};

export default LectureDetailHeroInfo;
