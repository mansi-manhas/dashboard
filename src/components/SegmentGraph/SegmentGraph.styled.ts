import styled from 'styled-components';

import { getFontFamily, getFontStyle, getFontWeight } from '../../theme/tokens';
import { SegmentGraphVisualProps } from './types';

export const SegmentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 250px;

    @media (max-width: 375px) {
        width: 200px;
    }
`;

export const SegmentGraphVisualWrapper = styled.div`
    margin-top: -30px;
`;

export const RectangleWrapper = styled.div`
    position: relative;
`;

export const RectangleItem = styled.div`
    width: 56px;
    height: ${(props: SegmentGraphVisualProps) => props.height};
    background: ${(props: SegmentGraphVisualProps) => props.color};
    border-radius: 8px;
    position: absolute;
`;

export const StatusIcon = styled.div`
    width: 8px;
    height: 8px;
    background: url(${(props: { icon: any }) => props.icon}) no-repeat;
`;

export const StatusWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    margin: 16px 0px 16px 20px;
`;

export const StatusText = styled.span`
    font-family: ${getFontFamily("normal")};
    font-style: ${getFontStyle("normal")};
    font-weight: ${getFontWeight("normal")};
    font-size: 12px;
    line-height: 140%;
    letter-spacing: -0.3px;
    color: ${(props) => props.color};

    margin-left: 8px;
`;