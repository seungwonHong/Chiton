"use client";
import React, { useEffect, useRef, useState } from "react";
import { LayoutGrid, PanelLeft, UserStar } from "lucide-react";
import Link from "next/link";
import { User } from "lucide-react";
import useSidebarStore from "../store/sidebarStore";
import { Search } from "lucide-react";
import useDropDownStore from "../store/dropDownStore";
import DropDownMenu from "./DropDownMenu";
import { Settings } from "lucide-react";
import { LogOut } from "lucide-react";
import ProfileImageComponent from "./ProfileImageComponent";

const Header = () => {
  const { isOpen, setIsOpen, setIsMobile, isMobile } = useSidebarStore();
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const { mobileProfileDropDownOpen, setMobileProfileDropDownOpen } =
    useDropDownStore();
  const lastScrollY = useRef(0);
  const scrollThreshold = 10;

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

  // 스크롤 이벤트 처리 (사이드바가 닫힌 상태에서만)
  useEffect(() => {
    if (isOpen) {
      setIsHeaderVisible(true);
      return;
    }

    const handleScroll = () => {
      const currentScrollY =
        window.scrollY || document.documentElement.scrollTop;

      if (currentScrollY <= scrollThreshold) {
        setIsHeaderVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      if (currentScrollY > lastScrollY.current) {
        setIsHeaderVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        setIsHeaderVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <div
      className={`fixed 2xl:left-[0.8rem] lg:left-[0.6rem] md:left-[0.4rem] left-0 2xl:right-[0.8rem] lg:right-[0.6rem] md:right-[0.4rem] right-0 md:px-0 md:py-0 py-[1.6rem] px-[1.6rem]  flex flex-row items-center md:justify-normal justify-between ${
        isOpen
          ? "bg-transparent 2xl:top-[0.8rem] lg:top-[0.6rem] top-[0.4rem] md:z-[100] z-[150]"
          : "bg-[var(--background)] top-0 2xl:pt-[0.8rem] lg:pt-[0.6rem] pt-[0.4rem] z-[120]"
      } transition-all ease-in-out ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Link
        href="/main/home?type=posts&filter=recent"
        className="md:block hidden dark:hidden"
      >
        <img
          src="/icons/LogoBlack.png"
          alt="logo"
          className="2xl:w-[56px] 2xl:h-[56px] md:w-[48px] md:h-[48px] w-[40px] h-[40px]"
        />
      </Link>
      <Link
        href="/main/home?type=posts&filter=recent"
        className="md:dark:block hidden"
      >
        <img
          src="/icons/LogoWhite.png"
          alt="logo"
          className="2xl:w-[56px] 2xl:h-[56px] md:w-[48px] md:h-[48px] w-[40px] h-[40px]"
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
        <Link href="/main/home">
          <img
            src="/icons/LogoBlack.png"
            alt="logo"
            className="block w-[60px] h-[60px] dark:hidden"
          />
        </Link>
        <Link href="/main/home">
          <img
            src="/icons/LogoWhite.png"
            alt="logo"
            className="dark:block hidden w-[60px] h-[60px]"
          />
        </Link>
      </div>

      <div className="relative md:hidden flex flex-row items-center justify-center gap-[1.6rem]">
        <Search className="w-[2.4rem] h-[2.4rem]" />
        <ProfileImageComponent
          bgSize="w-[4rem] h-[4rem]"
          defaultProfileSize="w-[2.4rem] h-[2.4rem]"
          onClick={(e?: React.MouseEvent<HTMLDivElement>) => {
            e?.stopPropagation();
            setMobileProfileDropDownOpen(!mobileProfileDropDownOpen);
          }}
        />

        {mobileProfileDropDownOpen && (
          <DropDownMenu className="top-[6.4rem] right-[0]" align="right">
            <Link
              href="/profile/1?type=posts"
              className={`flex flex-row items-center justify-start gap-[1rem] px-[1.4rem] py-[0.8rem] rounded-[0.8rem] w-full hover:bg-drop-down-menu-hover cursor-pointer transition-all duration-300 ease-in-out`}
            >
              <User className="w-[2.4rem] h-[2.4rem]" />
              <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.6rem] font-normal whitespace-nowrap">
                My Profile
              </span>
            </Link>
            <Link
              href="/dashboard?earnings=30&subscribers=30&new-subscribers=30&churned-subscribers=30&subscriber-table=1"
              className={`flex flex-row items-center justify-start gap-[1rem] px-[1.4rem] py-[0.8rem] rounded-[0.8rem] w-full hover:bg-drop-down-menu-hover cursor-pointer transition-all duration-300 ease-in-out`}
            >
              <LayoutGrid className="w-[2.4rem] h-[2.4rem]" />
              <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.6rem] font-normal whitespace-nowrap">
                Dashboard
              </span>
            </Link>
            <Link
              href="/admin-dashboard?earnings=30&subscribers=30&new-subscribers=30&churned-subscribers=30&subscriber-table=1"
              className={`flex flex-row items-center justify-start gap-[1rem] px-[1.4rem] py-[0.8rem] rounded-[0.8rem] w-full hover:bg-drop-down-menu-hover cursor-pointer transition-all duration-300 ease-in-out`}
            >
              <UserStar className="w-[2.4rem] h-[2.4rem]" />
              <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.6rem] font-normal whitespace-nowrap">
                Admin Dashboard
              </span>
            </Link>
            <Link
              href="/settings"
              className={`flex flex-row items-center justify-start gap-[1rem] px-[1.4rem] py-[0.8rem] rounded-[0.8rem] w-full hover:bg-drop-down-menu-hover cursor-pointer transition-all duration-300 ease-in-out`}
            >
              <Settings className="w-[2.4rem] h-[2.4rem]" />
              <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.6rem] font-normal whitespace-nowrap">
                Settings
              </span>
            </Link>
            <div
              className={`flex flex-row items-center justify-start gap-[1rem] px-[1.4rem] py-[0.8rem] rounded-[0.8rem] w-full hover:bg-drop-down-menu-hover cursor-pointer transition-all duration-300 ease-in-out`}
            >
              <LogOut className="w-[2.4rem] h-[2.4rem]" />
              <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.6rem] font-normal whitespace-nowrap">
                Logout
              </span>
            </div>
          </DropDownMenu>
        )}
      </div>
    </div>
  );
};

export default Header;
