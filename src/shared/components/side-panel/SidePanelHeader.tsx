"use client";
import { CalendarPlus, Plus, Share, Bookmark } from "lucide-react";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import useDropDownStore from "@/shared/store/dropDownStore";
import DropDownMenu from "../DropDownMenu";
import Button from "../Button";

interface SidePanelHeaderProps {
  usage?: string;
}

const SidePanelHeader = ({ usage }: SidePanelHeaderProps) => {
  const { sidePanelHeaderDropDownOpen, setSidePanelHeaderDropDownOpen } =
    useDropDownStore();
  const [bookmarked, setBookmarked] = useState(false);

  const copyURL = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("URL copied to clipboard");
    } catch (error) {
      console.error("URL 복사 실패:", error);
      toast.error("Failed to copy URL");
    }
  };

  return (
    <div className="relative flex flex-row items-center">
      <div
        className="lg:rounded-[0.8rem] rounded-[0.6rem] p-[0.4rem] cursor-pointer hover:bg-side-panel-hover"
        onClick={(e) => {
          e.stopPropagation();
          setSidePanelHeaderDropDownOpen(!sidePanelHeaderDropDownOpen);
        }}
      >
        <Plus className="w-[2rem] h-[2rem]" />
      </div>

      <div className="flex flex-row items-center ml-auto lg:gap-[1.8rem] gap-[1.2rem]">
        <div className="flex flex-row items-center lg:gap-[0.8rem] gap-[0.6rem]">
          <CalendarPlus className="w-[2rem] h-[2rem]" strokeWidth={1.5} />
          <span className="lg:text-[1.2rem] font-normal">
            Created Aug 14, 2025
          </span>
        </div>
        {usage === "topic" ? (
          <div className="flex flex-row items-center gap-[0.8rem]">
            <Button className="2xl:text-[1.6rem] xl:text-[1.4rem] font-normal lg:!rounded-[0.8rem] hover:bg-button-hover transition-all duration-300 ease-in-out">
              Join
            </Button>
            <Bookmark
              className={`w-[2.4rem] h-[2.4rem] cursor-pointer ${
                bookmarked ? "fill-foreground" : ""
              }`}
              strokeWidth={1.5}
              onClick={() => setBookmarked(!bookmarked)}
            />
          </div>
        ) : (
          <button
            className="flex flex-row items-center gap-[0.6rem] rounded-[0.6rem] py-[0.8rem] px-[1.4rem] cursor-pointer bg-side-panel-share-button hover:bg-side-panel-share-button-hover transition-all duration-300 ease-in-out"
            onClick={copyURL}
          >
            <Share className="w-[2rem] h-[2rem]" strokeWidth={1.5} />
            <span className="lg:text-[1.2rem] font-normal">Share</span>
          </button>
        )}
      </div>

      {/* 드롭다운 메뉴 */}
      {sidePanelHeaderDropDownOpen && (
        <DropDownMenu className="lg:top-[3.2rem] top-[3rem] left-[0]">
          <div
            className={`flex flex-row items-center justify-center lg:px-[3.2rem] md:px-[2.8rem] px-[3.2rem] lg:py-[0.8rem] md:py-[0.6rem] py-[0.8rem] lg:rounded-[1rem] rounded-[0.8rem] w-full hover:bg-drop-down-menu-hover cursor-pointer transition-all duration-300 ease-in-out`}
          >
            <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.6rem] font-normal">
              Create Post
            </span>
          </div>
          {usage !== "topic" && (
            <div
              className={`flex flex-row items-center justify-center lg:px-[3.2rem] md:px-[2.8rem] px-[3.2rem] lg:py-[0.8rem] md:py-[0.6rem] py-[0.8rem] lg:rounded-[1rem] rounded-[0.8rem] w-full hover:bg-drop-down-menu-hover cursor-pointer transition-all duration-300 ease-in-out`}
            >
              <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.6rem] font-normal">
                Create Topic
              </span>
            </div>
          )}
          <div
            className={`flex flex-row items-center justify-center lg:px-[3.2rem] md:px-[2.8rem] px-[3.2rem] lg:py-[0.8rem] md:py-[0.6rem] py-[0.8rem] lg:rounded-[1rem] rounded-[0.8rem] w-full hover:bg-drop-down-menu-hover cursor-pointer transition-all duration-300 ease-in-out`}
          >
            <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.6rem] font-normal">
              Create Lecture
            </span>
          </div>
        </DropDownMenu>
      )}
    </div>
  );
};

export default SidePanelHeader;
