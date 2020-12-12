import { AppProps /*, AppContext */ } from "next/app";

import { ThemeProvider } from "theme-ui";
import Header from "../components/Header";
import theme from "../src/theme-ui/index";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
