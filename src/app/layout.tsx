import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { ClientLayout } from './ClientLayout';
import { SanityLive } from '@/sanity/lib/live';

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Union Yoga - Creating welcoming yoga spaces for every body in Baltimore",
  description: "Our studio offers an open, affirming space where all neighbors can move, breathe, and rest together. We teach trauma-informed classes, provide sliding-scale pricing, and create a community rooted in care, respect, and collective well-being.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSans.variable} antialiased`}
      >
        <ClientLayout>{children}</ClientLayout>
        <SanityLive />
      </body>
    </html>
  );
}