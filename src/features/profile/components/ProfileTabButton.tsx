"use client";
import React, { useState } from "react";

interface Props {
  contents: Record<string, { active: string; inactive: string }>;
  type: "profilePage" | "sidePanel";
}

const ProfileTabButton = ({ contents, type }: Props) => {
  const [activeTab, setActiveTab] = useState<string[]>([]);

  return (
    <div
      className={`flex flex-row items-center gap-[0.8rem] w-full mt-[2rem] text-[1.4rem] font-normal ${
        type === "profilePage" ? "mb-[2rem] xl:hidden" : ""
      }`}
    >
      {Object.keys(contents).map((key) => {
        const isActive = activeTab.includes(key);
        return (
          <button
            key={key}
            className={`flex-1 w-full cursor-pointer rounded-[0.8rem] px-[1.6rem] py-[0.8rem] border transition-colors duration-300 ease-in-out ${
              isActive
                ? `bg-transparent ${
                    key !== "Subscribe"
                      ? "text-foreground border-foreground"
                      : "text-primary-color border-primary-color"
                  }`
                : `border-transparent ${
                    key !== "Subscribe"
                      ? "bg-[var(--color-button-bg)] hover:bg-[var(--color-button-hover)] text-[var(--color-button-text)]"
                      : "text-white hover:bg-primary-color-hover bg-primary-color"
                  }`
            }`}
            onClick={() =>
              setActiveTab((prev) =>
                prev.includes(key)
                  ? prev.filter((item) => item !== key)
                  : [...prev, key]
              )
            }
          >
            {isActive ? contents[key].active : contents[key].inactive}
          </button>
        );
      })}
    </div>
  );
};

export default ProfileTabButton;
