import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";
const fonts = { mono: `'Menlo', monospace` };

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};
const breakpoints = {
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
};

const theme = extendTheme({
  styles: {
    global: (props: StyleFunctionProps) => ({
      html: {
        scrollBehavior: "smooth",
      },
      body: {
        fontFamily: "body",
        color: mode("whiteAlpha.900", "whiteAlpha.900")(props),
        bg: mode("#090E16", "#090E16")(props),
        lineHeight: "base",
      },
    }),
  },
  semanticTokens: {
    colors: {
      text: {
        default: "#ade3b8",
        _dark: "#ade3b8",
      },
      heroGradientStart: {
        default: "#e3a7f9",
        _dark: "#e3a7f9",
      },
      heroGradientEnd: {
        default: "#fbec8f",
        _dark: "#fbec8f",
      },
    },
    radii: {
      button: "12px",
    },
  },
  colors: {
    black: "#16161D",
  },
  fonts,
  breakpoints,
  config,
});

export default theme;
