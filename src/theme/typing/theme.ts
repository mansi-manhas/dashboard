import { Property } from 'csstype';
import { Theme as SystemTheme } from 'styled-system';

import { ThemeFontFamilies, ThemeFontSizes, ThemeFontWeights, ThemeLineHeights, ThemeFontStyles } from './font';

export type ThemeToken = keyof Omit<
  SystemTheme,
  'buttons' | 'textStyles' | 'colorStyles' | 'borderStyles'
  >;

type AbstractTheme = { [token in ThemeToken]: unknown };

export interface Theme extends AbstractTheme {
  fonts: ThemeFontFamilies;
  fontSizes: ThemeFontSizes;
  fontStyles: ThemeFontStyles;
  fontWeights: ThemeFontWeights;
  lineHeights: ThemeLineHeights;
  letterSpacings: Record<string, Property.LetterSpacing<string>>;
}
