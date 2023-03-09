import styled from "styled-components";
import { getFontFamily, getFontStyle, getFontWeight } from "../../theme/tokens";

export const TagWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 12px;
    gap: 2px;

    width: 72px;
    height: 28px;

    background: #FFECB3;
    border-radius: 100px;

    margin-left: 12px;
`;

export const TagFont = styled.p`
    font-family: ${getFontFamily("normal")};
    font-style: ${getFontStyle("normal")};
    font-weight: ${getFontWeight("normal")};
    font-size: 12px;
    line-height: 140%;
    letter-spacing: -0.3px;
    color: #ED6700;
`;