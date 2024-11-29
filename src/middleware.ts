import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "ko"];

function getLocale(request: NextRequest) {
  const headers = new Headers(request.headers);
  return headers.get("accept-language")?.split(",")[0].split("-")[0];
}

export function middleware(request: NextRequest) {
  const locale = getLocale(request);

  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  if (pathnameHasLocale) return;

  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next).*)"],
};
