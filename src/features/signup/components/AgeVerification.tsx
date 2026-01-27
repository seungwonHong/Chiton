"use client";
import React, { useEffect } from "react";
import Input from "@/shared/components/Input";
import { CornerUpRight } from "lucide-react";
import Button from "@/shared/components/Button";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TriangleAlert } from "lucide-react";
import useStepStore from "@/features/signup/store/step";
import CheckBox from "@/features/signup/components/CheckBox";

const ageVerificationSchema = z
  .object({
    day: z.number().min(1).max(31),
    month: z.number().min(1).max(12),
    year: z.number({message: "Please enter a valid age"}).min(1900, { message: "Year must be 1900 or later" }),
  })
  .refine(
    (data) => {
      // 날짜 유효성 검사
      const birthDate = new Date(data.year, data.month - 1, data.day);
      if (
        birthDate.getFullYear() !== data.year ||
        birthDate.getMonth() !== data.month - 1 ||
        birthDate.getDate() !== data.day
      ) {
        return false;
      }

      // 나이 계산
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      const dayDiff = today.getDate() - birthDate.getDate();

      // 생일이 지나지 않았으면 1살 빼기
      if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
      }

      return age >= 18;
    },
    {
      message: "You must be at least 18 years old to use Chiton",
      path: ["year"], // 에러를 year 필드에 표시
    }
  );

type AgeVerificationFormValues = z.infer<typeof ageVerificationSchema>;

interface Props {
  className?: string;
}

