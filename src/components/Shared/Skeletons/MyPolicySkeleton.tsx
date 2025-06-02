const MyPolicySkeleton = () => (
  <div className="flex flex-col gap-[12px] w-full">
    <div className="w-[160px] h-[24px] bg-[#CCD1D959] animate-pulse rounded-[8px]"></div>
    <div className="w-full bg-white border-[1.5px] border-[#DAE0E9] rounded-[12px] flex flex-row items-center justify-between p-[16px]">
      <div className="flex flex-row gap-[12px] items-center">
        <div className="w-[40px] h-[40px] bg-[#CCD1D959] animate-pulse rounded-[8px]"></div>
        <div className="flex flex-col gap-[8px]">
          <div className="w-[96px] h-[10px] bg-[#CCD1D959] animate-pulse rounded-[8px]"></div>
          <div className="w-[180px] h-[10px] bg-[#CCD1D959] animate-pulse rounded-[8px]"></div>
          <div className="w-[72px] h-[10px] bg-[#CCD1D959] animate-pulse rounded-[8px]"></div>
        </div>
      </div>
      <div className="w-[24px] h-[24px] bg-[#CCD1D959] animate-pulse rounded-[8px]"></div>
    </div>
  </div>
);

export default MyPolicySkeleton;
