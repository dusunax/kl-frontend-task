import { PropsWithChildren, ReactNode } from "react";

interface CardWrapperProps {
  className?: string;
  style?: React.CSSProperties;
  header?: ReactNode;
}

function Header({ children }: { children: ReactNode }) {
  return (
    <header className="h-10 flex items-center justify-between px-4 text-sm font-bold border-b border-[var(--color-line)]">
      {children}
    </header>
  );
}

function Card({
  children,
  className,
  style,
  header,
}: PropsWithChildren<CardWrapperProps>) {
  return (
    <div
      className={`bg-[var(--color-BasicBg)] rounded-md ${className}`}
      style={style}
    >
      {header}
      <div className="px-4 h-full">{children}</div>
    </div>
  );
}

Card.Header = Header;

export { Card };
