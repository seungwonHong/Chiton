import React from "react";
import Post from "@/shared/components/post/Post";
import SidePanel from "@/shared/components/side-panel/SidePanel";
import MobilePostButton from "@/features/main/components/MobilePostButton";
import Input from "@/shared/components/Input";
import { SendHorizontal } from "lucide-react";
import Comment from "@/shared/components/post/Comment";

const PostDetail = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return (
    <div className="relative flex flex-col items-center justify-center 2xl:mt-[6.4rem] md:mt-[5.6rem] mt-[4rem] 2xl:px-[8rem] lg:px-[6rem] md:px-[3.2rem] px-[1.6rem]">
      <div className="flex flex-col items-start justify-center w-full 2xl:max-w-[150rem] lg:max-w-[130rem] md:max-w-[100rem]">
        {/* 포스트 & 사이드 패널 */}
        <div className="relative flex flex-row justify-center w-full 2xl:gap-[7.2rem] lg:gap-[5.6rem] md:gap-[4.8rem] 2xl:mt-[6.4rem] lg:mt-[4.8rem] md:mt-[3.2rem] mt-[3.2rem] z-[110]">
          <div className="flex flex-col w-full 2xl:max-w-[80rem] lg:max-w-[64rem] md:max-w-[56rem] xl:min-w-[40rem]">
            {/* 포스트 */}
            <Post id={id} postDetail={true} />

            {/* 댓글 입력 */}
            <div className="relative">
              <Input
                type="textarea"
                placeholder="Add a comment"
                wrapperClassName="w-full xl:mt-[3.6rem] lg:mt-[2.4rem] md:mt-[2rem] mt-[1.6rem]"
                inputClassName="w-full lg:rounded-[1.2rem] md:rounded-[0.8rem] rounded-[1.2rem] lg:py-[0.8rem] lg:pl-[1.2rem] lg:pr-[4.8rem] py-[0.6rem] pl-[0.8rem] pr-[4.2rem] 2xl:text-[1.8rem] lg:text-[1.6rem] md:text-[1.4rem] text-[1.6rem] font-normal"
                textareaRows={3}
                autoResize={true}
              />
              <SendHorizontal className="absolute bottom-[1.6rem] right-[1.6rem] cursor-pointer" />
            </div>

            {/* 댓글 목록 */}
            <div className="flex flex-col w-full lg:mt-[2.4rem] md:mt-[2rem] mt-[1.6rem] lg:gap-[2.4rem] md:gap-[2rem] gap-[1.6rem]">
              {Array.from({ length: 10 }).map((_, index) => (
                <Comment key={index} commentId={index} />
              ))}
            </div>
          </div>

          {/* 사이드 패널 */}
          <SidePanel usage="post" />
        </div>
      </div>

      {/* 모바일 포스트 작성 버튼 */}
      <MobilePostButton />
    </div>
  );
};

export default PostDetail;
