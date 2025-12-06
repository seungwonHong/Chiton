import React from "react";
import { Check } from "lucide-react";
import Button from "./Button";

interface SubscriptionCardProps {
  planName: string;
  price: string;
  features: string[];
  type: "subscription" | "plan";
  buttonText: string;
  buttonLink: string;
  size: "small" | "large";
  className?: string;
}

const SubscriptionCard = ({
  planName,
  price,
  features,
  type,
  buttonText,
  buttonLink,
  size,
  className,
}: SubscriptionCardProps) => {
  return (
    <div
      className={`flex flex-col 2xl:rounded-[3.2rem] lg:rounded-[2.4rem] md:rounded-[1.6rem] rounded-[1.2rem] lg:bg-[#F5F7FC] 2xl:h-[82rem] lg:h-[62rem] md:h-[46rem] h-[48rem] 2xl:p-[3.2rem] lg:p-[2.4rem] md:p-[1.6rem] p-[1.2rem] w-full ${
        size === "small"
          ? "md:w-[47rem] w-[37rem] text-[var(--foreground)]"
          : "text-black"
      } ${className}`}
    >
      <span className="2xl:text-[6.4rem] lg:text-[4.8rem] md:text-[3.2rem] text-[3.6rem] font-medium ">
        {planName}
      </span>
      {type === "plan" && (
        <span className="2xl:text-[4.8rem] lg:text-[3.2rem] md:text-[2.4rem] text-[3.6rem] font-medium ">
          ${price}{" "}
          <span className="lg:text-[1rem] text-[0.8rem] font-normal">
            /month
          </span>
        </span>
      )}

      <div className="h-[1px] w-full bg-[#E7E7E7] 2xl:mt-[3.2rem] lg:mt-[2.4rem] md:mt-[1.6rem] mt-[1.2rem]"></div>

      <div className="flex flex-col gap-[1.2rem] 2xl:mt-[3.2rem] lg:mt-[2.4rem] md:mt-[1.6rem] mt-[1.2rem]">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-row items-center gap-[0.8rem]">
            {" "}
            <Check className="2xl:w-[1.8rem] lg:w-[1.4rem] md:w-[1.2rem] w-[1rem] 2xl:h-[1.8rem] lg:h-[1.4rem] md:h-[1.2rem] h-[1rem] text-[#3DD42C]" />
            <span className="2xl:text-[1.8rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] font-normal">
              {feature}
            </span>
          </div>
        ))}
      </div>

      <Button
        className={`flex flex-row items-center justify-center ${
          size === "small"
            ? "bg-var(--button-bg) text-var(--button-text)"
            : "bg-black text-white"
        } hover:bg-[#3c3c3c] mx-auto mt-auto w-full cursor-pointer rounded-[0.8rem] py-[1rem] transition-all ease-in-out md:rounded-[0.8rem] md:py-[1rem] lg:rounded-[1.2rem] lg:py-[1.2rem] 2xl:py-[1.8rem] 2xl:text-[2.4rem] lg:text-[1.6rem] md:text-[1.2rem] text-[1.4rem]`}
      >
        {buttonText}
        {type === "subscription" && (
          <span className="lg:text-[1rem] text-[0.8rem] font-normal">
            /${price}
          </span>
        )}
      </Button>
    </div>
  );
};

export default SubscriptionCard;
