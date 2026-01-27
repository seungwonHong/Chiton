import React from "react";
import TopicProfileComponent from "./TopicProfileComponent";
import TechStackComponent from "./TechStackComponent";
import { Image } from "lucide-react";
import Link from "next/link";

interface Props {
  ViewType?: "sidePanel" | "mainPage";
  id: string;
}

const TopicComponent = ({ ViewType = "sidePanel", id }: Props) => {
  return (
    <Link
      href={`/topic/${id}`}
      className="flex flex-row items-center justify-between w-full p-[0.8rem] rounded-[1.2rem] cursor-pointer hover:bg-side-panel-hover transition-all duration-300 ease-in-out min-w-0"
    >
      {/* 토픽 프로필 */}
      {ViewType === "mainPage" && (
        <div className="flex items-center justify-center aspect-square 2xl:rounded-[1.4rem] lg:rounded-[1.2rem] rounded-[1rem] 2xl:w-[10rem] lg:w-[8rem] md:w-[7.2rem] w-[8rem] bg-topic-detail-profile-image-bg shrink-0 backdrop-blur-lg cursor-pointer">
          <Image
            className="lg:w-[2.4rem] lg:h-[2.4rem] w-[2.8rem] h-[2.8rem]"
            strokeWidth={1.5}
          />
        </div>
      )}

      <div
        className={`flex flex-col min-w-0 overflow-x-hidden flex-1 ${
          ViewType === "mainPage" &&
          "2xl:ml-[2.4rem] lg:ml-[2rem] md:ml-[1.6rem] ml-[1.2rem]"
        }`}
      >
        <span
          className={`${
            ViewType === "sidePanel"
              ? "text-[1.4rem]"
              : "2xl:text-[2rem] lg:text-[1.8rem] md:text-[1.6rem] text-[1.8rem]"
          } font-medium truncate`}
        >
          GDGoC - Google Developer Groups on Campus
        </span>
        <span
          className={`${
            ViewType === "sidePanel"
              ? "text-[1rem]"
              : "2xl:text-[1.4rem] lg:text-[1.2rem] md:text-[1rem] text-[1.2rem]"
          } font-normal text-[#808080]`}
        >
          by Hong.Seung.Won
        </span>

        <div className="flex flex-row items-center mt-[0.8rem] overflow-x-hidden min-w-0">
          <div className="flex-shrink-0">
            <TopicProfileComponent />
          </div>

          <div className="md:flex hidden flex-row items-center gap-[0.4rem] ml-[1.2rem] min-w-0 overflow-x-auto">
            <TechStackComponent />
            <TechStackComponent />
            <TechStackComponent />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TopicComponent;
