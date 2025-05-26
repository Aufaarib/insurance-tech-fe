import { PageContextProvider } from "@/components/Contexts/PagesContext";
import MainLayout from "@/layouts/MainLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import ErrorBoundary from "./_error";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <PageContextProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </PageContextProvider>
    </ErrorBoundary>
  );
}
