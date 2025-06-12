"use client";

import { usePageContext } from "@/components/Contexts/PagesContext";
import ErrorConnectionModal from "@/components/Modal/ErrorConnectionModal";
import ErrorPage from "@/components/Shared/ErrorPage";
import MainFooter from "@/components/Shared/MainFooter";
import { IconArrowLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const { hiddenFooter, setHiddenFooter, errorFetching } = usePageContext();
  const { pageTitle, setPageTitle } = usePageContext();
  const { openErrorConnectionModal, closeModal } = ErrorConnectionModal();

  // useEffect(() => {
  //   openErrorConnectionModal();
  // }, []);

  const onRouteBack = () => {
    if (hiddenFooter) {
      setHiddenFooter(false);
    }
    router.back();
  };

  return (
    <div
      className={`bg-[#eff1f4] w-screen h-screen overflow-hidden md:w-[412px]`}
    >
      <button
        onClick={onRouteBack}
        className={`${
          pageTitle == "" && "hidden"
        } flex flex-row gap-[8px] bg-white pb-[14px] px-[8px] w-full pt-[12px]`}
      >
        <IconArrowLeft />
        <p>{pageTitle}</p>
      </button>

      {children}

      <div className={`${hiddenFooter && "hidden"}`}>
        <MainFooter />
      </div>

      {errorFetching && (
        <div className="absolute top-0 w-full">
          <ErrorPage />
        </div>
      )}
    </div>
  );
};

export default MainLayout;
