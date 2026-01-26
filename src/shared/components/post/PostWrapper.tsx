import Link from "next/link";
import React from "react";

interface Props {
  children: React.ReactNode;
  link?: boolean;
  reply?: boolean;
  id?: string;
}

const PostWrapper = ({ children, link = false, reply = false, id }: Props) => {
  return link ? (
    <Link
      href={`/post-detail/${id}`}
      className="flex flex-row w-full 2xl:gap-[1.4rem] lg:gap-[1.2rem] gap-[0.8rem]"
    >
      {children}
    </Link>
  ) : reply ? (
    <div className="flex flex-row w-full 2xl:gap-[1.4rem] lg:gap-[1.2rem] gap-[0.8rem]">
      {children}
    </div>
  ) : (
    <div className="flex flex-col w-full">{children}</div>
  );
};

export default PostWrapper;
