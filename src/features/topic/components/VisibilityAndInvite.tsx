"use client";
import React from "react";
import { MailPlus } from "lucide-react";

type Props = {};

const VisibilityAndInvite = (props: Props) => {
  return (
    <div className="flex flex-row items-center lg:mt-[2.4rem] md:mt-[2rem] mt-[1.6rem] lg:gap-[1.6rem] md:gap-[0.6rem] gap-[0.4rem]">
      <span className="lg:text-[1.6rem] text-[1.4rem] font-normal">
        🔒 Private
      </span>

      <div className="xl:flex hidden items-center justify-center aspect-square w-fit p-[0.4rem] rounded-[0.6rem] hover:bg-side-panel-hover transition-all duration-300 ease-in-out cursor-pointer">
        <MailPlus className="w-[2rem] h-[2rem]" strokeWidth={1.5} />
      </div>
    </div>
  );
};

export default VisibilityAndInvite;
