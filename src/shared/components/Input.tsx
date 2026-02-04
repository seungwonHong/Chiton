"use client";
import React, { useState, forwardRef, Ref, useRef, useEffect } from "react";
import { TriangleAlert } from "lucide-react";
import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";
import { Plus } from "lucide-react";
import { Search } from "lucide-react";
import { HexColorPicker } from "react-colorful";

interface Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  type: string;
  colorPicker?: boolean;
  searchIconClassName?: string;
  placeholder?: string;
  inputClassName?: string;
  labelClassName?: string;
  wrapperClassName?: string;
  error?: string;
  add?: boolean;
  textareaRows?: number;
  autoResize?: boolean;
  addIconClassName?: string;
  addHandler?: () => void;
  colorValue?: string;
  colorHandler?: (color: string) => void;
}

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, Props>(
  (
    {
      label,
      type,
      placeholder,
      colorPicker,
      searchIconClassName,
      inputClassName,
      labelClassName,
      wrapperClassName,
      error,
      add,
      addHandler,
      textareaRows = 5,
      autoResize = false,
      addIconClassName,
      colorValue,
      colorHandler,
      ...rest
    },
    ref,
  ) => {
    const [viewPassword, setViewPassword] = useState(false);
    const [inputType, setInputType] = useState(type);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [colorPickerOpen, setColorPickerOpen] = useState(false);
    const colorPickerRef = useRef<HTMLDivElement>(null);

    // 팔레트 외부 클릭 시 닫기
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          colorPickerRef.current &&
          !colorPickerRef.current.contains(event.target as Node)
        ) {
          setColorPickerOpen(false);
        }
      };

      if (colorPickerOpen) {
        document.addEventListener("mousedown", handleClickOutside);
      }

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [colorPickerOpen]);

    const adjustTextareaHeight = () => {
      const textarea = textareaRef.current;
      if (textarea) {
        textarea.style.height = "auto";
        textarea.style.height = `${textarea.scrollHeight}px`;
      }
    };

    return (
      <div className={`${wrapperClassName} flex flex-col`}>
        {label && (
          <div className="flex flex-row items-center gap-[0.8rem]">
            <label htmlFor={label} className={`${labelClassName}`}>
              {label}
            </label>
            {add && (
              <div
                className="cursor-pointer hover:bg-[var(--input-bg)] duration-300 ease-in-out rounded-[0.4rem] p-[0.4rem]"
                onClick={() => addHandler?.()}
              >
                <Plus
                  className={`2xl:w-[1.6rem] lg:w-[1.2rem] w-[1.6rem] 2xl:h-[1.6rem] lg:h-[1.2rem] h-[1.6rem] ${addIconClassName}`}
                />
              </div>
            )}
          </div>
        )}
        <div className="relative">
          {type === "textarea" ? (
            <textarea
              ref={
                autoResize
                  ? (node) => {
                      if (typeof ref === "function") {
                        ref(node);
                      } else if (ref) {
                        ref.current = node;
                      }
                      // 내부 textareaRef에도 할당 (높이 조정용)
                      textareaRef.current = node;
                      // 초기 높이 조정
                      if (node) {
                        adjustTextareaHeight();
                      }
                    }
                  : (ref as React.Ref<HTMLTextAreaElement>)
              }
              placeholder={placeholder}
              onInput={autoResize ? adjustTextareaHeight : undefined}
              rows={textareaRows}
              className={`bg-[var(--color-input-bg)] border-none outline-none resize-none ${inputClassName}`}
              id={label}
              {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
            />
          ) : (
            <div className="relative">
              {type === "search" && (
                <Search
                  className={`absolute top-1/2 -translate-y-1/2 ${searchIconClassName}`}
                />
              )}
              <input
                ref={ref as React.Ref<HTMLInputElement>}
                type={inputType}
                placeholder={placeholder}
                className={`bg-[var(--color-input-bg)] ${
                  type === "search" ? "border-none" : "border border-border"
                } outline-none ${inputClassName}`}
                id={label}
                {...rest}
              />
              {/* 태그 색상 선택 */}
              {colorPicker && (
                <div
                  className={`absolute right-[1.2rem] top-1/2 -translate-y-1/2 rounded-full w-[2.4rem] h-[2.4rem] border border-border shrink-0 cursor-pointer`}
                  style={{ backgroundColor: colorValue }}
                  onClick={() => setColorPickerOpen(!colorPickerOpen)}
                />
              )}
              {colorPickerOpen && (
                <div
                  className="absolute right-[1.6rem] top-[6.4rem] z-50"
                  ref={colorPickerRef}
                >
                  <HexColorPicker color={colorValue} onChange={colorHandler} />
                </div>
              )}
            </div>
          )}
          {type === "password" &&
            (viewPassword === false ? (
              <Eye
                className="absolute right-[1.6rem] top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={() => (setViewPassword(true), setInputType("text"))}
              />
            ) : (
              <EyeOff
                className="absolute right-[1.6rem] top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={() => (
                  setViewPassword(false), setInputType("password")
                )}
              />
            ))}
        </div>
        {error && (
          <div className="flex flex-row items-center gap-[0.4rem]">
            <TriangleAlert className="2xl:w-[1.6rem] lg:w-[1.2rem] w-[1rem] 2xl:h-[1.6rem] lg:h-[1.2rem] h-[1rem] text-red-500" />
            <span className="text-red-500 2xl:text-[1.4rem] lg:text-[1.2rem] text-[1rem] text-normal">
              {error}
            </span>
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
