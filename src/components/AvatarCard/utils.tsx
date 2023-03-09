import React from "react";

import { increaseIcon, decreaseIcon } from "../../assets";
import {
  AvatarTitle,
  AvatarSubtitle,
  DifferenceWrapper,
  ImgWrapper,
  DifferenceText,
} from "./AvatarCard.styled";
import { AvatarDetailsProps, DifferenceDetailsProps } from "./types";

export const AvatarDetails = ({ ...props }: AvatarDetailsProps) => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <AvatarTitle>{props.name}</AvatarTitle>
    <AvatarSubtitle>
      {props.position} - {props.location}
    </AvatarSubtitle>
  </div>
);

export const DifferenceDetails = ({ ...props }: DifferenceDetailsProps) => (
  <DifferenceWrapper>
    <ImgWrapper src={props.isIncrease ? increaseIcon : decreaseIcon} alt="" />
    <DifferenceText isIncrease={props.isIncrease}>
      ${props.amountDifference}
    </DifferenceText>
  </DifferenceWrapper>
);
