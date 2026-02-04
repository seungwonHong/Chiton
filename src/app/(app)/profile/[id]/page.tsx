"use client";
import React, { useRef, useState } from "react";
import Post from "@/shared/components/post/Post";
import SidePanel from "@/shared/components/side-panel/SidePanel";
import MobilePostButton from "@/features/main/components/MobilePostButton";
import ProfileInfoFilter from "@/features/profile/components/ProfileInfoFilter";
import ProfileTabButton from "@/features/profile/components/ProfileTabButton";
import MoreProfileInfo from "@/features/profile/components/MoreProfileInfo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RotateCcw, UserPen, Image, EllipsisVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useParams } from "next/navigation";
import useMediaQuery from "@/shared/hooks/useMediaQuery";
import ProfileEditSheet from "@/features/profile/components/ProfileEditSheet";
import ProfileEditDrawer from "@/features/profile/components/ProfileEditDrawer";

const Profile = () => {
  const params = useParams();
  const id = params.id as string;

  const { breakpoint } = useMediaQuery();
  const [editOpen, setEditOpen] = useState(false);

  const [profileImageFile, setProfileImageFile] = useState<File | null>(null);
  const [profileImagePreview, setProfileImagePreview] = useState<string | null>(
    null,
  );
  const profileImageInputRef = useRef<HTMLInputElement | null>(null);

  const handleProfileImageClick = () => {
    profileImageInputRef.current?.click();
  };

  const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfileImageFile(file);
      setProfileImagePreview(URL.createObjectURL(file));
    }
    e.target.value = "";
  };

  return (
    <div className="relative flex flex-col items-center justify-center 2xl:mt-[6.4rem] md:mt-[5.6rem] mt-[8rem] 2xl:px-[8rem] lg:px-[6rem] md:px-[3.2rem] px-[1.6rem]">
      <div className="flex flex-col items-start justify-center w-full 2xl:max-w-[150rem] lg:max-w-[130rem] md:max-w-[100rem]">
        {/* 프로필 헤더 */}
        <div className="flex flex-col w-full">
          <div className="flex flex-row items-center lg:gap-[2.4rem] md:gap-[1.6rem] gap-[1.2rem] w-full">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="lg:w-[6.4rem] lg:h-[6.4rem] md:w-[7.2rem] md:h-[7.2rem] w-[6.4rem] h-[6.4rem] cursor-pointer">
                  <AvatarImage
                    src={profileImagePreview ?? undefined}
                    alt="Profile"
                  />
                  <AvatarFallback className="bg-header-profile-bg">
                    <UserPen
                      className="lg:w-[3.2rem] lg:h-[3.2rem] md:w-[3.2rem] md:h-[3.2rem] w-[3.2rem] h-[3.2rem] fill-[var(--color-profile-default-icon-bg)]"
                      strokeWidth={0}
                    />
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="start"
                side="bottom"
                className="flex flex-col gap-[0.4rem] w-[14rem] p-[0.4rem] z-[150] border border-border rounded-[0.8rem] bg-popover"
              >
                <DropdownMenuItem
                  className={`flex items-center gap-[0.4rem] rounded-[0.4rem] py-[0.6rem] px-[0.8rem] w-full md:min-h-[3.2rem] min-h-[4rem] cursor-pointer outline-none `}
                  onSelect={() => handleProfileImageClick()}
                >
                  <Image className="!w-[1.6rem] !h-[1.6rem]" />
                  <span className="text-[1.6rem] font-normal leading-none">
                    Choose File
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className={`rounded-[0.4rem] py-[0.6rem] px-[0.8rem] w-full md:min-h-[3.2rem] min-h-[4rem] cursor-pointer outline-none `}
                  onClick={() => {
                    setProfileImageFile(null);
                    setProfileImagePreview(null);
                  }}
                >
                  <RotateCcw className="!w-[1.6rem] !h-[1.6rem]" />
                  <span className="text-[1.6rem] font-normal leading-none">
                    Reset Image
                  </span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <input
              ref={profileImageInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleProfileImageChange}
            />

            <div className="flex flex-col">
              <h1 className="2xl:text-[3.6rem] md:text-[3rem] text-[2.4rem] font-medium">
                hong.seung.won
              </h1>
              <span className="2xl:text-[1.6rem] md:text-[1.4rem] text-[1.2rem] font-normal text-[#808080]">
                nonamed814@gmail.com
              </span>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex xl:hidden items-center justify-center p-[0.4rem] cursor-pointer hover:bg-side-panel-hover transition-all duration-300 ease-in-out rounded-[0.4rem] ml-auto">
                  <EllipsisVertical
                    className="md:w-[3.2rem] md:h-[3.2rem] w-[2.4rem] h-[2.4rem]"
                    strokeWidth={1.5}
                  />
                </div>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="end"
                side="bottom"
                className="w-[14rem] p-[0.4rem] z-[150] border border-border rounded-[0.8rem] bg-popover"
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
          </div>
        </div>

        <div className="flex xl:hidden flex-row items-center w-full md:mt-[4.8rem] mt-[3.2rem]">
          <div className="flex flex-1 flex-col items-center justify-center">
            <span className="text-[1.4rem] md:text-[1.6rem] font-medium">
              120
            </span>
            <span className="text-foreground text-[1.4rem] md:text-[1.6rem] font-normal">
              Followers
            </span>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center">
            <span className="text-[1.4rem] md:text-[1.6rem] font-medium">
              120
            </span>
            <span className="text-foreground text-[1.4rem] md:text-[1.6rem] font-normal">
              Following
            </span>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center">
            <span className="text-[1.4rem] md:text-[1.6rem] font-medium">
              120
            </span>
            <span className="text-foreground text-[1.4rem] md:text-[1.6rem] font-normal">
              Subscribers
            </span>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center">
            <span className="text-[1.4rem] md:text-[1.6rem] font-medium">
              120
            </span>
            <span className="text-foreground text-[1.4rem] md:text-[1.6rem] font-normal">
              Subscribing
            </span>
          </div>
        </div>

        {/* 팔로잉 & 구독 버튼(자기 자신이 아닌 경우에만 렌더링하도록 해야함) */}
        <ProfileTabButton
          contents={{
            Follow: { active: "Following", inactive: "Follow" },
            Subscribe: { active: "Subscribing", inactive: "Subscribe" },
          }}
          type="profilePage"
        />

        <MoreProfileInfo />

        {/* 게시물 필터 */}
        <ProfileInfoFilter />

        {/* 포스트 & 사이드 패널 */}
        <div className="relative flex flex-row justify-center w-full 2xl:gap-[7.2rem] lg:gap-[5.6rem] md:gap-[4.8rem] 2xl:mt-[6.4rem] lg:mt-[4.8rem] md:mt-[3.2rem] mt-[1.6rem] z-[110]">
          <div className="flex flex-col w-full 2xl:max-w-[80rem] lg:max-w-[64rem] md:max-w-[56rem] xl:min-w-[40rem]">
            {/* 포스트 */}
            {Array.from({ length: 10 }).map((_, index) => (
              <React.Fragment key={index}>
                <Post id={index.toString()} link={true} />
                {index < 9 && (
                  <div className="2xl:my-[2.4rem] lg:my-[2rem] md:my-[1.6rem] my-[1.2rem] bg-divide-color w-full h-[0.5px]" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* 사이드 패널 */}
          <SidePanel usage="profile" />
        </div>
      </div>

      {/* 모바일 포스트 작성 버튼 */}
      <MobilePostButton />

      {(breakpoint === "desktop" || breakpoint === "tablet") && (
        <ProfileEditSheet editOpen={editOpen} setEditOpen={setEditOpen} />
      )}
      {breakpoint === "mobile"  && (
        <ProfileEditDrawer editOpen={editOpen} setEditOpen={setEditOpen} />
      )}
    </div>
  );
};

export default Profile;
