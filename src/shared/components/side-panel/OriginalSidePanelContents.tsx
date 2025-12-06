import React, { Suspense } from "react";
import TabButton from "../TabButton";
import { TrendingUp } from "lucide-react";
import TrendingComponent from "./TrendingComponent";
import TopicComponent from "../topic/TopicComponent";

const OriginalSidePanelContents = () => {
  return (
    <>
      {/* 포스트 & 토픽 전환 토글(탭 버튼) */}
      <Suspense fallback={<div></div>}>
        <TabButton tabs={["Posts", "Topics", "Lectures"]} type="home" />
      </Suspense>
      {/* 트렌딩 */}
      <div className="flex flex-col w-full mt-[4rem]">
        <div className="flex flex-row items-center gap-[1rem]">
          <TrendingUp className="w-[2.4rem] h-[2.4rem]" />
          <h2 className="text-[1.6rem] font-medium">Trending</h2>
        </div>

        <div className="flex flex-col gap-[0.4rem] mt-[1.2rem]">
          {Array.from({ length: 10 }).map((_, index) => (
            <TrendingComponent
              key={index}
              number={index + 1}
              content={`Trending ${index + 1}`}
              trendingNumber={100}
            />
          ))}
        </div>
      </div>
      {/* 내 토픽 */}
      <div className="flex flex-col">
        <h2 className="text-[1.6rem] font-medium mt-[4rem]">My Topics</h2>
        <div className="flex flex-col gap-[0.4rem] mt-[1.2rem]">
          {Array.from({ length: 5 }).map((_, index) => (
            <React.Fragment key={index}>
              <TopicComponent />
              {index < 4 && (
                <div className="my-[0.4rem] bg-divide-color w-full h-[0.5px]" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default OriginalSidePanelContents;
