import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  weight: "variable",
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "ForestDine — Homestays & Forest Dining",
  description:
    "Find eco-homestays and farm-to-table dining experiences run by local hosts in forests and hill towns.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${workSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-parchment dark:bg-canopy-deep text-canopy-deep dark:text-parchment transition-colors">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
