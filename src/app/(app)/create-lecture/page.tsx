"use client";
import React, { useRef, useState } from "react";
import {
  Folder,
  Folders,
  GalleryThumbnails,
  Clapperboard,
  Files,
  RotateCcw,
  Trash2,
  CornerDownRight,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Input from "@/shared/components/Input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useModalStore from "@/shared/store/modalStore";
import Modal from "@/shared/components/Modal";
import useMediaQuery from "@/shared/hooks/useMediaQuery";
import CreateLectureChapterModalContents from "@/features/create-lecture/components/CreateLectureChapterModalContents";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

type Props = {};

const lectureSchema = z.object({
  title: z.string().nonempty({ message: "Title is required" }),
  description: z.string().nonempty({ message: "Description is required" }),
  tags: z.array(z.string().trim()).default([""]),
});

type LectureFormValues = z.infer<typeof lectureSchema>;

const CreateLecturePage = (props: Props) => {
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  const thumbnailInputRef = useRef<HTMLInputElement | null>(null);

  const [lectureFile, setLectureFile] = useState<File | null>(null);
  const [lecturePreview, setLecturePreview] = useState<string | null>(null);
  const lectureInputRef = useRef<HTMLInputElement | null>(null);

  // 모달 관련 상태
  const { isOpen, setIsOpen } = useModalStore();
  const [chapterOrSection, setChapterOrSection] = useState<
    "chapter" | "section" | null
  >(null);
  const { breakpoint } = useMediaQuery();

  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);

  // 챕터 예시
  const chapters = [
    { id: "chapter-1", name: "Java" },
    { id: "chapter-2", name: "Python" },
    { id: "chapter-3", name: "JavaScript" },
  ];

  const handleThumbnailClick = () => {
    thumbnailInputRef.current?.click();
  };
  const handleLectureClick = () => {
    lectureInputRef.current?.click();
  };

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setThumbnailFile(file);
      const previewUrl = URL.createObjectURL(file);
      setThumbnailPreview(previewUrl);
    }
  };
  const handleLectureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLectureFile(file);
      const previewUrl = URL.createObjectURL(file);
      setLecturePreview(previewUrl);
    }
  };

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting, isValid },
  } = useForm<LectureFormValues>({
    resolver: zodResolver(lectureSchema),
    mode: "onChange",
    defaultValues: {
      tags: [""],
    },
  });

  const tags = watch("tags") ?? [""];

  const handleAddTag = () => {
    setValue("tags", [...tags, ""], {
      shouldDirty: true,
      shouldValidate: true,
    });
  };

  const handleRemoveTag = (index: number) => {
    const newTags = tags.filter((_, i) => i !== index);
    setValue("tags", newTags.length > 0 ? newTags : [""], {
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
            Create Lecture
          </h1>
        </div>

        {/* lecture 생성 내용 */}
        <div className="flex flex-col mx-auto 2xl:mt-[6rem] lg:mt-[5rem] md:mt-[4rem] mt-[3rem] 2xl:gap-[4.8rem] lg:gap-[3.2rem] md:gap-[2.4rem] gap-[1.6rem] 2xl:w-[84rem] lg:w-[72rem] md:w-[56rem] w-full md:items-center">
          {/* 강의 챕터 & 섹션 선택과 생성 */}
          <div className="flex flex-row items-center gap-[0.8rem] w-full">
            {/* 챕터 */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex flex-row items-center gap-[0.4rem] w-fit border border-border rounded-[0.8rem] px-[1.2rem] py-[0.6rem] cursor-pointer hover:bg-side-bar-hover transition-all duration-300 ease-in-out">
                  <Folder color="var(--primary-color)" />
                  <span className="lg:text-[2rem] md:text-[1.8rem] text-[1.6rem] font-normal">
                    Chapter
                  </span>
                </div>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="start"
                side="bottom"
                className="flex flex-col gap-[0.4rem] w-[14rem] p-[0.4rem] z-[150] border border-border rounded-[0.8rem] bg-popover"
              >
                <DropdownMenuItem
                  className={`flex items-center gap-[0.4rem] rounded-[0.4rem] py-[0.6rem] px-[0.8rem] w-full md:min-h-[3.2rem] min-h-[4rem] cursor-pointer outline-none `}
                  onClick={() => {
                    setChapterOrSection("chapter");
                    setIsOpen(true);
                  }}
                >
                  <span className="text-[1.6rem] font-normal leading-none">
                    Select Chapter
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className={`rounded-[0.4rem] py-[0.6rem] px-[0.8rem] w-full md:min-h-[3.2rem] min-h-[4rem] cursor-pointer outline-none `}
                >
                  <span className="text-[1.6rem] font-normal leading-none">
                    Reset Chapter
                  </span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            {/* 섹션 */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex flex-row items-center gap-[0.4rem] w-fit border border-border rounded-[0.8rem] px-[1.2rem] py-[0.6rem] cursor-pointer hover:bg-side-bar-hover transition-all duration-300 ease-in-out">
                  <Folders color="var(--section-color)" />
                  <span className="lg:text-[2rem] md:text-[1.8rem] text-[1.6rem] font-normal">
                    Section
                  </span>
                </div>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="start"
                side="bottom"
                className="flex flex-col gap-[0.4rem] w-[14rem] p-[0.4rem] z-[150] border border-border rounded-[0.8rem] bg-popover"
              >
                <DropdownMenuItem
                  className={`flex items-center gap-[0.4rem] rounded-[0.4rem] py-[0.6rem] px-[0.8rem] w-full md:min-h-[3.2rem] min-h-[4rem] cursor-pointer outline-none `}
                  onClick={() => {
                    setChapterOrSection("section");
                    setIsOpen(true);
                  }}
                >
                  <span className="text-[1.6rem] font-normal leading-none">
                    Select Section
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className={`rounded-[0.4rem] py-[0.6rem] px-[0.8rem] w-full md:min-h-[3.2rem] min-h-[4rem] cursor-pointer outline-none `}
                >
                  <span className="text-[1.6rem] font-normal leading-none">
                    Reset Section
                  </span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          {/* 썸네일 선택 */}
          <div className="flex flex-col w-full">
            <div className="flex flex-row items-center gap-[0.4rem]">
              <GalleryThumbnails />
              <span className="2xl:text-[2.4rem] lg:text-[2.2rem] md:text-[2rem] text-[2.4rem] font-medium">
                Thumbnail
              </span>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div
                  className={`flex flex-row items-center justify-center rounded-[1rem] aspect-[16/9] 2xl:w-[48rem] lg:w-[40rem] md:w-[36rem] w-[32rem]  ${thumbnailPreview ? "border-none " : "border border-dashed border-border"}  hover:bg-side-bar-hover transition-all duration-300 ease-in-out mt-[0.8rem] gap-[0.6rem] cursor-pointer overflow-hidden`}
                >
                  {thumbnailPreview ? (
                    <img
                      src={thumbnailPreview}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <>
                      <Files className="!w-[2rem] !h-[2rem]" />
                      <span className="lg:text-[2rem] md:text-[1.8rem] text-[1.6rem] font-normal">
                        Select Thumbnail
                      </span>
                    </>
                  )}
                </div>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="start"
                side="bottom"
                className="flex flex-col gap-[0.4rem] w-[18rem] p-[0.4rem] z-[150] border border-border rounded-[0.8rem] bg-popover"
              >
                <DropdownMenuItem
                  className={`flex flex-row items-center gap-[0.6rem] rounded-[0.4rem] py-[0.6rem] px-[0.8rem] w-full md:min-h-[3.2rem] min-h-[4rem] cursor-pointer outline-none `}
                  onSelect={() => handleThumbnailClick()}
                >
                  <GalleryThumbnails className="!w-[2rem] !h-[2rem]" />
                  <span className="text-[1.6rem] font-normal leading-none">
                    Select Thumbnail
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className={`flex flex-row items-center gap-[0.6rem] rounded-[0.4rem] py-[0.6rem] px-[0.8rem] w-full md:min-h-[3.2rem] min-h-[4rem] cursor-pointer outline-none `}
                  onClick={() => {
                    setThumbnailFile(null);
                    setThumbnailPreview(null);
                  }}
                >
                  <RotateCcw className="!w-[2rem] !h-[2rem]" />
                  <span className="text-[1.6rem] font-normal leading-none">
                    Reset Thumbnail
                  </span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <input
              ref={thumbnailInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleThumbnailChange}
            />
          </div>
          {/* 강의 영상 */}
          <div className="flex flex-col w-full">
            <div className="flex flex-row items-center gap-[0.4rem]">
              <Clapperboard />{" "}
              <span className="2xl:text-[2.4rem] lg:text-[2.2rem] md:text-[2rem] text-[2.4rem] font-medium">
                Lecture
              </span>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div
                  className={`flex flex-row items-center justify-center rounded-[1rem] aspect-[16/9] 2xl:w-[64rem] lg:w-[56rem] md:w-[48rem] w-full ${lecturePreview ? "border-none " : "border border-dashed border-border"}  hover:bg-side-bar-hover transition-all duration-300 ease-in-out 2xl:mt-[2.4rem] lg:mt-[2rem] md:mt-[1.6rem] mt-[1.4rem] gap-[0.6rem] cursor-pointer overflow-hidden`}
                >
                  {lecturePreview ? (
                    <video
                      src={lecturePreview}
                      className="w-full h-full object-cover"
                      controls
                    />
                  ) : (
                    <>
                      <Files className="!w-[2rem] !h-[2rem]" />
                      <span className="lg:text-[2rem] md:text-[1.8rem] text-[1.6rem] font-normal">
                        Select Lecture
                      </span>
                    </>
                  )}
                </div>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="start"
                side="bottom"
                className="flex flex-col gap-[0.4rem] w-[18rem] p-[0.4rem] z-[150] border border-border rounded-[0.8rem] bg-popover"
              >
                <DropdownMenuItem
                  className={`flex flex-row items-center gap-[0.6rem] rounded-[0.4rem] py-[0.6rem] px-[0.8rem] w-full md:min-h-[3.2rem] min-h-[4rem] cursor-pointer outline-none `}
                  onSelect={() => handleLectureClick()}
                >
                  <GalleryThumbnails className="!w-[2rem] !h-[2rem]" />
                  <span className="text-[1.6rem] font-normal leading-none">
                    Select Lecture
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className={`flex flex-row items-center gap-[0.6rem] rounded-[0.4rem] py-[0.6rem] px-[0.8rem] w-full md:min-h-[3.2rem] min-h-[4rem] cursor-pointer outline-none `}
                  onClick={() => {
                    setLectureFile(null);
                    setLecturePreview(null);
                  }}
                >
                  <RotateCcw className="!w-[2rem] !h-[2rem]" />
                  <span className="text-[1.6rem] font-normal leading-none">
                    Reset Lecture
                  </span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <input
              ref={lectureInputRef}
              type="file"
              accept="video/*"
              className="hidden"
              onChange={handleLectureChange}
            />
            <span className="block mt-[0.8rem] text-[1.4rem] text-muted-foreground leading-relaxed">
              Note: To support learner focus and learning efficiency, lecture
              videos on our platform are limited to a maximum of 5
              minutes.(Uploading and streaming videos will be limited to each
              500MB and 1080p resolution.)
            </span>
          </div>

          {/* 강의 제목 */}
          <div className="flex flex-col w-full">
            <span className="2xl:text-[2.4rem] lg:text-[2.2rem] md:text-[2rem] text-[2.4rem] font-medium">
              Title
            </span>
            <Input
              type="text"
              placeholder="Enter lecture title"
              wrapperClassName="w-full 2xl:mt-[2.4rem] lg:mt-[2rem] md:mt-[1.6rem] mt-[1.4rem]"
              inputClassName="w-full lg:h-[4.8rem] md:h-[4rem] h-[4.8rem] lg:text-[1.6rem] text-[1.4rem] px-[1.2rem] rounded-[0.8rem]"
            />
          </div>

          {/* 강의 설명 */}
          <div className="flex flex-col w-full">
            <span className="2xl:text-[2.4rem] lg:text-[2.2rem] md:text-[2rem] text-[2.4rem] font-medium">
              Description
            </span>
            <Input
              type="textarea"
              textareaRows={10}
              placeholder="Enter lecture description"
              wrapperClassName="w-full 2xl:mt-[2.4rem] lg:mt-[2rem] md:mt-[1.6rem] mt-[1.4rem]"
              inputClassName="w-full text-[1.6rem] p-[1.2rem] rounded-[0.8rem]"
            />
          </div>

          {/* 태그 설정 */}
          <div className="flex flex-col w-full 2xl:gap-[1.6rem] lg:gap-[1.2rem] md:gap-[0.8rem] gap-[0.4rem]">
            {tags.map((_, index) => (
              <div
                key={index}
                className="w-full flex flex-row items-center gap-[0.8rem]"
              >
                <Input
                  {...register(`tags.${index}`)}
                  placeholder="Add your tag"
                  label={index === 0 ? "Tags" : undefined}
                  type="text"
                  add={index === 0 ? true : false}
                  addHandler={handleAddTag}
                  error={errors.tags?.[index]?.message}
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
                    onClick={() => handleRemoveTag(index)}
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

      {/* 챕터 & 섹션 관련 모달 */}
      {/* chapter일 때 */}
      {breakpoint === "mobile" && chapterOrSection === "chapter" && (
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <DrawerContent className="bg-background border-border w-full h-full p-[1.4rem] !rounded-t-[2.4rem] outline-none">
            <DrawerHeader className="mb-[0rem]">
              <DrawerTitle className="text-[2.4rem] font-bold flex flex-row items-center gap-[0.8rem]">
                <Folder color="var(--primary-color)" />
                Chapters
              </DrawerTitle>
            </DrawerHeader>
            <CreateLectureChapterModalContents
              chapters={chapters}
              selectedChapter={selectedChapter}
              setSelectedChapter={setSelectedChapter}
              breakpoint={breakpoint}
              chapterOrSection={chapterOrSection}
            />
          </DrawerContent>
        </Drawer>
      )}
      {breakpoint !== "mobile" && chapterOrSection === "chapter" && (
        <Modal className="2xl:w-[64rem] 2xl:h-[56rem] lg:w-[56rem] lg:h-[48rem] md:w-[48rem] md:h-[40rem] w-[90vw]">
          <CreateLectureChapterModalContents
            chapters={chapters}
            selectedChapter={selectedChapter}
            setSelectedChapter={setSelectedChapter}
            breakpoint={breakpoint}
            chapterOrSection={chapterOrSection}
          />
        </Modal>
      )}

      {/* section일 때 */}
      {breakpoint === "mobile" && chapterOrSection === "section" && (
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <DrawerContent className="bg-background border-border w-full h-full p-[1.4rem] !rounded-t-[2.4rem] outline-none">
            <DrawerHeader className="mb-[0rem]">
              <DrawerTitle className="text-[2.4rem] font-bold flex flex-row items-center gap-[0.8rem]">
                <Folder color="var(--primary-color)" />
                Chapters
              </DrawerTitle>
            </DrawerHeader>
            <CreateLectureChapterModalContents
              chapters={chapters}
              selectedChapter={selectedChapter}
              setSelectedChapter={setSelectedChapter}
              breakpoint={breakpoint}
              chapterOrSection={chapterOrSection}
            />
          </DrawerContent>
        </Drawer>
      )}
      {breakpoint !== "mobile" && chapterOrSection === "section" && (
        <Modal className="2xl:w-[64rem] 2xl:h-[56rem] lg:w-[56rem] lg:h-[48rem] md:w-[48rem] md:h-[40rem] w-[90vw]">
          <CreateLectureChapterModalContents
            chapters={chapters}
            selectedChapter={selectedChapter}
            setSelectedChapter={setSelectedChapter}
            breakpoint={breakpoint}
            chapterOrSection={chapterOrSection}
          />
        </Modal>
      )}
    </div>
  );
};

export default CreateLecturePage;
