import styled from "styled-components";

import {
  getFontSize,
  getFontWeight,
  getFontStyle,
  getFontFamily,
  getLineHeight,
  getLetterSpacing,
} from "../../theme/tokens";
import { Size } from "../../theme";

export const ImgWrapper = styled.img`
  object-fit: contain;
  max-width: 100%;
`;

export const CardWrapper = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(467px, auto));
`;

export const AvatarCardWrapper = styled.div`
  height: 134px;
  background: #ffffff;
  border: 1px solid #e6e7e9;
  border-radius: 8px;

  @media (max-width: 375px) {
    width: 300px;
  }
`;

export const AvatarHeaderWrapper = styled.div`
  display: flex;

  span:last-of-type {
    margin-left: auto;
  }
`;

export const AvatarHeaderItem = styled.span`
  display: flex;
`;

export const AvatarCardItem = styled.div`
  margin: 20px;
`;

export const AvatarWrapper = styled.div`
  width: 40px;
  height: 40px;
  background: url(${(props: { avatar: any }) => props.avatar}) no-repeat;
`;

export const AvatarTitle = styled.p`
  font-family: ${getFontFamily("normal")};
  font-style: ${getFontStyle("normal")};
  font-weight: ${getFontWeight("normal")};
  font-size: ${getFontSize(Size.s)};
  line-height: ${getLineHeight('oneforty')};
  letter-spacing: ${getLetterSpacing('normal')};

  color: rgba(24, 24, 25, 0.9);
  margin: 0;
  text-align: left;
  margin-left: 5px;
`;

export const AvatarSubtitle = styled.p`
  font-family: ${getFontFamily("normal")};
  font-style: ${getFontStyle("normal")};
  font-weight: ${getFontWeight("normal")};
  font-size: ${getFontSize(Size.xs)};
  line-height: ${getLineHeight('oneforty')};
  letter-spacing: ${getLetterSpacing('normal')};

  color: rgba(24, 24, 25, 0.42);
  margin: 0 auto auto 5px;
`;

export const DifferenceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DifferenceText = styled.p`
  font-family: ${getFontFamily("normal")};
  font-style: ${getFontStyle("normal")};
  font-weight: ${getFontWeight("normal")};
  font-size: ${getFontSize(Size.sm)};
  line-height: ${getLineHeight('onetwenty')};
  letter-spacing: ${getLetterSpacing('medium')};
  color: ${(props: { isIncrease: boolean }) =>
    props.isIncrease ? "#4CAF50" : "#DD425A"};
`;

export const TaskLabel = styled.p`
  font-family: ${getFontFamily("normal")};
  font-style: ${getFontStyle("normal")};
  font-weight: ${getFontWeight("normal")};
  font-size: ${getFontSize(Size.xs)};
  line-height: ${getLineHeight('oneforty')};

  display: flex;
  align-items: center;

  letter-spacing: -0.3px;

  color: rgba(24, 24, 25, 0.7);
  margin: 0;
`;
