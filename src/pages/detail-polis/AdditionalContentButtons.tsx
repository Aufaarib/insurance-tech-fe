const AdditionalContentButtons = ({
  status,
  status_polis,
}: {
  status: string;
  status_polis: boolean;
}) => {
  if (status === "Butuh Tindakan") {
    return (
      <>
        {status_polis && (
          <button className="px-[16px] py-[12px] text-[16px] font-[600] rounded-full bg-[#ED0226] text-white w-full">
            Perbarui Klaim
          </button>
        )}
      </>
    );
  } else if (status === "Ditolak") {
    return (
      <>
        {status_polis && (
          <button className="px-[16px] py-[12px] text-[16px] font-[600] rounded-full bg-[#ED0226] text-white w-full">
            Ajukan Ulang Klaim
          </button>
        )}
      </>
    );
  } else if (status === "Kedaluwarsa") {
    return (
      <>
        {status_polis && (
          <button className="px-[16px] py-[12px] text-[16px] font-[600] rounded-full bg-[#ED0226] text-white w-full">
            Ajukan Ulang Klaim
          </button>
        )}
      </>
    );
  }
};

export default AdditionalContentButtons;
