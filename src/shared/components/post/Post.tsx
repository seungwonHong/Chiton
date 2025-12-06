import React from "react";
import { Users } from "lucide-react";
import Image from "next/image";
import PostActionBar from "./PostActionBar";
import EditPost from "./EditPost";
import ProfileImageComponent from "../ProfileImageComponent";

interface Props {
  id: string;
}

const Post = ({ id }: Props) => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row items-start">
        {/* 프로필 사진 */}
        <ProfileImageComponent
          bgSize="2xl:w-[5.6rem] 2xl:h-[5.6rem] lg:w-[4.8rem] lg:h-[4.8rem] md:w-[4rem] md:h-[4rem] w-[4.8rem] h-[4.8rem]"
          defaultProfileSize="2xl:w-[3.6rem] 2xl:h-[3.6rem] lg:w-[3.2rem] lg:h-[3.2rem] md:w-[2.8rem] md:h-[2.8rem] w-[3.6rem] h-[3.6rem]"
        />

        {/* 이름 & 시간 */}
        <div className="flex flex-col 2xl:ml-[1.4rem] lg:ml-[1.2rem] md:ml-[0.8rem] ml-[1.2rem]">
          <div className="flex flex-row items-center 2xl:gap-[2rem] lg:gap-[1.6rem] md:gap-[1.2rem] gap-[0.8rem]">
            <span className="2xl:text-[2rem] lg:text-[1.8rem] md:text-[1.6rem] text-[1.6rem] font-medium">
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
          </div>
          <span className="2xl:text-[1.4rem] lg:text-[1.2rem] md:text-[1rem] text-[1.2rem] font-normal text-[#808080]">
            2 days ago
          </span>
        </div>

        {/* 드롭다운메뉴 호출 아이콘 */}
        <EditPost id={id} />
      </div>

      {/* 게시글 */}
      <span className="2xl:text-[1.8rem] lg:text-[1.6rem] md:text-[1.4rem] text-[1.6rem] font-normal 2xl:mt-[2.6rem] lg:mt-[2rem] md:mt-[1.6rem] mt-[1rem]">
        💡 “Just finished setting up my first Next.js project! 🚀 Any tips for
        folder structure?”
      </span>

      {/* 게시글 이미지 & 동영상 */}
      <div className="flex flex-row w-full overflow-x-auto lg:gap-[1.2rem] md:gap-[0.8rem] gap-[0.4rem] 2xl:mt-[2.6rem] lg:mt-[2rem] md:mt-[1.6rem] mt-[1rem]">
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
      <PostActionBar />
    </div>
  );
};

export default Post;
