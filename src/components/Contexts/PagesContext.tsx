import { usePathname } from "next/navigation";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

// Define the shape of the context
type PagesContextTypes = {
  errorFetching: boolean;
  pageTitle: string;
  setPageTitle: any;
  openedFooter: string;
  setOpenedFooter: any;
  setErrorFetching: any;
  hiddenFooter: boolean;
  setHiddenFooter: any;
  loading: boolean;
  setLoading: any;
};

// Create default value
const PagesContext = createContext<PagesContextTypes | undefined>(undefined);

// Create provider
export const PageContextProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const [pageTitle, setPageTitle] = useState("");
  const [hiddenFooter, setHiddenFooter] = useState(false);
  const [openedFooter, setOpenedFooter] = useState(pathname);
  const [loading, setLoading] = useState(true);
  const [errorFetching, setErrorFetching] = useState(false);

  useEffect(() => {
    setOpenedFooter(pathname);
  }, [pathname]);

  return (
    <PagesContext.Provider
      value={{
        errorFetching,
        setErrorFetching,
        pageTitle,
        setPageTitle,
        hiddenFooter,
        setHiddenFooter,
        openedFooter,
        setOpenedFooter,
        loading,
        setLoading,
      }}
    >
      {children}
    </PagesContext.Provider>
  );
};

// Custom hook
export const usePageContext = () => {
  const context = useContext(PagesContext);
  if (!context) {
    throw new Error("usePageContext must be used within a PageContextProvider");
  }
  return context;
};
