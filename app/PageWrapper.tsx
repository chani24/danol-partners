"use client";
import "./globals.css";
import "./components.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Head from "next/head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
