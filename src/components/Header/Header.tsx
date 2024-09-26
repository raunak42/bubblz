import Logo from "../Logo/Logo";

export const Header: React.FC = () => {
  return (
    <div className=" w-full h-[120px] flex justify-center items-center">
      <Logo className="w-[240px]" color="#075985" />
    </div>
  );
};
