"use client";
import React, { useState } from "react";
import { Heart } from "lucide-react";
import { Quote } from "lucide-react";

const HeroActionBar = () => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="flex flex-row items-center">
      {/* 좋아요 */}
      <div className="flex flex-row items-center 2xl:gap-[0.6rem] lg:gap-[0.4rem] gap-[0.2rem] py-[0.4rem] px-[0.8rem] rounded-[0.6rem] hover:bg-side-bar-hover transition-all duration-300 ease-in-out cursor-pointer">
        <Heart
          className={`2xl:w-[2.4rem] 2xl:h-[2.4rem] lg:w-[2.2rem] lg:h-[2.2rem] md:w-[2rem] md:h-[2rem] w-[2.4rem] h-[2.4rem] cursor-pointer ${
            isLiked ? "text-red-500 fill-red-500" : "text-post-action-bar-icon"
          }`}
          strokeWidth={1.5}
          onClick={(e) => {
            e.preventDefault();
            setIsLiked(!isLiked);
          }}
        />
        <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] font-normal text-post-action-bar-icon">
          50
        </span>
      </div>

      {/* 인용 */}
      <div className="flex flex-row items-center 2xl:gap-[0.6rem] lg:gap-[0.4rem] gap-[0.2rem] py-[0.4rem] px-[0.8rem] rounded-[0.6rem] hover:bg-side-bar-hover transition-all duration-300 ease-in-out cursor-pointer">
        <Quote
          className="2xl:w-[2.4rem] 2xl:h-[2.4rem] lg:w-[2.2rem] lg:h-[2.2rem] md:w-[2rem] md:h-[2rem] w-[2.4rem] h-[2.4rem] cursor-pointer text-post-action-bar-icon"
          strokeWidth={1.5}
        />
        <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] font-normal text-post-action-bar-icon">
          50
        </span>
      </div>
    </div>
  );
};

export default HeroActionBar;
