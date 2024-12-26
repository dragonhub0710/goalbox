import React from "react";
import { Avatar, Button, Typography } from "@material-tailwind/react";

export function Sidebar() {
  const handleCreateNewGoal = () => {};

  return (
    <div className="flex h-full w-full min-w-[20rem] flex-col border-r-[1px] border-r-[#D5D5D5] bg-[#F6F7F8] px-6 lg:w-[25%]">
      <div className="flex h-[4rem] w-full items-center px-4">
        <a href="/">
          <div className="flex w-[106px] items-center gap-2">
            <Avatar src="/img/logo.svg" className="h-auto w-6 rounded-none" />
            <Typography className="text-xl font-bold">Goalbox</Typography>
          </div>
        </a>
      </div>
      <div className="flex h-[3rem] w-full items-center gap-2">
        <Button
          onClick={handleCreateNewGoal}
          variant="text"
          className="flex w-full items-center gap-2 px-4"
        >
          <Avatar src="/img/plus.svg" className="h-auto w-6 rounded-none" />
          <Typography className="text-lg font-semibold normal-case text-black">
            Add new goal
          </Typography>
        </Button>
      </div>
      <div className="h-[calc(100vh-8rem)] w-full">
        <div className="mb-[1rem] mt-[2rem] flex w-full justify-between px-4">
          <Typography className="text-lg font-semibold text-[#414346]">
            My goals
          </Typography>
          <Typography className="text-lg font-semibold text-[#414346]">
            0
          </Typography>
        </div>
        <div className="flex h-[2rem] w-full cursor-pointer items-center gap-2 rounded-lg px-4 hover:bg-[#e0e0e0]">
          <Avatar src="/img/list.svg" className="h-3 w-auto rounded-none" />
          <Typography className="text-ellipsis text-base font-normal normal-case text-[#414346]">
            Build wealth and financial security
          </Typography>
        </div>
      </div>
    </div>
  );
}
