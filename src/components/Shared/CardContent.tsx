import { ReactNode } from "react";

const CardContents = ({
  children,
  title,
  value,
}: {
  children?: ReactNode;
  title?: string;
  value?: string;
}) => {
  return (
    <div className="w-full flex flex-row items-center justify-between text-[12px] font-[400] text-[#757F90]">
      {children ? (
        children
      ) : (
        <>
          <p>{title}</p>
          <p className="text-[#181C21]">{value}</p>
        </>
      )}
    </div>
  );
};

export default CardContents;
