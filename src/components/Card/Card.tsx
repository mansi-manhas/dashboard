import React from "react";

import { CardProps } from "./types";
import {
  CardWrapper,
  CardContent,
  CardFooter,
  FooterLabel,
  IconButtonWrapper,
  IconRightChevron,
} from "./Card.styled";
import { CardHeader } from "./utils";

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  content,
  footerLabel,
  footerAction = () => console.log("footer clicked"),
  dimensions,
  graphIndicators,
  gridColumnSpan = 'span 1',
}) => {
  return (
    <CardWrapper width={dimensions?.width} height={dimensions?.height} gridColummSpan={gridColumnSpan}>
      <CardHeader title={title} subtitle={subtitle} graphIndicators={graphIndicators} />
      <CardContent>{content}</CardContent>
      {footerLabel && (
        <CardFooter>
          <FooterLabel onClick={() => footerAction()}>
            {footerLabel}
            <IconButtonWrapper>
              <IconRightChevron />
            </IconButtonWrapper>
          </FooterLabel>
        </CardFooter>
      )}
    </CardWrapper>
  );
};

export default Card;
