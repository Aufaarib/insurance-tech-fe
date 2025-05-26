import Image from "next/image";
import { ReactNode } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const mySwal = withReactContent(Swal);

const closeModal = () => {
  Swal.close();
};

const SwalContent = () => {
  return (
    <div className="h-[100dvh] flex flex-col items-end justify-end gap-[12px]">
      <div className="bg-white w-[412px] h-[358px] flex flex-col items-center justify-between rounded-t-[20px] py-[10px] pb-[20px] px-[16px]">
        <svg
          width="45"
          height="6"
          viewBox="0 0 45 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0.5" width="44" height="6" rx="3" fill="#E9E8ED" />
        </svg>

        <Image
          src="/icons/warning-logo.png"
          alt="warning"
          className="w-[87px]"
          width={100}
          height={100}
          unoptimized
        />
        <div className="flex flex-col gap-[8px] items-center text-center w-[327px]">
          <p className="text-[#000000] text-[16px] font-[600]">
            Gangguan koneksi internet
          </p>
          <p className="text-[#757F90] text-[14px]">
            Periksa kembali koneksi internet dan silakan muat ulang halaman ini
          </p>
        </div>

        <button
          onClick={() => window.location.reload()}
          className="px-[16px] text-[16px] py-[12px] rounded-full text-white bg-[#ED0226] w-full"
        >
          Muat Ulang Halaman
        </button>
      </div>
    </div>
  );
};

const ErrorConnectionModal = () => {
  const openErrorConnectionModal = () => {
    mySwal.fire({
      animation: false,
      position: "bottom",
      allowOutsideClick: false,
      html: <SwalContent />,
      showConfirmButton: false,
      customClass: {
        popup: "p-0",
      },
    });
  };

  return { openErrorConnectionModal, closeModal };
};

export default ErrorConnectionModal;
