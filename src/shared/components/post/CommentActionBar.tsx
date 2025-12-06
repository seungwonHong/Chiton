"use client";
import React, { useState } from "react";
import { Heart } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Quote } from "lucide-react";
import { Share } from "lucide-react";

const CommentActionBar = () => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="flex flex-row items-center 2xl:gap-[3rem] lg:gap-[2.4rem] md:gap-[2rem] gap-[1.6rem] 2xl:mt-[1rem] lg:mt-[0.6rem] mt-[0.4rem]">
      {/* 좋아요 */}
      <div className="flex flex-row items-center 2xl:gap-[1rem] lg:gap-[0.8rem] md:gap-[0.6rem] gap-[0.4rem]">
        <Heart
          className={`2xl:w-[2rem] 2xl:h-[2rem] lg:w-[1.8rem] lg:h-[1.8rem] md:w-[1.6rem] md:h-[1.6rem] w-[2rem] h-[2rem] cursor-pointer ${
            isLiked ? "text-red-500 fill-red-500" : ""
          }`}
          strokeWidth={1.5}
          onClick={() => setIsLiked(!isLiked)}
        />
        <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] font-normal">
          50
        </span>
      </div>
      {/* 댓글 */}
      <div className="flex flex-row items-center 2xl:gap-[1rem] lg:gap-[0.8rem] md:gap-[0.6rem] gap-[0.4rem]">
        <MessageCircle
          className="2xl:w-[2rem] 2xl:h-[2rem] lg:w-[1.8rem] lg:h-[1.8rem] md:w-[1.6rem] md:h-[1.6rem] w-[2rem] h-[2rem] cursor-pointer"
          strokeWidth={1.5}
        />
        <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] font-normal">
          50
        </span>
      </div>
      {/* 인용 */}
      <div className="flex flex-row items-center 2xl:gap-[1rem] lg:gap-[0.8rem] md:gap-[0.6rem] gap-[0.4rem]">
        <Quote
          className="2xl:w-[2rem] 2xl:h-[2rem] lg:w-[1.8rem] lg:h-[1.8rem] md:w-[1.6rem] md:h-[1.6rem] w-[2rem] h-[2rem] cursor-pointer"
          strokeWidth={1.5}
        />
        <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] font-normal">
          50
        </span>
      </div>
      {/* 공유 */}
      <div className="flex flex-row items-center 2xl:gap-[1rem] lg:gap-[0.8rem] md:gap-[0.6rem] gap-[0.4rem]">
        <Share
          className="2xl:w-[2rem] 2xl:h-[2rem] lg:w-[1.8rem] lg:h-[1.8rem] md:w-[1.6rem] md:h-[1.6rem] w-[2rem] h-[2rem] cursor-pointer"
          strokeWidth={1.5}
        />
        <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] font-normal">
          50
        </span>
      </div>
    </div>
  );
};

export default CommentActionBar;
