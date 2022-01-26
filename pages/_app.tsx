// types
import type { AppProps } from "next/app";
// import { NextPage, NextPageContext } from "next";
// modules
import "antd/dist/antd.css";
import { ThemeProvider } from "styled-components";
import GlobalCommonStyle from "@components/GlobalCommonStyle";
import useMobileDetect from "@hooks/useMobileDetect";
import theme from "@theme/globalTheme";
import { Provider } from "mobx-react";
import ServiceStore from "src/stores/ServiceStore";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const currentDevice = useMobileDetect();
  console.log("isMobile: ", currentDevice.isMobile());
  return (
    <Provider store={ServiceStore}>
      <ThemeProvider theme={theme}>
        <GlobalCommonStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
};

export default MyApp;
