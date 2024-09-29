import CircleText from "../CircelText/CircleText";
import Logo from "../Logo/Logo";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FEE832] text-[#FE6334]">
      <div className="relative mx-auto flex w-full max-w-4xl justify-center px-4 py-10">
        <Logo className="w-[280px]" color="#FE6334" />

        <div className="absolute  right-20 top-0 size-28 origin-center -translate-y-14 md:size-48 md:-translate-y-28">
          <CircleText />
        </div>
      </div>
    </footer>
  );
};
