import React, { useState } from "react";
import { Avatar, Button, Textarea } from "@material-tailwind/react";

export function NewChat() {
  const [prompt, setPrompt] = useState("");
  const [heightProperty, setHeightProperty] = useState("h-[760px]");
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleSubmit = () => {};

  const handleKeyDown = (event) => {
    if (event.key == "Enter" && !event.shiftKey) {
      event.preventDefault(); // Prevent default to avoid newline on Enter press
      handleSubmit();
    }
  };

  const handleCollapsed = () => {
    setIsCollapsed((prev) => !prev);
    if (isCollapsed) {
      setHeightProperty("h-[760px]");
    } else {
      setHeightProperty("h-[260px]");
    }
  };

  return (
    <div
      className={`flex w-[410px] flex-col rounded-t-lg border-[1px] border-[#D5D5D5] bg-white shadow-md ${heightProperty}`}
    >
      <div className="flex h-[54px] w-full items-center justify-end border-b-[1px] border-b-[#D5D5D5] px-2">
        <Button
          variant="text"
          onClick={handleCollapsed}
          className="flex h-10 w-10 items-center justify-center p-0"
        >
          <Avatar
            src="/img/dropdown.svg"
            className={`h-6 w-auto rounded-none transition-transform duration-300 ${
              isCollapsed ? "rotate-180" : ""
            }`}
          />
        </Button>
      </div>
      <div className="flex flex-col p-2">
        {!isCollapsed && <div className="h-[500px] w-full p-4"></div>}
        <div className="mx-auto flex w-full flex-col overflow-y-auto rounded-lg border-[1px] border-[#D5D5D5] p-4">
          <Textarea
            value={prompt}
            placeholder="Tell me more and I can improve your plan"
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={handleKeyDown}
            className="h-[100px] w-full !border-none !text-base !text-black"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          ></Textarea>
          <div className="flex w-full justify-end">
            <Button
              onClick={handleSubmit}
              className="flex h-10 w-10 items-center justify-center bg-[#FA003F] p-0"
            >
              <Avatar src="/img/arrowup.svg" className="h-6 w-6 rounded-none" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
