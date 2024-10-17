import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import AmitIcon from "@/assets/images/amiticon.ico";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const calistoga = Calistoga({ subsets: ['latin'], variable: '--font-serif', weight: ['400'] });

export const metadata: Metadata = {
  title: "Sumit Masram",
  description: "Welcome to the portfolio of Sumit Masram, a passionate freelance developer creating innovative applications and websites tailored for personal, business, and startup needs. Powered by the Frontend Tribe, I specialize in delivering exceptional digital solutions that elevate user experiences. Let's connect and bring your ideas to life!",
  icons: {
    icon: AmitIcon.src, // Use the AmitIcon as the favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={AmitIcon.src} sizes="any" type="image/x-icon" />
      </head>
      <body className={twMerge(inter.variable, calistoga.variable, "bg-gray-900 text-white antialiased font-sans")}>
        {children}
      </body>
    </html>
  );
}
