"use client";
import React, { useEffect } from "react";
import Input from "@/shared/components/Input";
import { CornerUpRight } from "lucide-react";
import Button from "@/shared/components/Button";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useStepStore from "@/features/signup/store/step";
import CheckBox from "@/features/signup/components/CheckBox";
import { ArrowLeft } from "lucide-react";
import useModalStore from "@/shared/store/modalStore";

const personalInfoSchema = z
  .object({
    name: z.string().nonempty({ message: "Name is required" }),
    email: z
      .string()
      .nonempty({ message: "Email is required" })
      .email({ message: "Please enter a valid email" }),
    password: z
      .string()
      .nonempty({ message: "Password is required" })
      .min(8, { message: "Password must be at least 8 characters long" }),
    confirmPassword: z
      .string()
      .nonempty({ message: "Confirm Password is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

type PersonalInfoFormValues = z.infer<typeof personalInfoSchema>;

interface Props {
  className?: string;
}

const PersonalInfo = ({ className }: Props) => {
  const { setStepNumber, personalInfo, setPersonalInfo } = useStepStore();
  const { setIsOpen } = useModalStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<PersonalInfoFormValues>({
    resolver: zodResolver(personalInfoSchema),
    mode: "onChange",
  });

  const onSubmit = (data: PersonalInfoFormValues) => {
    if (!isValid) return;
    if (!personalInfo) return;
    setPersonalInfo({
      name: data.name,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    });
    setStepNumber(3);
    setIsOpen(false);
  };

  // 스토어 값이 있으면 폼을 업데이트
  useEffect(() => {
    if (personalInfo) {
      reset({
        name: personalInfo.name,
        email: personalInfo.email,
        password: personalInfo.password,
        confirmPassword: personalInfo.confirmPassword,
      });
    }
  }, []);

  return (
    <div
      className={`flex flex-col h-full md:overflow-y-auto p-0 md:py-[3.2rem] 2xl:w-[48rem] lg:w-[40rem] md:w-[32rem] w-[32rem] ${className}`}
    >
      <div className="flex items-center justify-center mr-auto 2xl:rounded-[0.6rem] lg:rounded-[0.4rem] rounded-[0.2rem] hover:bg-[var(--color-input-bg)] duration-300 ease-in-out cursor-pointer px-[0.8rem] py-[0.8rem]">
        <ArrowLeft
          className="2xl:w-[2.4rem] lg:w-[2rem] md:w-[1.6rem] w-[2rem] 2xl:h-[2.4rem] lg:h-[2rem] md:h-[1.6rem] h-[2rem]"
          onClick={() => setStepNumber(1)}
        />
      </div>

      <h1 className="2xl:text-[6.4rem] lg:text-[4rem] md:text-[3.2rem] text-[3.2rem] text-medium 2xl:mt-[2.4rem] lg:mt-[2rem] md:mt-[1.6rem] mt-[1.4rem]">
        Ready to create your account for Chiton?
      </h1>

      <h2 className="text-[#676767] 2xl:text-[2rem] lg:text-[1.8rem] md:text-[1.6rem] text-[1.4rem] text-normal 2xl:mt-[5.6rem] lg:mt-[4.8rem] md:mt-[4rem] mt-[3.2rem]">
        Enter your account details
      </h2>

      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-start 2xl:mt-[2.4rem] lg:mt-[2rem] md:mt-[1.6rem] mt-[1.4rem] 2xl:gap-[2rem] lg:gap-[1.6rem] md:gap-[1.2rem] gap-[1.2rem]">
          <Input
            {...register("name")}
            placeholder="Enter your name"
            label="Name"
            type="text"
            error={errors.name?.message}
            wrapperClassName="gap-[0.8rem] w-full"
            labelClassName="lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] text-normal"
            inputClassName="lg:rounded-[0.6rem] rounded-[0.4rem] w-full 2xl:h-[4rem] lg:h-[3.6rem] md:h-[3.2rem] h-[3.6rem] 2xl:text-[1.6rem] text-[1.4rem] px-[0.8rem]"
          />
          <Input
            {...register("email")}
            placeholder="Enter your email"
            label="Email"
            type="email"
            error={errors.email?.message}
            wrapperClassName="gap-[0.8rem] w-full"
            labelClassName="lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] text-normal"
            inputClassName="lg:rounded-[0.6rem] rounded-[0.4rem] w-full 2xl:h-[4rem] lg:h-[3.6rem] md:h-[3.2rem] h-[3.6rem] 2xl:text-[1.6rem] text-[1.4rem] px-[0.8rem]"
          />
          <Input
            {...register("password")}
            placeholder="Enter your password"
            label="Password"
            type="password"
            error={errors.password?.message}
            wrapperClassName="gap-[0.8rem] w-full"
            labelClassName="lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] text-normal"
            inputClassName="lg:rounded-[0.6rem] rounded-[0.4rem] w-full 2xl:h-[4rem] lg:h-[3.6rem] md:h-[3.2rem] h-[3.6rem] 2xl:text-[1.6rem] text-[1.4rem] px-[0.8rem]"
          />
          <Input
            {...register("confirmPassword")}
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
            error={errors.confirmPassword?.message}
            wrapperClassName="gap-[0.8rem] w-full"
            labelClassName="lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] text-normal"
            inputClassName="lg:rounded-[0.6rem] rounded-[0.4rem] w-full 2xl:h-[4rem] lg:h-[3.6rem] md:h-[3.2rem] h-[3.6rem] 2xl:text-[1.6rem] text-[1.4rem] px-[0.8rem]"
          />
        </div>

        {/* 체크박스 */}
        <div className="flex flex-col 2xl:mt-[2.4rem] lg:mt-[2rem] md:mt-[1.6rem] mt-[1.4rem]">
          <div className="flex flex-row md:items-center items-start 2xl:gap-[1.4rem] lg:gap-[0.8rem] gap-[1.2rem] 2xl:text-[1.6rem] lg:text-[1.2rem] md:text-[1rem] text-[1.2rem] text-normal">
            <CheckBox
              checked={
                (personalInfo?.termsOfUse ?? false) &&
                (personalInfo?.personalData ?? false) &&
                (personalInfo?.thirdPartySharing ?? false) &&
                (personalInfo?.crossBorderTransfer ?? false)
              }
              onChange={() => setIsOpen(true)}
            />

            <div className="flex lg:flex-row flex-col gap-[0.8rem]">
              <span>
                By signing up, you’ll review and agree to required policies.
              </span>

              <span
                className="text-[var(--color-primary-color)] cursor-pointer"
                onClick={() => setIsOpen(true)}
              >
                View More
              </span>
            </div>
          </div>
        </div>

        <Button
          type="submit"
          disabled={
            !isValid ||
            !personalInfo?.termsOfUse ||
            !personalInfo?.personalData ||
            !personalInfo?.thirdPartySharing ||
            !personalInfo?.crossBorderTransfer ||
            isSubmitting
          }
          className="self-start flex flex-row items-center gap-[0.8rem] 2xl:mt-[4rem] lg:mt-[3.2rem] md:mt-[2.4rem] mt-[3.2rem] 2xl:px-[2.4rem] lg:px-[2rem] md:px-[1.6rem] px-[2rem] 2xl:py-[1.2rem] lg:py-[1rem] md:py-[0.8rem] py-[1rem] 2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] text-normal lg:rounded-[0.8rem] rounded-[0.6rem] hover:bg-[var(--color-button-hover)] duration-300 ease-in-out"
        >
          Continue
          <CornerUpRight className="w-6 h-6" />
        </Button>
      </form>

      <div className="flex flex-row items-center 2xl:mt-[2.4rem] lg:mt-[2rem] md:mt-[1.6rem] mt-[1.4rem]">
        <span className="2xl:text-[1.4rem] text-[1.2rem] text-normal">
          Joined us before?{" "}
          <Link href="/login" className="text-[var(--color-primary-color)]">
            Log in
          </Link>
        </span>
      </div>
    </div>
  );
};

export default PersonalInfo;
