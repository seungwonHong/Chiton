import Input from "@/shared/components/Input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProfileEditSheetProps {
  editOpen: boolean;
  setEditOpen: (open: boolean) => void;
}

const profileSchema = z.object({
  links: z.array(z.string().trim()).default([""]),
  techStacks: z
    .array(
      z.object({
        name: z.string().trim(),
        color: z.string().default("#000000"),
      }),
    )
    .default([{ name: "", color: "#000000" }]),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

const ProfileEditSheet = ({ editOpen, setEditOpen }: ProfileEditSheetProps) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting, isValid },
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    mode: "onChange",
    defaultValues: {
      links: [""],
      techStacks: [{ name: "", color: "#000000" }],
    },
  });

  const links = watch("links") ?? [""];
  const techStacks = watch("techStacks") ?? [{ name: "", color: "#000000" }];

  const handleAddLink = () => {
    setValue("links", [...links, ""], {
      shouldDirty: true,
      shouldValidate: true,
    });
  };

  const handleRemoveLink = (index: number) => {
    const newLinks = links.filter((_, i) => i !== index);
    setValue("links", newLinks.length > 0 ? newLinks : [""], {
      shouldDirty: true,
      shouldValidate: true,
    });
  };

  const handleAddTechStack = () => {
    setValue("techStacks", [...techStacks, { name: "", color: "#000000" }], {
      shouldDirty: true,
      shouldValidate: true,
    });
  };

  const handleRemoveTechStack = (index: number) => {
    const newTechStacks = techStacks.filter((_, i) => i !== index);
    setValue(
      "techStacks",
      newTechStacks.length > 0
        ? newTechStacks
        : [{ name: "", color: "#000000" }],
      {
        shouldDirty: true,
        shouldValidate: true,
      },
    );
  };

  const handleTechStackColorChange = (index: number, color: string) => {
    setValue(`techStacks.${index}.color`, color, {
      shouldDirty: true,
      shouldValidate: true,
    });
  };

  return (
    <Sheet open={editOpen} onOpenChange={setEditOpen}>
      <SheetContent className="z-[250] border-l border-border p-[1.6rem] overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-[1.6rem] font-normal">
            Edit Profile
          </SheetTitle>
          <SheetDescription className="text-[1.4rem] text-normal text-[#9f9f9f]">
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>

        {/* Status */}
        <Input
          type="text"
          label="Status"
          placeholder="Explain your status"
          wrapperClassName="w-full 2xl:mt-[2.4rem] lg:mt-[2rem] md:mt-[1.6rem] mt-[1.4rem]"
          inputClassName="w-full h-[3.2rem] text-[1.4rem] px-[1rem] rounded-[0.8rem] mt-[0.8rem]"
          labelClassName="text-[1.4rem] text-normal"
        />

        {/* Introduction */}
        <Input
          type="textarea"
          textareaRows={8}
          label="Introduction"
          placeholder="Introduce yourself"
          wrapperClassName="w-full 2xl:mt-[2.4rem] lg:mt-[2rem] md:mt-[1.6rem] mt-[1.4rem]"
          inputClassName="w-full text-[1.4rem] p-[1rem] rounded-[0.8rem] mt-[0.8rem]"
          labelClassName="text-[1.4rem] text-normal"
        />

        {/* Links */}
        <div className="flex flex-col w-full gap-[0.8rem] mt-[2.4rem]">
          {links.map((_, index) => (
            <div
              key={index}
              className="w-full flex flex-row items-center gap-[0.8rem]"
            >
              <Input
                {...register(`links.${index}`)}
                placeholder="Add your link"
                label={index === 0 ? "Links" : undefined}
                type="text"
                add={index === 0 ? true : false}
                addHandler={handleAddLink}
                error={errors.links?.[index]?.message}
                wrapperClassName={`w-full gap-[0.8rem] ${
                  index > 0 ? "md:ml-[3.2rem] ml-[2.4rem]" : ""
                }`}
                labelClassName="text-[1.4rem] text-normal gap-0"
                inputClassName="rounded-[0.8rem] w-full h-[3.2rem] text-[1.4rem] pl-[1rem]"
                addIconClassName="!w-[1.6rem] !h-[1.6rem]"
              />
              {index > 0 && (
                <Trash2
                  className="2xl:w-[3.2rem] lg:w-[2.4rem] w-[2.4rem] 2xl:h-[3.6rem] lg:h-[3rem] h-[3rem] text-red-500 cursor-pointer"
                  onClick={() => handleRemoveLink(index)}
                />
              )}
            </div>
          ))}
        </div>

        {/* Tech Stacks */}
        <div className="flex flex-col w-full gap-[0.8rem] mt-[2.4rem]">
          {techStacks.map((_, index) => (
            <div
              key={index}
              className="w-full flex flex-row items-center gap-[0.8rem]"
            >
              <Input
                {...register(`techStacks.${index}.name`)}
                placeholder="Add your tag"
                label={index === 0 ? "Tech Stacks" : undefined}
                type="text"
                colorPicker={true}
                colorValue={techStacks[index].color}
                colorHandler={(color) =>
                  handleTechStackColorChange(index, color)
                }
                add={index === 0 ? true : false}
                addHandler={handleAddTechStack}
                error={errors.techStacks?.[index]?.message}
                wrapperClassName={`w-full gap-[0.8rem] ${
                  index > 0 ? "md:ml-[3.2rem] ml-[2.4rem]" : ""
                }`}
                labelClassName="text-[1.4rem] text-normal gap-0"
                inputClassName="rounded-[0.8rem] w-full h-[3.2rem] text-[1.4rem] pl-[1rem] pr-[4.8rem]"
                addIconClassName="!w-[1.6rem] !h-[1.6rem]"
              />
              {index > 0 && (
                <Trash2
                  className="2xl:w-[3.2rem] lg:w-[2.4rem] w-[2.4rem] 2xl:h-[3.6rem] lg:h-[3rem] h-[3rem] text-red-500 cursor-pointer"
                  onClick={() => handleRemoveTechStack(index)}
                />
              )}
            </div>
          ))}
        </div>

        <SheetFooter className="w-full p-0">
          <Button
            type="submit"
            className="h-[3.2rem] text-[1.4rem] rounded-[0.8rem] cursor-pointer"
          >
            Save Changes
          </Button>
          <SheetClose asChild>
            <Button
              type="button"
              variant="outline"
              className="border-border h-[3.2rem] text-[1.4rem] rounded-[0.8rem] cursor-pointer"
            >
              Cancel
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default ProfileEditSheet;
