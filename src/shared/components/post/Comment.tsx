import React from "react";
import CommentEdit from "./CommentEdit";
import CommentActionBar from "./CommentActionBar";
import ProfileImageComponent from "../ProfileImageComponent";
import CommentReplyTrigger from "./CommentReplyTrigger";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";

interface Props {
  commentId: number;
}

const Comment = ({ commentId }: Props) => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row items-start">
        {/* 프로필 사진 */}
        <Avatar className="2xl:w-[4rem] 2xl:h-[4rem] lg:w-[3.6rem] lg:h-[3.6rem] md:w-[3.2rem] md:h-[3.2rem] w-[4rem] h-[4rem]">
          <AvatarImage src={"https://github.com/shadcn.png"} alt="Profile" />
          <AvatarFallback className="bg-header-profile-bg">
            <User
              className="lg:w-[2.4rem] lg:h-[2.4rem] md:w-[2.8rem] md:h-[2.8rem] w-[1.6rem] h-[1.6rem] fill-[var(--color-profile-default-icon-bg)]"
              strokeWidth={0}
            />
          </AvatarFallback>
        </Avatar>

        {/* 이름 & 시간 */}
        <div className="flex flex-col 2xl:ml-[1.4rem] lg:ml-[1.2rem] md:ml-[0.8rem] ml-[1.2rem] w-full">
          <div className="flex flex-row items-center lg:gap-[1rem] md:gap-[0.8rem] gap-[0.6rem]">
            <span className="2xl:text-[1.8rem] lg:text-[1.6rem] md:text-[1.4rem] text-[1.6rem] font-medium">
              hong.seung.won
            </span>
            <span className="lg:text-[1.2rem] md:text-[1rem] text-[1.2rem] font-normal text-[#808080]">
              2 days ago
            </span>
          </div>

          {/* 댓글 내용 */}
          <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.6rem] font-normal 2xl:mt-[0.6rem] lg:mt-[0.4rem] mt-[0.2rem]">
            This is a comment
          </span>

          {/* 댓글 액션 영역 */}
          <CommentActionBar />

          <CommentReplyTrigger />
        </div>

        {/* 댓글 편집 */}
        <CommentEdit commentId={commentId} />
      </div>
    </div>
  );
};

export default Comment;
