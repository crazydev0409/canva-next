import React from "react";
import { Input } from "@headlessui/react";
import CustomButton from "./buttons";
import { SearchIcon, ThreeLineIcon } from "./icons";
import useStore from "@/store";

const MobileHeader = () => {
  const { setIsMobileSidebarOpen } = useStore();
  return (
    <div className="flex items-center gap-3 w-full ssm:hidden">
      <div onClick={() => setIsMobileSidebarOpen(true)}>
        <CustomButton
          backgroundColors="bg-white hover:bg-[#F1F3F5]"
          className="w-10 h-10 shadow-even"
        >
          <ThreeLineIcon />
        </CustomButton>
      </div>
      <div className="flex-1 rounded-lg flex gap-3 items-center px-2 bg-white shadow-even h-10">
        <SearchIcon />
        <Input
          type="text"
          placeholder="Search your content and Canva's"
          className="flex-1 bg-transparent outline-none py-2 text-sm font-extralight overflow-hidden pr-1 text-ellipsis w-full"
        />
      </div>
    </div>
  );
};

export default MobileHeader;
