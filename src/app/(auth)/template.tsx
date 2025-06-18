"use client";

// import { Metadata } from "next";
import "@/app/globals.css";
import { useState } from "react";
import Link from "next/link";

const navigations = [
  { title: "Login", href: "/login" },
  { title: "Register", href: "/register" },
];
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <header className="bg-gray-300">
        {navigations.map((nav) => (
          <Link className="mr-8 text-black" key={nav.title} href={nav.href}>
            {nav.title}
          </Link>
        ))}
      </header>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border-2"
        />
      </div>
      {children}
    </>
  );
}
