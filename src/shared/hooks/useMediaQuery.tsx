// timeline/src/shared/hooks/useMediaQuery.tsx
import { useEffect, useState } from "react";

type Breakpoint = "mobile" | "tablet" | "desktop";

const MOBILE_MAX = 767; // < 768
const TABLET_MAX = 1023; // 768 ~ 1023, >1024는 desktop

const getBreakpoint = (width: number): Breakpoint => {
  if (width <= MOBILE_MAX) return "mobile";
  if (width <= TABLET_MAX) return "tablet";
  return "desktop";
};

const useMediaQuery = () => {
  const [width, setWidth] = useState<number | null>(null);
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("desktop");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      const w = window.innerWidth;
      setWidth(w);
      setBreakpoint(getBreakpoint(w));
    };

    // 초기 값 세팅
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    width,
    breakpoint,
  };
};

export default useMediaQuery;
