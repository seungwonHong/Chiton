import { useTabStore } from "@/features/landing/store/tabButton";
import {
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import React, { useEffect } from "react";

interface Props {
  type: "landing" | "home";
}

const useUrlType = ({ type }: Props) => {
  const { activeTab, setActiveTab } = useTabStore();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleMenu = async (tab: string) => {
    setActiveTab(tab);

    if (type === "home") {
      const params = new URLSearchParams(searchParams.toString());
      params.set("type", tab.toLowerCase());
      router.replace(`${pathname}?${params.toString()}`);
      await new Promise((resolve) => setTimeout(resolve, 0));
      router.refresh();
    }
  };

  // 직접 쿼리스트링 읽어와야 함
  useEffect(() => {
    if (type === "home") {
      const typeParam = searchParams.get("type");
      if (typeParam) {
        // 쿼리 파라미터를 직접 읽어서 탭 설정
        setActiveTab(
          typeParam === "posts"
            ? "posts"
            : typeParam === "topics"
            ? "topics"
            : "lectures"
        );
      }
    }
  }, [type, searchParams.toString(), setActiveTab]);

  return { activeTab, handleMenu };
};

export default useUrlType;
