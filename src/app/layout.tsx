"use client";

// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import TopLoader from "@/component/TopLoader";
import { GoogleTagManager } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const navigations = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
  { title: "Blogs", href: "/blog" },
  { title: "Products", href: "/products" },
  { title: "Lectures", href: "/lectures" },
  { title: "Charts", href: "/charts" },
  { title: "News", href: "/news/1" },
];

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-T6WT28TW" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TopLoader />
        <header>
          <div className="bg-violet-400 text-center py-1">
            This is Next.JS Practice
          </div>

          <div className="bg-amber-200 py-1.5">
            {navigations.map((nav) => {
              const isActive = pathname === nav.href;
              return (
                <Link
                  className={`mr-8 ${
                    isActive ? "text-red-500" : "text-gray-700"
                  }`}
                  key={nav.title}
                  href={nav.href}
                >
                  {nav.title}
                </Link>
              );
            })}
          </div>
        </header>

        <div>{children}</div>
      </body>
    </html>
  );
}
