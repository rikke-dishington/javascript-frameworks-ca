import { ThemeProvider } from "styled-components";

const theme = {
  palette: {
    white: 'var(--color-white)',
    light_grey: 'var(--color-light-grey)',
    ligth_blue: 'var(--color-light-blue)',
    lighet_red: 'var(--color-light-red)',
    dark_grey: 'var(--color-dark-grey)',
    dark_blue: 'var(--color-dark-blue)',
    dark_red: 'var(--color-dark-red)',
    darker_blue: 'var(--color-darker-blue)',
    darker_red: 'var(--color-darker-red)',
  },
};

export const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;