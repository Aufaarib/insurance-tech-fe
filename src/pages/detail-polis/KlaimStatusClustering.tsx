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

export default KlaimStatusClustering;
