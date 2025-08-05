import type { Metadata } from "next";
import { Playfair_Display, Open_Sans } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});
export const metadata: Metadata = {
  title: "RtopR - Natural Beauty",
  description: "13 Natural Ingredients. 100% Safe. Trusted Worldwide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${playfairDisplay.variable} font-sans antialiased bg-dark-100 text-dark-900 dark:bg-dark-900 dark:text-dark-100`}
      >
        {children}
      </body>
    </html>
  );
}
