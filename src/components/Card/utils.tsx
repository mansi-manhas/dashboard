import React from "react";

import { CardHeaderWrapper, CardTitle, CardSubtitle } from "./Card.styled";
import { CardProps } from "./types";

export const CardHeader = ({ ...props }: CardProps) => (
  <CardHeaderWrapper>
    <div>
      <CardTitle>{props.title}</CardTitle>
      <CardSubtitle>{props.subtitle}</CardSubtitle>
    </div>
    <div>{props.graphIndicators && <>{props.graphIndicators}</>}</div>
  </CardHeaderWrapper>
);
