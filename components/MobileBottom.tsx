import React from "react";
import useStore from "@/store";
import { ITabs } from "@/types";
import CustomButton from "./buttons";
import { HomeIcon, PlusIcon, ProjectIcon, TemplateIcon } from "./icons";
import ProIcon from "./icons/ProIcon";
import { Colors } from "@/lib/colors";

const AddNewIcon = () => (
  <CustomButton
    backgroundColors="bg-blue-500 hover:bg-blue-700"
    className="!rounded-full w-10 h-10"
  >
    <PlusIcon />
  </CustomButton>
);

const tabs: ITabs[] = [
  {
    name: "Home",
    icon: HomeIcon,
  },
  {
    name: "Projects",
    icon: ProjectIcon,
  },
  {
    name: "New",
    icon: AddNewIcon,
  },
  {
    name: "Templates",
    icon: TemplateIcon,
  },
  {
    name: "Pro",
    icon: ProIcon,
  },
];

const MobileBottom = () => {
  const { currentTab, setCurrentTab } = useStore();
  return (
    <div className="sticky bottom-0 bg-white flex ssm:hidden">
      <div className="flex justify-between w-full px-4 ssm:px-6 py-2 border-t border-[#E0E0E0]">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className="flex flex-col items-center justify-center gap-1"
            onClick={() =>
              setCurrentTab(tab.name === "New" ? currentTab : tab.name)
            }
          >
            <tab.icon
              color={Colors.blue[500]}
              isSelected={tab.name === currentTab}
              width={24}
              height={24}
            />
            <span
              className={`text-[11px] font-semibold ${
                currentTab === tab.name ? "text-blue-700" : "text-blue-500"
              } ${tab.name === "New" ? "hidden" : "block"}`}
            >
              {tab.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobileBottom;
