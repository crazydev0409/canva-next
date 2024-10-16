"use client";
import React, { useState } from "react";
import { CheckIcon, StarIcon, ThreePointIcon } from "../icons";
import CustomButton from "../buttons";

const RecentDesignItem = () => {
  const [isCheckHover, setIsCheckHover] = useState(false);
  const [isCheckClick, setIsCheckClick] = useState(false);
  const [isStarHover, setIsStarHover] = useState(false);
  const [isStarClick, setIsStarClick] = useState(false);
  const [isMenuHover, setIsMenuHover] = useState(false);

  return (
    <div className={`p-2 aspect-square flex justify-center flex-col group`}>
      <div
        className={`${
          isCheckClick ? "border-[#612DAE]" : "border-transparent"
        } border w-full flex-1 rounded-2xl bg-[#40576D12] group-hover:bg-[#E1E4E7] transition-colors duration-200 cursor-pointer relative`}
      >
        <div className="absolute top-0 left-0 right-0 justify-between items-center pt-1 px-1 flex">
          <div
            className={`${
              isCheckClick
                ? "bg-[#612DAE] border-[#612DAE]"
                : "group-hover:bg-white group-hover:border-[#AAA]"
            } w-6 h-6 rounded-md border`}
            onMouseEnter={() => setIsCheckHover(true)}
            onMouseLeave={() => setIsCheckHover(false)}
            onClick={() => setIsCheckClick(!isCheckClick)}
          >
            <div
              className={`${isCheckHover || isCheckClick ? "block" : "hidden"}`}
            >
              <CheckIcon color={isCheckClick ? "#fff" : "#AAA"} />
            </div>
          </div>
          <div className="flex gap-1 opacity-0 group-hover:opacity-100">
            <div
              onMouseEnter={() => setIsStarHover(true)}
              onMouseLeave={() => setIsStarHover(false)}
              onClick={() => setIsStarClick(!isStarClick)}
            >
              <CustomButton
                backgroundColors="bg-white hover:bg-[#612DAE]"
                className="w-8 h-8 !rounded-md"
              >
                <StarIcon
                  color={
                    isStarClick ? "#FFC107" : isStarHover ? "#fff" : "#000"
                  }
                />
              </CustomButton>
            </div>
            <div
              onMouseEnter={() => setIsMenuHover(true)}
              onMouseLeave={() => setIsMenuHover(false)}
            >
              <CustomButton
                backgroundColors="bg-white hover:bg-[#812DAE]"
                className="w-8 h-8 !rounded-md"
              >
                <ThreePointIcon color={isMenuHover ? "#fff" : "#000"} />
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
      <span className="text-sm font-semibold text-[#0D1216] leading-6 pt-2">
        Untitled Design
      </span>
      <span
        className="text-xs text-[#0D1216]/70 leading-5"
        data-tooltip-id="tooltip"
        data-tooltip-content={"Hello"}
      >
        Whiteboard
      </span>
    </div>
  );
};

export default RecentDesignItem;
