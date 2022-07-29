import "../styles/globals.css";
import { AppPropsWithLayout } from "@/models/layout";
import Layout from "@/components/Layout";
import { SWRConfig } from "swr";
import instance from "@/api/instance";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store } from "@/app/store";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const LayoutWrapper = Component.Layout ?? Layout;
  return (
    <Provider store={store}>
      <LayoutWrapper>
        <SWRConfig value={{ fetcher: async (url) => await instance.get(url) }}>
          <Component {...pageProps} />
        </SWRConfig>
        <ToastContainer />
      </LayoutWrapper>
    </Provider>
  );
}

export default MyApp;
