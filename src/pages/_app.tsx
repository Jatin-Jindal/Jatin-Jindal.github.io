import { ChakraProvider, DarkMode } from "@chakra-ui/react";

import theme from "../theme";
import { AppProps } from "next/app";
import "@fontsource/raleway/200.css";
import "@fontsource/raleway/700.css";
import "@fontsource/raleway/800.css";
import "@fontsource/raleway/600.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DarkMode>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </DarkMode>
  );
}

export default MyApp;
