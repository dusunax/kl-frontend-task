import { binancePlex } from "./fonts";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Binance Plex Front Test",
  description: "Binance Plex Front Test",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const binancePlexVariables = Object.values(binancePlex)
    .map((font) => font.variable)
    .join(" ");

  return (
    <html lang="en" className={binancePlexVariables}>
      <body className="antialiased font-binancePlex">{children}</body>
    </html>
  );
}
