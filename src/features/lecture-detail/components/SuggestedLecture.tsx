import React from "react";
import Image from "next/image";
import { ArrowBigUp, CalendarFold, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const SuggestedLecture = () => {
  return (
    <div className="flex xl:flex-row flex-col items-start xl:gap-[0.8rem] lg:gap-[1.2rem] md:gap-[0.8rem] gap-[0.6rem] p-[0.6rem] hover:bg-side-bar-hover transition-all duration-300 ease-in-out cursor-pointer rounded-[1.2rem]">
      <Image
        src="/images/thumbnail_mockup.jpg"
        alt="thumbnail"
        width={100}
        height={100}
        className="xl:w-[16rem] lg:w-[24rem] md:w-[6.4rem] w-full aspect-[16/9] object-cover rounded-[0.6rem]"
      />
      <div className="flex flex-row items-start gap-[0.8rem]">
        <Avatar className="w-[4rem] h-[4rem] md:hidden block">
          <AvatarImage src={"https://github.com/shadcn.png"} alt="Profile" />
          <AvatarFallback className="bg-header-profile-bg">
            <User className="w-[2.4rem] h-[2.4rem] fill-[var(--color-profile-default-icon-bg)]" strokeWidth={0} />
          </AvatarFallback>
        </Avatar>

        <div className="flex flex-col items-start">
          <h1 className="text-[1.6rem] font-medium line-clamp-2">
            The first lecture on Chiton
          </h1>
          <span className="text-[1.4rem] font-normal text-[#808080]">
            hong.seung.won
          </span>
          <div className="flex flex-row items-center gap-[0.8rem]">
            <div className="flex flex-row items-center gap-[0.2rem]">
              <ArrowBigUp
                className="w-[1.6rem] h-[1.6rem] text-[#808080]"
                strokeWidth={1.5}
              />
              <span className="text-[1.4rem] font-normal text-[#808080]">
                100
              </span>
            </div>
            <div className="flex flex-row items-center gap-[0.2rem]">
              <CalendarFold
                className="w-[1.6rem] h-[1.6rem] text-[#808080]"
                strokeWidth={1.5}
              />
              <span className="text-[1.4rem] font-normal text-[#808080]">
                2 days
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestedLecture;
