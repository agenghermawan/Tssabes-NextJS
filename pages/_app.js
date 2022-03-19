import "../styles/globals.css";
import "@fontsource/poppins";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "../Components/layout";
import Script from "next/script";
import "../script/loader";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Script
        async
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossOrigin="anonymous"
      />
      <Script
        src="https://kit.fontawesome.com/c0a3e80385.js"
        crossorigin="anonymous"
      />
      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js" />
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </div>
  );
}

export default MyApp;
