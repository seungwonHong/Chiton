"use client";
import SubscriptionCard from "@/shared/components/SubscriptionCard";
import React, { Suspense } from "react";
import TabButton from "@/shared/components/TabButton";
import { useTabStore } from "../store/tabButton";

const Plan = () => {
  const { activeTab } = useTabStore();

  return (
    <section
      id="section-4"
      className="2xl:w-[160rem] lg:w-[120rem] md:w-[56rem] w-[37rem] mx-auto 2xl:mt-[20rem] lg:mt-[14rem] md:mt-[10rem] mt-[12rem]"
    >
      <h2
        className="2xl:text-[5.6rem] xl:text-[4.8rem] md:text-[3.6rem] text-[2.8rem] font-normal mx-auto text-center"
        data-aos="fade-up"
      >
        Choose your plan
      </h2>
      <span
        className="block 2xl:text-[2rem] lg:text-[1.6rem] text-[1.4rem] font-normal text-[#BBBBBB] mx-auto text-center 2xl:w-[52rem] lg:w-[36rem] md:w-[24rem] w-[26rem]"
        data-aos="fade-up"
      >
        Select the subscription plan for platform that fits your needs and
        unlock exclusive benefits.
      </span>

      <div
        className="lg:hidden flex flex-col items-center justify-center md:mt-[2.4rem] mt-[1.6rem]"
        data-aos="fade-up"
      >
        
        <Suspense fallback={<div></div>}>
          <TabButton tabs={["Free", "Pro", "Ultimate"]} type="landing" />
        </Suspense>

        {activeTab === "Free" && (
          <SubscriptionCard
            planName="Free"
            price="0"
            features={[
              "Free to post & create topics",
              "Post length up to 500 characters",
              "image upload up to 5MB",
              "Video upload up to 100MB",
              "Create up to 30 topics",
            ]}
            type="plan"
            buttonText="Get Started"
            buttonLink="/"
            size="small"
            className="md:mt-[2.4rem] mt-[1.6rem]"
          />
        )}
        {activeTab === "Pro" && (
          <SubscriptionCard
            planName="Pro"
            price="4.99"
            features={[
              "Free to post & create topics",
              "Post length up to 500 characters",
              "image upload up to 20MB",
              "Video upload up to 250MB",
              "Create up to 100 topics",
              "Access to personal subscription plan",
              "50% fewer ads",
            ]}
            type="plan"
            buttonText="Subscribe"
            buttonLink="/"
            size="small"
            className="md:mt-[2.4rem] mt-[1.6rem]"
          />
        )}
        {activeTab === "Ultimate" && (
          <SubscriptionCard
            planName="Ultimate"
            price="6.99"
            features={[
              "Free to post & create topics",
              "Post length up to 500 characters",
              "image upload up to 50MB",
              "Video upload up to 500MB",
              "Unlimited topic creation",
              "Access to personal subscription plan",
              "No ads",
            ]}
            type="plan"
            buttonText="Subscribe"
            buttonLink="/"
            size="small"
            className="md:mt-[2.4rem] mt-[1.6rem]"
          />
        )}
      </div>

      <div
        className="lg:grid lg:grid-cols-3 hidden 2xl:gap-[2.4rem] lg:gap-[2rem] gap-[1.6rem] 2xl:mt-[6.4rem] lg:mt-[4rem] w-full mx-auto"
        data-aos="fade-up"
      >
        <SubscriptionCard
          planName="Free"
          price="0"
          features={[
            "Free to post & create topics",
            "Post length up to 500 characters",
            "image upload up to 5MB",
            "Video upload up to 100MB",
            "Create up to 30 topics",
          ]}
          type="plan"
          buttonText="Get Started"
          buttonLink="/"
          size="large"
        />
        <SubscriptionCard
          planName="Pro"
          price="4.99"
          features={[
            "Free to post & create topics",
            "Post length up to 500 characters",
            "image upload up to 20MB",
            "Video upload up to 250MB",
            "Create up to 100 topics",
            "Access to personal subscription plan",
            "50% fewer ads",
          ]}
          type="plan"
          buttonText="Subscribe"
          buttonLink="/"
          size="large"
        />
        <SubscriptionCard
          planName="Ultimate"
          price="6.99"
          features={[
            "Free to post & create topics",
            "Post length up to 500 characters",
            "image upload up to 50MB",
            "Video upload up to 500MB",
            "Unlimited topic creation",
            "Access to personal subscription plan",
            "No ads",
          ]}
          type="plan"
          buttonText="Subscribe"
          buttonLink="/"
          size="large"
        />
      </div>
    </section>
  );
};

export default Plan;
