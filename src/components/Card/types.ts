import { ReactNode } from 'react';

export type CardProps = {
    title: string;
    subtitle?: string;
    content?: ReactNode;
    footerLabel?: string;
    footerAction?: () => void;
    dimensions?: CardDimensions;
    graphIndicators?: ReactNode;
    gridColumnSpan?: any;
}

export type CardDimensions = {
    width?: string;
    height?: string;
    gridColummSpan?: any;
}