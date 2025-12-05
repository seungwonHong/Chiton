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
    <div className="flex flex-row items-center 2xl:gap-[4rem] lg:gap-[3.2rem] md:gap-[2.4rem] gap-[2rem] 2xl:mt-[2.6rem] lg:mt-[2rem] md:mt-[1.6rem] mt-[1rem]">
      {/* 좋아요 */}
      <div className="flex flex-row items-center 2xl:gap-[1.2rem] lg:gap-[1rem] md:gap-[1rem] gap-[0.6rem]">
        <Heart
          className={`2xl:w-[2.4rem] 2xl:h-[2.4rem] lg:w-[2.2rem] lg:h-[2.2rem] md:w-[2rem] md:h-[2rem] w-[2.4rem] h-[2.4rem] cursor-pointer ${
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
      <div className="flex flex-row items-center 2xl:gap-[1.2rem] lg:gap-[1rem] md:gap-[1rem] gap-[0.6rem]">
        <MessageCircle
          className="2xl:w-[2.4rem] 2xl:h-[2.4rem] lg:w-[2.2rem] lg:h-[2.2rem] md:w-[2rem] md:h-[2rem] w-[2.4rem] h-[2.4rem] cursor-pointer"
          strokeWidth={1.5}
        />
        <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] font-normal">
          50
        </span>
      </div>
      {/* 인용 */}
      <div className="flex flex-row items-center 2xl:gap-[1.2rem] lg:gap-[1rem] md:gap-[1rem] gap-[0.6rem]">
        <Quote
          className="2xl:w-[2.4rem] 2xl:h-[2.4rem] lg:w-[2.2rem] lg:h-[2.2rem] md:w-[2rem] md:h-[2rem] w-[2.4rem] h-[2.4rem] cursor-pointer"
          strokeWidth={1.5}
        />
        <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] font-normal">
          50
        </span>
      </div>
      {/* 공유 */}
      <div className="flex flex-row items-center 2xl:gap-[1.2rem] lg:gap-[1rem] md:gap-[1rem] gap-[0.6rem]">
        <Share
          className="2xl:w-[2.4rem] 2xl:h-[2.4rem] lg:w-[2.2rem] lg:h-[2.2rem] md:w-[2rem] md:h-[2rem] w-[2.4rem] h-[2.4rem] cursor-pointer"
          strokeWidth={1.5}
        />
        <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] font-normal">
          50
        </span>
      </div>
      {/* 북마크 */}
      <div
        className="flex flex-row items-center 2xl:gap-[1.2rem] lg:gap-[1rem] md:gap-[1rem] gap-[0.6rem]"
        onClick={() => setIsBookmarked(!isBookmarked)}
      >
        <Bookmark
          className={`2xl:w-[2.4rem] 2xl:h-[2.4rem] lg:w-[2.2rem] lg:h-[2.2rem] md:w-[2rem] md:h-[2rem] w-[2.4rem] h-[2.4rem] cursor-pointer ${
            isBookmarked
              ? "text-post-action-bar-bookmark fill-post-action-bar-bookmark"
              : ""
          }`}
          strokeWidth={1.5}
        />
      </div>
    </div>
  );
};

export default PostActionBar;
