import 'styled-components';

declare module 'styled-components' { // Add own themes (remember to copy it to theme.ts)
  export interface DefaultTheme {
    colors: {
      white: '#ffffff',
      black: '#000000',
      blue: '#4f7df3',
      paleBlue: '#c2d3ff',
      lightRed: '#ff5263',
      gray: '#969696',
      veryDarkBlue: '#151f29',
    }
  }
}

