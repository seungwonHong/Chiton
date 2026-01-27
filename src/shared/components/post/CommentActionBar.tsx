"use client";
import React, { useState } from "react";
import { Heart } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Quote } from "lucide-react";
import { Share } from "lucide-react";
import useMediaQuery from "@/shared/hooks/useMediaQuery";
import Modal from "../Modal";
import PostCommentModalContents from "./PostCommentModalContents";
import useModalStore from "@/shared/store/modalStore";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import PostQuoteModalContents from "./PostQuoteModalContents";

const CommentActionBar = () => {
  const [isLiked, setIsLiked] = useState(false);
  const { breakpoint } = useMediaQuery();
  const { setIsOpen } = useModalStore();
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <div className="flex flex-row items-center 2xl:gap-[2rem] lg:gap-[1.8rem] md:gap-[1.6rem] gap-[1.8rem] 2xl:mt-[1rem] lg:mt-[0.6rem] mt-[0.4rem] text-post-action-bar-icon">
      {/* 좋아요 */}
      <div
        className="group flex flex-row items-center 2xl:gap-[0.6rem] lg:gap-[0.4rem] gap-[0.2rem] cursor-pointer"
        onClick={() => setIsLiked(!isLiked)}
      >
        <Heart
          className={`2xl:w-[2rem] 2xl:h-[2rem] lg:w-[1.8rem] lg:h-[1.8rem] md:w-[1.6rem] md:h-[1.6rem] w-[2rem] h-[2rem] ${
            isLiked
              ? "text-red-500 fill-red-500"
              : "group-hover:text-red-500 transition-all duration-300 ease-in-out"
          }`}
          strokeWidth={1.5}
        />
        <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] font-normal group-hover:text-red-500 transition-all duration-300 ease-in-out">
          50
        </span>
      </div>
      {/* 댓글 */}
      <div
        className="group flex flex-row items-center 2xl:gap-[0.6rem] lg:gap-[0.4rem] gap-[0.2rem] cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(true);
          setIsCommentModalOpen(true);
        }}
      >
        <MessageCircle
          className="2xl:w-[2rem] 2xl:h-[2rem] lg:w-[1.8rem] lg:h-[1.8rem] md:w-[1.6rem] md:h-[1.6rem] w-[2rem] h-[2rem] group-hover:text-primary-color transition-all duration-300 ease-in-out"
          strokeWidth={1.5}
        />
        <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] font-normal group-hover:text-primary-color transition-all duration-300 ease-in-out">
          50
        </span>
      </div>
      {/* 인용 */}
      <div
        className="group flex flex-row items-center 2xl:gap-[0.6rem] lg:gap-[0.4rem] gap-[0.2rem] cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(true);
          setIsQuoteModalOpen(true);
        }}
      >
        <Quote
          className="2xl:w-[2rem] 2xl:h-[2rem] lg:w-[1.8rem] lg:h-[1.8rem] md:w-[1.6rem] md:h-[1.6rem] w-[2rem] h-[2rem] group-hover:text-green-600 transition-all duration-300 ease-in-out"
          strokeWidth={1.5}
        />
        <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] font-normal group-hover:text-green-600 transition-all duration-300 ease-in-out">
          50
        </span>
      </div>
      {/* 공유 */}
      <div className="group flex flex-row items-center 2xl:gap-[0.6rem] lg:gap-[0.4rem] gap-[0.2rem] cursor-pointer">
        <Share
          className="2xl:w-[2rem] 2xl:h-[2rem] lg:w-[1.8rem] lg:h-[1.8rem] md:w-[1.6rem] md:h-[1.6rem] w-[2rem] h-[2rem] group-hover:text-primary-color transition-all duration-300 ease-in-out"
          strokeWidth={1.5}
        />
        <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] font-normal group-hover:text-primary-color transition-all duration-300 ease-in-out">
          50
        </span>
      </div>

      {/* 대댓글 모달 */}
      {isCommentModalOpen && breakpoint !== "mobile" && (
        <Modal onClick={() => setIsCommentModalOpen(false)}>
          <PostCommentModalContents commentType="comment" />
        </Modal>
      )}

      {breakpoint === "mobile" && (
        <Drawer open={isCommentModalOpen} onOpenChange={setIsCommentModalOpen}>
          <DrawerContent
            className="z-[200] bg-background border-border w-full h-full p-[1.4rem] !rounded-t-[2.4rem]"
            onClick={(e) => e.stopPropagation()}
          >
            <DrawerHeader className="mb-[2rem]">
              <DrawerTitle className="text-[1.6rem] font-bold">
                Add Comment
              </DrawerTitle>
            </DrawerHeader>

            <PostCommentModalContents commentType="comment" />
          </DrawerContent>
        </Drawer>
      )}

      {/* 인용 모달 */}
      {isQuoteModalOpen && breakpoint !== "mobile" && (
        <Modal onClick={() => setIsQuoteModalOpen(false)}>
          <PostQuoteModalContents quoteType="comment" />
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

            <PostQuoteModalContents quoteType="comment" />
          </DrawerContent>
        </Drawer>
      )}
    </div>
  );
};

export default CommentActionBar;
