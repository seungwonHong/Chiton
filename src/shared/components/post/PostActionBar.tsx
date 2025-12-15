"use client";
import React, { useState } from "react";
import { Heart } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Quote } from "lucide-react";
import { Share } from "lucide-react";
import { Bookmark } from "lucide-react";

const PostActionBar = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <div className="flex flex-row items-center 2xl:gap-[3.2rem] lg:gap-[2.4rem] md:gap-[2rem] gap-[1.6rem] 2xl:mt-[2.6rem] lg:mt-[2rem] md:mt-[1.6rem] mt-[1rem]">
      {/* 좋아요 */}
      <div className="flex flex-row items-center 2xl:gap-[0.8rem] lg:gap-[0.6rem] md:gap-[0.6rem] gap-[0.4rem]">
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
      {/* 댓글 */}
      <div className="flex flex-row items-center 2xl:gap-[0.8rem] lg:gap-[0.6rem] md:gap-[0.6rem] gap-[0.4rem]">
        <MessageCircle
          className="2xl:w-[2.4rem] 2xl:h-[2.4rem] lg:w-[2.2rem] lg:h-[2.2rem] md:w-[2rem] md:h-[2rem] w-[2.4rem] h-[2.4rem] cursor-pointer text-post-action-bar-icon"
          strokeWidth={1.5}
        />
        <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] font-normal text-post-action-bar-icon">
          50
        </span>
      </div>
      {/* 인용 */}
      <div className="flex flex-row items-center 2xl:gap-[0.8rem] lg:gap-[0.6rem] md:gap-[0.6rem] gap-[0.4rem]">
        <Quote
          className="2xl:w-[2.4rem] 2xl:h-[2.4rem] lg:w-[2.2rem] lg:h-[2.2rem] md:w-[2rem] md:h-[2rem] w-[2.4rem] h-[2.4rem] cursor-pointer text-post-action-bar-icon"
          strokeWidth={1.5}
        />
        <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] font-normal text-post-action-bar-icon">
          50
        </span>
      </div>
      {/* 공유 */}
      <div className="flex flex-row items-center 2xl:gap-[0.8rem] lg:gap-[0.6rem] md:gap-[0.6rem] gap-[0.4rem]">
        <Share
          className="2xl:w-[2.4rem] 2xl:h-[2.4rem] lg:w-[2.2rem] lg:h-[2.2rem] md:w-[2rem] md:h-[2rem] w-[2.4rem] h-[2.4rem] cursor-pointer text-post-action-bar-icon"
          strokeWidth={1.5}
        />
        <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] font-normal text-post-action-bar-icon">
          50
        </span>
      </div>
      {/* 북마크 */}
      <div
        className="flex flex-row items-center 2xl:gap-[0.8rem] lg:gap-[0.6rem] md:gap-[0.6rem] gap-[0.4rem]"
        onClick={(e) => {
          e.preventDefault();
          setIsBookmarked(!isBookmarked);
        }}
      >
        <Bookmark
          className={`2xl:w-[2.4rem] 2xl:h-[2.4rem] lg:w-[2.2rem] lg:h-[2.2rem] md:w-[2rem] md:h-[2rem] w-[2.4rem] h-[2.4rem] cursor-pointer ${
            isBookmarked
              ? "text-primary-color fill-primary-color"
              : "text-post-action-bar-icon"
          }`}
          strokeWidth={1.5}
        />
      </div>
    </div>
  );
};

export default PostActionBar;
