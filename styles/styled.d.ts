import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secondary: string;
      background: string;
      font: string;
    };
    fonts: {
      family: {
        roboto: string;
      };
      sizes: {
        xSmall: string;
        small: string;
        medium: string;
        large: string;
        xLarge: string;
        xxLarge: string;
        huge: string;
      };
    };
    medias: {
      lteMedium: string;
    };
    spacings: {
      xSmall: string;
      small: string;
      medium: string;
      large: string;
      xLarge: string;
      xxLarge: string;
      huge: string;
    };
  }
}
