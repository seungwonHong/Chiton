"use client";
import React, { useState } from "react";
import {
  Heart,
  Repeat2,
  MessageCircle,
  Quote,
  Share,
  Bookmark,
} from "lucide-react";
import useModalStore from "@/shared/store/modalStore";
import useMediaQuery from "@/shared/hooks/useMediaQuery";
import PostCommentModalContents from "./PostCommentModalContents";
import Modal from "../Modal";
import { usePathname } from "next/navigation";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import PostQuoteModalContents from "./PostQuoteModalContents";

const PostActionBar = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const { setIsOpen } = useModalStore();
  const [isReplyModalOpen, setIsReplyModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const { breakpoint } = useMediaQuery();
  const pathname = usePathname();

  return (
    <div className="flex flex-row items-center 2xl:gap-[3.2rem] lg:gap-[2.4rem] md:gap-[2rem] gap-[1.6rem] 2xl:mt-[2.6rem] lg:mt-[2rem] md:mt-[1.6rem] mt-[1rem]">
      {/* 좋아요 */}
      <div className="group flex flex-row items-center 2xl:gap-[0.8rem] lg:gap-[0.6rem] md:gap-[0.6rem] gap-[0.4rem] hover:text-red-500 transition-all duration-300 ease-in-out cursor-pointer">
        <Heart
          className={`2xl:w-[2.4rem] 2xl:h-[2.4rem] lg:w-[2.2rem] lg:h-[2.2rem] md:w-[2rem] md:h-[2rem] w-[2.4rem] h-[2.4rem] cursor-pointer ${
            isLiked
              ? "text-red-500 fill-red-500"
              : "text-post-action-bar-icon group-hover:text-red-500 transition-all duration-300 ease-in-out"
          }`}
          strokeWidth={1.5}
          onClick={(e) => {
            e.preventDefault();
            setIsLiked(!isLiked);
          }}
        />
        <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] font-normal text-post-action-bar-icon group-hover:text-red-500 transition-all duration-300 ease-in-out">
          50
        </span>
      </div>
      {/* 댓글 */}
      <div
        className="group flex flex-row items-center 2xl:gap-[0.8rem] lg:gap-[0.6rem] md:gap-[0.6rem] gap-[0.4rem] hover:text-primary-color transition-all duration-300 ease-in-out cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          if (!pathname.includes("/post-detail")) {
            setIsOpen(true);
            setIsReplyModalOpen(true);
          }
        }}
      >
        <MessageCircle
          className="2xl:w-[2.4rem] 2xl:h-[2.4rem] lg:w-[2.2rem] lg:h-[2.2rem] md:w-[2rem] md:h-[2rem] w-[2.4rem] h-[2.4rem] cursor-pointer text-post-action-bar-icon group-hover:text-primary-color transition-all duration-300 ease-in-out"
          strokeWidth={1.5}
        />
        <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] font-normal text-post-action-bar-icon group-hover:text-primary-color transition-all duration-300 ease-in-out">
          50
        </span>
      </div>
      {/* 인용 */}
      <div
        className="group flex flex-row items-center 2xl:gap-[0.8rem] lg:gap-[0.6rem] md:gap-[0.6rem] gap-[0.4rem] hover:text-green-600 transition-all duration-300 ease-in-out cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(true);
          setIsQuoteModalOpen(true);
        }}
      >
        <Quote
          className="2xl:w-[2.4rem] 2xl:h-[2.4rem] lg:w-[2.2rem] lg:h-[2.2rem] md:w-[2rem] md:h-[2rem] w-[2.4rem] h-[2.4rem] cursor-pointer text-post-action-bar-icon group-hover:text-green-600 transition-all duration-300 ease-in-out"
          strokeWidth={1.5}
        />
        <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] font-normal text-post-action-bar-icon group-hover:text-green-600 transition-all duration-300 ease-in-out">
          50
        </span>
      </div>
      {/* 공유 */}
      <div className="group flex flex-row items-center 2xl:gap-[0.8rem] lg:gap-[0.6rem] md:gap-[0.6rem] gap-[0.4rem] hover:text-primary-color transition-all duration-300 ease-in-out cursor-pointer">
        <Share
          className="2xl:w-[2.4rem] 2xl:h-[2.4rem] lg:w-[2.2rem] lg:h-[2.2rem] md:w-[2rem] md:h-[2rem] w-[2.4rem] h-[2.4rem] cursor-pointer text-post-action-bar-icon group-hover:text-primary-color transition-all duration-300 ease-in-out"
          strokeWidth={1.5}
        />
        <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] font-normal text-post-action-bar-icon group-hover:text-primary-color transition-all duration-300 ease-in-out">
          50
        </span>
      </div>
      {/* 북마크 */}
      <div
        className="flex flex-row items-center 2xl:gap-[0.8rem] lg:gap-[0.6rem] md:gap-[0.6rem] gap-[0.4rem]"
        onClick={(e) => {
          e.preventDefault();
          setIsBookmarked(!isBookmarked);
        }}
      >
        <Bookmark
          className={`2xl:w-[2.4rem] 2xl:h-[2.4rem] lg:w-[2.2rem] lg:h-[2.2rem] md:w-[2rem] md:h-[2rem] w-[2.4rem] h-[2.4rem] cursor-pointer ${
            isBookmarked
              ? "text-primary-color fill-primary-color"
              : "text-post-action-bar-icon hover:text-primary-color transition-all duration-300 ease-in-out"
          }`}
          strokeWidth={1.5}
        />
      </div>

      {/* 댓글 모달 */}
      {isReplyModalOpen && breakpoint !== "mobile" && (
        <Modal onClick={() => setIsReplyModalOpen(false)}>
          <PostCommentModalContents commentType="reply" />
        </Modal>
      )}

      {breakpoint === "mobile" && (
        <Drawer open={isReplyModalOpen} onOpenChange={setIsReplyModalOpen}>
          <DrawerContent
            className="bg-background border-border w-full h-full p-[1.4rem] !rounded-t-[2.4rem]"
            onClick={(e) => e.stopPropagation()}
          >
            <DrawerHeader className="mb-[2rem]">
              <DrawerTitle className="text-[1.6rem] font-bold">
                Reply
              </DrawerTitle>
            </DrawerHeader>

            <PostCommentModalContents commentType="reply" />
          </DrawerContent>
        </Drawer>
      )}

      {/* 인용 모달 */}
      {isQuoteModalOpen && breakpoint !== "mobile" && (
        <Modal onClick={() => setIsQuoteModalOpen(false)}>
          <PostQuoteModalContents quoteType="post" />
        </Modal>
      )}

      {breakpoint === "mobile" && (
        <Drawer open={isQuoteModalOpen} onOpenChange={setIsQuoteModalOpen}>
          <DrawerContent
            className="bg-background border-border w-full h-full p-[1.4rem] !rounded-t-[2.4rem]"
            onClick={(e) => e.stopPropagation()}
          >
            <DrawerHeader className="mb-[2rem]">
              <DrawerTitle className="text-[1.6rem] font-bold">
                Quote
              </DrawerTitle>
            </DrawerHeader>

            <PostQuoteModalContents quoteType="post" />
          </DrawerContent>
        </Drawer>
      )}
    </div>
  );
};

export default PostActionBar;
