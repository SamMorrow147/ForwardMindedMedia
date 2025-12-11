import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Forward Minded Media",
  description: "Leave The Status Quo Behind with Forward Minded Media - your full-service marketing agency partner.",
  other: {
    'typekit-id': 'qhq4tmi',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ backgroundColor: '#000000', background: '#000000' }}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="color-scheme" content="dark" />
        <meta name="theme-color" content="#000000" />
        <link rel="stylesheet" href="https://use.typekit.net/qhq4tmi.css" />
        <link rel="preload" href="/Person.png" as="image" />
        <link rel="preload" href="/Asset-1-8x.png" as="image" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ 
          backgroundColor: '#000000',
          background: '#000000'
        }}
      >
        <div style={{
          minHeight: '100vh',
          backgroundColor: '#000000'
        }}>
          {children}
        </div>
      </body>
    </html>
  );
}
