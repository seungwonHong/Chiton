"use client";
import Button from "@/shared/components/Button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";
import React, { useState } from "react";

type Props = {};

const SidePanelProfile = (props: Props) => {
  const [isFollowed, setIsFollowed] = useState("Follow");

  return (
    <div className="flex flex-row items-start mt-[2rem]">
      <Avatar className="2xl:w-[4.8rem] 2xl:h-[4.8rem] lg:w-[4rem] lg:h-[4rem] md:w-[3.6rem] md:h-[3.6rem] w-[4rem] h-[4rem]">
        <AvatarImage src={"https://github.com/shadcn.png"} alt="Profile" />
        <AvatarFallback className="bg-header-profile-bg">
          <User className="w-[2.4rem] h-[2.4rem]" />
        </AvatarFallback>
      </Avatar>
      {/* 이름과 상태 */}
      <div className="flex flex-col ml-[1.2rem] mr-[1.2rem]">
        <span className="text-[1.6rem] font-medium ">hong.seung.won</span>
        <p className="text-[1.4rem] font-normal text-[#808080]">
          Exploring the intersection of code and design
        </p>
      </div>
      <Button
        className={`ml-auto text-[1.4rem] font-normal !rounded-[0.8rem] ${isFollowed === "Following" ? "bg-transparent text-[var(--color-button-bg)] border border-button-border hover:border-[var(--color-button-hover)] transition-colors duration-300 ease-in-out" : "hover:bg-[var(--color-button-hover)] duration-300 ease-in-out border border-transparent"}`}
        onClick={() =>
          setIsFollowed(isFollowed === "Follow" ? "Following" : "Follow")
        }
      >
        {isFollowed}
      </Button>
    </div>
  );
};

export default SidePanelProfile;
