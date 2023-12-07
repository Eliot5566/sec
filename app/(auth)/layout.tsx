import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
//thems用來設定顏色 這邊是設定為黑色

import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Auth",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  //React.ReactNode是一個可以接受任何東西的型別 用來接收children
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
      //設定主題為dark apperance是clerk的設定
    >
      <html lang='en'>
        <body className={`${inter.className} bg-dark-1`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}