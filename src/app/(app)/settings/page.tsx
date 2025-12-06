import React from "react";
import { Settings as SettingsIcon } from "lucide-react";
import SettingSectionComponent from "@/features/settings/components/SettingSectionComponent";

const Settings = async () => {
  return (
    <div className="relative flex flex-col items-center justify-center 2xl:mt-[6.4rem] md:mt-[5.6rem] mt-[8rem] 2xl:px-[8rem] lg:px-[6rem] md:px-[3.2rem] px-[1.6rem] w-full">
      <div className="flex flex-col items-start justify-center w-full 2xl:max-w-[150rem] lg:max-w-[130rem] md:max-w-[100rem] 2xl:mb-[6.4rem] md:mb-[5.6rem] mb-[8rem]">
        {/* 제목 */}
        <div className=" flex flex-row w-full items-center 2xl:gap-[1.6rem] lg:gap-[1.2rem] md:gap-[0.8rem] gap-[0.4rem]">
          <SettingsIcon className="w-[3.6rem] h-[3.6rem]" />
          <h1 className="2xl:text-[3.6rem] lg:text-[3.2rem] md:text-[2.8rem] text-[3.2rem] font-medium">
            Settings
          </h1>
        </div>

        {/* 세팅 내용 */}
        <div className="flex flex-col mx-auto 2xl:mt-[6rem] lg:mt-[5rem] md:mt-[4rem] mt-[3rem] 2xl:gap-[4.8rem] lg:gap-[3.2rem] md:gap-[2.4rem] gap-[1.6rem] w-full md:items-center">
          {/* 내 계정 */}
          <div className="flex flex-col">
            <h2 className="2xl:text-[2.4rem] lg:text-[2.2rem] md:text-[2rem] text-[2.4rem] font-medium">
              My Account
            </h2>
            {/* 내 계정 세팅 내용 */}
            <div className="flex flex-col 2xl:mt-[2.4rem] lg:mt-[2rem] md:mt-[1.6rem] mt-[1.4rem] 2xl:gap-[1.4rem] lg:gap-[1.2rem] md:gap-[1rem] gap-[0.8rem]">
              <SettingSectionComponent
                title="Email Address"
                info="nonamed814@gmail.com"
              />
              <SettingSectionComponent title="ID" info="nonamed814" />
              <SettingSectionComponent title="Nickname" info="hong.seung.won" />
              <SettingSectionComponent title="Password" />
              <SettingSectionComponent title="Nation" info="Korea" />
              <SettingSectionComponent title="Sex" info="Male" />
              <SettingSectionComponent title="Age" info="21" />
              <SettingSectionComponent title="Account Status" info="Active" />
            </div>
          </div>

          {/* 플랫폼 구독 플랜 */}
          <div className="flex flex-col">
            <h2 className="2xl:text-[2.4rem] lg:text-[2.2rem] md:text-[2rem] text-[2.4rem] font-medium">
              Subscription
            </h2>
            <div className="flex flex-col 2xl:mt-[2.4rem] lg:mt-[2rem] md:mt-[1.6rem] mt-[1.4rem] 2xl:gap-[1.4rem] lg:gap-[1.2rem] md:gap-[1rem] gap-[0.8rem]">
              <SettingSectionComponent
                title="Platform Subscription Plan"
                info="Free"
              />
            </div>
          </div>

          {/* 프라이버시*/}
          <div className="flex flex-col">
            <h2 className="2xl:text-[2.4rem] lg:text-[2.2rem] md:text-[2rem] text-[2.4rem] font-medium">
              Privacy
            </h2>
            <div className="flex flex-col 2xl:mt-[2.4rem] lg:mt-[2rem] md:mt-[1.6rem] mt-[1.4rem] 2xl:gap-[1.4rem] lg:gap-[1.2rem] md:gap-[1rem] gap-[0.8rem]">
              <SettingSectionComponent title="Blocked Accounts" info="23" />
              <SettingSectionComponent
                title="Personalized Advertisements"
                toggle={true}
              />
            </div>
          </div>

          {/* 알림*/}
          <div className="flex flex-col">
            <h2 className="2xl:text-[2.4rem] lg:text-[2.2rem] md:text-[2rem] text-[2.4rem] font-medium">
              Notification
            </h2>
            <div className="flex flex-col 2xl:mt-[2.4rem] lg:mt-[2rem] md:mt-[1.6rem] mt-[1.4rem] 2xl:gap-[1.4rem] lg:gap-[1.2rem] md:gap-[1rem] gap-[0.8rem]">
              <SettingSectionComponent
                title="Web push notifications"
                toggle={true}
              />
              <SettingSectionComponent
                title="Email notifications"
                toggle={true}
              />
              <SettingSectionComponent
                title="Mention notifications"
                toggle={true}
              />
              <SettingSectionComponent
                title="Follower notifications"
                toggle={true}
              />
              <SettingSectionComponent
                title="Subscriber notifications"
                toggle={true}
              />
            </div>
          </div>

          {/* 수익화 설정 */}
          <div className="flex flex-col">
            <h2 className="2xl:text-[2.4rem] lg:text-[2.2rem] md:text-[2rem] text-[2.4rem] font-medium">
              Monetization
            </h2>
            <div className="flex flex-col 2xl:mt-[2.4rem] lg:mt-[2rem] md:mt-[1.6rem] mt-[1.4rem] 2xl:gap-[1.4rem] lg:gap-[1.2rem] md:gap-[1rem] gap-[0.8rem]">
              <SettingSectionComponent title="Advertisement" info="2" />
              <SettingSectionComponent
                title="Personal Subscription Plan"
                info="Active"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
