import React, { useEffect, useRef, useState } from "react";

interface Props {
  isOpen: boolean;
}

const useHeaderScroll = ({ isOpen }: Props) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const scrollThreshold = 10;
  const lastScrollY = useRef(0);

  // 스크롤 이벤트 처리 (사이드바가 닫힌 상태에서만)
  useEffect(() => {
    if (isOpen) {
      setIsHeaderVisible(true);
      return;
    }

    const handleScroll = () => {
      const currentScrollY =
        window.scrollY || document.documentElement.scrollTop;

      if (currentScrollY <= scrollThreshold) {
        setIsHeaderVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      if (currentScrollY > lastScrollY.current) {
        setIsHeaderVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        setIsHeaderVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return { isHeaderVisible };
};

export default useHeaderScroll;
