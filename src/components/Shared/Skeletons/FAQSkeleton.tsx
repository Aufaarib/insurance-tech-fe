const FAQSkeleton = () => {
  return (
    <div className="bg-white flex flex-row w-full justify-between items-center gap-[8px] rounded-[12px] p-[16px]">
      <div className="w-[240px] h-[24px] rounded-[8px] skeleton animate-pulse" />
      <div className="w-[24px] h-[24px] rounded-[8px] skeleton animate-pulse" />
    </div>
  );
};

export default FAQSkeleton;
