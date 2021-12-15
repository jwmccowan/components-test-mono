import { ThemeProvider } from "@ds/components";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={ThemeProvider.themes.dark}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
