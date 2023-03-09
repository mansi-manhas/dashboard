import styled from 'styled-components';

import {
    getFontWeight,
    getFontStyle,
    getFontFamily,
    getLetterSpacing,
  } from "../../theme/tokens";
import { rightChevronIcon, addComponentIcon } from '../../assets';
import { CardDimensions } from './types';

export const CardWrapper = styled.div`
    position: relative;
    height: ${(props: CardDimensions) => props.height ?? '335px'};
    background: #FFFFFF;
    border: 1px solid #E6E7E9;
    border-radius: 8px;
    grid-column: ${(props: CardDimensions) => props.gridColummSpan};

    @media (max-width: 375px) {
        width: 300px;
    }
`;

export const CardHeaderWrapper = styled.div`
    display: flex;

    div:last-of-type {
        margin-left: auto;
    }
`;

export const CardTitle = styled.h6`
    text-align: left;
    font-family: ${getFontFamily("normal")};
    font-style: ${getFontStyle("normal")};
    font-weight: ${getFontWeight("normal")};
    font-size: 16px;
    line-height: 19.2px
    letter-spacing: ${getLetterSpacing('medium')};
    color: rgba(24, 24, 25, 0.9);
    margin: 20px auto 8px 20px;
`;

export const CardSubtitle = styled.p`
    text-align: left;
    font-family: ${getFontFamily("normal")};
    font-style: ${getFontStyle("normal")};
    font-weight: ${getFontWeight("light")};
    font-size: 14px;
    line-height: 140%;
    letter-spacing: -0.5px;

    color: rgba(24, 24, 25, 0.42);
    margin: auto auto auto 20px;
`;

export const CardContent = styled.div`
    margin: auto 20px 0px auto;
`;

export const CardFooter = styled.div`
    width: 100%;
    height: 56px;
    border-top: 1px solid #E6E7E9;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: auto;
`;

export const FooterLabel = styled.p`
    font-family: ${getFontFamily("normal")};
    font-style: ${getFontStyle("normal")};
    font-weight: ${getFontWeight("light")};
    font-size: 14px;
    line-height: 140%;
    letter-spacing: -0.3px;

    color: #4A4DE6;
    margin: 10px;
    display: flex;

    cursor: pointer;
`;


export const IconButtonWrapper = styled.button`
    background: none;
    border: none;
    cursor: pointer;
`;

export const IconRightChevron = styled.div`
    height: 12px;
    width: 20px;
    background: url(${rightChevronIcon}) no-repeat;
`;

/**
 * Empty Card
 */

export const EmptyStateWrapper = styled.div`
    width: 190px;
    height: 190px;
    margin: 68px auto auto auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const AddComponentWrapper = styled.div`
    height: 44px;
    width: 44px;
    background: url(${addComponentIcon}) no-repeat;
`;

export const EmptyStateTitle = styled.div`
    font-family: ${getFontFamily("normal")};
    font-style: ${getFontStyle("normal")};
    font-weight: ${getFontWeight("normal")};
    font-size: 16px;
    line-height: 120%;
    text-align: center;
    letter-spacing: -0.4px;
    color: rgba(24, 24, 25, 0.9);

    margin-top: 20px;
`;

export const EmptyStateSubtitle = styled.div`
    font-family: ${getFontFamily("normal")};
    font-style: ${getFontStyle("normal")};
    font-weight: ${getFontWeight("light")};
    font-size: 12px;
    line-height: 140%;
    text-align: center;
    letter-spacing: -0.5px;
    color: rgba(24, 24, 25, 0.42);
`;


export const EmptyCardActionButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 11px 12px;
    gap: 4px;

    width: 190px;
    height: 40px;
    
    background: #4A4DE6;
    border-radius: 8px;

    border: none;
    margin-top: 20px;

    color: #fff;

    cursor: pointer;
`;