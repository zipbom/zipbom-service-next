// types
import type { AppProps } from "next/app";
import { NextPage, NextPageContext } from "next";
// modules
import "antd/dist/antd.css";
import { ThemeProvider } from "styled-components";
import GlobalCommonStyle from "@components/GlobalCommonStyle";
import useMobileDetect from "@hooks/useMobileDetect";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const currentDevice = useMobileDetect();
  console.log("isMobile: ", currentDevice.isMobile());
  return (
    <ThemeProvider theme={ThemeStore.theme}>
      <GlobalCommonStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
