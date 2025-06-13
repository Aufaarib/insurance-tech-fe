import { usePageContext } from "@/components/Contexts/PagesContext";
import CardContents from "@/components/Shared/CardContent";
import axios from "axios";
import moment from "moment";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import AdditionalContentButtons from "./AdditionalContentButtons";
import AdditionalContentLabels from "./AdditionalContentLabels";
import KlaimStatusClustering from "./KlaimStatusClustering";
import { IconLoader, IconLoader2 } from "@tabler/icons-react";

const Skeleton = () => {
  return (
    <div className="flex flex-col gap-[8px]">
      <div className="w-full flex flex-row items-center gap-[8px]">
        <div className="skeleton animate-pulse w-[36px] h-[36px]" />
        <div className="flex flex-col gap-[8px]">
          <div className="skeleton animate-pulse w-[96px] h-[10px]" />
          <div className="skeleton animate-pulse w-[180px] h-[16px]" />
        </div>
      </div>
      <div className="flex flex-row justify-between py-[8px] border-y-1 border-[#EFF1F4] items-center">
        <div className="skeleton animate-pulse w-[86px] h-[16px]" />
        <div className="skeleton animate-pulse w-[96px] h-[20px]" />
      </div>
      <div className="w-full flex flex-row items-center justify-between">
        <div className="skeleton animate-pulse w-[100px] h-[16px]" />
        <div className="skeleton animate-pulse w-[150px] h-[16px]" />
      </div>
      <div className="w-full flex flex-row items-center justify-between">
        <div className="skeleton animate-pulse w-[86px] h-[16px]" />
        <div className="skeleton animate-pulse w-[100px] h-[16px]" />
      </div>
    </div>
  );
};

