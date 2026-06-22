import clsx from "clsx";
import LogoIcon from "./icons/logo";

export default function LogoSquare({ size }: { size?: "sm" | undefined }) {
  return (
    <div
      className={clsx(
        "flex flex-none items-center justify-center bg-forest text-gold-soft",
        {
          "h-[40px] w-[40px] rounded-xl": !size,
          "h-[30px] w-[30px] rounded-lg": size === "sm",
        }
      )}
    >
      <LogoIcon
        className={clsx({
          "h-[20px] w-[20px]": !size,
          "h-[15px] w-[15px]": size === "sm",
        })}
      />
    </div>
  );
}
