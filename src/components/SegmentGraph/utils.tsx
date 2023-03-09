import React from "react";
import {
  StatusWrapper,
  StatusIcon,
  StatusText,
  RectangleWrapper,
  RectangleItem,
} from "./SegmentGraph.styled";
import { SegmentGraphVisualProps, SegmentLabelsProps } from "./types";

export const SegmentLabels = ({ ...props }: SegmentLabelsProps) => (
  <StatusWrapper>
    <StatusIcon icon={props.statusIcon} />
    <StatusText color={props.color}>{props.label}</StatusText>
  </StatusWrapper>
);

export const SegmentGraphVisual = ({ ...props }: SegmentGraphVisualProps) => (
  <RectangleWrapper>
    <RectangleItem
      height={props.height}
      color={props.color}
    />
  </RectangleWrapper>
);
