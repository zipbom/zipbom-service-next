import type { AppProps } from "next/app";
import "antd/dist/antd.css";
import { ThemeProvider } from "styled-components";
import theme from "@components/theme";
import GlobalCommonStyle from "@components/GlobalCommonStyle";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalCommonStyle>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </GlobalCommonStyle>
    </>
  );
};

export default MyApp;
