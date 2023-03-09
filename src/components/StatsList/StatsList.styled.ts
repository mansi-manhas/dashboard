import styled from "styled-components";
import { getFontFamily, getFontStyle, getFontWeight } from "../../theme/tokens";

export const ListWrapper = styled.div`
    margin: 14px auto 14px 20px;
`;

export const ListItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;


export const FlagIconWrapper = styled.div`
    width: 24px;
    height: 18px;
    background: url(${(props: { icon: any }) => props.icon}) no-repeat;
`;


export const ListItemText = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid #E6E7E9;
    width: 100%;

    p {
        font-family: ${getFontFamily("normal")};
        font-style: ${getFontStyle("normal")};
        font-weight: ${getFontWeight("light")};
        font-size: 14px;
        line-height: 140%;
        letter-spacing: -0.5px;
        color: rgba(24, 24, 25, 0.9);
    }

    p:last-of-type {
        margin-left: auto;
    }
`;

export const ListItemTitle = styled.p`
    margin-left: 12px;
`;