const AgeVerification = ({ className }: Props) => {
  const { setStepNumber, ageVerification, setAgeVerification } = useStepStore();

  const {
    register,
    handleSubmit,
    trigger,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<AgeVerificationFormValues>({
    resolver: zodResolver(ageVerificationSchema),
    mode: "onChange",
    defaultValues: {
      day: 14,
      month: 8,
      year: 2004,
    },
  });

  const onSubmit = (data: AgeVerificationFormValues) => {
    if (!isValid) return;
    if (!ageVerification?.confirmed) return;
    setAgeVerification({
      day: data.day,
      month: data.month,
      year: data.year,
      confirmed: true,
    });
    setStepNumber(2);
  };

  // 스토어 값이 있으면 폼을 업데이트
  useEffect(() => {
    if (ageVerification) {
      reset({
        day: ageVerification.day,
        month: ageVerification.month,
        year: ageVerification.year,
      });
    }
  }, []);

  return (
    <div
      className={`flex flex-col 2xl:w-[48rem] lg:w-[40rem] md:w-[32rem] w-[32rem] ${className}`}
    >
      <h1 className="2xl:text-[6.4rem] lg:text-[4rem] md:text-[3.2rem] text-[3.2rem] text-medium">
        Are you old enough to use the Chiton?
      </h1>

      <h2 className="text-[#676767] 2xl:text-[2rem] lg:text-[1.8rem] md:text-[1.6rem] text-[1.4rem] text-normal 2xl:mt-[5.6rem] lg:mt-[4.8rem] md:mt-[4rem] mt-[3.2rem]">
        Select your age
      </h2>

      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-row items-center 2xl:mt-[2.4rem] lg:mt-[2rem] md:mt-[1.6rem] mt-[1.4rem] 2xl:gap-[6rem] lg:gap-[4rem] md:gap-[3.2rem] gap-[3.2rem]">
          <Input
            {...register("day", {
              valueAsNumber: true,
              required: true,
              onChange: () => trigger(["month", "year"]),
            })}
            label="Day"
            type="number"
            wrapperClassName="gap-[0.8rem]"
            labelClassName="lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] text-normal"
            inputClassName="lg:rounded-[0.6rem] rounded-[0.4rem] 2xl:w-[12rem] lg:w-[10rem] md:w-[8rem] w-[8rem] 2xl:h-[4rem] lg:h-[3.6rem] md:h-[3.2rem] h-[3.6rem] 2xl:text-[1.6rem] text-[1.4rem] px-[0.8rem]"
            onInput={(e) => {
              e.currentTarget.value = e.currentTarget.value.replace(
                /[^0-9]/g,
                ""
              );
            }}
            onKeyDown={(e) => {
              if (
                !/[0-9]/.test(e.key) &&
                ![
                  "Backspace",
                  "Delete",
                  "Tab",
                  "ArrowLeft",
                  "ArrowRight",
                ].includes(e.key) &&
                !(e.ctrlKey || e.metaKey)
              ) {
                e.preventDefault();
              }
            }}
          />
          <Input
            {...register("month", {
              valueAsNumber: true,
              required: true,
              onChange: () => trigger(["day", "year"]),
            })}
            label="Month"
            type="number"
            wrapperClassName="gap-[0.8rem]"
            labelClassName="lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] text-normal"
            inputClassName="lg:rounded-[0.6rem] rounded-[0.4rem] 2xl:w-[12rem] lg:w-[10rem] md:w-[8rem] w-[8rem] 2xl:h-[4rem] lg:h-[3.6rem] md:h-[3.2rem] h-[3.6rem] 2xl:text-[1.6rem] text-[1.4rem] px-[0.8rem]"
            onInput={(e) => {
              e.currentTarget.value = e.currentTarget.value.replace(
                /[^0-9]/g,
                ""
              );
            }}
            onKeyDown={(e) => {
              if (
                !/[0-9]/.test(e.key) &&
                ![
                  "Backspace",
                  "Delete",
                  "Tab",
                  "ArrowLeft",
                  "ArrowRight",
                ].includes(e.key) &&
                !(e.ctrlKey || e.metaKey)
              ) {
                e.preventDefault();
              }
            }}
          />
          <Input
            {...register("year", {
              valueAsNumber: true,
              required: true,
              onChange: () => trigger(["day", "month"]),
            })}
            label="Year"
            type="number"
            wrapperClassName="gap-[0.8rem]"
            labelClassName="lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] text-normal"
            inputClassName="lg:rounded-[0.6rem] rounded-[0.4rem] 2xl:w-[12rem] lg:w-[10rem] md:w-[8rem] w-[8rem] 2xl:h-[4rem] lg:h-[3.6rem] md:h-[3.2rem] h-[3.6rem] 2xl:text-[1.6rem] text-[1.4rem] px-[0.8rem]"
            onInput={(e) => {
              e.currentTarget.value = e.currentTarget.value.replace(
                /[^0-9]/g,
                ""
              );
            }}
            onKeyDown={(e) => {
              if (
                !/[0-9]/.test(e.key) &&
                ![
                  "Backspace",
                  "Delete",
                  "Tab",
                  "ArrowLeft",
                  "ArrowRight",
                ].includes(e.key) &&
                !(e.ctrlKey || e.metaKey)
              ) {
                e.preventDefault();
              }
            }}
          />
        </div>

        {/* 체크박스 */}
        <div className="flex flex-col 2xl:mt-[2.4rem] lg:mt-[2rem] md:mt-[1.6rem] mt-[1.4rem]">
          <div className="flex flex-row items-center lg:gap-[0.8rem] gap-[0.8rem]">
            <CheckBox
              checked={ageVerification?.confirmed ?? false}
              onChange={(checked) => setAgeVerification({ confirmed: checked })}
            />
            <span className="lg:text-[1.2rem] md:text-[1rem] text-[1.2rem] text-normal">
              I confirm that I am at least 18 years old.
            </span>
          </div>

          <div className="flex flex-col lg:gap-[0.4rem] gap-[0.2rem] lg:mt-[0.8rem] md:mt-[0.6rem] mt-[0.4rem] lg:text-[1rem] md:text-[0.8rem] text-[1rem] text-normal">
            <span>* This service is available to users aged 18 or older.</span>
            <span>
              * Your date of birth is used only for age verification and stored
              at account completion.
            </span>
          </div>
        </div>

        {/* 에러 메시지 표시 */}
        {(errors.day || errors.month || errors.year) &&
          (errors.year?.message ? (
            <div className="flex flex-row items-center gap-[0.4rem] 2xl:mt-[1.6rem] lg:mt-[1.2rem] md:mt-[0.8rem] mt-[1.2rem]">
              <TriangleAlert className="2xl:w-[1.6rem] lg:w-[1.2rem] w-[1rem] 2xl:h-[1.6rem] lg:h-[1.2rem] h-[1rem] text-red-500" />
              <span className="text-red-500 2xl:text-[1.4rem] lg:text-[1.2rem] text-[1rem] text-normal">
                {errors.year?.message}
              </span>
            </div>
          ) : (
            <div className="flex flex-row items-center gap-[0.4rem] 2xl:mt-[1.6rem] lg:mt-[1.2rem] md:mt-[0.8rem] mt-[1.2rem]">
              <TriangleAlert className="2xl:w-[1.6rem] lg:w-[1.2rem] w-[1rem] 2xl:h-[1.6rem] lg:h-[1.2rem] h-[1rem] text-red-500" />
              <span className="text-red-500 2xl:text-[1.4rem] lg:text-[1.2rem] text-[1rem] text-normal">
                Please enter a valid age
              </span>
            </div>
          ))}

        <Button
          type="submit"
          disabled={!isValid || isSubmitting}
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

export default AgeVerification;

