import "../styles/globals.css";
import { AppPropsWithLayout } from "@/models/layout";
import Layout from "@/components/Layout";
import { SWRConfig } from "swr";
import instance from "@/api/instance";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store } from "@/app/store";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const LayoutWrapper = Component.Layout ?? Layout;
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <Provider store={store}>
        <LayoutWrapper>
          <SWRConfig
            value={{ fetcher: async (url) => await instance.get(url) }}
          >
            <Component {...pageProps} />
          </SWRConfig>
          <ToastContainer />
        </LayoutWrapper>
      </Provider>
    );
  }
}

export default MyApp;
