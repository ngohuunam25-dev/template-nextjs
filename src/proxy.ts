import { NextRequest, NextResponse } from "next/server";

let locales = ["en", "nl"];

// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest) {
  const defaultLocale = "en";
  // to check store in browser
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale;
  }

  // To check in accept-language header
  const acceptLanguage = request.headers.get("Accept-Language");
  if (!acceptLanguage) return defaultLocale;

  const preferred = acceptLanguage
    .split(",") // ["nl-NL", "nl;q=0.9", "en;q=0.8"]
    .map((lang) => {
      const [locale, q] = lang.trim().split(";q=");
      return {
        locale: locale.trim(),
        quality: q ? parseFloat(q) : 1.0,
      };
    })
    .sort((a, b) => b.quality - a.quality);

  for (const { locale } of preferred) {
    if (locales.includes(locale)) {
      return locale;
    }
  }

  return defaultLocale;
}

export function proxy(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next).*)"],
};
