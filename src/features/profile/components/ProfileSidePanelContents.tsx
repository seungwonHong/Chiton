import React from "react";
import ProfileTabButton from "./ProfileTabButton";

const ProfileSidePanelContents = () => {
  return (
    <>
      {/* 팔로잉 & 구독 버튼(자기 자신이 아닌 경우에만 렌더링하도록 해야함) */}
      <ProfileTabButton
        contents={{
          Follow: { active: "Following", inactive: "Follow" },
          Subscribe: { active: "Subscribing", inactive: "Subscribe" },
        }}
        type="sidePanel"
      />

      {/* Social */}
      <div className="flex flex-col mt-[4rem]">
        <h2 className="text-[1.6rem] font-medium">Social</h2>
        <div className="grid grid-cols-2 gap-[0.4rem] mt-[1.2rem] text-[1.4rem] font-normal text-[#808080]">
          <div className="flex flex-col items-center justify-center">
            <span>120</span>
            <span className="text-foreground">Followers</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span>120</span>
            <span className="text-foreground">Following</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span>120</span>
            <span className="text-foreground">Subscribers</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span>120</span>
            <span className="text-foreground">Subscribing</span>
          </div>
        </div>
      </div>

      {/* Status */}
      <div className="flex flex-col w-full mt-[4rem]">
        <h2 className="text-[1.6rem] font-medium">Status</h2>
        <span className="text-[1.4rem] font-normal text-[#808080] mt-[1.2rem]">
          Exploring the intersection of code and design
        </span>
      </div>

      {/* Introduction */}
      <div className="flex flex-col">
        <h2 className="text-[1.6rem] font-medium mt-[4rem]">Introduction</h2>
        <p className="text-[1.4rem] font-normal text-[#808080] mt-[1.2rem]">
          I am a front-end developer with a strong interest in creating
          interactive and user-friendly web applications. I enjoy working with
          modern frameworks like Next.js and React, and I value clean design as
          much as solid code. Constantly curious, I explore new tools and
          technologies to improve my skills and bring fresh ideas into projects.
          Beyond coding, I enjoy sharing knowledge, collaborating with others,
          and building meaningful digital experiences that connect people.
        </p>
      </div>

      {/* Links */}
      <div className="flex flex-col w-full mt-[4rem]">
        <h2 className="text-[1.6rem] font-medium">Links</h2>
        <div className="flex flex-col gap-[0.2rem] mt-[1.2rem]">
          {Array.from({ length: 5 }).map((_, index) => (
            <a
              key={index}
              href={`https://www.google.com`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit text-[1.4rem] font-normal text-[#808080] hover:text-primary-color transition-colors duration-300 ease-in-out"
            >
              instagram
            </a>
          ))}
        </div>
      </div>

      {/* Tech Stacks */}
      <div className="flex flex-col w-full mt-[4rem]">
        <h2 className="text-[1.6rem] font-medium">Tech Stacks</h2>
        <div className="flex flex-row items-center gap-[0.8rem] flex-wrap mt-[1.2rem]">
          {Array.from({ length: 10 }).map((_, index) => (
            <span
              key={index}
              className="text-[1.4rem] font-normal text-[#808080]"
            >
              # Next.js
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProfileSidePanelContents;
