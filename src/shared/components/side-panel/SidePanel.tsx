import React from "react";
import Input from "../Input";
import SidePanelHeader from "./SidePanelHeader";
import Link from "next/link";
import OriginalSidePanelContents from "./OriginalSidePanelContents";
import ProfileSidePanelContents from "@/features/profile/components/ProfileSidePanelContents";
import TopicSidePanelContents from "@/features/topic/components/TopicSidePanelContents";
import PostDetailSidePanelContents from "@/features/post-detail/components/PostDetailSidePanelContents";
import LectureDetailSidePanel from "@/features/lecture-detail/components/LectureDetailSidePanel";

interface Props {
  usage: "home" | "profile" | "topic" | "post" | "lecture";
}

const SidePanel = ({ usage }: Props) => {
  return (
    <div
      className={`sticky xl:flex flex-col hidden 2xl:max-w-[48rem] lg:max-w-[40rem] w-full overflow-y-auto ${
        usage === "profile"
          ? "top-[6.4rem] h-[calc(100vh-6.4rem)]"
          : "top-[5.6rem] h-[calc(100vh-5.6rem)]"
      }`}
    >
      {/* 검색 */}
      <Input
        type="search"
        placeholder="Search"
        searchIconClassName="w-[2.4rem] h-[2.4rem] text-[var(--color-search-icon)] absolute top-1/2 -translate-y-1/2 left-[1.6rem]"
        inputClassName="w-full rounded-full h-[4.8rem] lg:text-[1.6rem] font-normal pl-[5rem] pr-[1.8rem]"
        wrapperClassName="w-full mb-[2rem]"
      />

      {/* 사이드 패널 */}
      {usage !== "lecture" && (
        <div className="flex flex-col w-full bg-side-panel-background 2xl:rounded-[1.6rem] lg:rounded-[1.4rem] 2xl:p-[2.4rem] lg:p-[1.6rem] shadow-sm">
          {/* 포스트 생성 버튼 & 간단한 정보 */}
          <SidePanelHeader usage={usage} />

          {usage === "post" && <PostDetailSidePanelContents />}
          {usage === "home" && <OriginalSidePanelContents />}
          {usage === "profile" && <ProfileSidePanelContents />}
          {usage === "topic" && <TopicSidePanelContents />}
        </div>
      )}
      {/* 사이드 패널 - lecture */}
      {usage === "lecture" && <LectureDetailSidePanel />}

      {/* Footer */}
      <div className="flex flex-col mt-[2rem] mb-[2rem] text-[1.4rem] text-[#808080]  font-normal gap-[0.4rem]">
        {/* 첫번째 줄 */}
        <div className="flex flex-row items-center gap-[1.6rem]">
          <Link
            href="/privacy"
            className="hover:text-foreground transition-colors duration-300 ease-in-out"
          >
            <span>Privacy</span>
          </Link>
          <Link
            href="/termsofuse"
            className="hover:text-foreground transition-colors duration-300 ease-in-out"
          >
            <span>Terms of Use</span>
          </Link>
          <Link
            href="/rules"
            className="hover:text-foreground transition-colors duration-300 ease-in-out"
          >
            <span>Rules</span>
          </Link>
          <Link
            href="/updates"
            className="hover:text-foreground transition-colors duration-300 ease-in-out"
          >
            <span>Updates</span>
          </Link>
        </div>
        {/* 두번째 줄 */}
        <div className="flex flex-row items-center gap-[1.6rem]">
          <Link
            href="/help"
            className="hover:text-foreground transition-colors duration-300 ease-in-out"
          >
            <span>Help</span>
          </Link>
          <a
            href="https://x.com/TimeLine_io"
            className="hover:text-foreground transition-colors duration-300 ease-in-out"
          >
            <span>X</span>
          </a>
          <a
            href="https://www.instagram.com/timeline_io.official"
            className="hover:text-foreground transition-colors duration-300 ease-in-out"
          >
            <span>Instagram</span>
          </a>
        </div>
        {/* 세번째 줄 */}
        <div className="flex flex-row items-center text-[1.2rem]">
          <span>© 2025 Chiton. All rights reserved.</span>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
