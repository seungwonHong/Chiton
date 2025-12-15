"use client";
import React from "react";
import { Plus } from "lucide-react";
import useDropDownStore from "@/shared/store/dropDownStore";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Props = {};

const MobilePostButton = (props: Props) => {
  const { mobilePostButtonDropDownOpen, setMobilePostButtonDropDownOpen } =
    useDropDownStore();

  const pathname = usePathname();
  const isTopicPage = pathname.includes("/topic");

  return (
    <div className="md:hidden flex fixed bottom-[1.6rem] right-[1.6rem] z-[120]">
      <DropdownMenu
        open={mobilePostButtonDropDownOpen}
        onOpenChange={setMobilePostButtonDropDownOpen}
      >
        <DropdownMenuTrigger asChild>
          <button className="flex items-center justify-center rounded-full w-[5.6rem] h-[5.6rem] shadow-lg bg-side-panel-hover/80 backdrop-blur-sm cursor-pointer transition-all duration-300 ease-in-out outline-none">
            <Plus className="w-[2.8rem] h-[2.8rem]" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          side="bottom"
          className="w-[14rem] p-[0.4rem] z-[150] border border-border rounded-[0.8rem] bg-popover"
        >
          <DropdownMenuItem className="flex items-center rounded-[0.4rem] py-[0.6rem] px-[0.8rem] w-full md:min-h-[3.2rem] min-h-[4rem] cursor-pointer outline-none hover:bg-accent">
            <span className="md:text-[1.4rem] text-[1.6rem] font-normal leading-none">
              Create Post
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center rounded-[0.4rem] py-[0.6rem] px-[0.8rem] w-full md:min-h-[3.2rem] min-h-[4rem] cursor-pointer outline-none hover:bg-accent">
            <span className="md:text-[1.4rem] text-[1.6rem] font-normal leading-none">
              Create Topic
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center rounded-[0.4rem] py-[0.6rem] px-[0.8rem] w-full md:min-h-[3.2rem] min-h-[4rem] cursor-pointer outline-none hover:bg-accent">
            <span className="md:text-[1.4rem] text-[1.6rem] font-normal leading-none">
              Create Lecture
            </span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* {mobilePostButtonDropDownOpen && (
        <DropDownMenu className="bottom-[6.4rem] right-[0]">
          <div
            className={`flex flex-row items-center justify-center lg:px-[3.2rem] md:px-[2.8rem] px-[3.2rem] lg:py-[0.8rem] md:py-[0.6rem] py-[0.8rem] lg:rounded-[1rem] rounded-[0.8rem] w-full hover:bg-drop-down-menu-hover cursor-pointer transition-all duration-300 ease-in-out`}
          >
            <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.6rem] font-normal whitespace-nowrap">
              Create Post
            </span>
          </div>
          {!isTopicPage && (
            <div
              className={`flex flex-row items-center justify-center lg:px-[3.2rem] md:px-[2.8rem] px-[3.2rem] lg:py-[0.8rem] md:py-[0.6rem] py-[0.8rem] lg:rounded-[1rem] rounded-[0.8rem] w-full hover:bg-drop-down-menu-hover cursor-pointer transition-all duration-300 ease-in-out`}
            >
              <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.6rem] font-normal whitespace-nowrap">
                Create Topic
              </span>
            </div>
          )}
          <div
            className={`flex flex-row items-center justify-center lg:px-[3.2rem] md:px-[2.8rem] px-[3.2rem] lg:py-[0.8rem] md:py-[0.6rem] py-[0.8rem] lg:rounded-[1rem] rounded-[0.8rem] w-full hover:bg-drop-down-menu-hover cursor-pointer transition-all duration-300 ease-in-out`}
          >
            <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.6rem] font-normal whitespace-nowrap">
              Create Lecture
            </span>
          </div>
        </DropDownMenu>
      )} */}
    </div>
  );
};

export default MobilePostButton;
