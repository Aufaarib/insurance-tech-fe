import { usePageContext } from "@/components/Contexts/PagesContext";
import CardContents from "@/components/Shared/CardContent";
import { IconCircleFilled } from "@tabler/icons-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

const ManfaatContent = () => {
  return (
    <div className="flex flex-row gap-[8px] items-center justify-start">
      <Image
        src="/icons/circular-percent.png"
        alt="circular-percent"
        className="w-[24px]"
        width={100}
        height={100}
        unoptimized
      />
      <div className="flex flex-col text-[12px]">
        <p className="font-[600]">Perlindungan Layar Handphone Pecah</p>
        <p className="text-[#757F90] font-[400]">Maksimal Rp1.000.000</p>
      </div>
    </div>
  );
};

const CaraKlaimContent = () => {
  return (
    <div className="flex flex-row gap-[8px] items-center justify-start">
      <div
        style={{
          background:
            "linear-gradient(239.71deg, #FA7C55 14.07%, #F75A49 24.97%, #F22136 44.84%, #F00B2E 54.41%, #C3001C 83.4%)",
        }}
        className="flex justify-center p-[3px] items-center rounded-full w-[24px] h-[24px]"
      >
        <p className="bg-white text-[12px] font-[600] text-[#FF0025] flex justify-center items-center rounded-full w-full">
          1
        </p>
      </div>
      <div className="flex flex-col text-[12px]">
        <p className="font-[600]">Perlindungan Layar Handphone Pecah</p>
        <p className="text-[#757F90] font-[400]">Maksimal Rp1.000.000</p>
      </div>
    </div>
  );
};

const DetailPolis = () => {
  const router = useRouter();
  const { pageTitle, setPageTitle } = usePageContext();
  const { hiddenFooter, setHiddenFooter } = usePageContext();
  const [category, setCategory] = useState("Status");

  useEffect(() => {
    setPageTitle("Proteksi Layar Handphone");
    setHiddenFooter(true);
  }, []);

  const onChangeCategory = (name: string) => {
    setCategory(name);
  };

  return (
    <div className="relative flex flex-col h-[94dvh] items-center">
      <Image
        src="/imgs/banner-screen-assurance.png"
        alt="Menu"
        className="w-full"
        width={100}
        height={100}
        unoptimized
      />
      <div className="flex flex-col p-[18px] w-full absolute h-screen gap-[12px] pt-[27%] pb-[200px] overflow-auto hidden-scrollbar">
        <div className="flex w-full flex-col items-start p-[16px] gap-[12px] bg-white rounded-[12px]">
          <div>
            <p className="text-[16px] font-[700] tsel-font">
              Proteksi Layar Handphone
            </p>
            <div className="flex flex-row gap-1 items-center">
              <div className="border-[1px] border-[#DAE0E9] w-[82px] rounded-[4px] p-[6px] flex justify-center">
                <Image
                  src="/icons/sinarmas-logo.png"
                  alt="insurance-brand"
                  className="w-[66px]"
                  width={100}
                  height={100}
                  unoptimized
                />
              </div>
              <p className="text-[12px] font-[12px] text-[#9CA9B9]">
                PT Asuransi Sinar Mas
              </p>
            </div>
          </div>

          {/* Categories */}
          <div className="flex w-full flex-row justify-between bg-[#E2EBF3] rounded-[8px]">
            <button
              onClick={() => onChangeCategory("Status")}
              className={`w-full py-[4px] text-center text-[12px] px-[12px] ${
                category == "Status"
                  ? "bg-[#001A41] text-white font-[600]"
                  : "text-[#353941] font-[400]"
              } rounded-[8px]`}
            >
              Status
            </button>
            <button
              onClick={() => onChangeCategory("Manfaat")}
              className={`w-full py-[4px] text-center text-[12px] px-[12px] ${
                category == "Manfaat"
                  ? "bg-[#001A41] text-white font-[600]"
                  : "text-[#353941] font-[400]"
              } rounded-[8px]`}
            >
              Manfaat
            </button>
            <button
              onClick={() => onChangeCategory("Cara Klaim")}
              className={`w-full py-[4px] text-center text-[12px] px-[12px] ${
                category == "Cara Klaim"
                  ? "bg-[#001A41] text-white font-[600]"
                  : "text-[#353941] font-[400]"
              } rounded-[8px]`}
            >
              Cara Klaim
            </button>
          </div>

          {/* Content */}

          {category == "Manfaat" ? (
            <div className="flex flex-col gap-[16px]">
              <ManfaatContent />
              <ManfaatContent />
              <ManfaatContent />
            </div>
          ) : category == "Cara Klaim" ? (
            <div className="flex flex-col gap-[16px]">
              <CaraKlaimContent />
              <CaraKlaimContent />
              <CaraKlaimContent />
            </div>
          ) : (
            <div className="flex flex-col bg-white gap-16px rounded-[12px] gap-[11px] w-full">
              <div className="pb-[8px] border-b-[2px] border-[#EFF1F4]">
                <CardContents>
                  <>
                    <p>Status Polis</p>
                    <p className="px-[8px] py-[4px] bg-[#008E53] text-white text-[10px] font-[600] rounded-[4px]">
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
            </div>
          )}

          <div className="w-full flex justify-center">
            <Image
              src="/icons/solusiutama-logo.png"
              alt="solusiutama-logo"
              className="w-[116px]"
              width={100}
              height={100}
              unoptimized
            />
          </div>
        </div>

        <div className="flex w-full flex-col items-start p-[16px] gap-[12px] bg-white rounded-[12px]">
          <p className="text-[14px] font-[700] tsel-font">
            Pengecualian Pertanggungan
          </p>
          <div className="flex flex-col text-[12px] font-[400]">
            <div className="flex flex-row gap-2">
              <IconCircleFilled size={10} className="mt-[4px]" />
              <p>
                Kesengajaan atau kelalaian berat dari pengguna, seperti
                menjatuhkan ponsel secara sengaja.
              </p>
            </div>
            <div className="flex flex-row gap-2">
              <IconCircleFilled size={10} className="mt-[4px]" />
              <p>
                Kerusakan selain layar, seperti kerusakan bodi, baterai, kamera,
                atau komponen internal lainnya.
              </p>
            </div>
          </div>
          <a href="/" className="text-[#ED0226] text-[12px] font-[400]">
            Lihat Syarat dan Ketentuan
          </a>
        </div>

        <div className="flex flex-col w-full justify-center items-center gap-[4px]">
          <p className="text-[#757F90] text-[10px]">
            Seluruh produk asuransi terdaftar dan diawasi oleh
          </p>
          <Image
            src="/icons/ojk-logo.png"
            alt="ojk-logo"
            className="w-[42px]"
            width={100}
            height={100}
            unoptimized
          />
        </div>
      </div>

      <div className="absolute bottom-0 flex flex-col gap-[12px] text-[16px] font-[600] bg-white p-[16px] w-full">
        <button className="bg-[#ED0226] text-white h-[48px] rounded-full">
          Lihat E-Polis
        </button>
        <button className="border-[2px] border-[#ED0226] text-[#ED0226] h-[48px] rounded-full">
          Klaim Polis
        </button>
      </div>
    </div>
  );
};

export default DetailPolis;
