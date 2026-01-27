import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";
import React from "react";

type Props = {};

const SmallCommentSection = (props: Props) => {
  return (
    <div className="flex flex-col w-full bg-side-bar-hover/70 rounded-[0.8rem] p-[0.8rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] font-normal lg:mt-[1.2rem] md:mt-[1rem] mt-[0.8rem] lg:gap-[0.8rem] md:gap-[0.6rem] gap-[0.4rem] cursor-pointer">
      <h1 className="md:text-[1.6rem] text-[1.4rem] font-normal text-[#808080]">
        200 Comments
      </h1>

      <div className="flex flex-row items-center gap-[0.8rem] md:mt-[0.8rem] mt-[0.6rem]">
        <Avatar className="w-[2.4rem] h-[2.4rem] md:w-[3.2rem] md:h-[3.2rem]">
          <AvatarImage src={"https://github.com/shadcn.png"} alt="Profile" />
          <AvatarFallback className="bg-header-profile-bg">
            <User
              className="w-[1.6rem] h-[1.6rem] md:w-[2rem] md:h-[2rem] fill-[var(--color-profile-default-icon-bg)]"
              strokeWidth={0}
            />
          </AvatarFallback>
        </Avatar>
        <span className="text-[1.4rem] font-normal">
          Congratulations on your first lecture!
        </span>
      </div>
    </div>
  );
};

export default SmallCommentSection;
