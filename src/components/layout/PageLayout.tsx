import { PropsWithChildren, ReactNode } from "react";

interface PageLayoutProps {
  className?: string;
  header: ReactNode;
  footer?: ReactNode;
}

const PageLayout = ({
  header,
  children,
  className,
}: PropsWithChildren<PageLayoutProps>) => {
  return (
    <div
      className={`min-h-screen flex flex-col bg-[var(--color-TradeBg)] text-[var(--color-textPrimary)] ${
        className || ""
      }`}
    >
      {header}
      {children}
    </div>
  );
};

export default PageLayout;
