"use client";
import React, { useState } from "react";
import CommentReply from "./CommentReply";

type Props = {};

const CommentReplyTrigger = (props: Props) => {
  const [isReplyOpen, setIsReplyOpen] = useState(false);

  return (
    <>
      {/* 대댓글 트리거(댓글 존재 여부로 렌더링 판단) */}
      {!isReplyOpen && (
        <div
          className="flex flex-row items-center lg:mt-[1.2rem] md:mt-[0.8rem] mt-[1rem] cursor-pointer"
          onClick={() => setIsReplyOpen(true)}
        >
          <div className="h-[0.05rem] lg:w-[2.4rem] md:w-[2rem] w-[1.6rem] bg-[var(--color-primary-color)]"></div>
          <span className="lg:ml-[1rem] md:ml-[0.8rem] ml-[0.6rem] lg:text-[1.2rem] md:text-[1rem] text-[1.2rem] font-normal text-[var(--color-primary-color)]">
            View 50 replies
          </span>
        </div>
      )}
      {/* 대댓글 영역 */}
      {isReplyOpen && (
        <div className="flex flex-col w-full lg:mt-[1.2rem] md:mt-[0.8rem] mt-[1rem] lg:gap-[1.6rem] md:gap-[1.2rem] gap-[1rem]">
          {Array.from({ length: 10 }).map((_, index, arr) => (
            <CommentReply
              key={index}
              commentId={index}
              triggerReply={index === arr.length - 1}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default CommentReplyTrigger;
