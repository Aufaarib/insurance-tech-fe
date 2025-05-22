const BasicCard = ({
  children,
  title,
}: Readonly<{
  title: string;
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-col gap-[12px]">
      <p className="poppins-font font-[600] text-[#001A41]">{title}</p>
      {children}
    </div>
  );
};

export default BasicCard;