const DetailPolis = () => {
  const router = useRouter();
  const {
    pageTitle,
    setPageTitle,
    hiddenFooter,
    setHiddenFooter,
    loading,
    setLoading,
    setErrorFetching,
  } = usePageContext();
  const [category, setCategory] = useState("Status");
  const [data, setData] = useState<any>(null);

  const params = useSearchParams();

  useEffect(() => {
    setLoading(true);
    setPageTitle("Proteksi Layar Handphone");
    setHiddenFooter(true);
    if (params?.get("id")) {
      axios
        .get(`/app/api/policy-det?policy_id=${params.get("id")}`)
        .then((res) => {
          setData(res.data.contents[0]);
          setLoading(false);
          setErrorFetching(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
          setErrorFetching(true);
        });
    }
  }, [params?.get("id")]);

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
      <div className="flex flex-col p-[18px] w-full absolute h-[100dvh] gap-[12px] pt-[27%] pb-[65%] overflow-auto hidden-scrollbar">
        <div
          className={`flex w-full flex-col ${
            loading ? "items-center" : "items-start"
          } p-[16px] gap-[12px] bg-white rounded-[12px]`}
        >
          {loading ? (
            <IconLoader size={30} className="animate-spin" />
          ) : (
            <>
              <div>
                <p className="text-[16px] font-[700] tsel-font">
                  {data?.product.commercialName}
                </p>
                <div className="flex flex-row gap-1 items-center">
                  <div className="border-[1px] border-[#DAE0E9] w-[82px] rounded-[4px] p-[6px] flex justify-center">
                    <Image
                      src={data?.product.metadata.insuranceIcon || ""}
                      alt="insurance-brand"
                      className="w-[66px]"
                      width={100}
                      height={100}
                      unoptimized
                    />
                  </div>
                  <p className="text-[12px] font-[12px] text-[#9CA9B9] capitalize">
                    PT {data?.product.insuranceName}
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
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data?.product.metadata.benefits,
                    }}
                  />
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data?.product.metadata.benefits,
                    }}
                  />
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data?.product.metadata.benefits,
                    }}
                  />
                  {/* <ManfaatContent />
              <ManfaatContent />
              <ManfaatContent /> */}
                </div>
              ) : category == "Cara Klaim" ? (
                <div className="flex flex-col gap-[16px]">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data?.product.metadata.claimSteps,
                    }}
                  />
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data?.product.metadata.claimSteps,
                    }}
                  />
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data?.product.metadata.claimSteps,
                    }}
                  />
                  {/* <CaraKlaimContent
                no={1}
                tilte="Pilih asuransi"
                subtitle="Pilih asuransi yang ingin Anda ajukan klaim di bagian 'Asuransi Saya'"
              />
              <CaraKlaimContent
                no={2}
                tilte="Klaim polis"
                subtitle="Klik tombol ‘Klaim Polis’ pada halaman asuransi yang telah Anda pilih"
              />
              <CaraKlaimContent
                no={3}
                tilte="Submit dokumen"
                subtitle="Siapkan dan submit dokumen untuk proses verifikasi klaim polis Anda."
              /> */}
                </div>
              ) : (
                <div className="flex flex-col bg-white gap-16px rounded-[12px] gap-[11px] w-full">
                  <div className="pb-[8px] gap-[12px] flex flex-col border-b-[2px] border-[#EFF1F4]">
                    <CardContents>
                      <>
                        <p>Status Polis</p>
                        <p
                          className={`px-[8px] py-[4px] ${
                            data?.product.active
                              ? "bg-[#008E53]"
                              : "bg-[#9CA9B9]"
                          } text-white text-[10px] font-[600] rounded-[4px]`}
                        >
                          Polis {data?.product.active ? "Aktif" : "Kedaluwarsa"}
                        </p>
                      </>
                    </CardContents>
                    {data?.claims[0]?.claimStatus && (
                      <CardContents>
                        <>
                          <p>Status Klaim</p>
                          <p
                            className={`px-[8px] py-[4px] ${KlaimStatusClustering(
                              data?.claims[0]?.claimStatus
                            )} text-[10px] font-[600] poppins-font rounded-[4px]`}
                          >
                            Klaim {data?.claims[0]?.claimStatus}
                          </p>
                        </>
                      </CardContents>
                    )}
                  </div>
                  <CardContents
                    title="Periode Proteksi"
                    value={`${moment(data?.activeSince).format(
                      "DD MMM YYYY"
                    )} - ${moment(data?.activeUntil).format("DD MMM YYYY")}`}
                  />
                  <CardContents title="ID Polis" value={data?.policyId} />

                  {moment(data?.claims[0]?.claimDate).format("DD MMM YYYY") && (
                    <>
                      <CardContents
                        title="Tanggal Klaim"
                        value={moment(data?.claims[0]?.claimDate).format(
                          "DD MMM YYYY"
                        )}
                      />
                      <CardContents
                        title="ID Klaim"
                        value={data?.claims[0]?.claimId}
                      />
                    </>
                  )}
                  <AdditionalContentLabels
                    status={data?.claims[0]?.claimStatus}
                  />
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
            </>
          )}
        </div>

        <div
          className={`flex w-full flex-col ${
            loading ? "items-center" : "items-start"
          } p-[16px] gap-[12px] bg-white rounded-[12px]`}
        >
          {loading ? (
            <IconLoader size={30} className="animate-spin" />
          ) : (
            <>
              <p className="text-[14px] font-[700] tsel-font">
                Pengecualian Pertanggungan
              </p>
              <div className="flex flex-col text-[12px] font-[400]">
                <div
                  dangerouslySetInnerHTML={{
                    __html: data?.product.metadata.termConditions,
                  }}
                />
                {/* <div className="flex flex-row gap-2">
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
            </div> */}
              </div>
              <a href="" className="text-[#ED0226] text-[12px] font-[400]">
                Lihat Syarat dan Ketentuan
              </a>
            </>
          )}
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
        {data?.claims[0]?.claimStatus ? (
          <>
            <AdditionalContentButtons
              status={data?.claims[0]?.claimStatus}
              status_polis={data?.product.active}
            />
            <button className="px-[16px] py-[12px] text-[16px] font-[600] rounded-full text-[#ED0226] border-[2px] border-[#ED0226] w-full">
              Lihat Detail
            </button>
          </>
        ) : (
          data?.product.active && (
            <div className="flex flex-col gap-[8px] w-full text-[16px] font-[600]">
              <button className="px-[16px] py-[12px] rounded-full text-white bg-[#ED0226] w-full">
                Lihat E-Polis
              </button>
              <button className="px-[16px] py-[12px] rounded-full text-[#ED0226] border-[2px] border-[#ED0226] w-full">
                Klaim Polis
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default DetailPolis;
