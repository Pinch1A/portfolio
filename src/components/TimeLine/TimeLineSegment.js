import React from "react";
import styled from "styled-components";
import LineTwo from "./Line2";

const Row = styled.div`
  display: flex;
  flex-direction: "row";
  border-bottom: 2px solid #fff;
`;

const Square = styled.div`
  min-height: 200px;
  min-width: 200px;
  max-height: 200px;
  max-width: 200px;
`;

const TimeLine = ({ inverse }) => (
  <Row>
    <Square>
      <LineTwo inverse={inverse} />
    </Square>
  </Row>
);

export default TimeLine;
