"use client";
import React, { useState } from "react";
import { Plus } from "lucide-react";
import useDropDownStore from "@/shared/store/dropDownStore";
import { usePathname, useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useModalStore from "@/shared/store/modalStore";
import CreatePostModalContents from "@/shared/components/CreatePostModalContents";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import useMediaQuery from "@/shared/hooks/useMediaQuery";

const MobilePostButton = () => {
  const { mobilePostButtonDropDownOpen, setMobilePostButtonDropDownOpen } =
    useDropDownStore();
  const [openCreatePostModal, setOpenCreatePostModal] = useState(false);
  const { setIsOpen: setIsModalOpen } = useModalStore();

  const router = useRouter();
  const pathname = usePathname();
  const isTopicPage = pathname.includes("/topic");

  const { breakpoint } = useMediaQuery();

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
          <DropdownMenuItem
            className="flex items-center rounded-[0.4rem] py-[0.6rem] px-[0.8rem] w-full md:min-h-[3.2rem] min-h-[4rem] cursor-pointer outline-none hover:bg-accent"
            onClick={() => {
              setOpenCreatePostModal(true);
              setIsModalOpen(true);
            }}
          >
            <span className="md:text-[1.4rem] text-[1.6rem] font-normal leading-none">
              Create Post
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center rounded-[0.4rem] py-[0.6rem] px-[0.8rem] w-full md:min-h-[3.2rem] min-h-[4rem] cursor-pointer outline-none hover:bg-accent" onClick={() => {router.push("/create-topic");}}>
            <span className="md:text-[1.4rem] text-[1.6rem] font-normal leading-none">
              Create Topic
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center rounded-[0.4rem] py-[0.6rem] px-[0.8rem] w-full md:min-h-[3.2rem] min-h-[4rem] cursor-pointer outline-none hover:bg-accent" onClick={() => {router.push("/create-lecture");}}>
            <span className="md:text-[1.4rem] text-[1.6rem] font-normal leading-none">
              Create Lecture
            </span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {breakpoint === "mobile" && (
        <Drawer
          open={openCreatePostModal}
          onOpenChange={setOpenCreatePostModal}
        >
          <DrawerContent
            className="bg-background border-border w-full h-full p-[1.4rem] !rounded-t-[2.4rem] outline-none"
          >
            <DrawerHeader className="mb-[2rem]">
              <DrawerTitle className="text-[1.6rem] font-bold">
                Create Post
              </DrawerTitle>
            </DrawerHeader>

            <CreatePostModalContents />
          </DrawerContent>
        </Drawer>
      )}
    </div>
  );
};

export default MobilePostButton;
