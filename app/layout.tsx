import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "enops.dev",
  description:
    "Enops.dev is a platform for AI-powered data visualization and exploration.",
  keywords:
    "AI, Data, Visualization, Exploration, Postgres, Drizzle, Prisma, DBML",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster
          position="top-right"
          richColors
          theme="dark"
          toastOptions={{
            style: {
              background: "#0d1117",
              border: "1px solid #10b981",
              color: "#d1d5db",
              fontFamily: "'Geist Mono', monospace",
            },
          }}
        />
      </body>
    </html>
  );
}
