import React from "react";
import styled from "styled-components";

const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
  var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians)
  };
};
const LineSvg = styled.svg`
  height: 300px;
  position: absolute;
  z-index: 1;
  width: 400px;
`;

// const AnimatedCircle = styled.path`
//   fill: transparent;
//   stroke: black;
//   stroke-width: 5;
//   stroke-dasharray: 250;
//   stroke-dashoffset: 1000;
//   animation: rotate 5s linear infinite;
//   @keyframes rotate {
//     to {
//       stroke-dashoffset: 0;
//     }
//   }
// `;

const LineTwo = ({
  x = 200,
  y = 112,
  radius = 101,
  startAngle = 0,
  endAngle = 180,
  inverse
}) => {
  const startPoint = polarToCartesian(x, y, radius, endAngle);
  const endPoint = polarToCartesian(x, y, radius, startAngle);
  const start = inverse ? endPoint : startPoint;
  const end = inverse ? startPoint : endPoint;

  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  const drawPath = [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y
  ].join(" ");

  console.log(drawPath);
  return (
    <LineSvg>
      {/* <AnimatedCircle cx="50" cy="50" r="40" /> */}
      <path
        id="arc1"
        fill="transparent"
        stroke="#446688"
        strokeWidth="20"
        d={drawPath}
      />
    </LineSvg>
  );
};

export default LineTwo;
