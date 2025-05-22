"use client";

import { usePageContext } from "@/components/Contexts/PagesContext";
import MainFooter from "@/components/Shared/MainFooter";
import { IconArrowLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const { hiddenFooter, setHiddenFooter } = usePageContext();
  const { pageTitle, setPageTitle } = usePageContext();

  const onRouteBack = () => {
    if (hiddenFooter) {
      setHiddenFooter(false);
    }
    router.back();
  };

  return (
    <div className={`bg-[#eff1f4] w-screen md:w-[412px]`}>
      {/* header */}
      <button
        onClick={onRouteBack}
        className={`${
          pageTitle == "" && "hidden"
        } flex flex-row gap-[8px] bg-white pb-[14px] px-[8px] w-full mt-[12px]`}
      >
        <IconArrowLeft />
        <p>{pageTitle}</p>
      </button>

      {children}

      <div className={`${hiddenFooter && "hidden"}`}>
        <MainFooter />
      </div>
    </div>
  );
};

export default MainLayout;
