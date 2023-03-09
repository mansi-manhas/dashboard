import { Property } from 'csstype';
import { Size } from '../theme';

export type ThemeFontSizes = {
  [size in Size.xs | Size.s | Size.sm | Size.md | Size.lg | Size.xl | Size.xxl]: Property.FontSize<string>;
};

export interface ThemeFontStyles {
  normal: Property.FontStyle;
}

export interface ThemeFontFamilies {
  normal: Property.FontFamily;
}

export interface ThemeFontWeights {
  bold: Property.FontWeight;
  normal: Property.FontWeight;
}

export interface ThemeLineHeights {
  normal: Property.LineHeight<string>;
  default: Property.LineHeight<string>;
  small: Property.LineHeight<string>;
  medium: Property.LineHeight<string>;
  large: Property.LineHeight<string>;
}
