import React from "react";
import { Avatar, Typography } from "@material-tailwind/react";

export function PlanItem(props) {
  const priorityBgColor =
    props.priority == 1
      ? "bg-[#FFEBE7]"
      : props.priority == 2
      ? "bg-[#FFECCC]"
      : "bg-[#E0F2FF]";

  const priorityTxtColor =
    props.priority == 1
      ? "text-[#D31510]"
      : props.priority == 2
      ? "text-[#B14C00]"
      : "text-[#0265DC]";

  const priorityPointColor =
    props.priority == 1
      ? "bg-[#D31510]"
      : props.priority == 2
      ? "bg-[#B14C00]"
      : "bg-[#0265DC]";

  return (
    <div className="flex w-full flex-col gap-2 border-b-[1px] border-b-[#D5D5D5] py-4">
      {props.priority < 4 && (
        <div
          className={`flex h-6 w-fit items-center gap-2 rounded-full ${priorityBgColor} px-2`}
        >
          <span
            className={`mx-auto block h-2 w-2 rounded-full ${priorityPointColor} content-['']`}
          />
          <Typography className={`text-xs font-medium ${priorityTxtColor}`}>
            Priority {props.priority}
          </Typography>
        </div>
      )}
      <div className="flex w-full gap-3">
        <Avatar src="/img/circle.svg" className="h-6 w-auto" />
        <div className="gap-4">
          <Typography className="font-semibold">{props.title}</Typography>
          <Typography className="text-sm font-normal tracking-wide text-[#414346]">
            {props.content}
          </Typography>
          <div className="flex items-center gap-2">
            <Avatar
              src="/img/calendar.svg"
              className="h-auto w-4 rounded-none"
            />
            <Typography className="mt-1 text-sm font-semibold tracking-wide text-[#414346]">
              {props.period}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
