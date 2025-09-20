import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import logo from '../public/taylorLogo.png'; // 更新为正确的相对路径

export const metadata: Metadata = {
  title: "Taylor's Floors Inc | Premium Flooring Solutions",
  description: "Premium flooring solutions for residential and commercial spaces. Expert installation, premium materials, and unmatched craftsmanship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {/* 添加logo */}
        <header className="site-header">
          <img src={logo} alt="Taylor's Floors Inc Logo" className="site-logo" />
        </header>
        {children}
      </body>
    </html>
  );
}
