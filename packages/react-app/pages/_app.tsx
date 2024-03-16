import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import "../styles/globals.css";
import PrimaryButton from "../components/Button";
import TopBar from "../components/Top-Bar";

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <TopBar />
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
