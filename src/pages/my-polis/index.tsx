import { usePageContext } from "@/components/Contexts/PagesContext";
import CardContents from "@/components/Shared/CardContent";
import {
  IconArrowLeft,
  IconChevronDown,
  IconChevronRight,
} from "@tabler/icons-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

const PolisCard = ({ onClick }: { onClick: any }) => {
  return (
    <div className="flex flex-col p-[16px] bg-white gap-16px rounded-[12px] gap-[11px] w-full">
      {/* card polis status */}
      <button
        onClick={() => onClick()}
        className="flex flex-row gap-[12px] w-full items-center justify-between rounded-[12px]"
      >
        <div className="flex flex-row items-center justify-center gap-[8px]">
          <Image
            src="/icons/polis-category.png"
            alt="polis-category"
            className="w-[40px]"
            width={100}
            height={100}
            unoptimized
          />
          <div className="flex flex-col gap-[4px]">
            <Image
              src="/icons/Allianz.png"
              alt="brand"
              className="w-[40px]"
              width={100}
              height={100}
              unoptimized
            />
            <p className="text-[#181C21] text-[12px] font-[600] text-start">
              Proteksi dari Kerugian Serangan Hacker
            </p>
            {/* <div className="flex flex-row gap-[6px] items-center text-[12px] font-[400] text-[#757F90]">
            <svg
              width="8"
              height="10"
              viewBox="0 0 8 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.34198 10H6.61469C7.16867 10 7.49977 9.69593 7.49977 9.10934V8.96797C7.50533 7.46871 5.90894 6.25197 5.20829 5.58937C5.01274 5.40465 4.90964 5.2364 4.90964 4.99189C4.90964 4.74738 5.01274 4.58445 5.20853 4.39441C5.90361 3.72068 7.5 2.58019 7.5 1.02114V0.890887C7.5 0.30407 7.16867 0 6.61492 0H1.34175C0.798656 0 0.5 0.30407 0.5 0.841986V1.02114C0.5 2.58019 2.09639 3.72068 2.79703 4.39441C2.99259 4.58445 3.09569 4.74738 3.09569 4.99189C3.09569 5.2364 2.99259 5.40465 2.7968 5.58937C2.09639 6.2522 0.5 7.46894 0.5 8.96797V9.15801C0.5 9.6957 0.798656 10 1.34175 10M1.54263 1.62418H6.46246C6.66867 1.62418 6.70134 1.7871 6.58202 2.00983C6.09314 2.88982 4.44787 4.30194 4.00255 4.30194C3.55723 4.30194 1.91196 2.90048 1.42308 2.00983C1.30375 1.7871 1.33619 1.62418 1.54263 1.62418Z"
                fill="#757F90"
              />
            </svg>

            <p>31 Jan 2025</p>
          </div> */}
          </div>
        </div>
        <IconChevronRight color="red" />
      </button>
      {/*  */}

      <div className="py-[6px] border-y-[2px] border-[#EFF1F4]">
        <CardContents>
          <>
            <p>Status Polis</p>
            <p className="px-[8px] py-[4px] bg-[#008E53] text-white text-[10px] font-[600] poppins-font rounded-[4px]">
              Polis Aktif
            </p>
          </>
        </CardContents>
      </div>

      <CardContents
        title="Periode Proteksi"
        value="25 Jan 2025 - 31 Jan 2025"
      />
      <CardContents title="ID Polis" value="IGL/T-001/01/2025" />

      <div className="flex flex-row gap-[8px] w-full text-[12px] font-[600]">
        <button className="px-[16px] py-[12px] rounded-full text-white bg-[#ED0226] w-full">
          Lihat E-Polis
        </button>
        <button className="px-[16px] py-[12px] rounded-full text-[#ED0226] border-[2px] border-[#ED0226] w-full">
          Klaim Polis
        </button>
      </div>
    </div>
  );
};

