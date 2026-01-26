import React from "react";
import { User, Users } from "lucide-react";
import Image from "next/image";
import PostActionBar from "./PostActionBar";
import EditPost from "./EditPost";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import PostWrapper from "./PostWrapper";

interface Props {
  id: string;
  link?: boolean;
  thread?: boolean;
  reply?: boolean;
}

const Post = ({
  id,
  link = false,
  thread = false,
  reply = false,
}: Props) => {
  return (
    <PostWrapper link={link} id={id} reply={reply}>
      <div className="flex flex-col gap-[0.8rem] items-center">
        {/* 프로필 사진 */}
        <Avatar className="2xl:w-[4.8rem] 2xl:h-[4.8rem] lg:w-[4rem] lg:h-[4rem] md:w-[3.6rem] md:h-[3.6rem] w-[4rem] h-[4rem]">
          <AvatarImage src={"https://github.com/shadcn.png"} alt="Profile" />
          <AvatarFallback className="bg-header-profile-bg">
            <User
              className="lg:w-[2.4rem] lg:h-[2.4rem] md:w-[2.8rem] md:h-[2.8rem] w-[2.4rem] h-[2.4rem] fill-[var(--color-profile-default-icon-bg)]"
              strokeWidth={0}
            />
          </AvatarFallback>
        </Avatar>

        {thread && (
          <div className="w-[2px] min-h-[2.4rem] rounded-full bg-thread-background flex-1"></div>
        )}
      </div>

      {/* 이름 & 시간 */}
      <div className={`flex flex-col flex-1 min-w-0 ${reply && "mb-[1.6rem]"}`}>
        <div className="flex flex-col w-full">
          <div className="flex flex-row items-center 2xl:gap-[2rem] lg:gap-[1.6rem] md:gap-[1.2rem] gap-[0.8rem]">
            <span className="2xl:text-[2rem] lg:text-[1.8rem] text-[1.6rem] font-medium">
              hong.seung.won
            </span>
            {/* 토픽에서 작성했을 때 토픽 이름 표시 */}
            <div className="flex flex-row items-center gap-[0.4rem]">
              <Users
                className="2xl:w-[1.6rem] 2xl:h-[1.6rem] lg:w-[1.4rem] lg:h-[1.4rem] md:w-[1.2rem] md:h-[1.2rem] w-[1.6rem] h-[1.6rem] text-[#808080]"
                strokeWidth={1.5}
              />
              <span className="2xl:text-[1.4rem] lg:text-[1.2rem] md:text-[1rem] text-[1.2rem] font-medium text-[#808080]">
                GDGoC
              </span>
            </div>
            {/* 드롭다운메뉴 호출 아이콘 */}
            {!reply && <EditPost id={id} />}
          </div>
          <span className="2xl:text-[1.4rem] lg:text-[1.2rem] md:text-[1rem] text-[1.2rem] font-normal text-[#808080]">
            2 days ago
          </span>
        </div>

        {/* 게시글 */}
        <span className="2xl:text-[1.8rem] lg:text-[1.6rem] md:text-[1.4rem] text-[1.6rem] font-normal 2xl:mt-[1.2rem] lg:mt-[1rem] md:mt-[0.8rem] mt-[1rem]">
          💡 “Just finished setting up my first Next.js project! 🚀 Any tips for
          folder structure?”
        </span>

        {/* 게시글 이미지 & 동영상 */}
        <div
          className="flex flex-row overflow-x-auto md:gap-[0.6rem] gap-[0.4rem] 2xl:mt-[2.6rem] lg:mt-[2rem] md:mt-[1.6rem] mt-[1rem] snap-x snap-mandatory 

            /* 왼쪽 프로필 영역(Avatar + Gap)만큼 컨테이너를 왼쪽으로 당기고(Negative Margin), 
               내부 패딩(Padding)으로 콘텐츠 시작점은 텍스트 라인에 맞춤 */
            w-[calc(100%+4.8rem)] -ml-[4.8rem] pl-[4.8rem] scroll-pl-[4.8rem]
            md:w-[calc(100%+4.4rem)] md:-ml-[4.4rem] md:pl-[4.4rem] md:scroll-pl-[4.4rem]
            lg:w-[calc(100%+5.2rem)] lg:-ml-[5.2rem] lg:pl-[5.2rem] lg:scroll-pl-[5.2rem]
            2xl:w-[calc(100%+6.2rem)] 2xl:-ml-[6.2rem] 2xl:pl-[6.2rem] 2xl:scroll-pl-[6.2rem]"
        >
          <Image
            src="/images/postMockup1.png"
            alt="post Image"
            width={130}
            height={230}
            className="object-cover shrink-0 2xl:w-[20rem] 2xl:h-[32rem] lg:w-[18rem] lg:h-[32rem] md:w-[13rem] md:h-[23rem] w-[10rem] h-[18rem] overflow-hidden 2xl:rounded-[1.6rem] lg:rounded-[1.4rem] md:rounded-[1.2rem] rounded-[1rem]"
          />
          <Image
            src="/images/postMockup2.png"
            alt="post Image"
            width={130}
            height={230}
            className="object-cover shrink-0 2xl:w-[56rem] 2xl:h-[32rem] lg:w-[48rem] lg:h-[32rem] md:w-[41.7rem] md:h-[23rem] w-[33.6rem] h-[18rem] overflow-hidden 2xl:rounded-[1.6rem] lg:rounded-[1.4rem] md:rounded-[1.2rem] rounded-[1rem]"
          />
          <Image
            src="/images/postMockup2.png"
            alt="post Image"
            width={130}
            height={230}
            className="object-cover shrink-0 2xl:w-[56rem] 2xl:h-[32rem] lg:w-[48rem] lg:h-[32rem] md:w-[41.7rem] md:h-[23rem] w-[33.6rem] h-[18rem] overflow-hidden 2xl:rounded-[1.6rem] lg:rounded-[1.4rem] md:rounded-[1.2rem] rounded-[1rem]"
          />
        </div>

        {/* 좋아요 & 댓글 & 인용 & 공유 */}
        {!reply && <PostActionBar />}
      </div>
    </PostWrapper>
  );
};

export default Post;
