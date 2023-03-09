import { themeGet } from '@styled-system/theme-get';

type TArrayPath = Array<string> | string;

const toArray = (value: TArrayPath) => (Array.isArray(value) ? value : [value]);
const toDotPath = (path: TArrayPath) => toArray(path).join('.');

export const createToken = (token: string) => (path: TArrayPath, defaultValue = toDotPath(path)) => themeGet(
  toDotPath([token, ...toArray(path)]),
  defaultValue,
);

export const getFontSize = createToken('fontSizes');
export const getFontFamily = createToken('fonts');
export const getFontWeight = createToken('fontWeights');
export const getFontStyle = createToken('fontStyle');
export const getLineHeight = createToken('lineHeights');
export const getLetterSpacing = createToken('letterSpacings');
