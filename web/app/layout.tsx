import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cantina Go",
  description: "Cardapio de cantina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <head>
    <link rel='icon' href='/favicon.png' />
    </head>
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
    </>
  );
}
