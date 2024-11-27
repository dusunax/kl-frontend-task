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
    <>
      <main
        className={`h-screen flex flex-col bg-[var(--color-TradeBg)] text-[var(--color-textPrimary)] ${
          className || ""
        }`}
      >
        {header}
        {children}
      </main>
    </>
  );
};

export default PageLayout;
