"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Button from "@/shared/components/Button";
import { Bookmark, EllipsisVertical, Flag, Pencil, Share, Trash2 } from "lucide-react";
import React, { useState } from "react";

type Props = {};

const HeroControl = (props: Props) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="flex flex-row items-center gap-[0.8rem] ml-auto overflow-x-auto">
      <Button
        className={`lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] font-normal lg:!rounded-[0.8rem] !rounded-[0.6rem] cursor-pointer border ${
          isClicked
            ? "bg-transparent border-primary-color  text-primary-color"
            : "bg-primary-color border-transparent hover:bg-primary-color-hover transition-colors duration-300 ease-in-out text-white"
        }`}
        onClick={() => setIsClicked(!isClicked)}
      >
        {isClicked ? "Subscribing" : "Subscribe"}
      </Button>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center justify-center p-[0.4rem] rounded-[0.4rem] hover:bg-side-bar-hover transition-all duration-300 ease-in-out cursor-pointer">
              <EllipsisVertical
                className="w-[2.4rem] h-[2.4rem]"
                strokeWidth={3}
                color="#808080"
              />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            side="bottom"
            className="w-[12rem] p-[0.4rem] z-[150] border border-border rounded-[0.8rem]"
          >
            <DropdownMenuItem className="flex items-center gap-[0.8rem] rounded-[0.4rem] cursor-pointer md:min-h-[3.2rem] min-h-[4rem]">
              <Pencil className="!w-[1.6rem] !h-[1.6rem]" strokeWidth={1.5} />
              <span className="text-[1.4rem] font-normal whitespace-nowrap leading-none">
                edit
              </span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-[0.8rem] rounded-[0.4rem] cursor-pointer md:min-h-[3.2rem] min-h-[4rem]">
              <Share className="!w-[1.6rem] !h-[1.6rem]" strokeWidth={1.5} />
              <span className="text-[1.4rem] font-normal whitespace-nowrap leading-none">
                share
              </span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-[0.8rem] rounded-[0.4rem] cursor-pointer md:min-h-[3.2rem] min-h-[4rem]">
              <Bookmark className="!w-[1.6rem] !h-[1.6rem]" strokeWidth={1.5} />
              <span className="text-[1.4rem] font-normal whitespace-nowrap leading-none">
                bookmark
              </span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex items-center gap-[0.8rem] rounded-[0.4rem] cursor-pointer md:min-h-[3.2rem] min-h-[4rem]">
              <Flag className="!w-[1.6rem] !h-[1.6rem]" strokeWidth={1.5} />
              <span className="text-[1.4rem] font-normal whitespace-nowrap leading-none">
                report
              </span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-[0.8rem] rounded-[0.4rem] cursor-pointer md:min-h-[3.2rem] min-h-[4rem]">
              <Trash2
                className="!w-[1.6rem] !h-[1.6rem]"
                color="#c91313"
                strokeWidth={1.5}
              />
              <span className="text-[1.4rem] text-[#c91313] font-normal whitespace-nowrap leading-none">
                delete
              </span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default HeroControl;
