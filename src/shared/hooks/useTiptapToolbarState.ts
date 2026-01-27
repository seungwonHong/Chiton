import { useEffect, useReducer } from "react";
import type { Editor } from "@tiptap/react";
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
} from "lucide-react";

export function useTiptapToolbarState(editor: Editor | null) {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    if (!editor) return;
    const update = () => forceUpdate();

    editor.on("transaction", update);
    editor.on("selectionUpdate", update);

    return () => {
      editor.off("transaction", update);
      editor.off("selectionUpdate", update);
    };
  }, [editor]);

  if (!editor) return null;

  // 헤딩
  const isH1 = editor.isActive("heading", { level: 1 });
  const isH2 = editor.isActive("heading", { level: 2 });
  const isH3 = editor.isActive("heading", { level: 3 });
  const isH4 = editor.isActive("heading", { level: 4 });
  const isH5 = editor.isActive("heading", { level: 5 });
  const isH6 = editor.isActive("heading", { level: 6 });

  const headingLevel = isH1
    ? 1
    : isH2
    ? 2
    : isH3
    ? 3
    : isH4
    ? 4
    : isH5
    ? 5
    : isH6
    ? 6
    : 0;
  const isHeadingActive = headingLevel !== 0;

  const HeadingIcon =
    headingLevel === 1
      ? Heading1
      : headingLevel === 2
      ? Heading2
      : headingLevel === 3
      ? Heading3
      : headingLevel === 4
      ? Heading4
      : headingLevel === 5
      ? Heading5
      : headingLevel === 6
      ? Heading6
      : Heading;

  // 리스트
  const isBulletList = editor.isActive("bulletList");
  const isOrderedList = editor.isActive("orderedList");
  const isTaskList = editor.isActive("taskList"); // extension 없으면 거의 false

  const listType = isTaskList
    ? "task"
    : isOrderedList
    ? "ordered"
    : isBulletList
    ? "bullet"
    : "none";
  const isListActive = listType !== "none";

  const ListIcon =
    listType === "ordered"
      ? ListOrdered
      : listType === "task"
      ? ListCheck
      : List;

  // 블록
  const isBlockquote = editor.isActive("blockquote");
  const isCodeBlock = editor.isActive("codeBlock");

  // 인라인 마크
  const isBold = editor.isActive("bold");
  const isItalic = editor.isActive("italic");
  const isStrike = editor.isActive("strike");
  const isCode = editor.isActive("code");

  // 아래는 extension 없으면 항상 false일 수 있음
  const isUnderline = editor.isActive("underline"); // Underline extension 필요
  const isHighlight = editor.isActive("highlight"); // Highlight extension 필요
  const isLink = editor.isActive("link"); // Link extension 필요
  const isSuperscript = editor.isActive("superscript"); // Superscript extension 필요
  const isSubscript = editor.isActive("subscript"); // Subscript extension 필요

  // 정렬(TextAlign extension 필요. 설정에 따라 체크 방식이 이게 가장 안전함)
  const isAlignLeft = editor.isActive({ textAlign: "left" });
  const isAlignCenter = editor.isActive({ textAlign: "center" });
  const isAlignRight = editor.isActive({ textAlign: "right" });
  const isAlignJustify = editor.isActive({ textAlign: "justify" });

  return {
    editor,
    heading: {
      level: headingLevel,
      active: isHeadingActive,
      Icon: HeadingIcon,
    },
    list: {
      type: listType,
      active: isListActive,
      Icon: ListIcon,
      bullet: isBulletList,
      ordered: isOrderedList,
      task: isTaskList,
    },
    block: {
      blockquote: isBlockquote,
      codeBlock: isCodeBlock,
    },
    marks: {
      bold: isBold,
      italic: isItalic,
      strike: isStrike,
      code: isCode,
      underline: isUnderline,
      highlight: isHighlight,
      link: isLink,
      superscript: isSuperscript,
      subscript: isSubscript,
    },
    align: {
      left: isAlignLeft,
      center: isAlignCenter,
      right: isAlignRight,
      justify: isAlignJustify,
    },
  };
}
