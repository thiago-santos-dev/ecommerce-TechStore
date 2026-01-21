import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// 1. Importe o provedor que acabamos de criar
import ReactQueryProvider from "@/providers/ReactQueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TechStore",
  description: "Loja criada com Next.js e React Query",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* 2. Envolva tudo com o Provider */}
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}