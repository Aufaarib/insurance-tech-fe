import Image from "next/image";

const PartnersCardSkeleton = () => {
  return (
    <div className="bg-[#f7f8fa] flex flex-col w-full justify-center items-center gap-[8px] rounded-[12px] pb-2">
      <div className="bg-white p-[16px] gap-[8px] w-full rounded-[12px]">
        <div className="grid grid-cols-3 gap-2">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="w-[98px] rounded-[8px] h-[32px] skeleton"
            />
          ))}
        </div>
      </div>
      <div className="w-[120px] rounded-[8px] h-[16px] skeleton" />
    </div>
  );
};

export default PartnersCardSkeleton;
