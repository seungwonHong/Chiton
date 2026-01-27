"use client";
import Header from "@/shared/components/Header";
import SideBar from "@/shared/components/SideBar";
import useSidebarStore from "@/shared/store/sidebarStore";
import useDropDownStore from "@/shared/store/dropDownStore";
import "./layout.css";
import { Suspense, useEffect } from "react";
import React from "react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { isOpen, isMobile, setIsOpen } = useSidebarStore();
  const {
    setPostFilterOpen,
    setMobilePostButtonDropDownOpen,
    setSideBarDropDownOpen,
    setManagersModalDropdownOpen,
  } = useDropDownStore();

  useEffect(() => {
    document
      .querySelector("[data-main-content]")
      ?.setAttribute("data-initialized", "");
  }, []);

  return (
    <div
      className="relative flex h-screen w-full 2xl:p-[0.8rem] lg:p-[0.6rem] p-[0.4rem]"
      onClick={() => {
        setPostFilterOpen(false);
        setMobilePostButtonDropDownOpen(false);
        setSideBarDropDownOpen(false);
        setManagersModalDropdownOpen(false);
      }}
    >
      <Suspense fallback={null}>
        <Header />
      </Suspense>
      {/* 데스크톱 사이드바 - 항상 렌더링, transform으로 위치 변경 */}
      {!isMobile && (
        <div
          className={`fixed hidden h-full md:flex flex-col items-center justify-center 2xl:w-[24rem] lg:w-[20rem] md:w-[4.8rem] transition-all duration-400 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-[-120%]"
          }`}
        >
          <SideBar />
        </div>
      )}

      {/* 모바일 사이드바 - 항상 렌더링, transform으로 위치 변경 */}
      {isMobile && (
        <>
          {/* 오버레이 - 사이드바가 열려있을 때만 표시 */}
          {isOpen && (
            <div
              className="fixed inset-0 h-screen z-[150] bg-[var(--side-bar-mobile-background)] backdrop-blur-sm transition-opacity duration-400 md:hidden"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
              role="button"
            />
          )}
          {/* 사이드바 */}
          <div
            className={`fixed h-full md:hidden flex flex-col items-center justify-center w-[16rem] transition-all duration-400 ease-in-out z-[160] ${
              isOpen ? "translate-x-0" : "translate-x-[-120%]"
            }`}
          >
            <SideBar />
          </div>
        </>
      )}

      <main
        data-main-content
        className={`flex-1 w-full md:h-full h-screen ${
          isOpen
            ? "2xl:ml-[24.8rem] lg:ml-[20.6rem] md:ml-[5.2rem] ml-[18rem]"
            : "ml-0"
        } transition-all duration-400 ease-in-out`}
      >
        {children}
      </main>
    </div>
  );
}
