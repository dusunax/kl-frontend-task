import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  variant?: "sell" | "buy" | "dark" | "primary";
}

export default function Button({
  children,
  className,
  isLoading,
  variant,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`w-full min-h-9 shrink-0 rounded-md text-sm font-bold ${className} button ${variant}`}
      {...props}
    >
      <div className="flex items-center justify-center gap-1">
        {children}
        {isLoading ? "..." : null}
      </div>
    </button>
  );
}
