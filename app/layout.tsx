import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Discord-Clone",
  description: "Realtime messaging with video",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='bg-[url("/background.svg")] bg-cover bg-repeat overflow-x-hidden scroll-smooth scroll-m-0 scroll-p-0'>
        <Theme>
        {children}
        </Theme>
        </body>
    </html>
  );
}
