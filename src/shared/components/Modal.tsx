"use client";
import React, { useEffect } from "react";
import useModalStore from "../store/modalStore";
import { X } from "lucide-react";

interface ModalProps {
  children: React.ReactNode;
  className?: string;
}

const Modal = ({ children, className }: ModalProps) => {
  const { isOpen, setIsOpen } = useModalStore();

  // 모달 열릴 때 body 스크롤 잠그기
  useEffect(() => {
    if (!isOpen) return;

    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed flex items-center justify-center inset-0 z-[200] bg-[var(--color-modal-background)] backdrop-blur-sm ">
      <div
        className={`z-50 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 2xl:p-[2rem] lg:p-[1.6rem] md:p-[1.2rem] p-[1rem] flex flex-col border border-dashboard-card-border bg-background 2xl:rounded-[2rem] lg:rounded-[1.6rem] md:rounded-[1.2rem] rounded-[1rem] ${
          className || ""
        }`}
      >
        <X
          className="2xl:w-10 2xl:h-10 lg:w-8 lg:h-8 md:w-6 md:h-6 w-8 h-8 cursor-pointer ml-auto"
          onClick={() => setIsOpen(false)}
        />
        {children}
      </div>
    </div>
  );
};

export default Modal;
