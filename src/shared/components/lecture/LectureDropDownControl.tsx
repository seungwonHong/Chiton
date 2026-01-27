"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  EllipsisVertical,
  Flag,
  Pencil,
  Trash2,
  Share,
  Bookmark,
} from "lucide-react";
import React from "react";

interface Props {
  id: string | null;
}

const LectureDropDownControl = ({ id }: Props) => {
  return (
    <>
      <DropdownMenu
      >
        <DropdownMenuTrigger asChild>
          <div className="flex items-center justify-center ml-auto relative cursor-pointer rounded-[0.4rem] hover:bg-lecture-drop-down-icon-background transition-all duration-300 ease-in-out p-[0.4rem]">
            <EllipsisVertical
              className="2xl:w-[2rem] 2xl:h-[2rem] lg:w-[1.8rem] lg:h-[1.8rem] md:w-[1.6rem] md:h-[1.6rem] w-[2rem] h-[2rem]"
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
    </>
  );
};

export default LectureDropDownControl;
