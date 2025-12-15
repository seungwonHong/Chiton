import React from "react";
import SidePanel from "@/shared/components/side-panel/SidePanel";
import MobilePostButton from "@/features/main/components/MobilePostButton";
import LectureDetailHero from "@/features/lecture-detail/components/LectureDetailHero";
import LargeCommentSection from "@/features/lecture-detail/components/LargeCommentSection";
import SmallCommentSection from "@/features/lecture-detail/components/SmallCommentSection";
import SuggestedLecture from "@/features/lecture-detail/components/SuggestedLecture";
import LectureComponent from "@/shared/components/lecture/LectureComponent";

const LectureDetail = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  return (
    <div className="relative flex flex-col items-center justify-center 2xl:mt-[6.4rem] md:mt-[5.6rem] mt-[4.8rem] 2xl:px-[8rem] lg:px-[6rem] md:px-[3.2rem] px-[1.6rem]">
      <div className="flex flex-col items-start justify-center w-full 2xl:max-w-[150rem] lg:max-w-[130rem] md:max-w-[100rem]">
        {/* 영상 & 사이드 패널 */}
        <div className="relative flex flex-row justify-center w-full 2xl:gap-[7.2rem] lg:gap-[5.6rem] md:gap-[4.8rem] 2xl:mt-[6.4rem] lg:mt-[4.8rem] md:mt-[3.2rem] mt-[1.6rem] z-[110]">
          {/* 영상 & 댓글 */}
          <div className="flex flex-col w-full 2xl:max-w-[80rem] lg:max-w-[64rem] md:max-w-[56rem] xl:min-w-[40rem]">
            {/* 영상 */}
            <LectureDetailHero />
            {/* xl 이상일 때의 경우 */}
            <LargeCommentSection />
            {/* xl 이하일 때의 경우 */}
            <SmallCommentSection />
            {/* 추천 영상 */}
            <div className="md:grid hidden grid-cols-2">
              {Array.from({ length: 10 }).map((_, index) => (
                <LectureComponent key={index} id={index.toString()} />
              ))}
            </div>
            <div className="flex md:hidden flex-col w-full">
              {Array.from({ length: 10 }).map((_, index) => (
                <SuggestedLecture key={index} />
              ))}
            </div>
          </div>

          {/* 사이드 패널 */}
          <SidePanel usage="lecture" />
        </div>
      </div>

      {/* 모바일 포스트 작성 버튼 */}
      <MobilePostButton />
    </div>
  );
};

export default LectureDetail;
