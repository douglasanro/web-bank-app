import { createGlobalStyle, DefaultTheme } from 'styled-components';
import styledNormalize from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  * {
    margin: 0;
    padding: 0;
  }
  ::selection {
    background-color: #BDBDBD;
    color: #FFF;
  }
  body {
    color: #212121;
    font-display: swap;
    font-family: 'Roboto', Arial, sans-serif;
    font-size: 16px;
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 400;
    height: 100%;
    text-rendering: optimizeLegibility;
  }
`;

/*
  Color name pattern http://chir.ag/projects/name-that-color
  Breakpoints pattern https://material.io/design/layout/responsive-layout-grid.html#breakpoints
*/

export const theme: DefaultTheme = {
  color: {
    mineShaft: '#212121',
    silver: '#BDBDBD',
    alto: '#E0E0E0',
    alabaster: '#EEE',
    white: '#FFF'
  },
  breakpoint: {
    xl: '1920px',
    lg: '1280px',
    md: '960px',
    sm: '600px',
    xs: '0px',
  },
  spacing: (value: number) => `${value * 8}px`
};
