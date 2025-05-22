"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePageContext } from "../Contexts/PagesContext";

const MainFooter = () => {
  const router = useRouter();
  const { openedFooter, setOpenedFooter } = usePageContext();

  const onClick = (title: string) => {
    setOpenedFooter(title);
    router.push(title);
  };

  return (
    <div className="flex flex-row w-screen md:w-[412px] bg-white justify-evenly items-center h-[64px] absolute bottom-0 px-[12px] gap-[20px]">
      <button
        onClick={() => onClick("/")}
        className="flex flex-col w-full justify-center items-center tsel-font"
      >
        <div
          style={{
            backgroundColor: openedFooter == "/" ? "rgba(237, 2, 38, 0.1)" : "",
          }}
          className="w-full flex justify-center items-center rounded-full h-[32px]"
        >
          <Image
            src={
              openedFooter == "/"
                ? "/icons/home-footer.png"
                : "/icons/grey-home-footer.png"
            }
            alt="home-footer"
            className="w-[20px] h-[20px]"
            width={100}
            height={100}
            unoptimized
          />
        </div>
        <p
          className={`text-[10px] font-[400] ${
            openedFooter == "/" ? "text-[#FF0025]" : "text-[#757F90]"
          }`}
        >
          Beranda
        </p>
      </button>
      <button
        onClick={() => onClick("/my-polis")}
        className="flex flex-col w-full justify-center items-center tsel-font"
      >
        <div
          style={{
            backgroundColor:
              openedFooter == "/my-polis" ? "rgba(237, 2, 38, 0.1)" : "",
          }}
          className="w-full flex justify-center items-center rounded-full h-[32px]"
        >
          <Image
            src={
              openedFooter == "/my-polis"
                ? "/icons/mypolis-footer.png"
                : "/icons/grey-mypolis-footer.png"
            }
            alt="mypolis-footer"
            className="w-[20px] h-[20px]"
            width={100}
            height={100}
            unoptimized
          />
        </div>
        <p
          className={`text-[10px] font-[400] ${
            openedFooter == "/my-polis" ? "text-[#FF0025]" : "text-[#757F90]"
          }`}
        >
          Polis Saya
        </p>
      </button>
    </div>
  );
};

export default MainFooter;
