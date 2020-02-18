import 'styled-components';
import 'styled-system';
import { DefaultTheme } from 'styled-components';
import { StoreInterfaces } from 'interfaces';

interface Color {
  primary: string;
  background: string;
}

const whiteThemeColors: Color = {
  primary: '#000',
  background: '#fff',
};
const darkThemeColors: Color = {
  primary: '#fff',
  background: '#000',
};

export enum colors {
  primary = '#fff',
  background = '#ccc',
}

const fontSizes = [12, 14, 16, 20, 32];
const space = [0, 10, 20, 30, 40];

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Color;
    space: Array<number>;
    fontSizes: Array<number>;
  }
}

export const Theme = (mode: StoreInterfaces.ThemeMode): DefaultTheme => ({
  colors: mode === 'dark' ? darkThemeColors : whiteThemeColors,
  space,
  fontSizes,
});

export default Theme;
