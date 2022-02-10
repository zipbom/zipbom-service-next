// import { NextPage, NextPageContext } from "next";
import type { AppProps } from "next/app";
import GlobalCommonStyle from "@components/GlobalCommonStyle";
import useMobileDetect from "@hooks/useMobileDetect";
import theme from "@theme/globalTheme";
import { StoresProvider } from "@stores";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const currentDevice = useMobileDetect();
  console.log("isMobile: ", currentDevice.isMobile());
  return (
    <StoresProvider>
      <GlobalCommonStyle />
      <Component {...pageProps} />
    </StoresProvider>
  );
};

export default MyApp;
