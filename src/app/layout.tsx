import type { Metadata } from "next";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Forum Cybersécurité 2025",
  description: "Forum Cybersécurité 2025, un pour découvrir différentes techniques de hacking et de sécurité informatique.",
  openGraph: {
    title: "Forum Cybersécurité 2025",
    description: "Forum Cybersécurité 2025, un pour découvrir différentes techniques de hacking et de sécurité informatique.",
    url: "https://forum-cybersecurite.netlify.app/",
    type: "website",
    siteName: "Forum Cybersécurité 2025",
  },
  twitter: {
    card: "summary_large_image",
    title: "Forum Cybersécurité 2025",
    description: "Forum Cybersécurité 2025, un pour découvrir différentes techniques de hacking et de sécurité informatique.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  themeColor: "#000000",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className='dark'>
      <body>
        {children}
      </body>
    </html>
  );
}