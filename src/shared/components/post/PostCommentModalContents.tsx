import React from "react";
import Comment from "./Comment";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";
import Input from "../Input";
import { SendHorizontal } from "lucide-react";
import Post from "./Post";

interface Props {
  commentType: "comment" | "reply";
}

const PostCommentModalContents = ({ commentType }: Props) => {
  return (
    <div
      className={`flex flex-col overflow-y-auto 
          lg:w-[60rem] lg:h-[40rem] md:w-[50rem] md:h-[30rem] md:mt-[1.6rem]
      `}
    >
      {commentType === "comment" && (
        <Comment
          commentId={1}
          thread={true}
          commentReply={false}
          quote={false}
        />
      )}
      {commentType === "reply" && (
        <Post id="1" thread={true} reply={true} link={false} />
      )}

      <div
        className={`flex flex-row items-start mt-[0.8rem] 2xl:gap-[1.4rem] lg:gap-[1.2rem] md:gap-[0.8rem] gap-[0.6rem]`}
      >
        <Avatar
          className={`${
            commentType === "comment"
              ? "2xl:w-[4rem] 2xl:h-[4rem] lg:w-[3.6rem] lg:h-[3.6rem] md:w-[3.2rem] md:h-[3.2rem] w-[4rem] h-[4rem]"
              : "2xl:w-[4.8rem] 2xl:h-[4.8rem] lg:w-[4rem] lg:h-[4rem] md:w-[3.6rem] md:h-[3.6rem] w-[4rem] h-[4rem]"
          }`}
        >
          <AvatarImage src={"https://github.com/shadcn.png"} alt="Profile" />
          <AvatarFallback className="bg-header-profile-bg">
            <User
              className={`fill-[var(--color-profile-default-icon-bg)] ${
                commentType === "comment"
                  ? "lg:w-[2.4rem] lg:h-[2.4rem] md:w-[2.8rem] md:h-[2.8rem] w-[1.6rem] h-[1.6rem]"
                  : "lg:w-[2.4rem] lg:h-[2.4rem] md:w-[2.8rem] md:h-[2.8rem] w-[2.4rem] h-[2.4rem]"
              }`}
              strokeWidth={0}
            />
          </AvatarFallback>
        </Avatar>

        <div className={`flex flex-col w-full gap-[0.6rem]`}>
          <span
            className={`font-medium ${
              commentType === "comment"
                ? "2xl:text-[1.8rem] lg:text-[1.6rem] md:text-[1.4rem] text-[1.6rem]"
                : "2xl:text-[2rem] lg:text-[1.8rem] text-[1.6rem]"
            }`}
          >
            hong.seung.won
          </span>
          <Input
            inputClassName="w-full bg-background 2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.6rem]"
            wrapperClassName="w-full"
            type="textarea"
            textareaRows={1}
            placeholder="Add a comment"
            autoResize={true}
          />
        </div>
      </div>

      <div className="absolute bottom-[1.6rem] right-[1.6rem] flex flex-row items-center justify-center p-[0.8rem] rounded-[0.8rem] dark:bg-side-bar-hover bg-side-bar-hover/30">
        <SendHorizontal className="cursor-pointer" />
      </div>
    </div>
  );
};

export default PostCommentModalContents;
