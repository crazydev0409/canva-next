import type { SVGIconProps } from "../../types";

const AppsIcon = ({
  width = 32,
  height = 32,
  isSelected,
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
          <g clipPath="url(#_1244969711__a)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.75 19.884a3.009 3.009 0 0 1 3.009-3.009h3.282a3.009 3.009 0 0 1 3.009 3.009v3.282a3.009 3.009 0 0 1-3.009 3.009H8.76a3.009 3.009 0 0 1-3.009-3.009v-3.282ZM5.75 8.884a3.009 3.009 0 0 1 3.009-3.009h3.282a3.009 3.009 0 0 1 3.009 3.009v3.282a3.009 3.009 0 0 1-3.009 3.009H8.76a3.009 3.009 0 0 1-3.009-3.009V8.884ZM16.938 8.884a3.009 3.009 0 0 1 3.008-3.009h3.283a3.009 3.009 0 0 1 3.009 3.009v3.282a3.009 3.009 0 0 1-3.01 3.009h-3.282a3.009 3.009 0 0 1-3.009-3.009V8.884Z"
              fill={props.fill || "currentColor"}
            ></path>
            <path
              d="M17.337 21.525c0-.345.28-.625.625-.625h7.25a.625.625 0 1 1 0 1.25h-7.25a.625.625 0 0 1-.625-.625Z"
              fill={props.fill || "currentColor"}
            ></path>
            <path
              d="M21.587 17.275c.346 0 .625.28.625.625v7.25a.625.625 0 1 1-1.25 0V17.9c0-.345.28-.625.625-.625Z"
              fill={props.fill || "currentColor"}
            ></path>
          </g>
          <defs>
            <clipPath id="_1244969711__a">
              <rect width="32" height="32" rx="8"></rect>
            </clipPath>
          </defs>
        </>
      ) : (
        <>
          <g clipPath="url(#_70268267__a)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.765 18.1c-.971 0-1.759.787-1.759 1.759v3.282c0 .972.788 1.759 1.76 1.759h3.281c.972 0 1.76-.787 1.76-1.759V19.86c0-.972-.788-1.759-1.76-1.759H8.765Zm0-1.25a3.009 3.009 0 0 0-3.009 3.009v3.282a3.009 3.009 0 0 0 3.01 3.009h3.281a3.009 3.009 0 0 0 3.01-3.009V19.86a3.009 3.009 0 0 0-3.01-3.009H8.765Z"
              fill={props.fill || "currentColor"}
            ></path>
            <path
              d="M17.344 21.5c0-.345.28-.625.625-.625h7.25a.625.625 0 0 1 0 1.25h-7.25a.625.625 0 0 1-.625-.625Z"
              fill={props.fill || "currentColor"}
            ></path>
            <path
              d="M21.594 17.25c.345 0 .625.28.625.625v7.25a.625.625 0 0 1-1.25 0v-7.25c0-.345.28-.625.625-.625Z"
              fill={props.fill || "currentColor"}
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.765 7.1c-.971 0-1.759.787-1.759 1.759v3.282c0 .972.788 1.759 1.76 1.759h3.281c.972 0 1.76-.787 1.76-1.759V8.86c0-.972-.788-1.759-1.76-1.759H8.765Zm0-1.25a3.009 3.009 0 0 0-3.009 3.009v3.282a3.009 3.009 0 0 0 3.01 3.009h3.281a3.009 3.009 0 0 0 3.01-3.009V8.86a3.009 3.009 0 0 0-3.01-3.009H8.765ZM19.953 7.1c-.972 0-1.76.787-1.76 1.759v3.282c0 .972.788 1.759 1.76 1.759h3.282c.971 0 1.759-.787 1.759-1.759V8.86c0-.972-.788-1.759-1.76-1.759h-3.281Zm0-1.25a3.009 3.009 0 0 0-3.01 3.009v3.282a3.009 3.009 0 0 0 3.01 3.009h3.282a3.009 3.009 0 0 0 3.009-3.009V8.86a3.009 3.009 0 0 0-3.01-3.009h-3.281Z"
              fill={props.fill || "currentColor"}
            ></path>
          </g>
          <defs>
            <clipPath id="_70268267__a">
              <rect
                width="32"
                height="32"
                rx="8"
                fill={props.fill || "currentColor"}
              ></rect>
            </clipPath>
          </defs>
        </>
      )}
    </svg>
  );
};

export default AppsIcon;
