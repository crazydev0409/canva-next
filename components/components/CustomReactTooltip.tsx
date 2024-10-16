import { Tooltip as ReactTooltip } from "react-tooltip";

const CustomReactTooltip = ({ ...props }) => (
  <ReactTooltip
    id={props.id || "tooltip"}
    style={{ borderRadius: 8, fontSize: 12, padding: "6px 8px" }}
    {...props}
  />
);

export default CustomReactTooltip;
