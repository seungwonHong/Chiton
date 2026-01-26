"use client";
import React from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TiptapToolbar from "./TiptapToolbar";
import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Superscript from "@tiptap/extension-superscript";
import Subscript from "@tiptap/extension-subscript";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import { useTiptapImageStore } from "../store/tiptapImageStore";
import { X } from "lucide-react";

interface Props {
  content?: string;
  onChange: (html: string) => void;
}

const TiptapEditor = ({ content = "", onChange }: Props) => {
  const { imagePreviews, removeImage } = useTiptapImageStore();

  const editor = useEditor({
    extensions: [
      StarterKit,
      Highlight,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Placeholder.configure({ placeholder: "Share your thoughts..." }),
      Underline,
      Link.configure({
        openOnClick: false,
      }),
      Superscript,
      Subscript,
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
    ],
    content,
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          "w-full bg-background 2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.6rem] focus:outline-none py-[0.4rem]",
      },
    },
    onUpdate: ({ editor }) => {
      onChange?.(editor.getHTML());
    },
  });

  return (
    <div className="flex flex-col rounded-lg max-w-full overflow-x-hidden w-full min-w-0">
      <EditorContent editor={editor} className="tiptap" />
      <div className={`flex flex-row gap-[0.4rem] items-center overflow-x-auto ${imagePreviews.length > 0 && "pb-[0.8rem]"}`}>{imagePreviews.map((image, index) => (<div key={image.url} className="relative shrink-0"><img src={image.url} className="aspect-square h-[14rem] w-[14rem] shrink-0 rounded-[0.6rem] object-cover md:h-[12rem] md:w-[12rem] lg:h-[14rem] lg:w-[14rem]"></img><div className="p-[0.2rem] rounded-[0.4rem] hover:bg-[#757575]/70 absolute top-[0.4rem] right-[0.4rem] cursor-pointer flex items-center justify-center transition-colors duration-300 ease-in-out"><X className="md:w-[1.6rem] md:h-[1.6rem] w-[1.8rem] h-[1.8rem] text-[#d0d0d0] group-hover:text-foreground transition-all duration-300 ease-in-out" onClick={() => removeImage(index)} /></div></div>)) }</div>
      <div className="w-full max-w-full overflow-x-auto">
        <TiptapToolbar editor={editor} />
      </div>
    </div>
  );
};

export default TiptapEditor;
