import styled from "styled-components";
import { getFontFamily, getFontStyle, getFontWeight } from "../../theme/tokens";

export const AppHeading = styled.p`
    font-family: ${getFontFamily("normal")};
    font-style: ${getFontStyle("normal")};
    font-weight: ${getFontWeight("normal")};
    font-size: 24px;
    line-height: 120%;
    letter-spacing: -0.5px;
    
    color: rgba(24, 24, 25, 0.9);

    text-align: left;
`;