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
      <Head>
        <title>
          Danol Partners - A world-class law firm with African roots
        </title>
        <meta
          name="description"
          content="Danol Partners is a full-service law firm established with a resolve to provide creative, practical, and cutting-edge legal solutions to its clients."
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
