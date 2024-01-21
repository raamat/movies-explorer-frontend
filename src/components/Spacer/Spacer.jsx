import React from "react";
import useWidth from "../../hooks/useWidth";

const Spacer = ({ size, mobile, axis, style = {}, ...delegated }) => {
  if (useWidth() <= 420) {
    size = mobile;
  } 
  const width = axis === "vertical" ? 1 : size;
  const height = axis === "horizontal" ? 1 : size;
  
  return (
    <span
      style={{
        display: "block",
        width,
        minWidth: width,
        height,
        minHeight: height,
        ...style,
      }}
      {...delegated}
    />
  );
};
export default Spacer;
