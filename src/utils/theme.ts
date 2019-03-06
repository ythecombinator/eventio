import * as styledComponents from 'styled-components';

export const colors = {
  limeGreenLighten: '#1be38b',
  limeGreen: '#22D486',
  limeGreenDarken: '#20BD78',
  lightPink: '#ff4081',
  lightPinkDarken: '#e73370',
  lightGrayishBlue: '#ccd0d9',
  lightGrayishBlue2: '#dae1e7',
  lightGrayishBlue3: '#d2d6da',
  grayishBlue: '#c4c9d1',
  grayishBlue2: '#c9ced3',
  grayishBlueLighten: '#d9dce1',
  darkGrayishBlueLighten: '#949ea8',
  darkGrayishBlue: '#323c46',
  veryDarkBlue: '#1c4267',
  white: '#ffffff',
};

const theme = {
  Button: {
    primary: {
      regular: colors.limeGreen,
      hover: colors.limeGreenDarken,
    },
    secondary: {
      regular: colors.lightPink,
      hover: colors.lightPinkDarken,
    },
    tertiary: {
      regular: colors.grayishBlue,
      hover: colors.grayishBlueLighten,
    },
  },
  Input: {
    input: {
      regular: colors.darkGrayishBlue,
      placeholder: colors.grayishBlue2,
    },
    label: {
      regular: colors.lightGrayishBlue3,
      focused: colors.darkGrayishBlue,
    },
    underline: {
      static: colors.lightGrayishBlue2,
      focus: colors.darkGrayishBlue,
      error: colors.lightPink,
    },
    error: colors.lightPink,
  },
  ToggleButton: {
    regular: colors.grayishBlueLighten,
    selected: colors.darkGrayishBlue,
  },
  UserMenu: {
    name: colors.darkGrayishBlueLighten,
    avatar: {
      color: '#fafafa',
      backgroundColor: '#bdbdbd',
    },
    button: '#9ca5af',
    dropdown: colors.grayishBlueLighten,
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
