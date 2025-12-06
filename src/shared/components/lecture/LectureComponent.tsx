import Image from "next/image";
import React from "react";
import ProfileImageComponent from "../ProfileImageComponent";
import { ArrowBigUp, CalendarFold } from "lucide-react";
import LectureDropDownControl from "./LectureDropDownControl";

interface Props {
  id: string | null;
}

const LectureComponent = (props: Props) => {
  return (
    <div className="flex flex-col w-full hover:bg-side-bar-hover cursor-pointer transition-all duration-500 ease-in-out rounded-[1.6rem] md:p-[0.8rem]">
      {/* 썸네일 */}
      <Image
        src="/images/thumbnail_mockup.jpg"
        alt="thumbnail"
        width={100}
        height={100}
        className="w-full aspect-[16/9] object-cover rounded-[0.8rem]"
      />
      <div className="flex flex-row items-start 2xl:mt-[2rem] lg:mt-[1.6rem] md:mt-[1.2rem] mt-[0.8rem]">
        {/* 프로필 이미지 */}
        <ProfileImageComponent
          bgSize="2xl:w-[4.8rem] 2xl:h-[4.8rem] lg:w-[4rem] lg:h-[4rem] md:w-[3.6rem] md:h-[3.6rem] w-[4rem] h-[4rem] shrink-0"
          defaultProfileSize="2xl:w-[3.2rem] 2xl:h-[3.2rem] lg:w-[2.8rem] lg:h-[2.8rem] md:w-[2.4rem] md:h-[2.4rem] w-[3rem] h-[3rem]"
        />
        <div className="flex flex-col 2xl:ml-[1.4rem] lg:ml-[1.2rem] md:ml-[0.8rem] ml-[1.2rem]">
          {/* 제목 */}
          <span className="2xl:text-[1.8rem] lg:text-[1.6rem] md:text-[1.4rem] text-[1.6rem] font-medium line-clamp-2">
            How to use Next.js and Tailwind CSS
          </span>
          {/* 크레이터 정도 */}
          <div className="flex md:flex-col flex-row md:items-start items-center md:gap-[0.4rem] gap-[1rem] text-[#a3a2a2]">
            <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] font-normal ">
              hong.seung.won
            </span>
            {/* 조회수 */}
            <div className="flex flex-row items-center 2xl:gap-[1.6rem] lg:gap-[1.2rem] md:gap-[0.8rem] gap-[1rem]">
              <div className="flex flex-row items-center gap-[0.2rem]">
                <ArrowBigUp
                  className="2xl:w-[1.6rem] 2xl:h-[1.6rem] lg:w-[1.4rem] lg:h-[1.4rem] md:w-[1.2rem] md:h-[1.2rem] w-[1.6rem] h-[1.6rem]"
                  strokeWidth={1.5}
                />
                <span className="2xl:text-[1.4rem] lg:text-[1.2rem] md:text-[1rem] text-[1.2rem] font-normal ">
                  100
                </span>
              </div>
              {/* 오래된 시간 */}
              <div className="flex flex-row items-center gap-[0.2rem]">
                <CalendarFold
                  className="2xl:w-[1.6rem] 2xl:h-[1.6rem] lg:w-[1.4rem] lg:h-[1.4rem] md:w-[1.2rem] md:h-[1.2rem] w-[1.6rem] h-[1.6rem] text-[#939292]"
                  strokeWidth={1.5}
                />
                <span className="2xl:text-[1.4rem] lg:text-[1.2rem] md:text-[1rem] text-[1.2rem] font-normal text-[#939292]">
                  2 dy
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* 드롭다운메뉴 호출 아이콘 */}
        <LectureDropDownControl id={props.id} />
      </div>
    </div>
  );
};

export default LectureComponent;
