import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import binanceH from "@/assets/images/binance-h.png";

function HeaderLogo() {
  return (
    <Link href="/">
      <div className="relative w-[120px] h-[64px]">
        <Image
          src={binanceH}
          alt="Binance Plex Logo"
          fill
          priority
          sizes="(max-width: 640px) 100px, (max-width: 768px) 120px"
          style={{ objectFit: "contain" }}
        />
      </div>
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
