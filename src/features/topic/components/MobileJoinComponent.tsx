"use client";
import Button from "@/shared/components/Button";
import { Bookmark, MailPlus } from "lucide-react";
import React, { useState } from "react";

type Props = {};

const MobileJoinComponent = (props: Props) => {
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <div className="flex xl:hidden flex-row items-center gap-[0.8rem] lg:mt-[2.4rem] md:mt-[2rem] mt-[1.6rem] ml-auto">
      <Button className="md:text-[1.4rem] text-[1.6rem] font-normal !rounded-[0.8rem] hover:bg-button-hover transition-all duration-300 ease-in-out">
        Join
      </Button>
      <Bookmark
        className={`w-[2.4rem] h-[2.4rem] cursor-pointer ${
          bookmarked ? "fill-foreground" : ""
        }`}
        strokeWidth={1.5}
        onClick={() => setBookmarked(!bookmarked)}
      />
      <div className="flex items-center justify-center aspect-square w-fit p-[0.4rem] rounded-[0.6rem] hover:bg-side-panel-hover transition-all duration-300 ease-in-out cursor-pointer">
        <MailPlus className="w-[2.4rem] h-[2.4rem]" strokeWidth={1.5} />
      </div>
    </div>
  );
};

export default MobileJoinComponent;
