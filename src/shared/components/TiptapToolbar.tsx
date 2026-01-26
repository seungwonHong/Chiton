"use client";
import React, { useEffect, useReducer, useRef, useState } from "react";
import { Editor } from "@tiptap/react";
import {
  Heading,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  List,
  ListOrdered,
  ListCheck,
  TextQuote,
  SquareDashedBottomCode,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Code,
  Highlighter,
  Link,
  Superscript,
  Subscript,
  TextAlignCenter,
  TextAlignEnd,
  TextAlignJustify,
  TextAlignStart,
  ImagePlus,
  ChevronDown,
  Vote,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTiptapToolbarState } from "../hooks/useTiptapToolbarState";
import {
  btnClass,
  iconClass,
  menuItemClass,
  menuIconClass,
  menuLabelClass,
} from "../utils/tiptapToolbarStyles";
import { useTiptapImageStore } from "../store/tiptapImageStore";

type Props = {
  editor: Editor | null;
};

const TiptapToolbar = ({ editor }: Props) => {
  const state = useTiptapToolbarState(editor);

  const imageInputRef = useRef<HTMLInputElement>(null);
  const { imagePreviews, setImagePreviews, imageFiles, setImageFiles } = useTiptapImageStore();

  const handleImageClick = () => {
    imageInputRef.current?.click();
  };

  const handleAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files?.length) {
        const newItems = Array.from(files).map((file) => ({
        url: URL.createObjectURL(file),
        file,
      }));
      setImageFiles([...imageFiles, ...Array.from(files)]);
      setImagePreviews([...imagePreviews, ...newItems]);
    }
    e.target.value = "";
  };

  if (!state) return null;

  const tiptap = state.editor;
  const { heading, list, block, marks, align } = state;

  return (
    <div className="flex flex-row w-full whitespace-nowrap items-center gap-[0.4rem] overflow-x-auto">
      {/* 사진 */}
      <button className="group flex flex-row items-center justify-center cursor-pointer p-[0.4rem] rounded-[0.4rem] hover:bg-accent transition-all duration-300 ease-in-out shrink-0" onMouseDown={(e) => {
        e.preventDefault();
        handleImageClick();
      }}>
        <ImagePlus className="w-[1.6rem] h-[1.6rem] text-[#9ca3af] group-hover:text-foreground transition-all duration-300 ease-in-out" />
      </button>
       <input
        ref={imageInputRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={handleAddImage}
        aria-hidden
      />
      {/* 투표 */}
      <button className="group flex flex-row items-center justify-center cursor-pointer p-[0.4rem] rounded-[0.4rem] hover:bg-accent transition-all duration-300 ease-in-out shrink-0">
        <Vote className="w-[1.6rem] h-[1.6rem] text-[#9ca3af] group-hover:text-foreground transition-all duration-300 ease-in-out" />
      </button>

      <div className="w-[1px] h-[2rem] bg-border mx-[0.2rem] shrink-0" />

      {/* 헤딩 */}
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <button className={btnClass(heading.active)}>
            <heading.Icon className={iconClass(heading.active)} />
            <ChevronDown className="w-[1.2rem] h-[1.2rem] text-[#9ca3af] group-hover:text-foreground transition-all duration-300 ease-in-out" />
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="start"
          side="bottom"
          className="flex flex-col w-[12rem] py-[0.4rem] z-[250] border border-border rounded-[0.8rem] bg-popover gap-[0.4rem]"
          onCloseAutoFocus={(e) => {
            e.preventDefault();
            tiptap.commands.focus();
          }}
        >
          <DropdownMenuItem
            className={menuItemClass(heading.level === 1)}
            onSelect={() => {
              tiptap.chain().toggleHeading({ level: 1 }).run();
            }}
          >
            <Heading1 className={menuIconClass(heading.level === 1)} />
            <span className={menuLabelClass(heading.level === 1)}>
              Heading 1
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className={menuItemClass(heading.level === 2)}
            onSelect={() => {
              tiptap.chain().focus().toggleHeading({ level: 2 }).run();
            }}
          >
            <Heading2 className={menuIconClass(heading.level === 2)} />
            <span className={menuLabelClass(heading.level === 2)}>
              Heading 2
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className={menuItemClass(heading.level === 3)}
            onSelect={() => {
              tiptap.chain().focus().toggleHeading({ level: 3 }).run();
            }}
          >
            <Heading3 className={menuIconClass(heading.level === 3)} />
            <span className={menuLabelClass(heading.level === 3)}>
              Heading 3
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className={menuItemClass(heading.level === 4)}
            onSelect={() => {
              tiptap.chain().focus().toggleHeading({ level: 4 }).run();
            }}
          >
            <Heading4 className={menuIconClass(heading.level === 4)} />
            <span className={menuLabelClass(heading.level === 4)}>
              Heading 4
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className={menuItemClass(heading.level === 5)}
            onSelect={() => {
              tiptap.chain().focus().toggleHeading({ level: 5 }).run();
            }}
          >
            <Heading5 className={menuIconClass(heading.level === 5)} />
            <span className={menuLabelClass(heading.level === 5)}>
              Heading 5
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className={menuItemClass(heading.level === 6)}
            onSelect={() => {
              tiptap.chain().focus().toggleHeading({ level: 6 }).run();
            }}
          >
            <Heading6 className={menuIconClass(heading.level === 6)} />
            <span className={menuLabelClass(heading.level === 6)}>
              Heading 6
            </span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* 리스트 */}
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <button className={btnClass(list.active)}>
            <list.Icon className={iconClass(list.active)} />
            <ChevronDown className="w-[1.2rem] h-[1.2rem] text-[#9ca3af] group-hover:text-foreground transition-all duration-300 ease-in-out" />
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="start"
          side="bottom"
          className="flex flex-col w-[12.8rem] py-[0.4rem] z-[250] border border-border rounded-[0.8rem] bg-popover gap-[0.4rem]"
          onCloseAutoFocus={(e) => {
            e.preventDefault();
            tiptap.commands.focus();
          }}
        >
          <DropdownMenuItem
            className={menuItemClass(list.type === "bullet")}
            onSelect={() => {
              tiptap.chain().focus().toggleBulletList().run();
            }}
          >
            <List className={menuIconClass(list.type === "bullet")} />
            <span className={menuLabelClass(list.type === "bullet")}>
              Bullet List
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className={menuItemClass(list.type === "ordered")}
            onSelect={() => {
              tiptap.chain().focus().toggleOrderedList().run();
            }}
          >
            <ListOrdered className={menuIconClass(list.type === "ordered")} />
            <span className={menuLabelClass(list.type === "ordered")}>
              Ordered List
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className={menuItemClass(list.type === "task")}
            onSelect={() => {
              tiptap.chain().focus().toggleTaskList().run();
            }}
          >
            <ListCheck className={menuIconClass(list.type === "task")} />
            <span className={menuLabelClass(list.type === "task")}>
              Task List
            </span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* 블록 인용 */}
      <button
        className={btnClass(block.blockquote)}
        onMouseDown={(e) => {
          e.preventDefault();
          tiptap.chain().focus().toggleBlockquote().run();
        }}
      >
        <TextQuote className={iconClass(block.blockquote)} />
      </button>
      {/* 코드 블록 */}
      <button
        className={btnClass(block.codeBlock)}
        onMouseDown={(e) => {
          e.preventDefault();
          tiptap.chain().focus().toggleCodeBlock().run();
        }}
      >
        <SquareDashedBottomCode className={iconClass(block.codeBlock)} />
      </button>

      <div className="w-[1px] h-[2rem] bg-border mx-[0.2rem] shrink-0" />

      {/* 볼드 */}
      <button
        className={btnClass(marks.bold)}
        onMouseDown={(e) => {
          e.preventDefault();
          tiptap.chain().focus().toggleBold().run();
        }}
      >
        <Bold className={iconClass(marks.bold)} />
      </button>
      {/* 이탤릭 */}
      <button
        className={btnClass(marks.italic)}
        onMouseDown={(e) => {
          e.preventDefault();
          tiptap.chain().focus().toggleItalic().run();
        }}
      >
        <Italic className={iconClass(marks.italic)} />
      </button>

      {/* 취소선 */}
      <button
        className={btnClass(marks.strike)}
        onMouseDown={(e) => {
          e.preventDefault();
          tiptap.chain().focus().toggleStrike().run();
        }}
      >
        <Strikethrough className={iconClass(marks.strike)} />
      </button>
      {/* 밑줄 */}
      <button
        className={btnClass(marks.underline)}
        onMouseDown={(e) => {
          e.preventDefault();
          tiptap.chain().focus().toggleUnderline().run();
        }}
      >
        <Underline className={iconClass(marks.underline)} />
      </button>
      {/* 하이라이트 */}
      <button
        className={btnClass(marks.highlight)}
        onMouseDown={(e) => {
          e.preventDefault();
          if (tiptap.isActive("highlight")) {
            tiptap.chain().focus().unsetHighlight().run();
            return;
          }

          tiptap.chain().focus().setHighlight({ color: "#FFF3A3" }).run();
        }}
      >
        <Highlighter className={iconClass(marks.highlight)} />
      </button>
      {/* 코드 */}
      <button
        className={btnClass(marks.code)}
        onMouseDown={(e) => {
          e.preventDefault();
          tiptap.chain().focus().toggleCode().run();
        }}
      >
        <Code className={iconClass(marks.code)} />
      </button>
      {/* 링크 */}
      <button
        className={btnClass(marks.link)}
        onMouseDown={(e) => {
          e.preventDefault();
          tiptap.chain().focus().toggleLink().run();
        }}
      >
        <Link className={iconClass(marks.link)} />
      </button>

      <div className="w-[1px] h-[2rem] bg-border mx-[0.2rem] shrink-0" />

      {/* 수퍼스크립트 */}
      <button
        className={btnClass(marks.superscript)}
        onMouseDown={(e) => {
          e.preventDefault();
          tiptap.chain().focus().toggleSuperscript().run();
        }}
      >
        <Superscript className={iconClass(marks.superscript)} />
      </button>
      {/* 서브스크립트 */}
      <button
        className={btnClass(marks.subscript)}
        onMouseDown={(e) => {
          e.preventDefault();
          tiptap.chain().focus().toggleSubscript().run();
        }}
      >
        <Subscript className={iconClass(marks.subscript)} />
      </button>

      <div className="w-[1px] h-[2rem] bg-border mx-[0.2rem] shrink-0" />

      {/* 텍스트 왼쪽 정렬 */}
      <button
        className={btnClass(align.left)}
        onMouseDown={(e) => {
          e.preventDefault();
          tiptap.chain().focus().setTextAlign("left").run();
        }}
      >
        <TextAlignStart className={iconClass(align.left)} />
      </button>
      {/* 텍스트 중앙 정렬 */}
      <button
        className={btnClass(align.center)}
        onMouseDown={(e) => {
          e.preventDefault();
          tiptap.chain().focus().setTextAlign("center").run();
        }}
      >
        <TextAlignCenter className={iconClass(align.center)} />
      </button>
      {/* 텍스트 오른쪽 정렬 */}
      <button
        className={btnClass(align.right)}
        onMouseDown={(e) => {
          e.preventDefault();
          tiptap.chain().focus().setTextAlign("right").run();
        }}
      >
        <TextAlignEnd className={iconClass(align.right)} />
      </button>
      {/* 텍스트 양쪽 정렬 */}
      <button
        className={btnClass(align.justify)}
        onMouseDown={(e) => {
          e.preventDefault();
          tiptap.chain().focus().setTextAlign("justify").run();
        }}
      >
        <TextAlignJustify className={iconClass(align.justify)} />
      </button>
    </div>
  );
};

export default TiptapToolbar;
