import type { SVGIconProps } from "../../types";

const ProjectIcon = ({
  width = 32,
  height = 32,
  isSelected = false,
  ...props
}: SVGIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {isSelected ? (
        <>
          <path
            d="M10.029 5.702h4.036A4.5 4.5 0 0 1 18.09 8.19l.293.586c.095.19.29.31.503.31H23a4 4 0 0 1 4 4v.616h-3.219v-.5a1 1 0 0 0-1-1H9.22a1 1 0 0 0-1 1v.5H5.024l.005-3.008a5 5 0 0 1 5-4.992Z"
            fill={props.fill || "currentColor"}
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.021 15.202v.016H5c-.476 0-.926.188-1.222.51a1.21 1.21 0 0 0-.297 1.143l1.812 6.711h.018a6.003 6.003 0 0 0 5.7 4.12H21a6.002 6.002 0 0 0 5.913-4.974l1.605-5.852a1.21 1.21 0 0 0-.294-1.147c-.296-.323-.747-.511-1.224-.511v-.016H5.021Zm-.002 1.363H5l.019.07v-.07Z"
            fill={props.fill || "currentColor"}
          ></path>
        </>
      ) : (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.041 9.447a2.062 2.062 0 0 0 1.845 1.14H23a2.5 2.5 0 0 1 2.5 2.5v.615H6.524l.005-3.006a3.5 3.5 0 0 1 3.5-3.494h4.036a3 3 0 0 1 2.683 1.658l.293.587Zm-10.52 5.755-.01 6.492a4.5 4.5 0 0 0 4.5 4.508H21a4.5 4.5 0 0 0 4.5-4.5v-6.5H6.521Zm7.544-9.5h-4.036a5 5 0 0 0-5 4.992L5.01 21.692a6 6 0 0 0 6 6.01H21a6 6 0 0 0 6-6v-8.615a4 4 0 0 0-4-4h-4.114a.563.563 0 0 1-.503-.311l-.293-.586a4.5 4.5 0 0 0-4.025-2.488Z"
          fill={props.fill || "currentColor"}
        ></path>
      )}
    </svg>
  );
};

export default ProjectIcon;
