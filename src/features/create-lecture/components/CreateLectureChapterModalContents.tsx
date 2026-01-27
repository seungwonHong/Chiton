import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Folder, Folders } from "lucide-react";
import React from "react";

interface Props {
  chapters: {
    id: string;
    name: string;
  }[];
  selectedChapter: string | null;
  setSelectedChapter: (chapter: string | null) => void;
  breakpoint: string;
  chapterOrSection: "chapter" | "section" | null;
}

const CreateLectureChapterModalContents = ({
  chapters,
  selectedChapter,
  setSelectedChapter,
  breakpoint,
  chapterOrSection,
}: Props) => {
  return (
    <div className="flex flex-col w-full h-full">
      {/* 제목 */}
      {breakpoint !== "mobile" && chapterOrSection === "chapter" ? (
        <div className="flex flex-row items-center gap-[0.8rem]">
          <Folder color="var(--primary-color)" />
          <span className="2xl:text-[2.4rem] lg:text-[2rem] md:text-[1.8rem] text-[2rem] font-normal">
            Chapters
          </span>
        </div>
      ) : (
        <div className="flex flex-row items-center gap-[0.8rem]">
          <Folders color="var(--section-color)" strokeWidth={2} />
          <span className="2xl:text-[2.4rem] lg:text-[2rem] md:text-[1.8rem] text-[2rem] font-normal">
            Sections
          </span>
        </div>
      )}
      {/* 챕터 선택 */}
      <div className="flex flex-col w-full md:mt-[1.6rem] mt-0 overflow-y-auto md:ml-0 ml-[2rem]">
        {chapters.map((chapter) => (
          <div
            className="flex flex-row items-center gap-[0.8rem]"
            key={chapter.id}
          >
            <Checkbox
              checked={selectedChapter === chapter.id}
              onCheckedChange={() => {
                if (selectedChapter === chapter.id) {
                  setSelectedChapter(null);
                } else {
                  setSelectedChapter(chapter.id);
                }
              }}
              className="lg:w-[1.8rem] lg:h-[1.8rem] w-[1.6rem] h-[1.6rem] md:ml-[0.8rem] cursor-pointer [&_svg]:w-[1.6rem] [&_svg]:h-[1.6rem] "
            />
            <Folder
              className="lg:w-[2rem] lg:h-[2rem] w-[1.8rem] h-[1.8rem] ml-[0.8rem]"
              strokeWidth={1.5}
            />
            <span className="lg:text-[1.8rem] md:text-[1.6rem] text-[1.8rem] font-medium">
              {chapter.name}
            </span>
          </div>
        ))}
      </div>

      {/* 확인 & 생성 버튼 */}
      <div className="flex flex-row items-center justify-end gap-[0.8rem] w-full mt-auto ">
        <Button
          variant="outline"
          className="flex-1 cursor-pointer md:text-[1.4rem] text-[1.8rem] font-normal md:py-[1.6rem] py-[1.8rem] md:rounded-[0.6rem] rounded-[0.8rem]"
        >
          {chapterOrSection === "chapter" ? "Create Chapter" : "Create Section"}
        </Button>
        <Button className="flex-1 cursor-pointer md:text-[1.4rem] text-[1.8rem] font-normal md:py-[1.6rem] py-[1.8rem] md:rounded-[0.6rem] rounded-[0.8rem]">
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default CreateLectureChapterModalContents;
