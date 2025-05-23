import { usePageContext } from "@/components/Contexts/PagesContext";
import { IconChevronDown } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Card from "./Cards";

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

  const polises = [
    {
      title: "Proteksi dari Kerugian Serangan Hacker",
      brand: "/icons/Allianz.png",
      polis_category: "/icons/polis-category/serangan-hacker.png",
      status_polis: "Aktif",
      periode_proteksi: "25 Jan 2025 - 31 Jan 2025",
      id_polis: "IGL/T-001/01/2025",
    },
    {
      title: "Proteksi Layar Handphone",
      brand: "/icons/Allianz.png",
      polis_category: "/icons/polis-category/proteksi-layar.png",
      status_polis: "Kedaluwarsa",
      periode_proteksi: "25 Jan 2025 - 31 Jan 2025",
      id_polis: "IGL/T-001/01/2024",
    },
    {
      title: "Proteksi Pencurian & Kehilangan Handphone",
      brand: "/icons/Allianz.png",
      polis_category: "/icons/polis-category/pencurian-kehilangan.png",
      status_polis: "Kedaluwarsa",
      periode_proteksi: "25 Jan 2025 - 31 Jan 2025",
      id_polis: "IGL/T-001/01/2024",
    },
    {
      title: "Proteksi Kecelakaan Bepergian",
      brand: "/icons/Allianz.png",
      polis_category: "/icons/polis-category/kecelakaan-bepergian.png",
      status_polis: "Aktif",
      periode_proteksi: "25 Jan 2025 - 31 Jan 2025",
      id_polis: "IGL/T-001/01/2024",
    },
    {
      title: "Proteksi Kerusakan Properti & Kecelakaan Umum",
      brand: "/icons/Allianz.png",
      polis_category: "/icons/polis-category/property-umum.png",
      status_polis: "Aktif",
      periode_proteksi: "25 Jan 2025 - 31 Jan 2025",
      id_polis: "IGL/T-001/01/2024",
    },
    {
      title: "Proteksi Terhadap Cuaca Buruk",
      brand: "/icons/Allianz.png",
      polis_category: "/icons/polis-category/cuaca-buruk.png",
      status_polis: "Aktif",
      periode_proteksi: "25 Jan 2025 - 31 Jan 2025",
      id_polis: "IGL/T-001/01/2024",
    },
    {
      title: "Proteksi Pelunasan Tagihan SmartPay & Paket Darurat ",
      brand: "/icons/Allianz.png",
      polis_category: "/icons/polis-category/tagihan-paketdarurat.png",
      status_polis: "Aktif",
      periode_proteksi: "25 Jan 2025 - 31 Jan 2025",
      id_polis: "IGL/T-001/01/2024",
    },
  ];

  const claimpolises = [
    {
      title: "Proteksi dari Kerugian Serangan Hacker",
      brand: "/icons/Allianz.png",
      polis_category: "/icons/polis-category/serangan-hacker.png",
      status_polis: "Aktif",
      status_klaim: "Diproses",
      periode_proteksi: "25 Jan 2025 - 31 Jan 2025",
      date_klaim: "28 Jan 2025",
      id_klaim: "7697679898887",
      id_polis: "IGL/T-001/01/2025",
    },
    {
      title: "Proteksi Layar Handphone",
      brand: "/icons/Allianz.png",
      polis_category: "/icons/polis-category/proteksi-layar.png",
      status_polis: "Aktif",
      status_klaim: "Butuh Tindakan",
      periode_proteksi: "25 Jan 2025 - 31 Jan 2025",
      date_klaim: "28 Jan 2025",
      id_klaim: "7697679898887",
      id_polis: "IGL/T-001/01/2025",
    },
    {
      title: "Proteksi Pencurian & Kehilangan Handphone",
      brand: "/icons/Allianz.png",
      polis_category: "/icons/polis-category/pencurian-kehilangan.png",
      status_polis: "Aktif",
      status_klaim: "Disetujui",
      periode_proteksi: "25 Jan 2025 - 31 Jan 2025",
      date_klaim: "28 Jan 2025",
      id_klaim: "7697679898887",
      id_polis: "IGL/T-001/01/2025",
    },
    {
      title: "Proteksi Kecelakaan Bepergian",
      brand: "/icons/Allianz.png",
      polis_category: "/icons/polis-category/kecelakaan-bepergian.png",
      status_polis: "Aktif",
      status_klaim: "Dibayarkan",
      periode_proteksi: "25 Jan 2025 - 31 Jan 2025",
      date_klaim: "28 Jan 2025",
      id_klaim: "7697679898887",
      id_polis: "IGL/T-001/01/2025",
    },
    {
      title: "Proteksi Kerusakan Properti & Kecelakaan Umum",
      brand: "/icons/Allianz.png",
      polis_category: "/icons/polis-category/property-umum.png",
      status_polis: "Aktif",
      status_klaim: "Ditolak",
      periode_proteksi: "25 Jan 2025 - 31 Jan 2025",
      date_klaim: "28 Jan 2025",
      id_klaim: "7697679898887",
      id_polis: "IGL/T-001/01/2025",
    },
    {
      title: "Proteksi Terhadap Cuaca Buruk",
      brand: "/icons/Allianz.png",
      polis_category: "/icons/polis-category/cuaca-buruk.png",
      status_polis: "Kedaluwarsa",
      status_klaim: "Kedaluwarsa",
      periode_proteksi: "25 Jan 2025 - 31 Jan 2025",
      date_klaim: "28 Jan 2025",
      id_klaim: "7697679898887",
      id_polis: "IGL/T-001/01/2025",
    },
    {
      title: "Proteksi Pelunasan Tagihan SmartPay & Paket Darurat ",
      brand: "/icons/Allianz.png",
      polis_category: "/icons/polis-category/tagihan-paketdarurat.png",
      status_polis: "Aktif",
      status_klaim: "Kedaluwarsa",
      periode_proteksi: "25 Jan 2025 - 31 Jan 2025",
      date_klaim: "28 Jan 2025",
      id_klaim: "7697679898887",
      id_polis: "IGL/T-001/01/2025",
    },
  ];

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
      <div className="w-full p-[16px] flex flex-col gap-[12px] overflow-auto hidden-scrollbar h-screen pb-[350px]">
        {category === "Klaim"
          ? claimpolises.map((val: any, index: number) => (
              <Card
                key={index}
                title={val.title}
                brand={val.brand}
                id_polis={val.id_polis}
                polis_category={val.polis_category}
                periode_proteksi={val.periode_proteksi}
                status_klaim={val.status_klaim}
                id_klaim={val.id_klaim}
                date_klaim={val.date_klaim}
                status_polis={val.status_polis}
                onClick={() => router.push("/detail-polis")}
              />
            ))
          : polises.map((val: any, index: number) => (
              <Card
                key={index}
                title={val.title}
                brand={val.brand}
                polis_category={val.polis_category}
                id_polis={val.id_polis}
                periode_proteksi={val.periode_proteksi}
                status_polis={val.status_polis}
                onClick={() => router.push("/detail-polis")}
              />
            ))}
      </div>
    </div>
  );
};

export default MyPolisPage;
