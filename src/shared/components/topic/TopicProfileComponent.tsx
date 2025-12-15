import React from "react";
import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {};

const TopicProfileComponent = (props: Props) => {
  const profileImages = [
    "https://github.com/shadcn.png",
    "https://github.com/maxleiter.png",
    "https://github.com/evilrabbit.png",
    "/images/hsw.jpeg",
  ];
  return (
    <div className="flex flex-row items-center ">
      <div className="flex flex-row items-center w-fit">
        <div className="flex -space-x-[0.8rem] *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background">
          {Array.from({ length: 4 }).map((_, index) => (
            <Avatar
              className="md:w-[3.2rem] md:h-[3.2rem] w-[2.8rem] h-[2.8rem]"
              key={index}
            >
              <AvatarImage src={profileImages[index]} alt="Profile" />
              <AvatarFallback className="bg-header-profile-bg">
                <User
                  className="w-[2.4rem] h-[2.4rem] fill-[var(--color-profile-default-icon-bg)]"
                  strokeWidth={0}
                />
              </AvatarFallback>
            </Avatar>
            // <div
            //   className={`shrink-0 flex items-center justify-center rounded-full md:w-[3.2rem] md:h-[3.2rem] w-[2.8rem] h-[2.8rem] bg-[var(--color-topic-profile-bg)] ${
            //     index > 0 ? "-ml-[0.8rem]" : ""
            //   } z-[${index + 1}]`}
            //   key={index}
            // >
            //   <User
            //     className="w-[2.4rem] h-[2.4rem] text-[var(--color-topic-profile-text)]"
            //     strokeWidth={1.5}
            //   />
            // </div>
          ))}
        </div>
        <span className="md:text-[1.4rem] text-[1.2rem] font-normal ml-[0.8rem]">
          + 124
        </span>
      </div>
    </div>
  );
};

export default TopicProfileComponent;
