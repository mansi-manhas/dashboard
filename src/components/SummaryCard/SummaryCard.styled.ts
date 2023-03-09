import styled from "styled-components";

import { getFontFamily, getFontStyle, getFontWeight } from "../../theme/tokens";

export const SummaryGraphWrapper = styled.div`
  display: grid;
  margin: 24px 0px;
  grid-gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(467px, auto));
`;

export const LastRowWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(467px, auto));
  grid-gap: 24px;
`;

export const SummaryGraph = styled.img`
  object-fit: contain;
  max-width: 100%;
  width: auto;
  height: 100%;
`;

export const GraphIndicatorWrapper = styled.div`
  width: 116px;
  height: 44px;

  display: flex;
  flex-direction: column;
`;

export const GraphIndicatorLabel = styled.p`
  font-family: ${getFontFamily("normal")};
  font-style: ${getFontStyle("normal")};
  font-weight: ${getFontWeight("normal")};
  font-size: 12px;
  line-height: 140%;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  color: rgba(24, 24, 25, 0.42);

  display: flex;
  align-items: center;
  margin-left: 2px;
`;

export const GraphIndicatorValue = styled.p`
  font-family: ${getFontFamily("normal")};
  font-style: ${getFontStyle("normal")};
  font-weight: ${getFontWeight("normal")};
  font-size: 16px;
  line-height: 120%;
  letter-spacing: -0.4px;
  color: rgba(24, 24, 25, 0.9);

  margin: 0;
  text-align: left;
  margin-left: 18px;
`;
