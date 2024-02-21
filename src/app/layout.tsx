import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "SOAL 1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white">
      <body>{children}</body>
    </html>
  );
}
