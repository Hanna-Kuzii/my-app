import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Header from "../src/components/Header";

export const metadata: Metadata = {
  title: "My app",
  description: "Welcome to my app with goods",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="w-screen h-full min-h-screen bg-blue-400 py-10">{children}</div>
      </body>
    </html>
  );
}
