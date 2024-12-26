import React, { useState } from "react";
import { Avatar, Button, Textarea, Typography } from "@material-tailwind/react";

export function EmptyContent() {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = () => {};

  const handleKeyDown = (event) => {
    if (event.key == "Enter" && !event.shiftKey) {
      event.preventDefault(); // Prevent default to avoid newline on Enter press
      handleSubmit();
    }
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <Typography className="mb-8 text-3xl font-bold">
        What do you want to achieve?
      </Typography>
      <div className="mx-auto flex w-[70%] min-w-[400px] flex-col rounded-lg border-[1px] border-[#D5D5D5] p-4">
        <Textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={handleKeyDown}
          className="h-[350px] w-full !border-none !text-base !text-black"
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
  );
}
