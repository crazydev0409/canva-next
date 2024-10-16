"use client";
import { useState } from "react";
import CustomButton from "@/components/buttons";
import {
  ArrowDownIcon,
  MenulistSmallIcon,
  NewTabIcon,
} from "@/components/icons";
import CustomReactTooltip from "../CustomReactTooltip";

interface Props {
  isMobile?: boolean;
}

const RecentDesigns: React.FC<Props> = ({ isMobile = false }) => {
  const [isRecentDesignsOpen, setIsRecentDesignsOpen] =
    useState<boolean>(false);
  return (
    <div className="px-2">
      <div className="flex">
        <div
          className={`p-1 flex items-center mb-4 gap-2 rounded-md bg-transparent transition-colors duration-200 cursor-pointer ${
            isRecentDesignsOpen ? "hover:bg-[#D7D8E6]" : "hover:bg-[#E6E6F4]"
          }`}
          onClick={() => setIsRecentDesignsOpen((prev) => !prev)}
        >
          <h6 className="text-[#0d1214b3] text-xs font-medium">
            Recent designs
          </h6>
          <div className={`${isRecentDesignsOpen ? "" : "-rotate-90"}`}>
            <ArrowDownIcon />
          </div>
        </div>
      </div>
      <div
        className={`${isRecentDesignsOpen ? "flex" : "hidden"} flex-col gap-1 ${
          isMobile ? "" : "items-center"
        }`}
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <div className="group/item" key={index}>
            <CustomButton
              backgroundColors="group-hover/item:bg-[#E5E6F3]"
              className="px-2 py-3"
            >
              <div
                className={`flex gap-3 items-center ${
                  isMobile ? "w-full justify-between" : ""
                }`}
              >
                <div className="flex gap-3 items-center">
                  <div className="w-6 h-6 rounded-lg bg-gray-400/50"></div>
                  <p className="text-sm text-[#0d1216]/70 font-medium whitespace-nowrap tracking-tight">
                    Untitled Design
                  </p>
                </div>
                <div className="flex items-center opacity-0 group-hover/item:opacity-100 transition-opacity duration-100">
                  <div
                    data-tooltip-id="recent_designs"
                    data-tooltip-place="bottom"
                    data-tooltip-content="Open in new tab"
                  >
                    <CustomButton
                      backgroundColors="hover:bg-[#DADBEA]"
                      className="w-8 h-8"
                    >
                      <NewTabIcon />
                    </CustomButton>
                  </div>
                  <CustomButton
                    backgroundColors="hover:bg-[#DADBEA]"
                    className="w-8 h-8"
                  >
                    <MenulistSmallIcon />
                  </CustomButton>
                </div>
              </div>
            </CustomButton>
          </div>
        ))}
      </div>
      <CustomReactTooltip id={"recent_designs"}/>
    </div>
  );
};

export default RecentDesigns;
