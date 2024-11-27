import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-[var(--color-TradeBg)] text-[var(--color-textPrimary)]">
      <Link href="/trade/BTCUSDT">
        <h1 className="text-4xl font-bold underline">Binance Plex Font Test</h1>
      </Link>
      <Image
        src="/images/logo.png"
        alt="Binance Plex Logo"
        width={100}
        height={100}
      />
    </div>
  );
}
