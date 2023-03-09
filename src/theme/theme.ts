
export enum Size {
    xs = 'xs',
    s = 's',
    sm = 'sm',
    md = 'md',
    lg = 'lg',
    xl = 'xl',
    xxl = 'xxl',
  }

export const InstillTheme = {
    fontSizes: {
        [Size.xs]: '12px',
        [Size.s]: '14px',
        [Size.sm]: '16px',
        [Size.md]: '18px',
        [Size.lg]: '20px',
        [Size.xl]: '24px',
      },
      fonts: {
        normal: 'Roboto',
      },
      fontStyle: {
        normal: 'normal',
      },
      fontWeights: {
        bold: 'bold',
        normal: '500',
        light: '400',
      },
      lineHeights: {
        normal: 'normal',
        default: '1em',
        small: '1.1em',
        medium: '1.3em',
        large: '1.5em',
        oneforty: '140%',
        onetwenty: '120%',
      },
      letterSpacings: {
        less: '-0.5px',
        medium: '-0.4px',
        normal: '-0.3px',
        more: '0.3px',
      },
}