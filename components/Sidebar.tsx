"use client";
import { useEffect, useRef } from "react";
import Navigationbar from "./components/navigationbar";
import Menubar from "./Menu";
import useStore from "@/store";

const Sidebar = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { setIsCanvaOpen } = useStore();

  const useOutSideAlerter = (ref: React.RefObject<HTMLDivElement>) => {
    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (
          ref.current &&
          !ref.current.contains(event.target as Node) &&
          window.innerWidth < 900
        ) {
          setIsCanvaOpen(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };

  useOutSideAlerter(wrapperRef);

  return (
    <div className="flex" ref={wrapperRef}>
      <Menubar />
      <Navigationbar />
    </div>
  );
};

export default Sidebar;
