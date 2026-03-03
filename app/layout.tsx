import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Contacts from "../components/Contacts";
import MyFooter from "../components/MyFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Julio Remodelações",
  description: "Julio Remodelações é uma empresa de remodelações e construção de casas. Oferecemos serviços de remodelação, construção de casas, reforma de casas, construção de casas de campo, construção de casas de luxo, construção de casas de luxo em Portugal.",
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
        <div className="flex min-h-screen flex-col font-sans bg-[var(--platinum-50)] dark:bg-[var(--platinum-50)] text-zinc-900 dark:text-zinc-50">
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Contacts />
          <MyFooter />
        </div>
      </body>
    </html>
  );
}
