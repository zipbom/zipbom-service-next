// types
import type { AppProps } from "next/app";
// import { NextPage, NextPageContext } from "next";
// modules
import "antd/dist/antd.css";
import { ThemeProvider } from "styled-components";
import GlobalCommonStyle from "@components/GlobalCommonStyle";
import useMobileDetect from "@hooks/useMobileDetect";
import theme from "@theme/theme";
import wrapper from "@store/configureStore";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const currentDevice = useMobileDetect();
  console.log("isMobile: ", currentDevice.isMobile());
  return (
    <ThemeProvider theme={theme}>
      <GlobalCommonStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default wrapper.withRedux(MyApp);
