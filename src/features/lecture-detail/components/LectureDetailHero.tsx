import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowBigUp, User } from "lucide-react";
import HeroControl from "./HeroControl";
import HeroActionBar from "./HeroActionBar";

type Props = {};

const LectureDetailHero = (props: Props) => {
  return (
    <div className="w-full flex flex-col overflow-x-hidden">
      <img
        className="w-full aspect-[16/9] rounded-[0.8rem]"
        src="/images/thumbnail_mockup.jpg"
        alt="thumbnail"
      />
      <div className="flex flex-row items-start lg:mt-[1.6rem] md:mt-[1.2rem] mt-[0.8rem]">
        <h1 className="2xl:text-[2.4rem] lg:text-[2rem] md:text-[1.8rem] text-[2rem] font-medium line-clamp-2">
          This is the first lecture on TimeLine-io
        </h1>
        <div className="flex flex-row items-center ml-auto">
          <HeroActionBar />
        </div>
      </div>
      <div className="flex flex-row items-center mt-[0.8rem]">
        <Avatar className="2xl:w-[4.8rem] 2xl:h-[4.8rem] lg:w-[4rem] lg:h-[4rem] md:w-[3.6rem] md:h-[3.6rem] w-[4rem] h-[4rem] shrink-0">
          <AvatarImage src={"https://github.com/shadcn.png"} alt="Profile" />
          <AvatarFallback className="bg-header-profile-bg">
            <User
              className="lg:w-[2.4rem] lg:h-[2.4rem] md:w-[2.8rem] md:h-[2.8rem] w-[2.4rem] h-[2.4rem] fill-[var(--color-profile-default-icon-bg)]"
              strokeWidth={0}
            />
          </AvatarFallback>
        </Avatar>
        {/* 이름 & 팔로워 & 구독자 */}
        <div className="flex flex-col ml-[0.8rem]">
          <span className="lg:text-[1.6rem] md:text-[1.4rem] text-[1.6rem] font-medium">
            hong.seung.won
          </span>
          <div className="flex flex-row items-center gap-[0.8rem] lg:text-[1.2rem] md:text-[1rem] text-[1.2rem] font-normal text-[#808080]">
            <span>120 followers</span>
            <span>120 subscribers</span>
          </div>
        </div>
        {/* 구독 & 편집 버튼 */}
        <HeroControl />
      </div>
      {/* 영상 설명 & 태그 & 날짜 */}
      <div className="flex flex-col w-full bg-side-bar-hover rounded-[0.8rem] p-[0.8rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] font-normal lg:mt-[1.2rem] md:mt-[1rem] mt-[0.8rem] lg:gap-[0.8rem] md:gap-[0.6rem] gap-[0.4rem]">
        <div className="flex flex-row items-center md:gap-[1.2rem] gap-[0.8rem]">
          <span>4 hours ago</span>
          <div className="flex flex-row items-center">
            <ArrowBigUp
              className="w-[1.6rem] h-[1.6rem] text-[#808080]"
              strokeWidth={1.5}
            />
            <span className="text-[1.4rem] font-normal text-[#808080]">
              100
            </span>
          </div>
        </div>
        <p>This video is about the first lecture on TimeLine-io</p>
        <div className="flex flex-row flex-wrap gap-x-[0.6rem] text-[#808080]">
          <span className="hover:text-primary-color transition-all duration-300 ease-in-out cursor-pointer">
            #React
          </span>
          <span>#Next.js</span>
          <span className="hover:text-primary-color transition-all duration-300 ease-in-out cursor-pointer">
            #Tailwind CSS
          </span>
          <span className="hover:text-primary-color transition-all duration-300 ease-in-out cursor-pointer">
            #TypeScript
          </span>
          <span className="hover:text-primary-color transition-all duration-300 ease-in-out cursor-pointer">
            #JavaScript
          </span>
          <span className="hover:text-primary-color transition-all duration-300 ease-in-out cursor-pointer">
            #HTML
          </span>
          <span className="hover:text-primary-color transition-all duration-300 ease-in-out cursor-pointer">
            #CSS
          </span>
          <span className="hover:text-primary-color transition-all duration-300 ease-in-out cursor-pointer">
            #React
          </span>
          <span className="hover:text-primary-color transition-all duration-300 ease-in-out cursor-pointer">
            #Next.js
          </span>
        </div>
      </div>
    </div>
  );
};

export default LectureDetailHero;
