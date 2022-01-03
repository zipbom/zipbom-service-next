// types
import type { AppProps } from "next/app";
import { NextPage, NextPageContext } from "next";
// modules
import { Provider } from "mobx-react";
import ServiceStore from "@stores/ServiceStore";
import "antd/dist/antd.css";
import { ThemeProvider } from "styled-components";
import GlobalCommonStyle from "@components/GlobalCommonStyle";
import ThemeStore from "@stores/ThemeStore";
import useMobileDetect from "@hooks/useMobileDetect";
import { CoreStoreProvider } from "zipbom-react-core";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const currentDevice = useMobileDetect();
  console.log("isMobile: ", currentDevice.isMobile());
  return (
    <CoreStoreProvider>
      <Provider store={ServiceStore}>
        <ThemeProvider theme={ThemeStore.theme}>
          <GlobalCommonStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </CoreStoreProvider>
  );
};

export default MyApp;
