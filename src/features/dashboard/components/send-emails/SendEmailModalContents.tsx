import Button from "@/shared/components/Button";
import Input from "@/shared/components/Input";
import React from "react";
import { Send } from "lucide-react";

type Props = {};

const SendEmailModalContents = (props: Props) => {
  return (
    <div className="flex flex-col h-full overflow-y-auto">
      <h1 className="2xl:text-[3.6rem] lg:text-[3rem] md:text-[2.4rem] text-[2rem] font-medium">
        Send Emails
      </h1>

      <div className="flex flex-col lg:px-[6.4rem] md:px-[4.8rem] px-[2.4rem]">
        <Input
          type="text"
          placeholder="Title"
          inputClassName="w-full h-[3.2rem] text-[1.4rem] px-[1.2rem] py-[0.8rem] rounded-[0.6rem]"
          wrapperClassName="lg:mt-[1.6rem] mt-[1.2rem]"
        />
        <Input
          type="text"
          placeholder="Reciever"
          inputClassName="w-full h-[3.2rem] text-[1.4rem] px-[1.2rem] py-[0.8rem] rounded-[0.6rem]"
          wrapperClassName="lg:mt-[1.6rem] mt-[1.2rem]"
        />
        <Input
          type="textarea"
          placeholder="Content"
          textareaRows={20}
          inputClassName="w-full h-full text-[1.4rem] px-[1.2rem] py-[0.8rem] rounded-[0.6rem] resize-none"
          wrapperClassName="lg:mt-[1.6rem] mt-[1.2rem]"
        />

        <Button className="ml-auto mt-[1.6rem] flex flex-row items-center lg:gap-[0.8rem] gap-[0.4rem] !rounded-[0.8rem] hover:bg-button-hover">
          <Send className="w-[2rem] h-[2rem]" />
          <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] font-medium">
            Send
          </span>
        </Button>
      </div>
    </div>
  );
};

export default SendEmailModalContents;
