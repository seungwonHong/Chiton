"use client";
import { CalendarPlus, Plus, Share, Bookmark } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";
import Button from "../Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface SidePanelHeaderProps {
  usage?: string;
}

const SidePanelHeader = ({ usage }: SidePanelHeaderProps) => {
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
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div
            className="lg:rounded-[0.8rem] rounded-[0.6rem] p-[0.4rem] cursor-pointer hover:bg-side-panel-hover transition-all duration-300 ease-in-out"
          >
            <Plus className="w-[2rem] h-[2rem]" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          side="bottom"
          className="w-[12rem] p-[0.4rem] z-[150] border border-border rounded-[0.8rem] bg-popover"
        >
          <DropdownMenuItem className="flex items-center rounded-[0.4rem] py-[0.6rem] px-[0.8rem] w-full min-h-[3.2rem] cursor-pointer outline-none hover:bg-accent">
            <span className="md:text-[1.4rem] text-[1.6rem] font-normal leading-none">
              Create Post
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center rounded-[0.4rem] py-[0.6rem] px-[0.8rem] w-full min-h-[3.2rem] cursor-pointer outline-none hover:bg-accent">
            <span className="md:text-[1.4rem] text-[1.6rem] font-normal leading-none">
              Create Topic
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center rounded-[0.4rem] py-[0.6rem] px-[0.8rem] w-full min-h-[3.2rem] cursor-pointer outline-none hover:bg-accent">
            <span className="md:text-[1.4rem] text-[1.6rem] font-normal leading-none">
              Create Lecture
            </span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

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
                bookmarked ? "fill-primary-color text-primary-color" : ""
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
    </div>
  );
};

export default SidePanelHeader;
