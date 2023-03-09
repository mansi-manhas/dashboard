import React from "react";

import {
  SegmentWrapper,
  SegmentGraphVisualWrapper,
} from "./SegmentGraph.styled";
import { segmentData } from "./consts";
import { SegmentGraphVisual, SegmentLabels } from "./utils";

const SegmentGraph = () => {
  return (
    <>
      {segmentData.map((segment, idx) => (
        <SegmentWrapper key={idx}>
          <SegmentLabels
            color={segment.color}
            statusIcon={segment.statusIcon}
            label={segment.label}
          />
          <SegmentGraphVisualWrapper>
            <SegmentGraphVisual height={segment.height} color={segment.color} />
          </SegmentGraphVisualWrapper>
        </SegmentWrapper>
      ))}
    </>
  );
};

export default SegmentGraph;
