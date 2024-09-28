import clsx from "clsx";
import { ArrowIcon } from "./ArrowIcon";

type ArrowButtonProps = {
  direction?: "right" | "left";
  onClick: () => void;
};

export function ArrowButton({
  onClick,
  direction = "right",
}: ArrowButtonProps) {
  return (
    <button
      onClick={onClick}
      className="z-20 size-12 rounded-full border border-white bg-white/10 p-3 opacity-85 ring-white ring-[2px] focus:outline-none focus-visible:opacity-100 focus-visible:ring-4 md:size-16 lg:size-20"
    >
      <ArrowIcon
        className={clsx(direction === "right" && "-scale-x-100", "text-white")}
        direction={direction}
      />
    </button>
  );
}
