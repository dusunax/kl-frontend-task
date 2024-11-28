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

function SubHeader({ children }: { children: ReactNode }) {
  return (
    <div className="h-10 flex items-center justify-between px-4 text-sm font-bold">
      {children}
    </div>
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
      className={`bg-[var(--color-BasicBg)] rounded-md ${className} flex flex-col`}
      style={style}
    >
      {header}
      <div className="px-4 flex-1">{children}</div>
    </div>
  );
}

Card.Header = Header;
Card.SubHeader = SubHeader;

export { Card };
