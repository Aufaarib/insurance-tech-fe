import { usePageContext } from "@/components/Contexts/PagesContext";
import CardContents from "@/components/Shared/CardContent";
import { IconChevronRight } from "@tabler/icons-react";
import Image from "next/image";

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

const Card = ({
  onClick,
  title,
  insurance,
  polis_category,
  periode_proteksi,
  status_polis,
  status_klaim,
  id_klaim,
  date_klaim,
  id_polis,
}: {
  onClick?: any;
  title?: string;
  insurance?: string;
  polis_category?: string;
  periode_proteksi?: string;
  status_polis?: string;
  id_klaim?: string;
  date_klaim?: string;
  id_polis?: string;
  status_klaim?: string;
}) => {
  const { loading, setLoading } = usePageContext();
  const AdditionalContent = () => {
    if (status_klaim === "Butuh Tindakan") {
      return (
        <>
          <div className="flex flex-row text-[12px] font-[400] bg-[#FDA22B26] p-[12px] gap-[8px] rounded-[16px]">
            <div className="w-[20px]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 4.67097L4.39667 15.8249H15.6033L10 4.67097ZM8.9108 3.18109C9.36697 2.27305 10.633 2.27305 11.0892 3.18109L17.3623 15.6683C17.7824 16.5045 17.1904 17.5001 16.2731 17.5001H3.72686C2.80958 17.5001 2.21759 16.5045 2.63766 15.6683L8.9108 3.18109Z"
                  fill="#FDA22B"
                />
                <path
                  d="M10.8333 14.1667C10.8333 14.6269 10.4602 15 10 15C9.53976 15 9.16666 14.6269 9.16666 14.1667C9.16666 13.7065 9.53976 13.3334 10 13.3334C10.4602 13.3334 10.8333 13.7065 10.8333 14.1667Z"
                  fill="#FDA22B"
                />
                <path
                  d="M9.16666 9.16671C9.16666 8.70647 9.53976 8.33337 10 8.33337C10.4602 8.33337 10.8333 8.70647 10.8333 9.16671V11.6667C10.8333 12.1269 10.4602 12.5 10 12.5C9.53976 12.5 9.16666 12.1269 9.16666 11.6667V9.16671Z"
                  fill="#FDA22B"
                />
              </svg>
            </div>

            <p>
              Anda perlu memperbarui dokumen klaim sebelum tanggal
              <strong> 7 Feb 2025</strong>
            </p>
          </div>
          {status_polis !== "Kedaluwarsa" && (
            <button className="px-[16px] py-[12px] text-[12px] font-[600] rounded-full bg-[#ED0226] text-white w-full">
              Perbarui Klaim
            </button>
          )}
        </>
      );
    } else if (status_klaim === "Disetujui") {
      return (
        <div className="flex flex-row text-[12px] font-[400] bg-[#479CFF26] p-[12px] gap-[8px] rounded-[16px]">
          <div className="w-[20px]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 3.51857C6.42037 3.51857 3.51852 6.42043 3.51852 10.0001C3.51852 13.5797 6.42037 16.4815 10 16.4815C13.5796 16.4815 16.4815 13.5797 16.4815 10.0001C16.4815 6.42043 13.5796 3.51857 10 3.51857ZM1.66666 10.0001C1.66666 5.39768 5.39762 1.66672 10 1.66672C14.6024 1.66672 18.3333 5.39768 18.3333 10.0001C18.3333 14.6024 14.6024 18.3334 10 18.3334C5.39762 18.3334 1.66666 14.6024 1.66666 10.0001Z"
                fill="#0050AE"
              />
              <path
                d="M10.8333 6.66674C10.8333 7.12698 10.4602 7.50007 10 7.50007C9.53976 7.50007 9.16666 7.12698 9.16666 6.66674C9.16666 6.2065 9.53976 5.8334 10 5.8334C10.4602 5.8334 10.8333 6.2065 10.8333 6.66674Z"
                fill="#0050AE"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.33334 9.16674C8.33334 8.7065 8.70643 8.3334 9.16667 8.3334H10C10.4602 8.3334 10.8333 8.7065 10.8333 9.16674L10.8333 12.5001C11.2936 12.5001 11.6667 12.8732 11.6667 13.3334C11.6667 13.7936 11.2936 14.1667 10.8333 14.1667H10C9.53977 14.1667 9.16667 13.7936 9.16667 13.3334V10.0001C8.70643 10.0001 8.33334 9.62698 8.33334 9.16674Z"
                fill="#0050AE"
              />
            </svg>
          </div>

          <p>Klik ‘Lihat Detail’ untuk melihat nominal klaim yang disetujui</p>
        </div>
      );
    } else if (status_klaim === "Ditolak") {
      return (
        <>
          <div className="flex flex-row text-[12px] font-[400] bg-[#479CFF26] p-[12px] gap-[8px] rounded-[16px]">
            <div className="w-[20px]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 3.51857C6.42037 3.51857 3.51852 6.42043 3.51852 10.0001C3.51852 13.5797 6.42037 16.4815 10 16.4815C13.5796 16.4815 16.4815 13.5797 16.4815 10.0001C16.4815 6.42043 13.5796 3.51857 10 3.51857ZM1.66666 10.0001C1.66666 5.39768 5.39762 1.66672 10 1.66672C14.6024 1.66672 18.3333 5.39768 18.3333 10.0001C18.3333 14.6024 14.6024 18.3334 10 18.3334C5.39762 18.3334 1.66666 14.6024 1.66666 10.0001Z"
                  fill="#0050AE"
                />
                <path
                  d="M10.8333 6.66674C10.8333 7.12698 10.4602 7.50007 10 7.50007C9.53976 7.50007 9.16666 7.12698 9.16666 6.66674C9.16666 6.2065 9.53976 5.8334 10 5.8334C10.4602 5.8334 10.8333 6.2065 10.8333 6.66674Z"
                  fill="#0050AE"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.33334 9.16674C8.33334 8.7065 8.70643 8.3334 9.16667 8.3334H10C10.4602 8.3334 10.8333 8.7065 10.8333 9.16674L10.8333 12.5001C11.2936 12.5001 11.6667 12.8732 11.6667 13.3334C11.6667 13.7936 11.2936 14.1667 10.8333 14.1667H10C9.53977 14.1667 9.16667 13.7936 9.16667 13.3334V10.0001C8.70643 10.0001 8.33334 9.62698 8.33334 9.16674Z"
                  fill="#0050AE"
                />
              </svg>
            </div>

            <p>
              Klaim ditolak karena tidak memenuhi Syarat & Ketentuan proteksi
            </p>
          </div>
          {status_polis !== "Kedaluwarsa" && (
            <button className="px-[16px] py-[12px] text-[12px] font-[600] rounded-full bg-[#ED0226] text-white w-full">
              Ajukan Ulang Klaim
            </button>
          )}
        </>
      );
    } else if (status_klaim === "Kedaluwarsa") {
      return (
        <>
          {status_polis !== "Kedaluwarsa" && (
            <button className="px-[16px] py-[12px] text-[12px] font-[600] rounded-full bg-[#ED0226] text-white w-full">
              Ajukan Ulang Klaim
            </button>
          )}
        </>
      );
    }
  };

  const PolisStatusClustering = (status: string) => {
    if (status) {
      return "bg-[#008E53]";
    } else {
      return "bg-[#9CA9B9]";
    }
  };

  const KlaimStatusClustering = (status: string) => {
    if (status == "Diproses") {
      return "text-[#0050AE] bg-[#E9F6FF]";
    } else if (status === "Butuh Tindakan") {
      return "text-[#FE6E00] bg-[#FEF3D4]";
    } else if (status === "Disetujui" || status == "Dibayarkan") {
      return "text-[#008E53] bg-[#EDFCF0]";
    } else if (status === "Ditolak") {
      return "text-[#B90024] bg-[#FDDDD4]";
    } else if (status === "Kedaluwarsa") {
      return "text-[#9CA9B9] bg-[#DAE0E9]";
    } else {
      return "text-white bg-gray";
    }
  };

  return (
    <div className="flex flex-col p-[16px] bg-white gap-16px rounded-[12px] gap-[11px] w-full">
      {loading ? (
        <Skeleton />
      ) : (
        <>
          {/* card polis status */}
          <button
            onClick={() => onClick()}
            className="flex flex-row gap-[12px] w-full items-center justify-between rounded-[12px]"
          >
            <div className="flex flex-row items-center justify-center gap-[8px]">
              <Image
                src={polis_category || ""}
                alt="polis-category"
                className="w-[40px]"
                width={100}
                height={100}
                unoptimized
              />
              <div className="flex flex-col gap-[4px]">
                <Image
                  src={insurance || ""}
                  alt="insurance"
                  className="w-[40px]"
                  width={100}
                  height={100}
                  unoptimized
                />
                <p className="text-[#181C21] text-[12px] font-[600] text-start">
                  {title}
                </p>
              </div>
            </div>
            <IconChevronRight color="red" />
          </button>
          {/*  */}

          <div className="flex flex-col gap-[12px] py-[6px] border-y-[2px] border-[#EFF1F4]">
            <CardContents>
              <>
                <p>Status Polis</p>
                <p
                  className={`px-[8px] py-[4px] text-white ${PolisStatusClustering(
                    status_polis || ""
                  )} text-[10px] font-[600] poppins-font rounded-[4px]`}
                >
                  Polis {status_polis ? "Aktif" : "Kedaluwarsa"}
                </p>
              </>
            </CardContents>
            {status_klaim && (
              <CardContents>
                <>
                  <p>Status Klaim</p>
                  <p
                    className={`px-[8px] py-[4px] ${KlaimStatusClustering(
                      status_klaim
                    )} text-[10px] font-[600] poppins-font rounded-[4px]`}
                  >
                    Klaim {status_klaim}
                  </p>
                </>
              </CardContents>
            )}
          </div>

          <CardContents title="Periode Proteksi" value={periode_proteksi} />
          <CardContents title="ID Polis" value={id_polis} />

          {date_klaim && (
            <>
              <CardContents title="Tanggal Klaim" value={date_klaim} />
              <CardContents title="ID Klaim" value={id_klaim} />
            </>
          )}

          {date_klaim ? (
            <>
              <AdditionalContent />
              <button className="px-[16px] py-[12px] text-[12px] font-[600] rounded-full text-[#ED0226] border-[2px] border-[#ED0226] w-full">
                Lihat Detail
              </button>
            </>
          ) : (
            status_polis !== "Kedaluwarsa" && (
              <div className="flex flex-row gap-[8px] w-full text-[12px] font-[600]">
                <button className="px-[16px] py-[12px] rounded-full text-white bg-[#ED0226] w-full">
                  Lihat E-Polis
                </button>
                <button className="px-[16px] py-[12px] rounded-full text-[#ED0226] border-[2px] border-[#ED0226] w-full">
                  Klaim Polis
                </button>
              </div>
            )
          )}
        </>
      )}
    </div>
  );
};

export default Card;
