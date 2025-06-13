import { usePageContext } from "@/components/Contexts/PagesContext";
import PolisCategoryModal from "@/components/Modal/PolisCategoryModal";
import { IconArrowUp, IconChevronDown, IconLoader } from "@tabler/icons-react";
import axios from "axios";
import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Card from "./Cards";
import config from "../../../config";
import ErrorPage from "@/components/Shared/ErrorPage";

const FilterContent = ({
  category,
  checked,
  sortBy,
  setChecked,
}: {
  category?: string;
  checked?: any;
  sortBy?: string;
  setChecked: any;
}) => {
  const [selected, setSelected] = useState(
    category !== "Urutkan" ? checked : sortBy
  );

  // console.log("category", category);
  // console.log("selected", selected);

  const handleClickApply = () => {
    setChecked(selected); // Sends the latest value
  };

  const polises =
    category == "Polis"
      ? [
          {
            title: "Semua Polis",
            value: "all",
          },
          {
            title: "Aktif",
            value: true,
          },
          {
            title: "Kedaluwarsa",
            value: false,
          },
        ]
      : category == "Klaim"
      ? [
          {
            title: "Semua Klaim",
            value: "all",
          },
          {
            title: "Diproses",
            value: "diproses",
          },
          {
            title: "Butuh Tindakan",
            value: "butuh tindakan",
          },
          {
            title: "Disetujui",
            value: "disetujui",
          },
          {
            title: "Dibayarkan",
            value: "dibayarkan",
          },
          {
            title: "Ditolak",
            value: "ditolak",
          },
          {
            title: "Kedaluwarsa",
            value: "kedaluwarsa",
          },
        ]
      : [
          {
            title: "Terbaru",
            value: "newest",
          },
          {
            title: "Terlama",
            value: "oldest",
          },
        ];

  return (
    <div className="w-full text-[14px] font-[400] justify-center flex flex-col gap-[12px]">
      <div>
        {polises.map((val: any, index: number) => (
          <div
            key={index}
            className={`flex flex-row w-full justify-between py-[18px] ${
              index + 1 !== polises.length &&
              "border-b-[1.5px] border-[#DAE0E9]"
            }`}
          >
            <p className="text-[#181C21]">{val.title}</p>
            <input
              className="cursor-pointer"
              type="radio"
              value={val.value}
              checked={val.value == selected}
              onChange={() => setSelected(val.value)}
            />
          </div>
        ))}
      </div>
      <button
        onClick={() => handleClickApply()}
        className="px-[16px] text-[16px] py-[12px] rounded-full text-white bg-[#ED0226] w-full"
      >
        Terapkan
      </button>
    </div>
  );
};

