"use client";
import React, { useState } from "react";
import {
  AppsIcon,
  BrandIcon,
  GlowUpIcon,
  HomeIcon,
  ProjectIcon,
  TemplateIcon,
} from "./icons";
import { Colors } from "@/lib/colors";
import { Menu } from "@headlessui/react";
import useStore from "@/store";
import { ITabs } from "@/types";

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
    name: "Templates",
    icon: TemplateIcon,
  },
  {
    name: "Brand",
    icon: BrandIcon,
  },
  {
    name: "Apps",
    icon: AppsIcon,
  },
];

const Menubar = () => {
  const { currentTab, setCurrentTab } = useStore();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <div className="w-16 hidden ssm:flex flex-col py-5 justify-between items-center border-r border-r-blue-500/30 relative">
      <div className="flex flex-col gap-5">
        {tabs.map((tab) => (
          <div
            key={tab.name}
            className="flex flex-col gap-0.5 items-center cursor-pointer group"
            onClick={() => setCurrentTab(tab.name)}
          >
            <a
              href="#"
              className={`w-10 h-10 rounded-lg ${
                currentTab === tab.name && "bg-blue-200"
              } flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-200`}
            >
              <tab.icon
                color={Colors.blue[500]}
                isSelected={currentTab === tab.name}
              />
            </a>
            <p className="text-[11px] text-blue-500">{tab.name}</p>
          </div>
        ))}
      </div>
      <Menu as="div" className="relative">
        {({ open }) => {
          if (isMenuOpen !== open) {
            setIsMenuOpen(open);
          }
          return (
            <>
              <Menu.Button className="flex flex-col gap-0.5 items-center cursor-pointer group">
                <div
                  className={`w-10 h-10 rounded-lg ${
                    isMenuOpen && "bg-blue-200"
                  } flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-200`}
                >
                  <GlowUpIcon
                    color={Colors.blue[500]}
                    isSelected={isMenuOpen}
                  />
                </div>
                <p className="text-[11px] text-blue-500">Glow up</p>
              </Menu.Button>
              {open && (
                <Menu.Items className="absolute -bottom-0.5 left-[60px] w-60 py-2 bg-white rounded-xl shadow-lg">
                  <Menu.Item>
                    <div className="text-sm text-[#0D1216] hover:bg-[#F2F3F5] p-3 transition-colors duration-200 cursor-pointer">
                      Give feedback on the glow up
                    </div>
                  </Menu.Item>
                  <Menu.Item>
                    <div className="text-sm text-[#0D1216] hover:bg-[#F2F3F5] p-3 transition-colors duration-200 cursor-pointer">
                      Learn about the glow up
                    </div>
                  </Menu.Item>
                </Menu.Items>
              )}
            </>
          );
        }}
      </Menu>
    </div>
  );
};

export default Menubar;
