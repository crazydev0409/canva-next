"use client";
import { useEffect, useRef, useState } from "react";
import { CirculationIcon, GiftIcon, QuestionIcon } from "./icons";
import BannerImage from "./images/BannerImage";
import CustomButton from "./buttons";
import CategorySlider from "./components/sliders";
import { MenulistIcon } from "./icons";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import MobileBottom from "./MobileBottom";
import RecentDesignItem from "./components/RecentDesignItem";
import CustomReactTooltip from "./components/CustomReactTooltip";

const Main = () => {
  const [isScrollTop, setIsScrollTop] = useState<boolean>(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        setIsScrollTop(scrollRef.current.scrollTop === 0);
      }
    };
    const currentScrollRef = scrollRef.current;
    if (currentScrollRef) {
      currentScrollRef.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (currentScrollRef) {
        currentScrollRef.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="flex-1 p-0 mmd:py-2 mmd:pr-2 overflow-hidden">
      <div className="pb-6">
        <div className="shadow-even rounded mmd:rounded-2xl ml-0 mmd:ml-2 relative">
          <div
            className={`absolute w-full top-0 h-[200px] z-0 ${
              isScrollTop ? "bg-top-gradient" : "bg-transparent"
            } ssm:hidden transition-colors duration-200`}
          ></div>
          <div
            className={`rounded-t-none mmd:rounded-t-2xl sticky ssm:bg-white h-16 ssm:h-14 flex items-center px-4 ssm:px-6 z-999 ${
              isScrollTop ? "shadow-none" : "shadow-bottom-lg bg-white"
            }`}
          >
            <DesktopHeader />
            <MobileHeader />
          </div>
          <div
            className="min-h-mobile mmd:min-h-tablet rounded-b-none mmd:rounded-b-2xl bg-white pt-4 ssm:pt-0 px-4 ssm:px-6 pb-20 ssm:pb-0 h-custom overflow-y-scroll scrollbar-hide"
            ref={scrollRef}
          >
            <BannerImage>
              <div className="flex flex-col justify-center items-center h-full gap-4">
                <div className="text-2xl ssm:text-[32px] font-medium text-white/90 tracking-tight">
                  Canva, all glowed up
                </div>
                <div className="flex gap-2">
                  <CustomButton
                    backgroundColors="bg-[#E1DDF8] hover:bg-white"
                    className="px-3"
                  >
                    <GiftIcon />
                    <p className="text-black text-sm font-medium">
                      See what&apos;s new
                    </p>
                  </CustomButton>
                  <CustomButton
                    backgroundColors="bg-[#A570FF]/30"
                    className="px-2 ssm:px-3 border border-[#A570FF] hover:text-white"
                  >
                    <CirculationIcon />
                    <p className="text-white text-sm font-medium hidden ssm:block">
                      Watch it again
                    </p>
                  </CustomButton>
                </div>
              </div>
            </BannerImage>
            <div className="my-4 flex justify-center">
              <div className="relative overflow-auto">
                <CategorySlider />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#0D1216] text-xl ssm:text-2xl font-semibold">
                Recent designs
              </p>
              <div
                data-tooltip-id="tooltip"
                data-tooltip-content="View as List"
                data-tooltip-place="bottom"
              >
                <CustomButton
                  backgroundColors="bg-white hover:bg-[#F2F3F5]"
                  className="w-10 hidden ssm:flex"
                >
                  <MenulistIcon />
                </CustomButton>
              </div>
              <p className="text-sm text-[#0D1216]/86 font-semibold block ssm:hidden">
                See all
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <RecentDesignItem key={index} />
              ))}
            </div>
          </div>
        </div>
        <MobileBottom />
        <div className="hidden ssm:block fixed bottom-6 right-6" data-tooltip-id="tooltip" data-tooltip-content="Ask Canva" data-tooltip-place="top">
          <CustomButton
            backgroundColors="bg-[#8B3DFF] hover:bg-[#7731D8]"
            className="!rounded-full w-12 h-12"
          >
            <QuestionIcon />
          </CustomButton>
        </div>
      </div>
      <CustomReactTooltip />
    </div>
  );
};

export default Main;
