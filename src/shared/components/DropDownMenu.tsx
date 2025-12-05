"use client";
import React from "react";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "right";
}

const DropDownMenu = ({ children, className, align = "left" }: Props) => {
  return (
    <motion.div
      initial={{ scale: 0.9, x: align === "left" ? -10 : 10, y: -15 }} // 왼쪽(-10) 위(-5)에서 시작
      animate={{ scale: 1, x: 0, y: 0 }} // 원래 위치로
      exit={{ scale: 0.9, x: align === "left" ? -10 : 10, y: -15 }}
      transition={{
        type: "spring",
        stiffness: 600,
        damping: 20,
      }}
      className={`absolute flex flex-col items-center justify-center z-[120] p-[0.4rem] backdrop-blur-sm bg-drop-down-menu-background border-[0.8px] border-drop-down-menu-border lg:rounded-[1.4rem] rounded-[1.2rem] shadow-lg gap-[0.4rem] ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default DropDownMenu;
