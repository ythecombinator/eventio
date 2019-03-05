import * as styledComponents from 'styled-components';

const colors = {
  limeGreen: '#22D486',
  limeGreenDarken: '#20BD78',
  lightPink: '#ff4081',
  lightPinkDarken: '#e73370',
  grayishBlue: '#c4c9d1',
  grayishBlueLighten: '#d9dce1',
  darkGrayishBlue: '#323c46',
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
      placeholder: '#c9ced3',
    },
    label: {
      regular: '#d2d6da',
      focused: colors.darkGrayishBlue,
    },
    underline: {
      static: '#dae1e7',
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
    name: '#949ea8',
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
