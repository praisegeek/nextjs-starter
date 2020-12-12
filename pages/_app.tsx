import { AppProps /*, AppContext */ } from "next/app";

import Header from "../components/Header";
import theme from "../src/theme";
import { ThemeProvider } from "theme-ui";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
