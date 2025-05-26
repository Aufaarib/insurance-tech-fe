import { IconCircleX, IconX } from "@tabler/icons-react";
import { ReactNode } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const mySwal = withReactContent(Swal);

const closeModal = () => {
  Swal.close();
};

const SwalContent = ({
  category,
  children,
}: {
  category: string;
  children: ReactNode;
}) => {
  return (
    <div className="h-[100dvh] flex flex-col items-end justify-end gap-[12px]">
      <button onClick={() => closeModal()} className="pr-[14px]">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="32"
            height="32"
            rx="16"
            fill="#2C2C2C"
            fill-opacity="0.7"
          />
          <path
            d="M20.7197 10.2197C21.0126 9.92678 21.4874 9.92678 21.7803 10.2197C22.0732 10.5126 22.0732 10.9874 21.7803 11.2803L17.0607 16L21.7803 20.7197C22.0732 21.0126 22.0732 21.4874 21.7803 21.7803C21.4874 22.0732 21.0126 22.0732 20.7197 21.7803L16 17.0607L11.2803 21.7803C10.9874 22.0732 10.5126 22.0732 10.2197 21.7803C9.92678 21.4874 9.92678 21.0126 10.2197 20.7197L14.9393 16L10.2197 11.2803C9.92678 10.9874 9.92678 10.5126 10.2197 10.2197C10.5126 9.92678 10.9874 9.92678 11.2803 10.2197L16 14.9393L20.7197 10.2197Z"
            fill="white"
          />
        </svg>
      </button>
      <div className="bg-white w-[412px] flex flex-col overflow-hidden rounded-t-[20px] py-[20px] px-[16px] gap-[12px]">
        <div className="text-[16px] font-[600] poppins-font text-[#181C21]">
          {category !== "Urutkan" && "Kategori"} {category}
        </div>

        <div className="flex">{children}</div>

        <button className="px-[16px] text-[16px] py-[12px] rounded-full text-white bg-[#ED0226] w-full">
          Terapkan
        </button>
      </div>
    </div>
  );
};

const PolisCategoryModal = () => {
  const openPolisCategoryModal = (category: string, children: ReactNode) => {
    mySwal.fire({
      animation: false,
      position: "bottom",
      allowOutsideClick: false,
      html: <SwalContent category={category} children={children} />,
      showConfirmButton: false,
      customClass: {
        popup: "p-0",
      },
    });
  };

  return { openPolisCategoryModal, closeModal };
};

export default PolisCategoryModal;
