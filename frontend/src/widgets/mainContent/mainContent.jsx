import React from "react";
import { Avatar, Typography } from "@material-tailwind/react";
import { PlanItem } from "../list/planItem";

export function MainContent() {
  return (
    <div className="flex h-full w-full flex-1 flex-col">
      <div className="h-[4rem] w-full border-b-[1px] border-b-[#D5D5D5]"></div>
      <div className="flex h-[calc(100vh-4rem)] w-full px-10 py-4">
        <div className="h-full w-[70%] p-4">
          <Typography className="text-2xl font-bold">Your Plan</Typography>
          <PlanItem
            priority={1}
            title={"Build Emergency Fund"}
            content={
              "Save 3-6 months of living expenses in a high interest savings account"
            }
            period={"Months 1-2"}
          />
          <PlanItem
            priority={2}
            title={"Build Emergency Fund"}
            content={
              "Save 3-6 months of living expenses in a high interest savings account"
            }
            period={"Months 1-2"}
          />
          <PlanItem
            priority={3}
            title={"Build Emergency Fund"}
            content={
              "Save 3-6 months of living expenses in a high interest savings account"
            }
            period={"Months 1-2"}
          />
          <PlanItem
            priority={4}
            title={"Build Emergency Fund"}
            content={
              "Save 3-6 months of living expenses in a high interest savings account"
            }
            period={"Months 1-2"}
          />
        </div>
        <div className="h-full w-[30%] p-4">
          <div>
            <Typography className="text-2xl font-bold">Your Goal</Typography>
            <Typography className="py-4 text-lg font-normal">
              Achieve financial independence by age 50 through a combination of
              passive income streams and strategic investments, allowing for
              reduced work hours and a comfortable retirement.
            </Typography>
          </div>
          <div className="py-4">
            <div className="my-6 flex w-full items-center gap-4">
              <Typography className="text-2xl font-bold">
                Success Factors
              </Typography>
              <Avatar src="/img/info.svg" className="h-auto w-6 rounded-none" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex h-10 w-full items-center justify-between rounded-lg bg-[#F6F7F8] px-6">
                <Typography className="text-lg font-medium text-[#1F2122]">
                  Clear Financial Goals
                </Typography>
                <Avatar
                  src="/img/dropdown.svg"
                  className="h-6 w-6 cursor-pointer"
                />
              </div>
              <div className="flex h-10 w-full items-center justify-between rounded-lg bg-[#F6F7F8] px-6">
                <Typography className="text-lg font-medium text-[#1F2122]">
                  Clear Financial Goals
                </Typography>
                <Avatar
                  src="/img/dropdown.svg"
                  className="h-6 w-6 cursor-pointer"
                />
              </div>
              <div className="flex h-10 w-full items-center justify-between rounded-lg bg-[#F6F7F8] px-6">
                <Typography className="text-lg font-medium text-[#1F2122]">
                  Clear Financial Goals
                </Typography>
                <Avatar
                  src="/img/dropdown.svg"
                  className="h-6 w-6 cursor-pointer"
                />
              </div>
              <div className="flex h-10 w-full items-center justify-between rounded-lg bg-[#F6F7F8] px-6">
                <Typography className="text-lg font-medium text-[#1F2122]">
                  Clear Financial Goals
                </Typography>
                <Avatar
                  src="/img/dropdown.svg"
                  className="h-6 w-6 cursor-pointer"
                />
              </div>
              <div className="flex h-10 w-full items-center justify-between rounded-lg bg-[#F6F7F8] px-6">
                <Typography className="text-lg font-medium text-[#1F2122]">
                  Clear Financial Goals
                </Typography>
                <Avatar
                  src="/img/dropdown.svg"
                  className="h-6 w-6 cursor-pointer"
                />
              </div>
              <div className="flex h-10 w-full items-center justify-between rounded-lg bg-[#F6F7F8] px-6">
                <Typography className="text-lg font-medium text-[#1F2122]">
                  Clear Financial Goals
                </Typography>
                <Avatar
                  src="/img/dropdown.svg"
                  className="h-6 w-6 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