const MyPolisPage = () => {
  const router = useRouter();
  const {
    loading,
    setLoading,
    pageTitle,
    setPageTitle,
    errorFetching,
    setErrorFetching,
  } = usePageContext();
  const [category, setCategory] = useState("Polis");
  const [sortBy, setSortBy] = useState("newest");

  const [data, setData] = useState<any[]>([]);

  const [polises, setPolises] = useState<any[]>([]);
  const [claimed, setClaimed] = useState<any[]>([]);

  const [checked, setChecked] = useState("all");

  const { openPolisCategoryModal, closeModal } = PolisCategoryModal();

  const [page, setPage] = useState(0);
  const [hasNext, setHasNext] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const loaderRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const fetchData = async (
    pageToFetch = 0,
    checked: string,
    category: string,
    sortBy: string
  ) => {
    if (isFetching || !hasNext) return;
    setIsFetching(true);

    try {
      if (category == "Polis") {
        const res = await axios.get(
          `/app/api/mypolicies?size=10&page=${pageToFetch}&filterPolicy=${
            checked !== "all" ? (checked ? "ACTIVE" : "EXPIRED") : "ALL"
          }&sort=activeSince,${sortBy == "newest" ? "asc" : "desc"}`
        );
        const result = res.data;
        setPolises((prev: any) => [
          ...prev,
          ...(Array.isArray(result?.contents) ? result.contents : []),
        ]);
        setHasNext(result.hashNext);
        setPage(pageToFetch + 1);
      } else if (category == "Klaim") {
        const res = await axios.get(
          `/app/api/myclaims?size=10&page=${pageToFetch}&filterClaim=${checked.toUpperCase()}&sort=updatedAt,${
            sortBy === "newest" ? "asc" : "desc"
          }`
        );
        const result = res.data;
        setClaimed((prev: any) => [
          ...prev,
          ...(Array.isArray(result?.contents) ? result.contents : []),
        ]);
        setHasNext(result.hashNext);
        setPage(pageToFetch + 1);
      }
      setErrorFetching(false);
    } catch (err) {
      setErrorFetching(true);
      console.error(err);
    } finally {
      setIsFetching(false);
      setLoading(false);
    }
  };

  const scrollToTop = () => {
    scrollContainerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onChangeCategory = (name: string) => {
    setLoading(true);
    setChecked("all");
    setSortBy("newest");
    fetchData(0, checked, name, sortBy);
    setCategory(name);
  };

  const handleApplyFilter = (selected: string) => {
    if (selected == "newest" || selected == "oldest") {
      fetchData(0, checked, category, selected);
      setSortBy(selected);
    } else {
      fetchData(0, selected, category, sortBy);
      setChecked(selected);
    }

    closeModal();
  };

  const handleOpenFilterModal = (category: any, sortBy?: string) => {
    openPolisCategoryModal(
      category,
      <FilterContent
        category={category}
        sortBy={sortBy}
        setChecked={handleApplyFilter}
        checked={checked}
      />
    );
  };

  const notfounddata = () => {
    return category == "Klaim"
      ? claimed.length < 1 && true
      : category == "Polis"
      ? polises.length < 1 && true
      : "";
  };

  useEffect(() => {
    console.log(" === ");
    console.log("category === ", category);
    console.log("filterBy === ", checked);
    console.log("sortBy === ", sortBy);
    console.log(" === ");

    fetchData(0, checked, category, sortBy);
  }, [sortBy, checked]);

  useEffect(() => {
    const scrollEl = scrollContainerRef.current;
    if (!scrollEl) return;

    const handleScroll = () => {
      setIsVisible(scrollEl.scrollTop > 20);
    };

    scrollEl.addEventListener("scroll", handleScroll);

    return () => {
      scrollEl.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          hasNext &&
          !isFetching &&
          !errorFetching
        ) {
          fetchData(page, checked, category, sortBy);
        }
      },
      { threshold: 1.0 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [loaderRef, hasNext, isFetching, page]);

  useEffect(() => {
    setPageTitle("Polis Saya");
    setLoading(true);
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

        <div className={`flex flex-row w-full gap-[8px]`}>
          <button
            onClick={() => handleOpenFilterModal(category)}
            className="flex flex-row justify-between bg-white px-[16px] py-[8px] w-full rounded-full text-[12px] border-[1.5px] border-[#DAE0E9] items-center"
          >
            <p className="capitalize">
              {checked == "all"
                ? `Semua ${category}`
                : category == "Polis" && checked
                ? "Aktif"
                : category == "Polis" && !checked
                ? "Kedaluwarsa"
                : category == "Klaim" && checked}
            </p>
            <IconChevronDown size={15} />
          </button>

          <button
            onClick={() => handleOpenFilterModal("Urutkan", sortBy)}
            className="border-[1.5px] border-[#DAE0E9] p-[8px] rounded-full min-w-[38px] flex justify-center items-center"
          >
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
      <div
        ref={scrollContainerRef}
        className="w-full p-[16px] flex flex-col gap-[12px] overflow-auto h-screen pb-[300px]"
      >
        {loading &&
          [...Array(4)].map((_, index) => (
            <div key={index}>
              <Card />
            </div>
          ))}

        {!loading && category === "Klaim"
          ? claimed.map((val: any, index: number) => (
              <div key={index}>
                <Card
                  title={val.product.commercialName}
                  insurance={val.product.metadata.insuranceIcon}
                  polis_category={val.product.metadata.iconUrl}
                  id_polis={val.policyId}
                  periode_proteksi={
                    moment(val.activeSince).format("DD MMM YYYY") +
                    " - " +
                    moment(val.activeUntil).format("DD MMM YYYY")
                  }
                  status_polis={val.product.active}
                  onClick={() => router.push(`/detail-polis?id=${"5000001"}`)}
                  status_klaim={val.claims[0].claimStatus}
                  id_klaim={val.claims[0].claimId}
                  date_klaim={moment(val.claims[0].claimDate).format(
                    "DD MMM YYYY"
                  )}
                />
              </div>
            ))
          : !loading &&
            category === "Polis" &&
            polises.map((val: any, index: number) => (
              <div key={index}>
                <Card
                  title={val.product.commercialName}
                  insurance={val.product.metadata.insuranceIcon}
                  polis_category={val.product.metadata.iconUrl}
                  id_polis={val.policyId}
                  periode_proteksi={
                    moment(val.activeSince).format("DD MMM YYYY") +
                    " - " +
                    moment(val.activeUntil).format("DD MMM YYYY")
                  }
                  status_polis={val.product.active}
                  onClick={() => router.push(`/detail-polis?id=${"1000001"}`)}
                />
              </div>
            ))}

        {!loading && <div ref={loaderRef} className="h-[1px]" />}
        {!loading && notfounddata() && (
          <div className="w-full h-full flex flex-col items-center justify-center gap-[24px]">
            <Image
              src="/icons/empty-data.png"
              alt="Empty"
              className="w-[128px]"
              width={100}
              height={100}
              unoptimized
            />
            <div className="flex flex-col gap-[8px] items-center text-center w-[327px]">
              <p className="text-[#000000] text-[16px] font-[600]">
                {category == "Polis"
                  ? "Belum ada polis aktif"
                  : "Belum pernah membuat klaim"}
              </p>
              <p className="text-[#757F90] text-[14px]">
                {category == "Polis"
                  ? "Beli paket data untuk mengaktifkan polis asuransi kebutuhanmu!"
                  : "Klaim yang Anda buat untuk setiap polis akan muncul di sini"}
              </p>
              <button
                className={`${
                  category == "Klaim" && "hidden"
                } px-[16px] font-[600] text-[16px] py-[12px] rounded-full text-white bg-[#ED0226] w-[171px]`}
              >
                Beli Paket Data
              </button>
            </div>
          </div>
        )}

        {isFetching && (
          <p className="w-full flex items-center justify-center">
            <IconLoader className="animate-spin" />
          </p>
        )}

        {isVisible && (
          <button
            onClick={scrollToTop}
            title="Scroll to top"
            aria-label="Scroll to top"
            className="fixed bottom-[90px] right-6 w-[48px] h-[48px] rounded-full bg-[#001A41] text-white text-lg shadow-md z-50 flex items-center justify-center transition-opacity duration-300"
          >
            <IconArrowUp />
          </button>
        )}
      </div>
    </div>
  );
};

export default MyPolisPage;
