"use client";
import React, { useEffect } from "react";
import RecentDesigns from "./RecentDesigns";
import {
  CanvaIcon,
  CloseIcon,
  CrownIcon,
  PlusIcon,
  TrashIcon,
} from "@/components/icons";
import CustomButton from "@/components/buttons";
import useStore from "@/store";

const Navigationbar = () => {
  const { isCanvaOpen, setIsCanvaOpen } = useStore();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 900) {
        setIsCanvaOpen(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative left-0">
      <div
        className={`w-[264px] h-screen hidden bg-[#F1F2FD] z-[9999] p-4 flex-col absolute shadow-right-lg mmd:shadow-none mmd:relative justify-between group transition-opacity duration-200 ${
          isCanvaOpen ? "ssm:flex" : "hidden"
        }`}
      >
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <CanvaIcon />
            <div
              className="w-8 h-8 rounded-lg opacity-0 group-hover:opacity-100 mmd:group-hover:opacity-0 mmd:hidden flex justify-center items-center border border-[#35475A33]  hover:bg-[#E5E6F3] transition-colors duration-200 cursor-pointer"
              onClick={() => setIsCanvaOpen(false)}
            >
              <CloseIcon />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <CustomButton backgroundColors="bg-blue-500 hover:bg-blue-600">
              <PlusIcon />
              <p className="text-white text-[14px] font-medium">
                Create a design
              </p>
            </CustomButton>
            <CustomButton backgroundColors="bg-white/90">
              <CrownIcon />
              <p className="text-black text-[14px] font-medium">
                Try Pro for 30 days
              </p>
            </CustomButton>
          </div>
          <RecentDesigns />
        </div>
        <div className="flex gap-4 px-2">
          <TrashIcon />
          <p className="text-sm text-[#0d1216]/70 font-medium">Trash</p>
        </div>
      </div>
    </div>
  );
};

export default Navigationbar;
