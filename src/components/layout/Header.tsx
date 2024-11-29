import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

function HeaderLogo() {
  return (
    <Link href="/">
      <Image
        src={"/images/binance-h.png"}
        alt="Binance Plex Logo"
        width={120}
        height={64}
        priority
        style={{ width: "120px", height: "auto" }}
      />
    </Link>
  );
}

function Header({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex h-[64px] shrink-0 items-center justify-between bg-[var(--color-BasicBg)] px-6 ${className}`}
    >
      {children}
    </div>
  );
}

Header.Logo = HeaderLogo;

export default Header;
