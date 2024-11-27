import { PropsWithChildren } from "react";

interface CardWrapperProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function Card({
  children,
  className,
  style,
}: PropsWithChildren<CardWrapperProps>) {
  return (
    <div
      className={`bg-[var(--color-BasicBg)] p-4 rounded-md ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
