import React from "react";

import Card from "../Card/Card";
import {
  SummaryGraph,
  GraphIndicatorWrapper,
  GraphIndicatorLabel,
  GraphIndicatorValue,
} from "./SummaryCard.styled";
import { last6monthsIndicator, previousIndicator, workSummaryGraph } from "../../assets";

export const GraphIndicators = () => (
    <div style={{display: 'flex'}}>
      <GraphIndicatorWrapper>
        <GraphIndicatorLabel>
          <img src={last6monthsIndicator} alt="" />
          LAST 6 MONTHS
        </GraphIndicatorLabel>
        <GraphIndicatorValue>$8,620</GraphIndicatorValue>
      </GraphIndicatorWrapper>
      <GraphIndicatorWrapper>
        <GraphIndicatorLabel>
          <img src={previousIndicator} alt="" />
          Previous
        </GraphIndicatorLabel>
        <GraphIndicatorValue>$8,620</GraphIndicatorValue>
      </GraphIndicatorWrapper>
    </div>
);

const SummaryCard = () => {
  return (
    <>
      <Card
        title="Your work summary"
        subtitle="Nov-July"
        content={<SummaryGraph src={workSummaryGraph} alt='' />}
        dimensions={{ width: "722px" }}
        graphIndicators={<GraphIndicators />}
        gridColumnSpan='span 2'
      />
    </>
  );
};

export default SummaryCard;
