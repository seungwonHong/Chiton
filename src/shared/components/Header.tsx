"use client";
import React, { useEffect } from "react";
import { LayoutGrid, PanelLeft, UserStar } from "lucide-react";
import Link from "next/link";
import { User } from "lucide-react";
import useSidebarStore from "../store/sidebarStore";
import { Search } from "lucide-react";
import { Settings } from "lucide-react";
import { LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useHeaderScroll from "../hooks/useHeaderScroll";
import useUrlType from "../hooks/useUrlType";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const showMainMobileMenu = pathname.includes("/main");

  // 사이드바 상태관리
  const { isOpen, setIsOpen, setIsMobile, isMobile } = useSidebarStore();
  // 헤더 스크롤 상태관리
  const { isHeaderVisible } = useHeaderScroll({ isOpen });

  // 모바일 버전 메뉴 처리
  const { activeTab, handleMenu } = useUrlType({ type: "home" });

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // 모바일 화면 크기 체크
  useEffect(() => {
    const checkIsMobile = () => {
      if (window.innerWidth < 768) {
        setIsOpen(false);
        setIsMobile(true);
      } else {
        if (isMobile) {
          setIsOpen(true);
          setIsMobile(false);
        }
      }
    };

    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, [isMobile]);

  return (
    <div
      className={`fixed 2xl:left-[0.8rem] lg:left-[0.6rem] md:left-[0.4rem] left-0 2xl:right-[0.8rem] lg:right-[0.6rem] md:right-[0.4rem] right-0 md:px-0 md:py-0 py-[0.6rem] px-[1.6rem]  flex flex-col  ${
        isOpen
          ? "bg-transparent 2xl:top-[0.8rem] lg:top-[0.6rem] top-[0.4rem] md:z-[100] z-[150]"
          : "bg-[var(--background)] top-0 2xl:pt-[0.8rem] lg:pt-[0.6rem] pt-[0.4rem] z-[120]"
      } transition-all ease-in-out ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex flex-row items-center md:justify-normal justify-between">
        <Link
          href="/main/home?type=posts&filter=recent"
          className="md:block hidden dark:hidden"
        >
          <img
            src="/icons/LogoBlack.png"
            alt="logo"
            className="2xl:w-[56px] 2xl:h-[56px] lg:w-[40px] lg:h-[40px] md:w-[48px] md:h-[48px]"
          />
        </Link>
        <Link
          href="/main/home?type=posts&filter=recent"
          className="md:dark:block hidden"
        >
          <img
            src="/icons/LogoWhite.png"
            alt="logo"
            className="2xl:w-[56px] 2xl:h-[56px] lg:w-[40px] lg:h-[40px] md:w-[48px] md:h-[48px]"
          />
        </Link>

        <div className="lg:flex md:hidden flex items-center justify-center 2xl:ml-[14rem] lg:ml-[12rem] cursor-pointer lg:rounded-[0.6rem] rounded-[0.4rem] 2xl:w-[2.6rem] lg:w-[2.4rem] w-[3rem] aspect-square hover:bg-[var(--header-drawer-bg)] active:bg-[var(--header-drawer-bg)] transition-all duration-300 ease-in-out">
          <PanelLeft
            className="2xl:w-[1.8rem] lg:w-[1.6rem] w-[2.2rem] aspect-square"
            onClick={handleClick}
          />
        </div>

        {/* 모바일 버전 로고 */}
        <div className="absolute left-1/2 -translate-x-1/2 md:hidden">
          <Link href="/main/home?type=posts&filter=recent">
            <img
              src="/icons/LogoBlack.png"
              alt="logo"
              className="block w-[48px] h-[48px] dark:hidden"
            />
          </Link>
          <Link href="/main/home?type=posts&filter=recent">
            <img
              src="/icons/LogoWhite.png"
              alt="logo"
              className="dark:block hidden w-[48px] h-[48px]"
            />
          </Link>
        </div>

        <div className="relative md:hidden flex flex-row items-center justify-center gap-[1.6rem]">
          <Search className="w-[2.4rem] h-[2.4rem]" />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div>
                <Avatar className="w-[4rem] h-[4rem] cursor-pointer">
                  <AvatarImage
                    src={"https://github.com/shadcn.png"}
                    alt="Profile"
                  />
                  <AvatarFallback className="bg-header-profile-bg">
                    <User
                      className="w-[2.4rem] h-[2.4rem] fill-[var(--color-profile-default-icon-bg)]"
                      strokeWidth={0}
                    />
                  </AvatarFallback>
                </Avatar>
              </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="start"
              side="bottom"
              className="w-[22.4rem] p-[0.4rem] z-[150] border border-border rounded-[0.8rem] mr-[1.6rem]"
            >
              <DropdownMenuItem
                asChild
                className="rounded-[0.4rem] cursor-pointer"
              >
                <Link
                  href="/profile/1?type=posts"
                  className="flex items-center gap-[0.8rem] py-[0.6rem] px-[0.8rem] w-full min-h-[4rem]"
                >
                  <User className="!w-[1.6rem] !h-[1.6rem]" />
                  <span className="text-[1.4rem] font-normal whitespace-nowrap leading-none">
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
                  className="flex items-center gap-[0.8rem] py-[0.6rem] px-[0.8rem] w-full min-h-[4rem]"
                >
                  <LayoutGrid className="!w-[1.6rem] !h-[1.6rem]" />
                  <span className="text-[1.4rem] font-normal whitespace-nowrap leading-none">
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
                  className="flex items-center gap-[0.8rem] py-[0.6rem] px-[0.8rem] w-full min-h-[4rem]"
                >
                  <UserStar className="!w-[1.6rem] !h-[1.6rem]" />
                  <span className="text-[1.4rem] font-normal whitespace-nowrap leading-none">
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
                  className="flex items-center gap-[0.8rem] py-[0.6rem] px-[0.8rem] w-full min-h-[4rem]"
                >
                  <Settings className="!w-[1.6rem] !h-[1.6rem]" />
                  <span className="text-[1.4rem] font-normal whitespace-nowrap leading-none">
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
                  className="flex items-center gap-[0.8rem] py-[0.6rem] px-[0.8rem] w-full min-h-[4rem]"
                >
                  <LogOut className="!w-[1.6rem] !h-[1.6rem]" color="#c91313" />
                  <span className="text-[1.4rem] text-[#c91313] font-normal whitespace-nowrap leading-none">
                    Logout
                  </span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* 모바일 버전 메뉴 */}
      {showMainMobileMenu && (
        <div className="flex md:hidden flex-row w-full items-center mt-[1.6rem] text-[1.6rem] font-normal">
          <div className="flex flex-1 flex-row items-center justify-center w-full">
            <div
              className={`flex flex-col justify-center w-fit cursor-pointer p-[0.4rem] ${
                activeTab === "posts"
                  ? "text-[var(--foreground)]"
                  : "text-gray-500"
              }`}
              onClick={() => handleMenu("posts")}
            >
              <span>Posts</span>
              <div
                className={`w-full h-[0.2rem] rounded-full mt-[0.4rem] ${
                  activeTab === "posts"
                    ? "bg-[var(--foreground)]"
                    : "bg-transparent"
                }`}
              />
            </div>
          </div>
          <div className="flex flex-1 flex-row items-center justify-center w-full">
            <div
              className={`flex flex-col justify-center w-fit cursor-pointer p-[0.4rem] ${
                activeTab === "topics"
                  ? "text-[var(--foreground)]"
                  : "text-gray-500"
              }`}
              onClick={() => handleMenu("topics")}
            >
              <span>Topics</span>
              <div
                className={`w-full h-[0.2rem] rounded-full mt-[0.4rem] ${
                  activeTab === "topics"
                    ? "bg-[var(--foreground)]"
                    : "bg-transparent"
                }`}
              />
            </div>
          </div>
          <div className="flex flex-1 flex-row items-center justify-center w-full">
            <div
              className={`flex flex-col justify-center w-fit cursor-pointer p-[0.4rem] ${
                activeTab === "lectures"
                  ? "text-[var(--foreground)]"
                  : "text-gray-500"
              }`}
              onClick={() => handleMenu("lectures")}
            >
              <span>Lectures</span>
              <div
                className={`w-full h-[0.2rem] rounded-full mt-[0.4rem] ${
                  activeTab === "lectures"
                    ? "bg-[var(--foreground)]"
                    : "bg-transparent"
                }`}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
