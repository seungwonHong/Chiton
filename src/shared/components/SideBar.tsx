"use client";
import React, { useEffect, useState } from "react";
import {
  House,
  LogOut,
  Settings,
  User,
  Search,
  LayoutGrid,
} from "lucide-react";
import { Bell } from "lucide-react";
import { UserStar } from "lucide-react";
import { Code } from "lucide-react";
import { Play } from "lucide-react";
import { AudioLines } from "lucide-react";
import { Paintbrush } from "lucide-react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import useSidebarStore from "../store/sidebarStore";
import { Plus } from "lucide-react";
import useDropDownStore from "../store/dropDownStore";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Modal from "./Modal";
import CreatePostModalContents from "./CreatePostModalContents";
import useModalStore from "../store/modalStore";
import useMediaQuery from "../hooks/useMediaQuery";

const SideBar = () => {
  const { setIsOpen, isMobile, isClicked, setIsClicked } = useSidebarStore();
  const pathname = usePathname();
  const { sideBarDropDownOpen, setSideBarDropDownOpen } = useDropDownStore();
  const [openCreatePostModal, setOpenCreatePostModal] = useState(false);
  const { setIsOpen: setIsModalOpen } = useModalStore();
  const { breakpoint } = useMediaQuery();

  useEffect(() => {
    const currentPath = window.location.pathname;
    const page = currentPath.split("/").pop();
    setIsClicked(page || "");
  }, [pathname]);

  return (
    <div className="fixed h-full flex flex-col items-center justify-center 2xl:w-[24rem] lg:w-[20rem] md:w-[4.8rem] w-[16rem]">
      <nav className="flex flex-col w-full lg:gap-[0.4rem] md:gap-[1.2rem] gap-[0.4rem]">
        <Link
          href="/main/home?type=posts&filter=recent"
          className={`group flex flex-row items-center lg:justify-start md:justify-center justify-start ${
            isClicked === "home"
              ? "bg-side-bar-hover"
              : "hover:bg-side-bar-hover"
          } transition-all duration-300 ease-in-out rounded-[0.8rem] 2xl:px-[1.6rem] lg:px-[1.2rem] md:px-[0.4rem] px-[1.2rem] 2xl:py-[1.4rem] lg:py-[1rem] md:py-[0.4rem] py-[1.2rem]`}
          onClick={() => {
            setIsClicked("home");
            isMobile && setIsOpen(false);
          }}
        >
          <House className="lg:w-[2.4rem] lg:h-[2.4rem] md:w-[3.6rem] md:h-[3.6rem] w-[2.4rem] h-[2.4rem]" />
          <span className="2xl:text-[1.8rem] lg:text-[1.6rem] md:text-[1.4rem] text-[1.2rem] font-normal lg:block md:hidden 2xl:ml-[1.6rem] lg:ml-[1.2rem] md:ml-[0.8rem] ml-[1.2rem]">
            Home
          </span>
          <ChevronRight className="w-[2.4rem] h-[2.4rem] lg:block md:hidden ml-auto text-[#b4b4b4] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out" />
        </Link>
        <Link
          href="/main/notification"
          className={`group flex flex-row items-center lg:justify-start md:justify-center justify-start ${
            isClicked === "notification"
              ? "bg-side-bar-hover"
              : "hover:bg-side-bar-hover"
          } transition-all duration-300 ease-in-out rounded-[0.8rem] 2xl:px-[1.6rem] lg:px-[1.2rem] md:px-[0.4rem] px-[1.2rem] 2xl:py-[1.4rem] lg:py-[1rem] md:py-[0.4rem] py-[1.2rem]`}
          onClick={() => {
            setIsClicked("notification");
            isMobile && setIsOpen(false);
          }}
        >
          <Bell className="lg:w-[2.4rem] lg:h-[2.4rem] md:w-[3.6rem] md:h-[3.6rem] w-[2.4rem] h-[2.4rem]" />
          <span className="2xl:text-[1.8rem] lg:text-[1.6rem] md:text-[1.4rem] text-[1.2rem] font-normal lg:block md:hidden 2xl:ml-[1.6rem] lg:ml-[1.2rem] md:ml-[0.8rem] ml-[1.2rem]">
            Notification
          </span>
          <ChevronRight className="w-[2.4rem] h-[2.4rem] lg:block md:hidden ml-auto text-[#b4b4b4] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out" />
        </Link>
        <Link
          href="/main/coding?type=posts&filter=recent"
          className={`group flex flex-row items-center lg:justify-start md:justify-center justify-start ${
            isClicked === "coding"
              ? "bg-side-bar-hover"
              : "hover:bg-side-bar-hover"
          } transition-all duration-300 ease-in-out rounded-[0.8rem] 2xl:px-[1.6rem] lg:px-[1.2rem] md:px-[0.4rem] px-[1.2rem] 2xl:py-[1.4rem] lg:py-[1rem] md:py-[0.4rem] py-[1.2rem]`}
          onClick={() => {
            setIsClicked("coding");
            isMobile && setIsOpen(false);
          }}
        >
          <Code className="lg:w-[2.4rem] lg:h-[2.4rem] md:w-[3.6rem] md:h-[3.6rem] w-[2.4rem] h-[2.4rem]" />
          <span className="2xl:text-[1.8rem] lg:text-[1.6rem] md:text-[1.4rem] text-[1.2rem] font-normal lg:block md:hidden 2xl:ml-[1.6rem] lg:ml-[1.2rem] md:ml-[0.8rem] ml-[1.2rem]">
            Coding
          </span>
          <ChevronRight className="w-[2.4rem] h-[2.4rem] lg:block md:hidden ml-auto text-[#b4b4b4] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out" />
        </Link>
        <Link
          href="/main/video?type=posts&filter=recent"
          className={`group flex flex-row items-center lg:justify-start md:justify-center justify-start ${
            isClicked === "video"
              ? "bg-side-bar-hover"
              : "hover:bg-side-bar-hover"
          } transition-all duration-300 ease-in-out rounded-[0.8rem] 2xl:px-[1.6rem] lg:px-[1.2rem] md:px-[0.4rem] px-[1.2rem] 2xl:py-[1.4rem] lg:py-[1rem] md:py-[0.4rem] py-[1.2rem]`}
          onClick={() => {
            setIsClicked("video");
            isMobile && setIsOpen(false);
          }}
        >
          <Play className="lg:w-[2.4rem] lg:h-[2.4rem] md:w-[3.6rem] md:h-[3.6rem] w-[2.4rem] h-[2.4rem]" />
          <span className="2xl:text-[1.8rem] lg:text-[1.6rem] md:text-[1.4rem] text-[1.2rem] font-normal lg:block md:hidden 2xl:ml-[1.6rem] lg:ml-[1.2rem] md:ml-[0.8rem] ml-[1.2rem]">
            Video
          </span>
          <ChevronRight className="w-[2.4rem] h-[2.4rem] lg:block md:hidden ml-auto text-[#b4b4b4] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out" />
        </Link>
        <Link
          href="/main/audio?type=posts&filter=recent"
          className={`group flex flex-row items-center lg:justify-start md:justify-center justify-start ${
            isClicked === "audio"
              ? "bg-side-bar-hover"
              : "hover:bg-side-bar-hover"
          } transition-all duration-300 ease-in-out rounded-[0.8rem] 2xl:px-[1.6rem] lg:px-[1.2rem] md:px-[0.4rem] px-[1.2rem] 2xl:py-[1.4rem] lg:py-[1rem] md:py-[0.4rem] py-[1.2rem]`}
          onClick={() => {
            setIsClicked("audio");
            isMobile && setIsOpen(false);
          }}
        >
          <AudioLines className="lg:w-[2.4rem] lg:h-[2.4rem] md:w-[3.6rem] md:h-[3.6rem] w-[2.4rem] h-[2.4rem]" />
          <span className="2xl:text-[1.8rem] lg:text-[1.6rem] md:text-[1.4rem] text-[1.2rem] font-normal lg:block md:hidden 2xl:ml-[1.6rem] lg:ml-[1.2rem] md:ml-[0.8rem] ml-[1.2rem]">
            Audio
          </span>
          <ChevronRight className="w-[2.4rem] h-[2.4rem] lg:block md:hidden ml-auto text-[#b4b4b4] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out" />
        </Link>
        <Link
          href="/main/design?type=posts&filter=recent"
          className={`group flex flex-row items-center lg:justify-start md:justify-center justify-start ${
            isClicked === "design"
              ? "bg-side-bar-hover"
              : "hover:bg-side-bar-hover"
          } transition-all duration-300 ease-in-out rounded-[0.8rem] 2xl:px-[1.6rem] lg:px-[1.2rem] md:px-[0.4rem] px-[1.2rem] 2xl:py-[1.4rem] lg:py-[1rem] md:py-[0.4rem] py-[1.2rem]`}
          onClick={() => {
            setIsClicked("design");
            isMobile && setIsOpen(false);
          }}
        >
          <Paintbrush className="lg:w-[2.4rem] lg:h-[2.4rem] md:w-[3.6rem] md:h-[3.6rem] w-[2.4rem] h-[2.4rem]" />
          <span className="2xl:text-[1.8rem] lg:text-[1.6rem] md:text-[1.4rem] text-[1.2rem] font-normal lg:block md:hidden 2xl:ml-[1.6rem] lg:ml-[1.2rem] md:ml-[0.8rem] ml-[1.2rem]">
            Design
          </span>
          <ChevronRight className="w-[2.4rem] h-[2.4rem] lg:block md:hidden ml-auto text-[#b4b4b4] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out" />
        </Link>
      </nav>

      <div className=" flex-col md:items-center md:justify-center lg:items-start xl:justify-start md:absolute hidden md:flex 2xl:bottom-[1.6rem] lg:bottom-[1.4rem] md:bottom-[1.2rem] bottom-[1rem] left-0 w-full">
        {/* 포스트 & 토픽 추가 버튼 */}
        <div className="md:flex flex-col gap-[1.2rem] hidden relative xl:hidden mb-[1.2rem]">
          <button className="flex flex-row items-center justify-center rounded-full bg-side-bar-plus-button w-[4rem] h-[4rem] cursor-pointer hover:bg-side-bar-plus-button-hover backdrop-blur-sm transition-all duration-300 ease-in-out ">
            <Search className="w-[2rem] h-[2rem]" />
          </button>

          <DropdownMenu
            open={sideBarDropDownOpen}
            onOpenChange={setSideBarDropDownOpen}
          >
            <DropdownMenuTrigger asChild>
              <div>
                <button className="flex flex-row items-center justify-center rounded-full bg-side-bar-plus-button w-[4rem] h-[4rem] cursor-pointer hover:bg-side-bar-plus-button-hover backdrop-blur-sm transition-all duration-300 ease-in-out ">
                  <Plus className="w-[2.4rem] h-[2.4rem]" />
                </button>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              side="top"
              className="w-[14rem] p-[0.4rem] z-[150] border border-border rounded-[0.8rem]"
            >
              <DropdownMenuItem
                className="rounded-[0.4rem] py-[0.6rem] px-[0.8rem] w-full min-h-[3.2rem] cursor-pointer"
                onClick={() => {
                  setOpenCreatePostModal(true);
                  setIsModalOpen(true);
                }}
              >
                <span className="md:text-[1.4rem] text-[1.6rem] font-normal leading-none">
                  Create Post
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem className="rounded-[0.4rem] py-[0.6rem] px-[0.8rem] w-full min-h-[3.2rem] cursor-pointer">
                <span className="md:text-[1.4rem] text-[1.6rem] font-normal leading-none">
                  Create Topic
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem className="rounded-[0.4rem] py-[0.6rem] px-[0.8rem] w-full min-h-[3.2rem] cursor-pointer">
                <span className="md:text-[1.4rem] text-[1.6rem] font-normal leading-none">
                  Create Lecture
                </span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* 프로필 */}
        <div className="relative flex flex-row items-center">
          {/* 드롭다운 메뉴 */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div>
                <Avatar className="lg:w-[4rem] lg:h-[4rem] md:w-[4.8rem] md:h-[4.8rem] w-[3.2rem] h-[3.2rem] cursor-pointer">
                  <AvatarImage
                    src={"https://github.com/shadcn.png"}
                    alt="Profile"
                  />
                  <AvatarFallback className="bg-header-profile-bg">
                    <User
                      className="lg:w-[2.4rem] lg:h-[2.4rem] md:w-[2.8rem] md:h-[2.8rem] w-[1.6rem] h-[1.6rem] fill-[var(--color-profile-default-icon-bg)]"
                      strokeWidth={0}
                    />
                  </AvatarFallback>
                </Avatar>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              side="top"
              className="w-[22.4rem] p-[0.4rem] z-[150] border border-border rounded-[0.8rem]"
            >
              <DropdownMenuItem asChild className="rounded-[0.4rem]">
                <Link
                  href="/profile/1?type=posts"
                  className="flex items-center gap-[0.8rem] py-[0.6rem] px-[0.8rem] w-full min-h-[3.2rem]"
                >
                  <User className="!h-[1.6rem] !w-[1.6rem]" />
                  <span className="text-[1.4rem] font-normal leading-none">
                    My Profile
                  </span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                asChild
                className="rounded-[0.4rem] cursor-pointer"
              >
                <Link
                  href="/dashboard?earnings=30&subscribers=30&new-subscribers=30&churned-subscribers=30&subscriber-table=1"
                  className="flex items-center gap-[0.8rem] py-[0.6rem] px-[0.8rem] w-full min-h-[3.2rem]"
                >
                  <LayoutGrid className="!h-[1.6rem] !w-[1.6rem]" />
                  <span className="text-[1.4rem] font-normal leading-none">
                    Dashboard
                  </span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                asChild
                className="rounded-[0.4rem] cursor-pointer"
              >
                <Link
                  href="/admin-dashboard?earnings=30&subscribers=30&new-subscribers=30&churned-subscribers=30&subscriber-table=1"
                  className="flex items-center gap-[0.8rem] py-[0.6rem] px-[0.8rem] w-full min-h-[3.2rem]"
                >
                  <UserStar className="!h-[1.6rem] !w-[1.6rem]" />
                  <span className="text-[1.4rem] font-normal leading-none">
                    Admin Dashboard
                  </span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                asChild
                className="rounded-[0.4rem] cursor-pointer"
              >
                <Link
                  href="/settings"
                  className="flex items-center gap-[0.8rem] py-[0.6rem] px-[0.8rem] w-full min-h-[3.2rem]"
                >
                  <Settings className="!h-[1.6rem] !w-[1.6rem]" />
                  <span className="text-[1.4rem] font-normal leading-none">
                    Settings
                  </span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                asChild
                className="rounded-[0.4rem] cursor-pointer"
              >
                <Link
                  href="/logout"
                  className="flex items-center gap-[0.8rem] py-[0.6rem] px-[0.8rem] w-full min-h-[3.2rem]"
                >
                  <LogOut className="!h-[1.6rem] !w-[1.6rem]" color="#c91313" />
                  <span className="text-[1.4rem] text-[#c91313] font-normal leading-none">
                    Logout
                  </span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="lg:flex hidden flex-col lg:ml-[1.2rem] ml-[0.8rem] flex-1 min-w-0">
            <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] font-normal truncate">
              hong.seung.won
            </span>
            <span className="2xl:text-[1.2rem] lg:text-[1rem] md:text-[1rem] text-[0.6rem] font-normal truncate">
              nonamed814@gmail.com
            </span>
          </div>
        </div>
      </div>

      {breakpoint === "tablet" && openCreatePostModal && (
        <Modal onClick={() => setOpenCreatePostModal(false)}>
          <CreatePostModalContents />
        </Modal>
      )}
    </div>
  );
};

export default SideBar;
