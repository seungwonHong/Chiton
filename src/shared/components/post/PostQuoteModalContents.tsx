import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import Input from "../Input";
import { SendHorizontal, User } from "lucide-react";

import PostDetailPost from "@/features/post-detail/components/PostDetailPost";
import Comment from "./Comment";
import TiptapEditor from "../TiptapEditor";

interface Props {
  quoteType: "comment" | "post";
}

const PostQuoteModalContents = ({ quoteType }: Props) => {
  return (
    <div className="flex flex-row items-start lg:w-[60rem] lg:h-[40rem] md:w-[50rem] md:h-[30rem] 2xl:gap-[1.4rem] lg:gap-[1.2rem] md:gap-[0.8rem] gap-[0.6rem] overflow-y-auto md:mt-[1.6rem]">
      <Avatar
        className="
              2xl:w-[4.8rem] 2xl:h-[4.8rem] lg:w-[4rem] lg:h-[4rem] md:w-[3.6rem] md:h-[3.6rem] w-[4rem] h-[4rem]"
      >
        <AvatarImage src={"https://github.com/shadcn.png"} alt="Profile" />
        <AvatarFallback className="bg-header-profile-bg">
          <User
            className="fill-[var(--color-profile-default-icon-bg)] lg:w-[2.4rem] lg:h-[2.4rem] md:w-[2.8rem] md:h-[2.8rem] w-[2.4rem] h-[2.4rem]
              "
            strokeWidth={0}
          />
        </AvatarFallback>
      </Avatar>

      <div className="flex flex-col flex-1 w-full min-w-0">
        <span className="font-medium 2xl:text-[2rem] lg:text-[1.8rem] text-[1.6rem]">
          hong.seung.won
        </span>
        
        <TiptapEditor content="" onChange={() => {}} />

        {/* 인용 내용 */}
        <div className="flex flex-1 lg:rounded-[0.8rem] md:rounded-[1rem] rounded-[1.6rem] p-[1.2rem] border border-border mt-[1.6rem] overflow-x-hidden min-w-0">
          {quoteType === "post" ? (
            <PostDetailPost id="1" quote={true} />
          ) : (
            <Comment commentId={1} commentReply={false} quote={true} />
          )}
        </div>
      </div>

      <div className="absolute bottom-[1.6rem] right-[1.6rem] flex flex-row items-center justify-center p-[0.8rem] rounded-[0.8rem] dark:bg-side-bar-hover bg-side-bar-hover/30">
        <SendHorizontal className="cursor-pointer" />
      </div>
    </div>
  );
};

export default PostQuoteModalContents;
