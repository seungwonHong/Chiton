"use client";
import React from "react";
import { Ellipsis, Trash2, Pencil, Flag } from "lucide-react";
import useDropDownStore from "../../store/dropDownStore";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Props {
  commentId: number;
}

const CommentEdit = ({ commentId }: Props) => {
  return (
    <div className="relative ml-auto cursor-pointer">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Ellipsis color="#808080" />
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
  );
};

export default CommentEdit;
