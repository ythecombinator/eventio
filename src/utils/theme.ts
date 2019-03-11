import * as styledComponents from 'styled-components';

export const colors = {
  limeGreen1: '#1be38b',
  limeGreen2: '#22D486',
  limeGreen3: '#20BD78',
  limeGreen4: '#20BD78',
  limeGreen5: '#22d486',
  lightPink1: '#ff4081',
  lightPink2: '#e73370',
  lightPink3: '#ff3177',
  gray1: '#ccd0d9',
  gray2: '#dae1e7',
  gray3: '#d2d6da',
  gray4: '#c4c9d1',
  gray5: '#c9ced3',
  gray6: '#d9dce1',
  gray7: '#9ca5af',
  gray8: '#f9f9fb',
  gray9: '#E1E4E6',
  gray10: '#a9aeb4',
  gray11: '#d0d4da',
  gray12: '#949EA8',
  gray13: '#cacdd0',
  gray14: '#7d7878',
  black1: '#1F1F1F',
  grayishBlue1: '#949ea8',
  grayishBlue2: '#323c46',
  grayishBlue3: '#1c4267',
  grayishBlue4: '#2c343d',
  white: '#ffffff',
};

const theme = {
  colors,
  Button: {
    primary: {
      regular: colors.limeGreen2,
      hover: colors.limeGreen3,
    },
    secondary: {
      regular: colors.lightPink1,
      hover: colors.lightPink2,
    },
    tertiary: {
      regular: colors.gray4,
      hover: colors.gray6,
    },
    quaternary: {
      regular: colors.grayishBlue2,
      hover: colors.grayishBlue3,
    },
  },
  Input: {
    input: {
      regular: colors.grayishBlue2,
      placeholder: colors.gray5,
    },
    label: {
      regular: colors.gray3,
      focused: colors.grayishBlue2,
    },
    underline: {
      static: colors.gray2,
      focus: colors.grayishBlue2,
      error: colors.lightPink1,
    },
    error: colors.lightPink1,
  },
  ToggleButton: {
    regular: colors.gray6,
    selected: colors.grayishBlue2,
  },
  UserMenu: {
    name: colors.grayishBlue1,
    avatar: {
      color: '#fafafa',
      backgroundColor: '#bdbdbd',
    },
    button: colors.gray7,
    dropdown: colors.gray6,
  },
};

type ThemeInterface = typeof theme;

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ThemeInterface>;

export {css, createGlobalStyle, keyframes, theme, ThemeProvider};
export default styled;
