import Image from "next/image";
import React, { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="relative w-[327px] h-screen flex flex-col items-center justify-center gap-[24px] bg-[#eff1f4]">
          <Image
            src="/icons/page-error.png"
            alt="page-error"
            className="w-[128px]"
            width={100}
            height={100}
            unoptimized
          />
          <div className="flex flex-col gap-[8px] items-center text-center w-[327px]">
            <p className="text-[#000000] text-[16px] font-[600]">
              Gagal memuat halaman
            </p>
            <p className="text-[#757F90] text-[14px]">
              Periksa kembali koneksi internet dan silakan muat ulang halaman
              ini
            </p>
          </div>
          <button
            onClick={() => window.location.reload()}
            className={`absolute flex flex-row items-center justify-center bottom-[30px] px-[16px] font-[600] text-[16px] py-[12px] rounded-full text-white bg-[#ED0226] w-[90%] gap-[12px]`}
          >
            Muat Ulang
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.79059 0.402784C6.31522 0.186575 4.81414 0.476229 3.51489 1.22434C2.2163 1.97207 1.19265 3.13522 0.591764 4.53288C-0.00895834 5.93018 -0.156814 7.4907 0.168791 8.98104C0.494439 10.4716 1.27754 11.8174 2.40678 12.8126C3.5366 13.8084 4.95145 14.3987 6.43911 14.4879C7.92689 14.577 9.39912 14.1597 10.6334 13.304C11.8671 12.4487 12.7945 11.2033 13.2826 9.76021C13.4301 9.32423 13.1962 8.85126 12.7602 8.7038C12.3243 8.55633 11.8513 8.79021 11.7038 9.22618C11.3274 10.3391 10.6161 11.288 9.68381 11.9343C8.75219 12.5802 7.64863 12.8907 6.53885 12.8242C5.42895 12.7576 4.36518 12.3171 3.50879 11.5623C2.65183 10.807 2.04873 9.77728 1.79705 8.6253C1.54532 7.47312 1.66029 6.26727 2.12293 5.19115C2.58541 4.11541 3.36806 3.2321 4.34655 2.66868C5.32439 2.10564 6.4478 1.89047 7.54892 2.05184C8.65033 2.21324 9.67713 2.74383 10.4725 3.57084C10.4783 3.57691 10.4842 3.58289 10.4903 3.58878L12.1237 5.18734H10.1664C9.70615 5.18734 9.33305 5.56043 9.33305 6.02067C9.33305 6.48091 9.70615 6.854 10.1664 6.854H14.1667C14.6269 6.854 15 6.48091 15 6.02067V1.85401C15 1.39377 14.6269 1.02068 14.1667 1.02068C13.7064 1.02068 13.3333 1.39377 13.3333 1.85401V4.03915L11.6647 2.40618C10.6199 1.3238 9.26142 0.618329 7.79059 0.402784Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
