import Link from "next/link";
import React from "react";

interface Props {
  children: React.ReactNode;
  postDetail?: boolean;
  id?: string;
}

const PostWrapper = ({ children, postDetail = false, id }: Props) => {
  return postDetail ? (
    <div className="flex flex-col w-full">{children}</div>
  ) : (
    <Link href={`/post-detail/${id}`} className="flex flex-col w-full">
      {children}
    </Link>
  );
};

export default PostWrapper;
