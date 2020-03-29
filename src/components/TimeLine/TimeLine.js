import React from "react";
import styled from "styled-components";
import TimeLineSegment from "./TimeLineSegment";
import jobList from "../../mockData/jobs";

const TimeLineWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const TimeLine = () => {
  const { experiences } = jobList;

  return (
    <TimeLineWrapper>
      {experiences.map((element, index) => {
        console.log(element, index, index % 2);
        return <TimeLineSegment inverse={index % 2 === 0} />;
      })}
    </TimeLineWrapper>
  );
};

export default TimeLine;
