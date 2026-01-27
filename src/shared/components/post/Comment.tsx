import React from "react";
import CommentEdit from "./CommentEdit";
import CommentActionBar from "./CommentActionBar";
import CommentReplyTrigger from "./CommentReplyTrigger";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";

interface Props {
  commentId: number;
  thread?: boolean;
  commentReply?: boolean;
  quote?: boolean;
}

const Comment = ({
  commentId,
  thread = false,
  commentReply = false,
  quote = false,
}: Props) => {
  console.log(thread);
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row items-stretch">
        {/* 프로필 사진 */}
        <div className="flex flex-col items-center gap-[0.8rem]">
          <Avatar
            className={`${
              quote
                ? "2xl:w-[3.2rem] 2xl:h-[3.2rem] lg:w-[2.8rem] lg:h-[2.8rem] md:w-[2.4rem] md:h-[2.4rem] w-[3.2rem] h-[3.2rem]"
                : "2xl:w-[4rem] 2xl:h-[4rem] lg:w-[3.6rem] lg:h-[3.6rem] md:w-[3.2rem] md:h-[3.2rem] w-[4rem] h-[4rem]"
            }`}
          >
            <AvatarImage src={"https://github.com/shadcn.png"} alt="Profile" />
            <AvatarFallback className="bg-header-profile-bg">
              <User
                className={`${
                  quote
                    ? "lg:w-[2rem] lg:h-[2rem] md:w-[1.6rem] md:h-[1.6rem] w-[2rem] h-[2rem]"
                    : "lg:w-[2.4rem] lg:h-[2.4rem] md:w-[2.8rem] md:h-[2.8rem] w-[2.4rem] h-[2.4rem]"
                } fill-[var(--color-profile-default-icon-bg)]`}
                strokeWidth={0}
              />
            </AvatarFallback>
          </Avatar>
          {thread && (
            <div className="w-[2px] min-h-[2.4rem] rounded-full bg-thread-background flex-1"></div>
          )}
        </div>

        {/* 이름 & 시간 */}
        <div
          className={`flex flex-col 2xl:ml-[1.4rem] lg:ml-[1.2rem] md:ml-[0.8rem] ml-[1.2rem] w-full ${
            commentReply && "mb-[1.6rem]"
          }`}
        >
          <div className="flex flex-row items-center lg:gap-[1rem] md:gap-[0.8rem] gap-[0.6rem]">
            <span
              className={`${
                quote
                  ? "2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.6rem]"
                  : "2xl:text-[1.8rem] lg:text-[1.6rem] md:text-[1.4rem] text-[1.6rem]"
              } font-medium`}
            >
              hong.seung.won
            </span>
            <span
              className={`${
                quote
                  ? "lg:text-[1rem] md:text-[0.8rem] text-[1rem]"
                  : "lg:text-[1.2rem] md:text-[1rem] text-[1.2rem]"
              } font-normal text-[#808080]`}
            >
              2 days ago
            </span>
          </div>

          {/* 댓글 내용 */}
          <span
            className={`${
              quote
                ? "2xl:text-[1.4rem] lg:text-[1.2rem] md:text-[1rem] text-[1.4rem]"
                : "2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.6rem]"
            } font-normal 2xl:mt-[0.6rem] lg:mt-[0.4rem] mt-[0.2rem]`}
          >
            This is a longer comment designed to test the layout and
            responsiveness of the text display. It contains enough words to
            likely wrap to a second or even third line depending on the viewport
            width, allowing you to verify line heights and spacing.
          </span>

          {/* 댓글 액션 영역 */}
          {commentReply && (
            <>
              <CommentActionBar />
              <CommentReplyTrigger />
            </>
          )}
        </div>

        {/* 댓글 편집 */}
        {commentReply && <CommentEdit commentId={commentId} />}
      </div>
    </div>
  );
};

export default Comment;
