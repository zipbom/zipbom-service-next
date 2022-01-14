import type { AppProps } from "next/app";
import "antd/dist/antd.css";
/* import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global-style";
import { theme } from "../styles/theme"; */

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />;
    </>
  );
};

export default MyApp;
