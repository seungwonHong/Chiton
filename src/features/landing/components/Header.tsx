"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import "@/features/landing/styles/header.css";
import { useSectionObserver } from "../hooks/useSectionObserver";

const Header = () => {
  const [clicked, setClicked] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const isManualScroll = useRef(false);
  const sections = ["section-0", "section-1", "section-2", "section-3", "section-4"];

  useSectionObserver({ isManualScroll, setClicked, sections });

  const handleClick = (value: number) => {
    isManualScroll.current = true;
    setClicked(value);
    const element = document.getElementById(`section-${value}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setTimeout(() => {
      isManualScroll.current = false;
    }, 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky top-[2rem] 2xl:mt-[4rem] lg:mt-[3rem] mt-[2rem] flex flex-row items-center justify-between 2xl:p-[1.6rem] lg:p-[0.6rem] md:p-[0.4rem] p-[0.6rem] 2xl:rounded-[2.4rem] lg:rounded-[1.2rem] rounded-[1.2rem] mx-auto 2xl:w-[1067px] lg:w-[704px] w-[343px] md:w-[600px] md:bg-[var(--header-background)] z-50 backdrop-blur-sm">
      {/* 화면상 맨 위면 글씨였다가 스크롤하면 로고로 바뀌도록 설계 -> 로고는 등장할 때 살짝 회전*/}
      {isScrolled ? (
        // 스크롤 시 로고 (회전 애니메이션)
        <AnimatePresence mode="wait">
          <motion.div
            key="logo"
            initial={{ rotate: 30, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -30, opacity: 0 }}
            transition={
              {
                type: "spring",
                stiffness: 200,
                damping: 20,
                duration: 0.6,
              }
            }
          >
            <img
              src="/icons/LogoBlack.png"
              alt="logo light"
              className="2xl:w-[56px] 2xl:h-[56px] lg:w-[48px] lg:h-[48px] md:w-[36px] md:h-[36px] w-[40px] h-[40px] dark:hidden block"
            />
            <img
              src="/icons/LogoWhite.png"
              alt="logo dark"
              className="2xl:w-[56px] 2xl:h-[56px] lg:w-[48px] lg:h-[48px] md:w-[36px] md:h-[36px] w-[40px] h-[40px] dark:block hidden"
            />
          </motion.div>
        </AnimatePresence>
      ) : (
        // 맨 위일 때 텍스트
        <span className="2xl:text-[2.4rem] lg:text-[2rem] md:text-[2rem] text-[2rem] font-medium">
          Chiton
        </span>
      )}

      <div className="md:flex hidden flex-row items-center justify-center 2xl:text-[2rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1rem] font-normal 2xl:gap-[2rem] md:gap-[1.6rem] gap-[1.2rem] text-[var(--header-text)]">
        <span
          className={`cursor-pointer hover:text-[var(--foreground)] transition-all duration-300 ${
            clicked === 1 ? "text-[var(--foreground)]" : ""
          }`}
          onClick={() => {
            handleClick(1);
          }}
        >
          Fields
        </span>
        <span
          className={`cursor-pointer hover:text-[var(--foreground)] transition-all duration-300 ${
            clicked === 2 ? "text-[var(--foreground)]" : ""
          }`}
          onClick={() => {
            handleClick(2);
          }}
        >
          Journey
        </span>
        <span
          className={`cursor-pointer hover:text-[var(--foreground)] transition-all duration-300 ${
            clicked === 3 ? "text-[var(--foreground)]" : ""
          }`}
          onClick={() => {
            handleClick(3);
          }}
        >
          Subscription
        </span>
        <span
          className={`cursor-pointer hover:text-[var(--foreground)] transition-all duration-300 ${
            clicked === 4 ? "text-[var(--foreground)]" : ""
          }`}
          onClick={() => {
            handleClick(4);
          }}
        >
          Pricing
        </span>
      </div>

      <Link
        href="/login"
        className="bg-[var(--login-button)] 2xl:px-[3.2rem] 2xl:py-[1.2rem] lg:px-[2.8rem] lg:py-[1rem] px-[2.4rem] py-[1rem] 2xl:rounded-[1.2rem] lg:rounded-[0.8rem] rounded-[0.8rem] font-normal hover:bg-[var(--login-button-hover)] transition-all duration-300 ease-in-out"
      >
        <span className="2xl:text-[2rem] lg:text-[1.6rem] text-[1.4rem] font-medium">
          Login
        </span>
      </Link>
    </div>
  );
};

export default Header;
