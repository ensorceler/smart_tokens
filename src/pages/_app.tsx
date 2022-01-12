import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps, ...appProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={false} attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
