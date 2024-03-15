import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import "../styles/globals.css";
import PrimaryButton from "../components/Button";

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <PrimaryButton
        title="Go to Home Page"
        onClick={() => console.log("Go to Home Page")}
      />
    </Layout>
  );
}

export default App;
