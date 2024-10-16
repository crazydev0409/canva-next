"use client";
import React, { useEffect } from "react";
import useStore from "@/store";
import CustomButton from "./buttons";
import {
  AlarmIcon,
  ArrowDownIcon,
  ArrowRightIcon,
  CrownIcon,
  MobileAppsIcon,
  MobileAskCanvaIcon,
  MobileBrandIcon,
  MobileGlowUpIcon,
  MobileHomeIcon,
  MobileTrashIcon,
} from "./icons";
import RecentDesigns from "./components/navigationbar/RecentDesigns";
import CustomReactTooltip from "./components/CustomReactTooltip";

const MobileSidebar = () => {
  const { isMobileSidebarOpen, setIsMobileSidebarOpen } = useStore();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600) {
        setIsMobileSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsMobileSidebarOpen]);

  const handleSidebarClose = () => {
    setIsMobileSidebarOpen(false);
  };

  return (
    <div
      className={`fixed w-screen h-screen ${
        isMobileSidebarOpen ? "z-[1000] bg-black/30" : "-z-30 bg-transparent"
      }`}
    >
      <div
        className={`absolute h-screen w-[80vw] bg-white top-0 left-0 transform transition-transform duration-300 ease-in-out ${
          isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-16 w-full px-3 flex justify-between items-center border-b">
          <p className="text-base font-bold text-[#0D1216]">Menu</p>
          <div
            data-tooltip-id="mobile_sidebar"
            data-tooltip-content="Notifications"
          >
            <CustomButton
              backgroundColors="bg-white hover:bg-[#F1F3F5]"
              className="w-10 h-10"
            >
              <AlarmIcon />
            </CustomButton>
          </div>
        </div>
        <div className="p-3">
          <ProfileSection />
          <ProTrialSection />
          <NavigationMenu />
          <RecentDesigns isMobile />
        </div>
      </div>
      <div
        className="absolute right-0 h-full w-[20vw]"
        onClick={handleSidebarClose}
      />
      <CustomReactTooltip id="mobile_sidebar" />
    </div>
  );
};

const ProfileSection = () => (
  <div className="p-2 flex items-center hover:bg-black/10 rounded-lg transition-colors duration-200 cursor-pointer justify-between">
    <div className="flex gap-3">
      <div className="w-10 h-10 rounded-full bg-blue-500 flex justify-center items-center text-xl text-white">
        J
      </div>
      <div className="flex flex-col">
        <p className="text-black text-sm">Personal</p>
        <p className="text-[#0d1216]/70 text-xs">Lorem Ipsum</p>
      </div>
    </div>
    <ArrowDownIcon />
  </div>
);

const ProTrialSection = () => (
  <div className="p-5">
    <CustomButton
      backgroundColors="bg-white/90 hover:bg-black/10"
      className="border"
    >
      <CrownIcon />
      <p className="text-black text-[14px] font-medium">Try Pro for 30 days</p>
    </CustomButton>
  </div>
);

const NavigationMenu = () => {
  const menuItems = [
    {
      icon: <MobileHomeIcon />,
      label: "Home",
      bgColor: "bg-[#F2EAFF]",
      isActive: true,
    },
    {
      icon: <MobileBrandIcon />,
      label: "Brand",
      bgColor: "bg-white",
      isActive: false,
    },
    {
      icon: <MobileAppsIcon />,
      label: "Apps",
      bgColor: "bg-white",
      isActive: false,
    },
    {
      icon: <MobileGlowUpIcon />,
      label: "Glow up",
      bgColor: "bg-white",
      isActive: false,
    },
    {
      icon: <MobileAskCanvaIcon />,
      label: "Ask Canva",
      bgColor: "bg-white",
      isActive: false,
    },
    {
      icon: <MobileTrashIcon />,
      label: "Trash",
      bgColor: "bg-white",
      isActive: false,
    },
  ];

  return (
    <div className="flex flex-col gap-1 w-full mb-5">
      {menuItems.map(({ icon, label, bgColor, isActive }) => (
        <CustomButton
          key={label}
          backgroundColors={`${bgColor} ${
            isActive ? "" : "hover:bg-[#F1F3F5]"
          }`}
          className={`!justify-${isActive ? "start" : "between"} px-3`}
        >
          <div
            className={`flex items-center gap-2 ${
              isActive ? "justify-start" : "justify-between"
            }`}
          >
            {icon}
            <p
              className={`text-${isActive ? "[#612DAE]" : "[#0D1216]"} text-sm`}
            >
              {label}
            </p>
          </div>
          {!isActive && <ArrowRightIcon />}
        </CustomButton>
      ))}
    </div>
  );
};

export default MobileSidebar;
