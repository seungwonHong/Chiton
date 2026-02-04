"use client";
import {
  CalendarPlus,
  Plus,
  Share,
  Bookmark,
  EllipsisVertical,
} from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";
import Button from "../Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useModalStore from "@/shared/store/modalStore";
import Modal from "../Modal";
import CreatePostModalContents from "../CreatePostModalContents";
import useMediaQuery from "@/shared/hooks/useMediaQuery";
import { useRouter } from "next/navigation";
import { useTiptapImageStore } from "@/shared/store/tiptapImageStore";
import { usePathname } from "next/navigation";
import ProfileEditSheet from "@/features/profile/components/ProfileEditSheet";

interface SidePanelHeaderProps {
  usage?: string;
}

const SidePanelHeader = ({ usage }: SidePanelHeaderProps) => {
  const pathname = usePathname();
  const [bookmarked, setBookmarked] = useState(false);
  const [openCreatePostModal, setOpenCreatePostModal] = useState(false);
  const router = useRouter();

  const { setIsOpen } = useModalStore();
  const { setImageFiles, setImagePreviews } = useTiptapImageStore();
  const { breakpoint } = useMediaQuery();

  const [editOpen, setEditOpen] = useState(false);

  const copyURL = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("URL copied to clipboard");
    } catch (error) {
      console.error("URL 복사 실패:", error);
      toast.error("Failed to copy URL");
    }
  };

  const isProfilePage = pathname.includes("/profile/");

  return (
    <div className="relative flex flex-row items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="lg:rounded-[0.8rem] rounded-[0.6rem] p-[0.4rem] cursor-pointer hover:bg-side-panel-hover transition-all duration-300 ease-in-out">
            <Plus className="w-[2rem] h-[2rem]" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          side="bottom"
          className="w-[12rem] p-[0.4rem] z-[150] border border-border rounded-[0.8rem] bg-popover"
        >
          <DropdownMenuItem
            className="flex items-center rounded-[0.4rem] py-[0.6rem] px-[0.8rem] w-full min-h-[3.2rem] cursor-pointer outline-none hover:bg-accent transition-all duration-300 ease-in-out"
            onClick={() => {
              setOpenCreatePostModal(true);
              setIsOpen(true);
            }}
          >
            <span className="md:text-[1.4rem] text-[1.6rem] font-normal leading-none">
              Create Post
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex items-center rounded-[0.4rem] py-[0.6rem] px-[0.8rem] w-full min-h-[3.2rem] cursor-pointer outline-none hover:bg-accent transition-all duration-300 ease-in-out"
            onClick={() => {
              router.push("/create-topic");
            }}
          >
            <span className="md:text-[1.4rem] text-[1.6rem] font-normal leading-none">
              Create Topic
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex items-center rounded-[0.4rem] py-[0.6rem] px-[0.8rem] w-full min-h-[3.2rem] cursor-pointer outline-none hover:bg-accent transition-all duration-300 ease-in-out"
            onClick={() => {
              router.push("/create-lecture");
            }}
          >
            <span className="md:text-[1.4rem] text-[1.6rem] font-normal leading-none">
              Create Lecture
            </span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="flex flex-row items-center ml-auto lg:gap-[1rem] gap-[1rem]">
        <div className="flex flex-row items-center lg:gap-[0.8rem] gap-[0.6rem]">
          <CalendarPlus className="w-[2rem] h-[2rem]" strokeWidth={1.5} />
          <span className="lg:text-[1.2rem] font-normal">
            Created Aug 14, 2025
          </span>
        </div>

        {usage === "topic" ? (
          <div className="flex flex-row items-center gap-[0.8rem]">
            <Button className="2xl:text-[1.6rem] xl:text-[1.4rem] font-normal lg:!rounded-[0.8rem] hover:bg-button-hover transition-all duration-300 ease-in-out">
              Join
            </Button>
            <Bookmark
              className={`w-[2.4rem] h-[2.4rem] cursor-pointer ${
                bookmarked ? "fill-primary-color text-primary-color" : ""
              }`}
              strokeWidth={1.5}
              onClick={() => setBookmarked(!bookmarked)}
            />
          </div>
        ) : (
          <button
            className="flex flex-row items-center gap-[0.6rem] rounded-[0.6rem] py-[0.8rem] px-[1.4rem] cursor-pointer bg-side-panel-share-button hover:bg-side-panel-share-button-hover transition-all duration-300 ease-in-out"
            onClick={copyURL}
          >
            <Share className="w-[2rem] h-[2rem]" strokeWidth={1.5} />
            <span className="lg:text-[1.2rem] font-normal">Share</span>
          </button>
        )}

        {isProfilePage && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center justify-center p-[0.4rem] cursor-pointer hover:bg-side-panel-hover transition-all duration-300 ease-in-out rounded-[0.4rem]">
                <EllipsisVertical
                  className="w-[2rem] h-[2rem]"
                  strokeWidth={1.5}
                />
              </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              side="bottom"
              className="w-[12rem] p-[0.4rem] z-[150] border border-border rounded-[0.8rem] bg-popover"
            >
              <DropdownMenuItem
                className="flex items-center  rounded-[0.4rem] py-[0.6rem] px-[0.8rem] w-full min-h-[3.2rem] cursor-pointer outline-none hover:bg-accent transition-all duration-300 ease-in-out"
                onClick={() => setEditOpen(true)}
              >
                <span className="md:text-[1.4rem] text-[1.6rem] font-normal leading-none">
                  Edit Profile
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center rounded-[0.4rem] py-[0.6rem] px-[0.8rem] w-full min-h-[3.2rem] cursor-pointer outline-none hover:bg-accent transition-all duration-300 ease-in-out">
                <span className="md:text-[1.4rem] text-[1.6rem] font-normal leading-none text-[#c91313]">
                  Report Profile
                </span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>

      {breakpoint === "desktop" && openCreatePostModal && (
        <Modal
          onClick={() => {
            setOpenCreatePostModal(false);
            setImageFiles([]);
            setImagePreviews([]);
          }}
        >
          <CreatePostModalContents />
        </Modal>
      )}

      <ProfileEditSheet editOpen={editOpen} setEditOpen={setEditOpen} />
    </div>
  );
};

export default SidePanelHeader;
