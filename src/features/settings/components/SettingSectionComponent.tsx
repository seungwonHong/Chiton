"use client";
import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import Switch from "react-switch";

interface Props {
  title: string;
  info?: string;
  toggle?: boolean;
}

const SettingSectionComponent = ({ title, info, toggle = false }: Props) => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <div className="group flex flex-row items-center justify-between 2xl:w-[84rem] 2xl:px-[2.4rem] 2xl:py-[1.6rem] lg:w-[72rem] lg:px-[2rem] lg:py-[1.2rem] md:w-[56rem] md:px-[1.6rem] md:py-[0.8rem] w-full px-[1.2rem] py-[0.8rem] bg-side-bar-hover hover:bg-settings-section-bg-hover transition-all duration-300 ease-in-out rounded-[0.8rem] cursor-pointer min-w-0">
      <h3 className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.6rem] font-normal shrink-0">
        {title}
      </h3>

      <div className="flex flex-row items-center 2xl:gap-[0.8rem] lg:gap-[0.6rem] md:gap-[0.4rem] gap-[0.2rem] ml-[3.2rem] min-w-0">
        {toggle ? (
          <>
            <Switch
              checked={isToggle}
              onChange={setIsToggle}
              onColor="#6299FF" // 켜졌을 때 색상 (기존 CheckBox와 동일)
              offColor="#ccc" // 꺼졌을 때 색상
              height={24} // 높이
              width={48} // 너비
              uncheckedIcon={false}
              checkedIcon={false}
            />
          </>
        ) : (
          <>
            {info && (
              <p className="2xl:text-[1.4rem] lg:text-[1.2rem] md:text-[1rem] text-[1.4rem] font-normal text-[var(--settings-section-info)] truncate group-hover:text-settings-section-info-hover transition-all duration-300 ease-in-out">
                {info}
              </p>
            )}
            <ChevronRight className="w-[2.4rem] h-[2.4rem] shrink-0 text-settings-section-arrow group-hover:text-settings-section-info-hover transition-all duration-300 ease-in-out" />
          </>
        )}
      </div>
    </div>
  );
};

export default SettingSectionComponent;
