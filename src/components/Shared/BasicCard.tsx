import { usePageContext } from "../Contexts/PagesContext";

const BasicCard = ({
  isLoading,
  children,
  title,
}: Readonly<{
  isLoading: boolean;
  title: string;
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-col gap-[12px]">
      {isLoading ? (
        <div className="w-[160px] h-[24px] rounded-[8px] bg-[#CCD1D959] animate-pulse" />
      ) : (
        <p className="poppins-font font-[600] text-[#001A41]">{title}</p>
      )}
      {children}
    </div>
  );
};

export default BasicCard;
