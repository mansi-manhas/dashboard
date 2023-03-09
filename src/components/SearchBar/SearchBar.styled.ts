import styled from "styled-components";
import { getFontFamily, getFontStyle, getFontWeight } from "../../theme/tokens";

export const SearchBarWrapper = styled.div`
    box-sizing: border-box;
    min-width: 232px;
    height: 40px;
    left: 1160px;
    top: 48px;
    background: #FFFFFF;
    border: 1px solid #E6E7E9;
    border-radius: 8px;

    margin: 0;
`;

export const SearchBarInput = styled.div`
    margin: 10px auto 10px 12px;
    display: flex;
`;

export const SearchBarPlaceholder = styled.p`
    font-family: ${getFontFamily("normal")};
    font-style: ${getFontStyle("normal")};
    font-weight: ${getFontWeight("light")};
    font-size: 14px;
    line-height: 140%;
    letter-spacing: -0.5px;
    color: rgba(24, 24, 25, 0.42);

    margin: 0;

    margin-left: 10px;
`;