import Input from "@/shared/components/Input";
import { SendHorizontal } from "lucide-react";
import React from "react";
import Comment from "@/shared/components/post/Comment";

type Props = {};

const LargeCommentSection = (props: Props) => {
  return (
    <div className="xl:flex flex-col hidden xl:mt-[3.6rem] lg:mt-[2.4rem] md:mt-[2rem] mt-[1.6rem]">
      {/* 댓글 입력 */}
      <div className="relative ">
        <Input
          type="textarea"
          placeholder="Add a comment"
          wrapperClassName="w-full"
          inputClassName="w-full lg:rounded-[1.2rem] md:rounded-[0.8rem] rounded-[1.2rem] lg:py-[0.8rem] lg:pl-[1.2rem] lg:pr-[4.8rem] py-[0.6rem] pl-[0.8rem] pr-[4.2rem] 2xl:text-[1.8rem] lg:text-[1.6rem] md:text-[1.4rem] text-[1.6rem] font-normal"
          textareaRows={3}
          autoResize={true}
        />
        <SendHorizontal className="absolute bottom-[1.6rem] right-[1.6rem] cursor-pointer" />
      </div>

      {/* 댓글 목록 */}
      <div className="flex flex-col w-full lg:mt-[2.4rem] md:mt-[2rem] mt-[1.6rem] lg:gap-[2.4rem] md:gap-[2rem] gap-[1.6rem]">
        <span className="text-[1.6rem] font-normal text-[#808080]">
          200 Comments
        </span>
        {Array.from({ length: 10 }).map((_, index) => (
          <Comment key={index} commentId={index} />
        ))}
      </div>
    </div>
  );
};

export default LargeCommentSection;
