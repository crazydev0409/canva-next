import { Input } from "@headlessui/react";
import { AlarmIcon, ArrowDownIcon, SearchIcon, SettingIcon } from "./icons";
import CustomReactTooltip from "./components/CustomReactTooltip";

const DesktopHeader = () => {
  return (
    <div className="hidden ssm:flex items-center w-full">
      <div className="hidden xl:flex flex-1"></div>
      <div className="min-w-[160px] w-full max-w-[464px] rounded-lg border border-black/20 hover:border-black/50 flex gap-3 items-center px-2">
        <SearchIcon />
        <Input
          type="text"
          placeholder="Search your content and Canva's"
          className="flex-1 bg-transparent outline-none py-2 text-sm font-extralight overflow-hidden pr-1 text-ellipsis w-full"
        />
      </div>
      <div className="flex-1 flex justify-end h-10 items-center">
        <div
          className="ml-2 w-10 h-10 rounded-lg hover:bg-black/10 flex justify-center items-center transition-colors duration-200 cursor-pointer"
          data-tooltip-id="tooltip"
          data-tooltip-content="Setting"
        >
          <SettingIcon />
        </div>
        <div
          className="ml-2 w-10 h-10 rounded-lg hover:bg-black/10 flex justify-center items-center transition-colors duration-200 cursor-pointer"
          data-tooltip-id="tooltip"
          data-tooltip-content="Notifications"
        >
          <AlarmIcon />
        </div>
        <div className="ml-2 py-1 px-2 flex items-center hover:bg-black/10 rounded-lg transition-colors duration-200 cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex justify-center items-center text-xl text-white">
            J
          </div>
          <div className="ml-3 mr-2 flex flex-col justify-between">
            <p className="text-black text-xs whitespace-nowrap">Personal</p>
            <p className="text-[#0d1216]/70 text-xs whitespace-nowrap">
              Lorem Ipsum
            </p>
          </div>
          <div className="opacity-70">
            <ArrowDownIcon />
          </div>
        </div>
      </div>
      <CustomReactTooltip />
    </div>
  );
};

export default DesktopHeader;
