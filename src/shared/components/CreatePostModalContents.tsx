"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, SendHorizontal, User } from "lucide-react";
import React, { useState } from "react";
import TiptapEditor from "./TiptapEditor";

const CreatePostModalContents = () => {
  const [selectedFilter, setSelectedFilter] = useState<
    "public" | "followers" | "subscribers"
  >("public");

  return (
    <div
      className={`flex flex-col overflow-y-auto overflow-x-hidden 
          lg:w-[60rem] lg:h-[40rem] md:w-[50rem] md:h-[30rem]
      `}
    >
      <div className="flex flex-row 2xl:gap-[1.4rem] lg:gap-[1.2rem] md:gap-[0.8rem] gap-[0.6rem]">
        <Avatar
          className="
              2xl:w-[4.8rem] 2xl:h-[4.8rem] lg:w-[4rem] lg:h-[4rem] md:w-[3.6rem] md:h-[3.6rem] w-[4rem] h-[4rem]"
        >
          <AvatarImage src={"https://github.com/shadcn.png"} alt="Profile" />
          <AvatarFallback className="bg-header-profile-bg">
            <User
              className="fill-[var(--color-profile-default-icon-bg)] lg:w-[2.4rem] lg:h-[2.4rem] md:w-[2.8rem] md:h-[2.8rem] w-[2.4rem] h-[2.4rem]
              "
              strokeWidth={0}
            />
          </AvatarFallback>
        </Avatar>

        <div className="flex flex-col min-w-0">
          {/* 이름과 필터 */}
          <div className="flex flex-row gap-[1.2rem]">
            <span className="font-medium 2xl:text-[2rem] lg:text-[1.8rem] text-[1.6rem]">
              hong.seung.won
            </span>

            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <div className="flex flex-row items-center gap-[0.4rem] lg:rounded-[0.8rem] rounded-[0.6rem] py-[0.2rem] px-[0.8rem] cursor-pointer hover:bg-side-panel-hover transition-all duration-300 ease-in-out">
                  <span className="md:text-[1.2rem] text-[1.4rem] font-normal leading-none">
                    {selectedFilter}
                  </span>
                  <ChevronDown
                    className="w-[1.6rem] h-[1.6rem]"
                    strokeWidth={1.5}
                  />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                side="bottom"
                className="flex flex-col w-[12rem] py-[0.4rem] z-[250] border border-border rounded-[0.8rem] bg-popover gap-[0.4rem]"
              >
                <DropdownMenuItem
                  className={`flex items-center rounded-[0.4rem] py-[0.6rem] px-[0.8rem] w-full min-h-[3.2rem] cursor-pointer outline-none transition-all duration-300 ease-in-out ${
                    selectedFilter === "public"
                      ? "bg-accent"
                      : "hover:bg-accent"
                  }`}
                  onClick={() => setSelectedFilter("public")}
                >
                  <span className="md:text-[1.4rem] text-[1.6rem] font-normal leading-none">
                    Public
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className={`flex items-center rounded-[0.4rem] py-[0.6rem] px-[0.8rem] w-full min-h-[3.2rem] cursor-pointer outline-none transition-all duration-300 ease-in-out ${
                    selectedFilter === "followers"
                      ? "bg-accent"
                      : "hover:bg-accent"
                  }`}
                  onClick={() => setSelectedFilter("followers")}
                >
                  <span className="md:text-[1.4rem] text-[1.6rem] font-normal leading-none">
                    Followers
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className={`flex items-center rounded-[0.4rem] py-[0.6rem] px-[0.8rem] w-full min-h-[3.2rem] cursor-pointer outline-none transition-all duration-300 ease-in-out ${
                    selectedFilter === "subscribers"
                      ? "bg-accent"
                      : "hover:bg-accent"
                  }`}
                  onClick={() => setSelectedFilter("subscribers")}
                >
                  <span className="md:text-[1.4rem] text-[1.6rem] font-normal leading-none">
                    Subscribers
                  </span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <TiptapEditor content="" onChange={() => {}} />
        </div>
      </div>

      <div className="absolute bottom-[1.6rem] right-[1.6rem] flex flex-row items-center justify-center p-[0.8rem] rounded-[0.8rem] dark:bg-side-bar-hover bg-side-bar-hover/30">
        <SendHorizontal className="cursor-pointer" />
      </div>
    </div>
  );
};

export default CreatePostModalContents;
