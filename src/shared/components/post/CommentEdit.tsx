"use client";
import React from "react";
import { Ellipsis, Trash2, Pencil, Flag } from "lucide-react";
import useDropDownStore from "../../store/dropDownStore";
import DropDownMenu from "../DropDownMenu";

interface Props {
  commentId: number;
}

const CommentEdit = ({ commentId }: Props) => {
  const { commentEditOpen, setCommentEditOpen } = useDropDownStore();
  const verification = commentEditOpen === commentId;

  return (
    <div className="relative ml-auto cursor-pointer">
      {verification && (
        <DropDownMenu
          className="lg:top-[3.2rem] top-[3rem] right-[0]"
          align="right"
        >
          <div
            className={`flex flex-row items-center justify-center whitespace-nowrap lg:px-[3.6rem] md:px-[2.8rem] px-[3.2rem] lg:py-[0.8rem] md:py-[0.6rem] py-[0.8rem] lg:rounded-[1rem] rounded-[0.8rem] w-full hover:bg-drop-down-menu-hover lg:gap-[0.8rem] gap-[0.4rem]`}
          >
            <Flag strokeWidth={1.5} />
            <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.6rem] font-normal">
              report
            </span>
          </div>
          <div
            className={`flex flex-row items-center justify-center whitespace-nowrap lg:px-[3.6rem] md:px-[2.8rem] px-[3.2rem] lg:py-[0.8rem] md:py-[0.6rem] py-[0.8rem] lg:rounded-[1rem] rounded-[0.8rem] w-full hover:bg-drop-down-menu-hover lg:gap-[0.8rem] gap-[0.4rem]`}
          >
            <Trash2 strokeWidth={1.5} />
            <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.6rem] font-normal">
              delete
            </span>
          </div>
        </DropDownMenu>
      )}

      <Ellipsis
        onClick={(e) => {
          e.stopPropagation();
          setCommentEditOpen(verification ? null : commentId);
        }}
      />
    </div>
  );
};

export default CommentEdit;
