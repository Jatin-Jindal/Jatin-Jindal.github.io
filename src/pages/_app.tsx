import { ChakraProvider, DarkMode, useColorMode } from "@chakra-ui/react";
import { Analytics } from "@vercel/analytics/react";
import "./FadeInSection.css";

import theme from "../theme";
import { AppProps } from "next/app";
import "@fontsource/raleway/200.css";
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/700.css";
import "@fontsource/raleway/800.css";
import "@fontsource/raleway/600.css";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const { colorMode, toggleColorMode } = useColorMode();
  if (colorMode === "light") {
    toggleColorMode();
  }
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="keywords"
          content="titla, meta, nextjs, portfolio, chakraui, jatin"
        />
        <meta name="author" content="Jatin Jindal" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Jatin Jindal's Portfolio</title>
        <meta name="description" content="Jatin Jindal's portfolio" />
        <link rel="icon" type="image/png" href="/logo.png" />
      </Head>
      <ChakraProvider theme={theme}>
        <DarkMode>
          <Component {...pageProps} />
          <Analytics />
        </DarkMode>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
