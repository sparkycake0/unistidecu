import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import "./globals.css";

const font = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "900", "800"],
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
        className={`${font.className} flex flex-col w-screen h-screen antialiased text-white bg-[#14162E]`}
      >
        {children}
      </body>
    </html>
  );
}