const KlaimCard = ({ onClick }: { onClick: any }) => {
  return (
    <div className="flex flex-col p-[16px] bg-white gap-16px rounded-[12px] gap-[11px] w-full">
      {/* card polis status */}
      <button
        onClick={() => onClick()}
        className="flex flex-row gap-[12px] w-full items-center justify-between rounded-[12px]"
      >
        <div className="flex flex-row items-center justify-center gap-[8px]">
          <Image
            src="/icons/polis-category.png"
            alt="polis-category"
            className="w-[40px]"
            width={100}
            height={100}
            unoptimized
          />
          <div className="flex flex-col gap-[4px]">
            <Image
              src="/icons/Allianz.png"
              alt="brand"
              className="w-[40px]"
              width={100}
              height={100}
              unoptimized
            />
            <p className="text-[#181C21] text-[12px] font-[600] text-start">
              Proteksi dari Kerugian Serangan Hacker
            </p>
          </div>
        </div>
        <IconChevronRight color="red" />
      </button>
      {/*  */}

      <div className="flex flex-col gap-[8px] py-[6px] border-y-[2px] border-[#EFF1F4]">
        <CardContents>
          <>
            <p>Status Polis</p>
            <p className="px-[8px] py-[4px] bg-[#008E53] text-white text-[10px] font-[600] poppins-font rounded-[4px]">
              Polis Aktif
            </p>
          </>
        </CardContents>
        <CardContents>
          <>
            <p>Status Klaim</p>
            <p className="px-[8px] py-[4px] bg-[#E9F6FF] text-[#0050AE] text-[10px] font-[600] poppins-font rounded-[4px]">
              Klaim Diproses
            </p>
          </>
        </CardContents>
      </div>

      <CardContents
        title="Periode Proteksi"
        value="25 Jan 2025 - 31 Jan 2025"
      />
      <CardContents title="ID Polis" value="IGL/T-001/01/2025" />
      <CardContents title="Tanggal Klaim" value="28 Jan 2025" />
      <CardContents title="ID Klaim" value="7697679898887" />

      <button className="px-[16px] py-[12px] text-[12px] font-[600] rounded-full text-[#ED0226] border-[2px] border-[#ED0226] w-full">
        Lihat Detail
      </button>
    </div>
  );
};

const MyPolisPage = () => {
  const router = useRouter();
  const [category, setCategory] = useState("Polis");
  const { pageTitle, setPageTitle } = usePageContext();

  const onChangeCategory = (name: string) => {
    setCategory(name);
  };

  useEffect(() => {
    setPageTitle("Polis Saya");
  }, []);

  return (
    <div>
      {/* header */}
      <div className="flex flex-col gap-[12px] bg-white p-[8px]">
        <div className="flex flex-row bg-[#eff1f4] p-[4px] w-full rounded-full text-[12px] font-[600] border-[1.5px] border-[#DAE0E9]">
          <button
            onClick={() => onChangeCategory("Polis")}
            className={`w-full py-[8px] ${
              category == "Polis" ? "bg-[#001A41] text-white" : "text-[#757F90]"
            } rounded-full`}
          >
            Polis
          </button>
          <button
            onClick={() => onChangeCategory("Klaim")}
            className={`w-full py-[8px] ${
              category == "Klaim" ? "bg-[#001A41] text-white" : "text-[#757F90]"
            } rounded-full`}
          >
            Klaim
          </button>
        </div>
        <div className="flex flex-row w-full gap-[8px]">
          <button className="flex flex-row justify-between bg-white px-[16px] py-[8px] w-full rounded-full text-[12px] border-[1.5px] border-[#DAE0E9] items-center">
            <p>Semua {category}</p>
            <IconChevronDown size={15} />
          </button>

          <button className="border-[1.5px] border-[#DAE0E9] p-[8px] rounded-full min-w-[38px] flex justify-center items-center">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.80132 0.985575C6.80138 0.65627 7.0668 0.389215 7.39392 0.389084C7.72121 0.389084 7.98646 0.656187 7.98651 0.985575V9.6318L10.3222 7.28658L10.3673 7.24524C10.6003 7.0546 10.9435 7.06862 11.1602 7.28717C11.3913 7.52034 11.3907 7.89798 11.159 8.13067L7.81294 11.4923C7.64334 11.6627 7.38835 11.7134 7.16707 11.621C6.94579 11.5286 6.80132 11.3112 6.80132 11.07V0.985575ZM4.01312 11.042V2.36729L1.67745 4.71306L1.63231 4.75442C1.39936 4.94503 1.05613 4.931 0.839477 4.71248C0.608328 4.47929 0.60898 4.1017 0.840638 3.869L4.18673 0.507332L4.23187 0.466556C4.46482 0.275679 4.80795 0.289899 5.0247 0.508501C5.14382 0.628647 5.20096 0.786943 5.19716 0.944214C5.19725 0.948676 5.19832 0.953132 5.19832 0.957617V11.042C5.19829 11.3713 4.93287 11.6384 4.60572 11.6385C4.27845 11.6385 4.01315 11.3715 4.01312 11.042Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* body */}
      <div className="w-full p-[16px] flex flex-col gap-[12px] overflow-auto hidden-scrollbar h-screen pb-[250px]">
        {category == "Klaim" ? (
          <KlaimCard onClick={() => router.push("/detail-polis")} />
        ) : (
          <PolisCard onClick={() => router.push("/detail-polis")} />
        )}
      </div>
    </div>
  );
};

export default MyPolisPage;
