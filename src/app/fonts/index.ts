import localFont from "next/font/local";

const binancePlexBlack = localFont({
  src: "./BinancePlex-Black.woff2",
  variable: "--font-binance-plex-black",
});
const binancePlexBold = localFont({
  src: "./BinancePlex-Bold.woff2",
  variable: "--font-binance-plex-bold",
});
const binancePlexLight = localFont({
  src: "./BinancePlex-Light.woff2",
  variable: "--font-binance-plex-light",
});
const binancePlexRegular = localFont({
  src: "./BinancePlex-Regular.woff2",
  variable: "--font-binance-plex-regular",
});
const binancePlexSemiBold = localFont({
  src: "./BinancePlex-SemiBold.woff2",
  variable: "--font-binance-plex-semi-bold",
});

export const binancePlex = {
  black: binancePlexBlack,
  bold: binancePlexBold,
  light: binancePlexLight,
  regular: binancePlexRegular,
  semiBold: binancePlexSemiBold,
};
