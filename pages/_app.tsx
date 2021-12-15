// types
import type { AppProps } from "next/app";
// modules
import { Provider } from "mobx-react";
import ServiceStore from "@stores/ServiceStore";
import "antd/dist/antd.css";
import { ThemeProvider } from "styled-components";
import theme from "@components/theme";
import GlobalCommonStyle from "@components/GlobalCommonStyle";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalCommonStyle>
        <ThemeProvider theme={theme}>
          <Provider store={ServiceStore}>
            <Component {...pageProps} />
          </Provider>
        </ThemeProvider>
      </GlobalCommonStyle>
    </>
  );
};

export default MyApp;
