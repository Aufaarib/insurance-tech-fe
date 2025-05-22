import { PageContextProvider } from "@/components/Contexts/PagesContext";
import MainLayout from "@/layouts/MainLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PageContextProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </PageContextProvider>
  );
}
