"use client";
import useDropDownStore from "@/shared/store/dropDownStore";
import {
  EllipsisVertical,
  Flag,
  Pencil,
  Trash2,
  Share,
  Bookmark,
} from "lucide-react";
import React from "react";
import DropDownMenu from "../DropDownMenu";

interface Props {
  id: string | null;
}

const LectureDropDownControl = ({ id }: Props) => {
  const { lectureDropDownOpen, setLectureDropDownOpen } = useDropDownStore();
  const verification = lectureDropDownOpen === id;

  return (
    <div
      className="flex items-center justify-center ml-auto relative cursor-pointer rounded-[0.4rem] hover:bg-lecture-drop-down-icon-background transition-all duration-300 ease-in-out p-[0.4rem]"
      onClick={(e) => {
        e.stopPropagation();
        setLectureDropDownOpen(verification ? null : id);
      }}
    >
      <EllipsisVertical
        className="2xl:w-[2rem] 2xl:h-[2rem] lg:w-[1.8rem] lg:h-[1.8rem] md:w-[1.6rem] md:h-[1.6rem] w-[2rem] h-[2rem]"
        strokeWidth={3}
      />
      {verification && (
        <DropDownMenu
          className="lg:top-[3.2rem] top-[3rem] right-[0]"
          align="right"
        >
          <div
            className={`flex flex-row items-center justify-start lg:px-[2rem] md:px-[1.6rem] px-[1.4rem] lg:py-[0.8rem] md:py-[0.6rem] py-[0.8rem] lg:rounded-[1rem] rounded-[0.8rem] w-full hover:bg-drop-down-menu-hover lg:gap-[0.8rem] gap-[0.4rem]`}
          >
            <Pencil strokeWidth={1.5} />
            <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.6rem] font-normal">
              edit
            </span>
          </div>
          <div
            className={`flex flex-row items-center justify-start whitespace-nowrap lg:px-[2rem] md:px-[1.6rem] px-[1.4rem] lg:py-[0.8rem] md:py-[0.6rem] py-[0.8rem] lg:rounded-[1rem] rounded-[0.8rem] w-full hover:bg-drop-down-menu-hover lg:gap-[0.8rem] gap-[0.4rem]`}
          >
            <Trash2 strokeWidth={1.5} />
            <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.6rem] font-normal">
              delete
            </span>
          </div>
          <div
            className={`flex flex-row items-center justify-start whitespace-nowrap lg:px-[2rem] md:px-[1.6rem] px-[1.4rem] lg:py-[0.8rem] md:py-[0.6rem] py-[0.8rem] lg:rounded-[1rem] rounded-[0.8rem] w-full hover:bg-drop-down-menu-hover lg:gap-[0.8rem] gap-[0.4rem]`}
          >
            <Share strokeWidth={1.5} />
            <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.6rem] font-normal">
              share
            </span>
          </div>
          <div
            className={`flex flex-row items-center justify-start whitespace-nowrap lg:px-[2rem] md:px-[1.6rem] px-[1.4rem] lg:py-[0.8rem] md:py-[0.6rem] py-[0.8rem] lg:rounded-[1rem] rounded-[0.8rem] w-full hover:bg-drop-down-menu-hover lg:gap-[0.8rem] gap-[0.4rem]`}
          >
            <Bookmark strokeWidth={1.5} />
            <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.6rem] font-normal">
              bookmark
            </span>
          </div>
          <div
            className={`flex flex-row items-center justify-start whitespace-nowrap lg:px-[2rem] md:px-[1.6rem] px-[1.4rem] lg:py-[0.8rem] md:py-[0.6rem] py-[0.8rem] lg:rounded-[1rem] rounded-[0.8rem] w-full hover:bg-drop-down-menu-hover lg:gap-[0.8rem] gap-[0.4rem]`}
          >
            <Flag strokeWidth={1.5} />
            <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.6rem] font-normal">
              report
            </span>
          </div>
        </DropDownMenu>
      )}
    </div>
  );
};

export default LectureDropDownControl;
