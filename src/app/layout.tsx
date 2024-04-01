"use client"

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FirebaseAuthProvider from "@/components/auth/FirebaseAuthProvider";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <FirebaseAuthProvider>
            {children}
          </FirebaseAuthProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
