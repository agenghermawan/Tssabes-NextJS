import "../styles/globals.css";
import "@fontsource/poppins";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "../Components/layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <script
          async
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          crossOrigin="anonymous"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </div>
  );
}

export default MyApp;
