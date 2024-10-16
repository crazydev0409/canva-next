"use client"
import { ArrowLeftIcon, ArrowRightIcon, Categories } from "../../icons";
import { useEffect, useRef, useState } from "react";

const CategorySlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isLeftArrowVisible, setIsLeftArrowVisible] = useState(false);
  const [isRightArrowVisible, setIsRightArrowVisible] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const moveToLeft = () => {
    if (scrollRef.current) {
      const { clientWidth, scrollLeft } = scrollRef.current;
      const newScrollPosition = scrollLeft - clientWidth;
  
      // If the new scroll position is less than 0, scroll to the start (0).
      scrollRef.current.scrollTo({
        left: Math.max(newScrollPosition, 0),
        behavior: "smooth",
      });
    }
  };
  
  const moveToRight = () => {
    if (scrollRef.current) {
      const { clientWidth, scrollLeft, scrollWidth } = scrollRef.current;
      const newScrollPosition = scrollLeft + clientWidth;
  
      // If the new scroll position exceeds the maximum, scroll to the end.
      scrollRef.current.scrollTo({
        left: Math.min(newScrollPosition, scrollWidth - clientWidth),
        behavior: "smooth",
      });
    }
  };
  

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = x - startX;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setIsLeftArrowVisible(scrollLeft > 0);
      setIsRightArrowVisible(scrollLeft < scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      handleScroll()
      scrollElement.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleScroll);
    }

    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleScroll);
      }
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div
        className={`absolute -left-2 h-[100px] w-6 min-w-6 cursor-pointer bg-left-gradient pt-6 ${
          isLeftArrowVisible ? "flex" : "hidden"
        }`}
        onClick={moveToLeft}
      >
        <ArrowLeftIcon />
      </div>
      <div
        className="flex overflow-auto scrollbar-hide"
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {Categories.map(({ Name, Icon, Color, Format }) => (
          <div
            className="w-[88px] min-w-[88px] flex flex-col items-center group"
            key={Name}
          >
            <div
              className={`w-12 h-12 flex-shrink-0 flex justify-center items-center rounded-full cursor-pointer transition-colors duration-200 group-hover:scale-105 mt-2`}
              style={{ backgroundColor: Color }}
            >
              <div className="group-hover:scale-110">
                <Icon />
              </div>
            </div>
            <p className="text-xs text-center text-[#0D1216B3] font-medium mt-2 select-none">
              {Name}
            </p>
            <p className="text-[11px] text-center text-[#11171D99] font-medium mt-1 transition-opacity duration-200 opacity-0 group-hover:opacity-100 select-none">
              {Format}
            </p>
          </div>
        ))}
      </div>
      <div
        className={`absolute -right-2 top-0 h-[100px] w-6 min-w-6 flex cursor-pointer bg-right-gradient pt-6 ${
          isRightArrowVisible ? "flex" : "hidden"
        }`}
        onClick={moveToRight}
      >
        <ArrowRightIcon />
      </div>
    </div>
  );
};

export default CategorySlider;
