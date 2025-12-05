import React, { Suspense } from "react";
import { House } from "lucide-react";
import { Bell } from "lucide-react";
import { Code } from "lucide-react";
import { Play } from "lucide-react";
import { AudioLines } from "lucide-react";
import { Paintbrush } from "lucide-react";
import Post from "@/shared/components/post/Post";
import SidePanel from "@/shared/components/side-panel/SidePanel";
import PostFilter from "@/shared/components/post/PostFilter";
import TabButton from "@/shared/components/TabButton";
import MobilePostButton from "@/features/main/components/MobilePostButton";
import TopicComponent from "@/shared/components/topic/TopicComponent";
import LectureComponent from "@/shared/components/lecture/LectureComponent";

const Main = async ({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{
    type?: "posts" | "topics" | "lectures";
  }>;
}) => {
  console.log("Before await params");
  const { id } = await params;
  console.log("After await params, id:", id);
  const { type } = await searchParams;
  console.log("After await searchParams, type:", type);
  const capitalizedId = id.charAt(0).toUpperCase() + id.slice(1).toLowerCase();

  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    home: House,
    notification: Bell,
    coding: Code,
    video: Play,
    audio: AudioLines,
    design: Paintbrush,
  };

  const IconComponent = iconMap[id.toLowerCase()] || House;
  const iconClassName =
    "2xl:w-[3.6rem] 2xl:h-[3.6rem] lg:w-[3.2rem] lg:h-[3.2rem] md:w-[2.8rem] md:h-[2.8rem] w-[3.2rem] h-[3.2rem]";

  return (
    <div className="relative flex flex-col items-center justify-center 2xl:mt-[6.4rem] md:mt-[5.6rem] mt-[8rem] 2xl:px-[8rem] lg:px-[6rem] md:px-[3.2rem] px-[1.6rem]">
      <div className="flex flex-col items-start justify-center w-full 2xl:max-w-[150rem] lg:max-w-[130rem] md:max-w-[100rem]">
        {/* 제목 */}
        <div className=" flex flex-row w-full items-center 2xl:gap-[1.6rem] lg:gap-[1.2rem] md:gap-[0.8rem] gap-[0.4rem]">
          <IconComponent className={iconClassName} />
          <h1 className="2xl:text-[3.6rem] lg:text-[3.2rem] md:text-[2.8rem] text-[3.2rem] font-medium">
            {capitalizedId}
          </h1>
        </div>

        {/* 포스트 & 사이드 패널 */}
        <div className="relative flex flex-row justify-center w-full 2xl:gap-[7.2rem] lg:gap-[5.6rem] md:gap-[4.8rem] 2xl:mt-[6.4rem] lg:mt-[4.8rem] md:mt-[3.2rem] mt-[1.6rem] z-[110]">
          {/* 포스트 */}
          <div className="flex flex-col w-full 2xl:max-w-[80rem] lg:max-w-[64rem] md:max-w-[56rem] xl:min-w-[40rem]">
            {/* lg 이하를 위한 탭 버튼 */}
            <div className="w-full xl:hidden mb-[2rem]">
              <Suspense fallback={<div></div>}>
                <TabButton tabs={["Posts", "Topics", "Lectures"]} type="home" />
              </Suspense>
            </div>

            {/* 포스트 필터 */}
            <PostFilter />

            {type === "posts" ? (
              <>
                {Array.from({ length: 5 }).map((_, index) => (
                  <React.Fragment key={index}>
                    <Post id={index.toString()} />
                    {index < 4 && (
                      <div className="2xl:my-[2.4rem] lg:my-[2rem] md:my-[1.6rem] my-[1.2rem] bg-divide-color w-full h-[0.5px]" />
                    )}
                  </React.Fragment>
                ))}
              </>
            ) : type === "topics" ? (
              <>
                {Array.from({ length: 5 }).map((_, index) => (
                  <React.Fragment key={index}>
                    <TopicComponent ViewType="mainPage" />
                    {index < 4 && (
                      <div className="2xl:my-[1.4rem] lg:my-[1rem] md:my-[0.8rem] my-[0.6rem] bg-divide-color w-full h-[0.5px]" />
                    )}
                  </React.Fragment>
                ))}
              </>
            ) : (
              <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[0.2rem] gap-[3.2rem]">
                {Array.from({ length: 10 }).map((_, index) => (
                  <LectureComponent key={index} id={index.toString()} />
                ))}
              </div>
            )}
          </div>

          {/* 사이드 패널 */}
          <SidePanel usage="home" />
        </div>
      </div>

      {/* 모바일 포스트 작성 버튼 */}
      <MobilePostButton />
    </div>
  );
};

export default Main;
