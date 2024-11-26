import Image from "next/image";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-binance-plex-regular)]">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Binance Plex Font Test</h1>
        <Image
          src="/images/logo.png"
          alt="Binance Plex Logo"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}
