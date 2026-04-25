"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { Roboto_Condensed } from "next/font/google";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Navbar() {
  const { locale } = useParams(); // get current locale (en / ja)
  const pathname = usePathname();

  // Helper: switch locale but keep the same page
  // function switchLocale(targetLocale) {
  //   if (!pathname) return "/";
  //   const segments = pathname.split("/");
  //   segments[1] = targetLocale; // replace locale in path
  //   return segments.join("/") || "/";
  // }

  function switchLocale(targetLocale) {
    // Safety net: pathname should exist, but just in case
    if (!pathname) return `/${targetLocale}`;

    // Split path and remove empty strings
    const segments = pathname.split("/").filter(Boolean);

    // If we're at "/", go straight to /en or /ja
    if (segments.length === 0) return `/${targetLocale}`;

    // Replace the locale part of the path
    segments[0] = targetLocale;

    // Rebuild the path
    return "/" + segments.join("/");
  }


  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 130 130"
          className="h-8 w-8 text-blue-600"
        >
          <polygon points="65,10 120,120 10,120" fill="currentColor" />
        </svg>
        <span
          className={`${robotoCondensed.className} font-semibold text-lg tracking-tight text-gray-800`}
        >
          Victor Ngugi
        </span>
      </div>

      {/* Center nav links */}
      <div className="flex space-x-6">
        <Link href={`/${locale}/`} className="hover:text-blue-600">
          {locale === "ja" ? "ホーム" : "Home"}
        </Link>
        <Link href={`/${locale}/about`} className="hover:text-blue-600">
          {locale === "ja" ? "私について" : "About"}
        </Link>
        <Link href={`/${locale}/projects`} className="hover:text-blue-600">
          {locale === "ja" ? "プロジェクト" : "Projects"}
        </Link>
        <Link href={`/${locale}/contact`} className="hover:text-blue-600">
          {locale === "ja" ? "連絡先" : "Contact"}
        </Link>
      </div>

      {/* Language Switcher */}
      <div className="flex space-x-2">
        <Link
          href={switchLocale("en")}
          className={`px-2 py-1 rounded ${
            locale === "en" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          EN
        </Link>
        <Link
          href={switchLocale("ja")}
          className={`px-2 py-1 rounded ${
            locale === "ja" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          日本語
        </Link>
      </div>
    </nav>
  );
}
