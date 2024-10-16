import { SVGProps } from "react";

export interface ITabs {
  name: string;
  icon: React.ComponentType<SVGIconProps>;
}

export interface SVGIconProps extends SVGProps<SVGSVGElement> {
  isSelected?: boolean;
}