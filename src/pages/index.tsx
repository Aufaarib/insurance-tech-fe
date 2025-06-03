"use client";

import { usePageContext } from "@/components/Contexts/PagesContext";
import BasicCard from "@/components/Shared/BasicCard";
import FAQSkeleton from "@/components/Shared/Skeletons/FAQSkeleton";
import MyPolicySkeleton from "@/components/Shared/Skeletons/MyPolicySkeleton";
import PartnersCardSkeleton from "@/components/Shared/Skeletons/PartnersCardSkeleton";
import {
  IconChevronDown,
  IconChevronRight,
  IconChevronUp,
} from "@tabler/icons-react";
import axios from "axios";
import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const { pageTitle, setPageTitle } = usePageContext();
  const { loading, setLoading } = usePageContext();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [data, setData] = useState<any>(null);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  useEffect(() => {
    setLoading(true);
    setPageTitle("");
    axios
      .get(`/api/mypolicy-sum`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
    // axios
    //   .get(`/api/mypolicies`)
    //   .then((res) => {
    //     console.log(res.data.data);
    //   })
    //   .catch(() => {
    //     console.log("aafsf");
    //   });
    // axios
    //   .get(`/api/ucpl-claim`)
    //   .then((res) => {
    //     console.log(res.data.data);
    //   })
    //   .catch(() => {
    //     console.log("aafsf");
    //   });
    // axios
    //   .get(`/api/ucpl-policy`)
    //   .then((res) => {
    //     console.log(res.data.data);
    //   })
    //   .catch(() => {
    //     console.log("aafsf");
    //   });
  }, []);

  // const subscribedpolises = [
  //   {
  //     title: "Proteksi dari Kerugian Serangan Hacker",
  //     brand: "/icons/Allianz.png",
  //     polis_category: "/icons/polis-category/serangan-hacker.png",
  //     date: "31 Jan 2025",
  //   },
  //   // {
  //   //   title: "Proteksi Layar Handphone",
  //   //   brand: "/icons/Allianz.png",
  //   //   polis_category: "/icons/polis-category/proteksi-layar.png",
  //   //   date: "31 Jan 2025",
  //   // },
  // ];

  const partners = [
    {
      icon: "/icons/sinarmas-logo.png",
    },
    {
      icon: "/icons/Zurich.png",
    },
    {
      icon: "/icons/Manulife.png",
    },
    {
      icon: "/icons/Allianz.png",
    },
    {
      icon: "/icons/Prudential.png",
    },
    {
      icon: "/icons/Lippo.png",
    },
  ];

  const faqs = [
    {
      title: "Apa yang dimaksud dengan Igloo?",
      text: "Igloo adalah perusahaan pialang (broker) asuransi digital di Indonesia yang bekerja sama dengan berbagai perusahaan asuransi untuk menyediakan layanan pembelian polis yang lebih cepat.",
    },
    {
      title: "Bagaimana cara membeli asuransi di MyTelkomsel?",
      text: "Igloo adalah perusahaan pialang (broker) asuransi digital di Indonesia yang bekerja sama dengan berbagai perusahaan asuransi untuk menyediakan layanan pembelian polis yang lebih cepat.",
    },
    {
      title:
        "Apa syarat yang diperlukan untuk membeli asuransi di MyTelkomsel?",
      text: "Igloo adalah perusahaan pialang (broker) asuransi digital di Indonesia yang bekerja sama dengan berbagai perusahaan asuransi untuk menyediakan layanan pembelian polis yang lebih cepat.",
    },
    {
      title: "Bagaimana cara klaim asuransi di MyTelkomsel?",
      text: "Igloo adalah perusahaan pialang (broker) asuransi digital di Indonesia yang bekerja sama dengan berbagai perusahaan asuransi untuk menyediakan layanan pembelian polis yang lebih cepat.",
    },
  ];

  const others = [
    {
      title: "Punya pertanyaan lain tentang produk asuransi di MyTelkomsel?",
    },
  ];

  return (
    <div className="relative flex flex-col items-center overflow-auto h-[100dvh] hidden-scrollbar">
      {!loading && (
        <>
          <p className="absolute left-[16px] top-[16px] text-white text-[16px] font-[400]">
            Asuransi
          </p>
          <Image
            src="/imgs/home-banner.png"
            alt="Menu"
            className="w-full"
            width={100}
            height={100}
            unoptimized
            priority
          />
        </>
      )}
      {/* content parent */}
      <div className="flex flex-col p-[18px] w-full absolute top-[220px] gap-[24px] pb-[90px]">
        {/* content */}
        <div className="relative flex w-full flex-col items-start justify-center p-[16px] gap-[12px] bg-white rounded-[12px]">
          {loading ? (
            <MyPolicySkeleton />
          ) : data ? (
            <>
              <div className="flex flex-row w-full justify-between">
                <div className="flex flex-row items-center text-center gap-[4px] font-[600] text-[14px] w-full poppins-font">
                  <p>{data.active} Polis</p>
                  <p className="text-[#008E53]">Aktif</p>

                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.99992 13.6666C10.3131 13.6666 13.6666 10.9999 13.6666 6.99992C13.6666 2.99992 10.3131 0.333252 6.99992 0.333252C3.68672 0.333252 0.333252 2.99992 0.333252 6.99992C0.333252 10.9999 3.68672 13.6666 6.99992 13.6666ZM10.4515 5.62418C10.6858 5.38987 10.6858 5.00997 10.4515 4.77565C10.2171 4.54134 9.83724 4.54134 9.60293 4.77565L6.12719 8.25139L4.42418 6.54838C4.18987 6.31407 3.80997 6.31407 3.57565 6.54838C3.34134 6.7827 3.34134 7.1626 3.57565 7.39691L5.70293 9.52418C5.93724 9.7585 6.31714 9.7585 6.55146 9.52418L10.4515 5.62418Z"
                      fill="#008E53"
                    />
                  </svg>
                </div>
                <button
                  onClick={() => router.push("/my-polis")}
                  className="text-[#757F90] text-[12px] font-[400] min-w-fit"
                >
                  Lihat Semua
                </button>
              </div>
              <div className="max-h-[225px] w-full flex flex-col gap-[12px] overflow-auto hidden-scrollbar">
                <button
                  onClick={() => router.push("/my-polis")}
                  className="flex flex-row w-full items-center justify-between p-[16px] border-[1px] border-[#DAE0E9] rounded-[12px]"
                >
                  <div className="flex flex-row w-full items-center gap-[12px]">
                    <Image
                      src={data.latestPolicy?.product.metadata.iconUrl || ""}
                      alt="polis-category"
                      className="w-[40px] h-[40px]"
                      width={100}
                      height={100}
                      unoptimized
                    />
                    <div className="flex flex-col gap-[4px] items-start justify-start">
                      <Image
                        src={
                          data.latestPolicy?.product.metadata.insuranceIcon ||
                          ""
                        }
                        alt="brand"
                        className="w-[40px]"
                        width={100}
                        height={100}
                        unoptimized
                      />
                      <p className="text-[#181C21] text-[12px] font-[600] text-start">
                        {data.latestPolicy?.product.commercialName}
                      </p>
                      <div className="flex flex-row gap-[6px] items-center text-[12px] font-[400] text-[#757F90]">
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

                        <p>
                          {moment(data.latestPolicy?.activeUntil).format(
                            "DD MMM YYYY"
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                  <IconChevronRight color="red" />
                </button>
              </div>
            </>
          ) : (
            <div className="flex flex-col justify-between gap-[8px] w-full">
              <Image
                src="/imgs/no-polis-found.png"
                alt="no-polis-found"
                className="w-[98px] absolute right-0 top-0"
                width={100}
                height={100}
                unoptimized
              />
              <p className="text-[14px] font-[700] font-tsel w-[200px]">
                Tambahkan <label className="text-[#008E53]">proteksi</label> ke
                pembelianmu
              </p>
              <p className="text-[12px] text-[#757F90] font-[400] font-tsel w-[200px] font-poppins">
                Pilih asuransi kebutuhanmu saat membeli paket data
              </p>
              <button className="text-[12px] font-poppins font-[600] bg-[#ED0226] rounded-[40px] text-white h-[32px] w-full z-[99999]">
                Beli Paket
              </button>
            </div>
          )}
        </div>

        <BasicCard isLoading={loading} title="Bekerja Sama Dengan">
          {loading ? (
            <PartnersCardSkeleton />
          ) : (
            <div className="bg-[#f7f8fa] flex flex-col w-full justify-center items-center gap-[8px] rounded-[12px] pb-2">
              <div className="bg-white p-[16px] gap-[8px] w-full rounded-[12px]">
                <div className="grid grid-cols-3 gap-2">
                  {partners.map((val: any, index: number) => (
                    <div
                      key={index}
                      className="border-[1px] border-[#DAE0E9] w-[98px] rounded-[8px] px-[6px] py-[8px] flex justify-center h-[32px]"
                    >
                      <Image
                        src={val.icon}
                        alt="insurance-brand"
                        className="w-auto"
                        width={100}
                        height={100}
                        unoptimized
                      />
                    </div>
                  ))}
                </div>
              </div>
              <Image
                src="/icons/solusiutama-logo.png"
                alt="solusiutama-logo"
                className="w-[141px]"
                width={100}
                height={100}
                unoptimized
              />
            </div>
          )}
        </BasicCard>

        <BasicCard isLoading={loading} title="Pertanyaan Umum">
          {loading
            ? [...Array(6)].map((_, index) => (
                <div key={index}>
                  <FAQSkeleton />
                </div>
              ))
            : faqs.map((val: any, index: number) => (
                <div
                  key={index}
                  className="bg-white flex flex-col w-full justify-center items-center gap-[8px] rounded-[12px] p-[16px]"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="flex flex-row w-full justify-between items-center text-start gap-[16px]"
                  >
                    <p className="font-[400] text-[12px] w-[80%]">
                      {val.title}
                    </p>
                    {openIndex === index ? (
                      <IconChevronUp size={20} />
                    ) : (
                      <IconChevronDown size={20} />
                    )}
                  </button>

                  {openIndex === index && (
                    <p className="text-[#757F90] text-[12px] font-[400]">
                      {val.text}
                    </p>
                  )}
                </div>
              ))}
        </BasicCard>

        <BasicCard isLoading={loading} title="Informasi Lainnya">
          {loading ? (
            <FAQSkeleton />
          ) : (
            others.map((val: any, index: number) => (
              <button
                key={index}
                className="bg-white flex flex-col w-full justify-center items-center gap-[8px] rounded-[12px] p-[16px]"
              >
                <div className="flex flex-row w-full justify-center items-center text-left">
                  <p className="font-[400] text-[12px]">{val.title}</p>
                  <IconChevronRight size={20} />
                </div>
              </button>
            ))
          )}
        </BasicCard>

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
    </div>
  );
}
