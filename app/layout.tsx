import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";

const font = Press_Start_2P({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Programiranje",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${font.className} flex flex-col w-screen h-screen antialiased text-white bg-neutral-950`}
      >
        {children}
      </body>
    </html>
  );
}
