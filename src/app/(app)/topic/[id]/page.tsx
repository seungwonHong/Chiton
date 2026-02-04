import React from "react";
import Post from "@/shared/components/post/Post";
import SidePanel from "@/shared/components/side-panel/SidePanel";
import PostFilter from "@/shared/components/post/PostFilter";
import { ImagePlus, Pin } from "lucide-react";
import MobilePostButton from "@/features/main/components/MobilePostButton";
import ProfileImageComponent from "@/shared/components/ProfileImageComponent";
import MoreInfoMobile from "@/features/topic/components/MoreInfoMobile";
import MobileJoinComponent from "@/features/topic/components/MobileJoinComponent";
import VisibilityAndInvite from "@/features/topic/components/VisibilityAndInvite";

const TopicDetail = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return (
    <div className="relative flex flex-col items-center justify-center 2xl:mt-[6.4rem] md:mt-[5.6rem] mt-[8rem] 2xl:px-[8rem] lg:px-[6rem] md:px-[3.2rem] px-[1.6rem]">
      <div className="flex flex-col items-start justify-center w-full 2xl:max-w-[150rem] lg:max-w-[130rem] md:max-w-[100rem]">
        {/* 배너 */}
        <div className="flex flex-row 2xl:gap-[1.2rem] lg:gap-[0.8rem] md:gap-[0.6rem] gap-[0.4rem] items-center justify-center w-full bg-side-panel-background lg:rounded-[1.6rem] rounded-[1.4rem] 2xl:h-[3rem] lg:h-[24rem] md:h-[20rem] h-[16rem] cursor-pointer">
          <ImagePlus className="w-[2.4rem] h-[2.4rem]" strokeWidth={1.5} />
          <span className="2xl:text-[1.6rem] lg:text-[1.4rem] font-normal">
            Upload Banner
          </span>
        </div>

        <div className="flex flex-row 2xl:gap-[2rem] lg:gap-[1.8rem] md:gap-[1.4rem] gap-[1.2rem] items-start w-full">
          {/* 토픽 대표 사진 */}
          <div className="flex items-center justify-center aspect-square 2xl:rounded-[1.4rem] lg:rounded-[1.2rem] rounded-[1rem] 2xl:w-[24rem] lg:w-[20rem] md:w-[16rem] w-[12rem] bg-topic-detail-profile-image-bg lg:mt-[-6rem] md:mt-[-5.6rem] mt-[-4rem] shrink-0 backdrop-blur-lg cursor-pointer">
            <ImagePlus
              className="lg:w-[3.6rem] lg:h-[3.6rem] w-[3rem] h-[3rem]"
              strokeWidth={1.5}
            />
          </div>
          <h1 className="2xl:text-[3.6rem] lg:text-[3.2rem] md:text-[2.8rem] text-[2.4rem] font-medium lg:line-clamp-3 line-clamp-2">
            GDGoC TUK - Google Developer Groups on Campus Tech University of
            Korea
          </h1>
        </div>

        <MobileJoinComponent />

        {/* 공개 여부 */}
        <VisibilityAndInvite />

        <MoreInfoMobile />

        {/* 포스트 & 사이드 패널 */}
        <div className="relative flex flex-row justify-center w-full 2xl:gap-[7.2rem] lg:gap-[5.6rem] md:gap-[4.8rem] 2xl:mt-[6.4rem] lg:mt-[4.8rem] md:mt-[3.2rem] mt-[1.6rem] z-[110]">
          {/* 포스트 */}
          <div className="relative flex flex-col w-full 2xl:max-w-[80rem] lg:max-w-[64rem] md:max-w-[56rem] xl:min-w-[40rem]">
            {/* 핀된 포스트 */}
            <div className="flex flex-col lg:gap-[1.2rem] md:gap-[1rem] gap-[0.8rem] 2xl:mb-[6rem] lg:mb-[4.8rem] md:mb-[3.6rem] mb-[2.4rem] w-full">
              <div className="flex flex-row items-center">
                <Pin className="w-[2.4rem] h-[2.4rem]" strokeWidth={1.5} />
                <span className="lg:text-[1.6rem] text-[1.4rem] font-normal">
                  Pinned Posts
                </span>
              </div>

              <div className="flex flex-row p-[0.6rem] items-center lg:gap-[1.2rem] md:gap-[1rem] gap-[0.8rem] w-full overflow-x-auto">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div
                    className="relative border border-topic-detail-pinned-post-border aspect-square 2xl:w-[24rem] lg:w-[20rem] md:w-[18rem] w-[20rem] rounded-[1.4rem] cursor-pointer shrink-0 hover:scale-105 transition-all duration-300 ease-in-out"
                    key={index}
                  >
                    <div className="absolute left-[0.6rem] right-[0.6rem] bottom-[0.6rem] flex flex-row items-center lg:gap-[0.8rem] md:gap-[0.6rem] gap-[0.6rem] mt-auto">
                      <ProfileImageComponent
                        bgSize="shrink-0 2xl:w-[3.2rem] 2xl:h-[3.2rem] lg:w-[2.8rem] lg:h-[2.8rem] md:w-[2.4rem] md:h-[2.4rem] w-[3.2rem] h-[3.2rem]"
                        defaultProfileSize="shrink-0 2xl:w-[2.8rem] 2xl:h-[2.8rem] lg:w-[2.4rem] lg:h-[2.4rem] md:w-[2rem] md:h-[2rem] w-[2.8rem] h-[2.8rem]"
                      />
                      <span className="lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] font-normal line-clamp-1">
                        hong.seung.won
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 포스트 필터 */}
            {/* <PostFilter /> */}

            {/* 포스트 */}
            {Array.from({ length: 5 }).map((_, index) => (
              <React.Fragment key={index}>
                <Post id={index.toString()} link={true} />
                {index < 4 && (
                  <div className="2xl:my-[2.4rem] lg:my-[2rem] md:my-[1.6rem] my-[1.2rem] bg-divide-color w-full h-[0.5px]" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* 사이드 패널 */}
          <SidePanel usage="topic" />
        </div>
      </div>

      {/* 모바일 포스트 작성 버튼 */}
      <MobilePostButton />
    </div>
  );
};

export default TopicDetail;
