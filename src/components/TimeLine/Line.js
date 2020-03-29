import React from "react";

const Line = props => {
  const {
    width,
    height,
    fill = "transparent",
    strokeColor = "#000000",
    className,
    style
  } = props;
  return (
    <svg
      className={className}
      // viewBox="0 0 300 300"
      width={width}
      height={height}
      style={style}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        fill={fill}
        d="m 0 0 a 20 20 0 0 1 0 40 "
        // marker-end="url(#pos)"
        stroke={strokeColor}
        strokeWidth="3"
      />
    </svg>
  );
};

export default Line;
