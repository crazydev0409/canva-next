import React from "react";

interface Props {
  className?: string;
  backgroundColors?: string;
  children: React.ReactNode;
}

const CustomButton = ({
  backgroundColors,
  className = "",
  children,
}: Props) => {
  return (
    <div
      className={`flex justify-center items-center rounded-lg gap-2 h-10 cursor-pointer transition-colors duration-200 ${backgroundColors} ${className}`}
    >
      {children}
    </div>
  );
};

export default CustomButton;
