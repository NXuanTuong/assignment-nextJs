import "../styles/globals.css";
import { AppPropsWithLayout } from "@/models/layout";
import Layout from "@/components/Layout";
import { SWRConfig } from "swr";
import instance from "@/api/instance";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const LayoutWrapper = Component.Layout ?? Layout;
  return (
    <LayoutWrapper>
      <SWRConfig value={{ fetcher: async (url) => await instance.get(url) }}>
        <Component {...pageProps} />
      </SWRConfig>
      <ToastContainer />
    </LayoutWrapper>
  );
}

export default MyApp;
