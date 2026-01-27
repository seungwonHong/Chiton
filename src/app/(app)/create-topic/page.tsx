"use client";
import React, { useRef } from "react";
import { ChevronDown, CornerDownRight, ImagePlus } from "lucide-react";
import Input from "@/shared/components/Input";
import { Trash2, Image, RotateCcw } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const topicSchema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  description: z.string().nonempty({ message: "Description is required" }),
  links: z.array(z.string().trim()).default([""]),
  tags: z
    .array(
      z.object({
        name: z.string().trim(),
        color: z.string().default("#000000"),
      }),
    )
    .default([{ name: "", color: "#000000" }]),
  topicPhilosophy: z
    .string()
    .nonempty({ message: "Topic Philosophy is required" }),
  rules: z.array(z.string().trim()).default([""]),
});

type TopicFormValues = z.infer<typeof topicSchema>;

const CreateTopicPage = () => {
  const [visibility, setVisibility] = useState<"🌐 public" | "🔒 private">(
    "🌐 public",
  );

  // 배너 이미지 관련 로직
  const [bannerFile, setBannerFile] = useState<File | null>(null);
  const [bannerPreview, setBannerPreview] = useState<string | null>(null);
  const bannerInputRef = useRef<HTMLInputElement | null>(null);
  // 커버 이미지 관련 로직
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  const coverInputRef = useRef<HTMLInputElement | null>(null);

  // 핸들러 추가
  const handleBannerClick = () => {
    bannerInputRef.current?.click();
  };
  const handleCoverClick = () => {
    coverInputRef.current?.click();
  };

  const handleBannerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setBannerFile(file);
      const previewUrl = URL.createObjectURL(file);
      setBannerPreview(previewUrl);
    }
  };

  const handleCoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCoverFile(file);
      const previewUrl = URL.createObjectURL(file);
      setCoverPreview(previewUrl);
    }
  };
  // link & tag & rule 관련 로직
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting, isValid },
  } = useForm<TopicFormValues>({
    resolver: zodResolver(topicSchema),
    mode: "onChange",
    defaultValues: {
      links: [""],
      tags: [{ name: "", color: "#000000" }],
      rules: [""],
    },
  });

  const links = watch("links") ?? [""];
  const tags = watch("tags") ?? [{ name: "", color: "#000000" }];
  const rules = watch("rules") ?? [""];

  const handleAddLink = () => {
    setValue("links", [...links, ""], {
      shouldDirty: true,
      shouldValidate: true,
    });
  };

  const handleRemoveLink = (index: number) => {
    const newLinks = links.filter((_, i) => i !== index);
    setValue("links", newLinks.length > 0 ? newLinks : [""], {
      shouldDirty: true,
      shouldValidate: true,
    });
  };

  const handleAddRule = () => {
    setValue("rules", [...rules, ""], {
      shouldDirty: true,
      shouldValidate: true,
    });
  };

  const handleRemoveRule = (index: number) => {
    const newRules = rules.filter((_, i) => i !== index);
    setValue("rules", newRules.length > 0 ? newRules : [""], {
      shouldDirty: true,
      shouldValidate: true,
    });
  };

  const handleAddTag = () => {
    // 빈 객체 추가
    setValue("tags", [...tags, { name: "", color: "#000000" }], {
      shouldDirty: true,
      shouldValidate: true,
    });
  };

  const handleRemoveTag = (index: number) => {
    const newTags = tags.filter((_, i) => i !== index);
    // 빈 배열 방지 로직도 객체 형태로
    setValue(
      "tags",
      newTags.length > 0 ? newTags : [{ name: "", color: "#000000" }],
      {
        shouldDirty: true,
        shouldValidate: true,
      },
    );
  };

  const handleColorChange = (index: number, color: string) => {
    setValue(`tags.${index}.color`, color, {
      shouldDirty: true,
      shouldValidate: true,
    });
  };

  return (
    <div className="relative flex flex-col items-center justify-center 2xl:mt-[6.4rem] md:mt-[5.6rem] mt-[8rem] 2xl:px-[8rem] lg:px-[6rem] md:px-[3.2rem] px-[1.6rem] w-full">
      <div className="flex flex-col items-start justify-center w-full 2xl:max-w-[150rem] lg:max-w-[130rem] md:max-w-[100rem] 2xl:mb-[6.4rem] md:mb-[5.6rem] mb-[8rem]">
        {/* 제목 */}
        <div className=" flex flex-row w-full items-center 2xl:gap-[1.6rem] lg:gap-[1.2rem] md:gap-[0.8rem] gap-[0.4rem]">
          <h1 className="2xl:text-[3.6rem] lg:text-[3.2rem] md:text-[2.8rem] text-[3.2rem] font-medium">
            Create Topic
          </h1>
        </div>

        {/* 토픽 생성 내용 */}
        <div className="flex flex-col mx-auto 2xl:mt-[6rem] lg:mt-[5rem] md:mt-[4rem] mt-[3rem] 2xl:gap-[4.8rem] lg:gap-[3.2rem] md:gap-[2.4rem] gap-[1.6rem] 2xl:w-[84rem] lg:w-[72rem] md:w-[56rem] w-full md:items-center">
          {/* 공개 여부 */}
          <div className="w-full">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div
                  className={`relative flex flex-row gap-[0.4rem] items-center lg:px-[1.6rem] px-[0.8rem] lg:py-[0.6rem] py-[0.4rem] cursor-pointer hover:bg-side-bar-hover transition-all duration-300 ease-in-out rounded-[0.4rem] lg:rounded-[0.6rem] w-fit`}
                >
                  <span className={`font-normal text-[1.6rem]`}>
                    {visibility}
                  </span>
                  <ChevronDown
                    className={`w-[1.6rem] h-[1.6rem]`}
                    strokeWidth={1.5}
                  />
                </div>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="start"
                side="bottom"
                className="flex flex-col gap-[0.4rem] w-[14rem] p-[0.4rem] z-[150] border border-border rounded-[0.8rem] bg-popover"
              >
                <DropdownMenuItem
                  className={`rounded-[0.4rem] py-[0.6rem] px-[0.8rem] w-full md:min-h-[3.2rem] min-h-[4rem] cursor-pointer outline-none `}
                  onClick={() => setVisibility("🌐 public")}
                >
                  <span className="text-[1.6rem] font-normal leading-none">
                    🌐 Public
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className={`rounded-[0.4rem] py-[0.6rem] px-[0.8rem] w-full md:min-h-[3.2rem] min-h-[4rem] cursor-pointer outline-none `}
                  onClick={() => setVisibility("🔒 private")}
                >
                  <span className="text-[1.6rem] font-normal leading-none">
                    🔒 Private
                  </span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* 배너 이미지 */}
          <div className="flex flex-col">
            <h2 className="2xl:text-[2.4rem] lg:text-[2.2rem] md:text-[2rem] text-[2.4rem] font-medium">
              Banner Image
            </h2>
            {/* 배너 사진 추가 로직 */}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center justify-center lg:w-[72rem] md:w-[56rem] w-full bg-side-bar-hover lg:h-[18rem] md:h-[16rem] h-[12rem] rounded-[1.2rem] 2xl:mt-[2.4rem] lg:mt-[2rem] md:mt-[1.6rem] mt-[1.4rem] cursor-pointer overflow-hidden">
                  {bannerPreview ? (
                    <img
                      src={bannerPreview}
                      alt="banner preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <ImagePlus
                      className="lg:w-[3.6rem] lg:h-[3.6rem] w-[3rem] h-[3rem]"
                      strokeWidth={1.5}
                    />
                  )}
                </div>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="end"
                side="bottom"
                className="flex flex-col gap-[0.4rem] w-[14rem] p-[0.4rem] z-[150] border border-border rounded-[0.8rem] bg-popover"
              >
                <DropdownMenuItem
                  className={`flex items-center gap-[0.4rem] rounded-[0.4rem] py-[0.6rem] px-[0.8rem] w-full md:min-h-[3.2rem] min-h-[4rem] cursor-pointer outline-none `}
                  onSelect={() => handleBannerClick()}
                >
                  <Image className="!w-[1.6rem] !h-[1.6rem]" />
                  <span className="text-[1.6rem] font-normal leading-none">
                    Choose File
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className={`rounded-[0.4rem] py-[0.6rem] px-[0.8rem] w-full md:min-h-[3.2rem] min-h-[4rem] cursor-pointer outline-none `}
                  onClick={() => {
                    setBannerFile(null);
                    setBannerPreview(null);
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
              ref={bannerInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleBannerChange}
            />
          </div>
          {/* 커버 이미지 */}
          <div className="flex flex-col w-full">
            <h2 className="2xl:text-[2.4rem] lg:text-[2.2rem] md:text-[2rem] text-[2.4rem] font-medium">
              Cover Image
            </h2>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center justify-center aspect-square bg-side-bar-hover lg:h-[18rem] md:h-[16rem] h-[12rem] rounded-[1.2rem] 2xl:mt-[2.4rem] lg:mt-[2rem] md:mt-[1.6rem] mt-[1.4rem] cursor-pointer w-fit overflow-hidden">
                  {coverPreview ? (
                    <img
                      src={coverPreview}
                      alt="cover preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <ImagePlus
                      className="lg:w-[3.6rem] lg:h-[3.6rem] w-[3rem] h-[3rem]"
                      strokeWidth={1.5}
                    />
                  )}
                </div>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="start"
                side="bottom"
                className="flex flex-col gap-[0.4rem] w-[14rem] p-[0.4rem] z-[150] border border-border rounded-[0.8rem] bg-popover"
              >
                <DropdownMenuItem
                  className={`flex items-center gap-[0.4rem] rounded-[0.4rem] py-[0.6rem] px-[0.8rem] w-full md:min-h-[3.2rem] min-h-[4rem] cursor-pointer outline-none `}
                  onSelect={() => handleCoverClick()}
                >
                  <Image className="!w-[1.6rem] !h-[1.6rem]" />
                  <span className="text-[1.6rem] font-normal leading-none">
                    Choose File
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className={`rounded-[0.4rem] py-[0.6rem] px-[0.8rem] w-full md:min-h-[3.2rem] min-h-[4rem] cursor-pointer outline-none `}
                  onClick={() => {
                    setCoverFile(null);
                    setCoverPreview(null);
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
              ref={coverInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleCoverChange}
            />
          </div>
          {/* 토픽 이름 */}
          <div className="flex flex-col w-full">
            <h2 className="2xl:text-[2.4rem] lg:text-[2.2rem] md:text-[2rem] text-[2.4rem] font-medium">
              Topic
            </h2>
            <Input
              type="text"
              placeholder="Enter topic name"
              wrapperClassName="w-full 2xl:mt-[2.4rem] lg:mt-[2rem] md:mt-[1.6rem] mt-[1.4rem]"
              inputClassName="w-full lg:h-[4.8rem] md:h-[4rem] h-[4.8rem] text-[1.6rem] px-[1.2rem] rounded-[0.8rem]"
            />
          </div>
          {/* 토픽 설명*/}
          <div className="flex flex-col w-full">
            <h2 className="2xl:text-[2.4rem] lg:text-[2.2rem] md:text-[2rem] text-[2.4rem] font-medium">
              Description
            </h2>
            <Input
              type="textarea"
              textareaRows={10}
              placeholder="Enter topic description"
              wrapperClassName="w-full 2xl:mt-[2.4rem] lg:mt-[2rem] md:mt-[1.6rem] mt-[1.4rem]"
              inputClassName="w-full text-[1.6rem] p-[1.2rem] rounded-[0.8rem]"
            />
          </div>
          {/* 링크 */}
          <div className="flex flex-col w-full 2xl:gap-[1.6rem] lg:gap-[1.2rem] md:gap-[0.8rem] gap-[0.4rem]">
            {links.map((_, index) => (
              <div
                key={index}
                className="w-full flex flex-row items-center gap-[0.8rem]"
              >
                <Input
                  {...register(`links.${index}`)}
                  placeholder="Add your link"
                  label={index === 0 ? "Link" : undefined}
                  type="text"
                  add={index === 0 ? true : false}
                  addHandler={handleAddLink}
                  error={errors.links?.[index]?.message}
                  wrapperClassName={`w-full 2xl:gap-[2.4rem] lg:gap-[2rem] md:gap-[1.6rem] gap-[1.2rem] ${
                    index > 0 ? "md:ml-[3.2rem] ml-[2.4rem]" : ""
                  }`}
                  labelClassName="2xl:text-[2.4rem] lg:text-[2.2rem] md:text-[2rem] text-[2.4rem] font-medium gap-0"
                  inputClassName="rounded-[0.8rem] w-full lg:h-[4.8rem] md:h-[4rem] h-[4.8rem] lg:text-[1.6rem] text-[1.4rem] px-[1.2rem]"
                  addIconClassName="2xl:w-[2.4rem] lg:w-[2rem] w-[2rem] 2xl:h-[2.4rem] lg:h-[2rem] h-[2rem]"
                />
                {index > 0 && (
                  <Trash2
                    className="2xl:w-[3.2rem] lg:w-[2.4rem] w-[2.4rem] 2xl:h-[3.6rem] lg:h-[3rem] h-[3rem] text-red-500 cursor-pointer"
                    onClick={() => handleRemoveLink(index)}
                  />
                )}
              </div>
            ))}
          </div>
          {/* 태그 설정 */}
          <div className="flex flex-col w-full 2xl:gap-[1.6rem] lg:gap-[1.2rem] md:gap-[0.8rem] gap-[0.4rem]">
            {tags.map((_, index) => (
              <div
                key={index}
                className="w-full flex flex-row items-center gap-[0.8rem]"
              >
                <Input
                  {...register(`tags.${index}.name`)}
                  placeholder="Add your tag"
                  label={index === 0 ? "Tags" : undefined}
                  type="text"
                  colorPicker={true}
                  colorValue={tags[index].color}
                  colorHandler={(color) => handleColorChange(index, color)}
                  add={index === 0 ? true : false}
                  addHandler={handleAddTag}
                  error={errors.links?.[index]?.message}
                  wrapperClassName={`w-full 2xl:gap-[2.4rem] lg:gap-[2rem] md:gap-[1.6rem] gap-[1.2rem] ${
                    index > 0 ? "md:ml-[3.2rem] ml-[2.4rem]" : ""
                  }`}
                  labelClassName="2xl:text-[2.4rem] lg:text-[2.2rem] md:text-[2rem] text-[2.4rem] font-medium gap-0"
                  inputClassName="rounded-[0.8rem] w-full lg:h-[4.8rem] md:h-[4rem] h-[4.8rem] lg:text-[1.6rem] text-[1.4rem] pl-[1.2rem] pr-[4.8rem]"
                  addIconClassName="2xl:w-[2.4rem] lg:w-[2rem] w-[2rem] 2xl:h-[2.4rem] lg:h-[2rem] h-[2rem]"
                />
                {index > 0 && (
                  <Trash2
                    className="2xl:w-[3.2rem] lg:w-[2.4rem] w-[2.4rem] 2xl:h-[3.6rem] lg:h-[3rem] h-[3rem] text-red-500 cursor-pointer"
                    onClick={() => handleRemoveTag(index)}
                  />
                )}
              </div>
            ))}
          </div>
          {/* 토픽 철학 */}
          <div className="flex flex-col w-full">
            <h2 className="2xl:text-[2.4rem] lg:text-[2.2rem] md:text-[2rem] text-[2.4rem] font-medium">
              Topic Philosophy
            </h2>
            <Input
              type="textarea"
              textareaRows={10}
              placeholder="Enter topic description"
              wrapperClassName="w-full 2xl:mt-[2.4rem] lg:mt-[2rem] md:mt-[1.6rem] mt-[1.4rem]"
              inputClassName="w-full text-[1.6rem] p-[1.2rem] rounded-[0.8rem] w-full"
            />
          </div>
          {/* 규칙 설정 */}
          <div className="flex flex-col w-full 2xl:gap-[1.6rem] lg:gap-[1.2rem] md:gap-[0.8rem] gap-[0.4rem]">
            {rules.map((_, index) => (
              <div
                key={index}
                className="w-full flex flex-row items-center gap-[0.8rem]"
              >
                <Input
                  {...register(`rules.${index}`)}
                  placeholder="Add your rule"
                  label={index === 0 ? "Rules" : undefined}
                  type="text"
                  add={index === 0 ? true : false}
                  addHandler={handleAddRule}
                  error={errors.links?.[index]?.message}
                  wrapperClassName={`w-full 2xl:gap-[2.4rem] lg:gap-[2rem] md:gap-[1.6rem] gap-[1.2rem] ${
                    index > 0 ? "md:ml-[3.2rem] ml-[2.4rem]" : ""
                  }`}
                  labelClassName="2xl:text-[2.4rem] lg:text-[2.2rem] md:text-[2rem] text-[2.4rem] font-medium gap-0"
                  inputClassName="rounded-[0.8rem] w-full lg:h-[4.8rem] md:h-[4rem] h-[4.8rem] lg:text-[1.6rem] text-[1.4rem] px-[1.2rem] w-full"
                  addIconClassName="2xl:w-[2.4rem] lg:w-[2rem] w-[2rem] 2xl:h-[2.4rem] lg:h-[2rem] h-[2rem]"
                />
                {index > 0 && (
                  <Trash2
                    className="2xl:w-[3.2rem] lg:w-[2.4rem] w-[2.4rem] 2xl:h-[3.6rem] lg:h-[3rem] h-[3rem] text-red-500 cursor-pointer"
                    onClick={() => handleRemoveRule(index)}
                  />
                )}
              </div>
            ))}
          </div>
          {/* 생성 버튼 */}
          <Button className="flex-1 flex flex-row items-center gap-[0.8rem] cursor-pointer md:text-[1.4rem] text-[1.8rem] font-normal py-[1rem] rounded-[0.8rem] ml-auto mt-[4rem]">
            <CornerDownRight className="!w-[2rem] !h-[2rem]" />
            <span className="lg:text-[1.6rem] md:text-[1.4rem] text-[1.6rem] font-normal">
              Create Lecture
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateTopicPage;
