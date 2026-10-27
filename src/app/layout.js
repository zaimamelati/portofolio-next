import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Zaima Melati | Portofolio",
  description: "Portofolio Zaima Melati, siswa SMK calon Junior Web Developer di Kelas Industri UBIG.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className="h-full"
    >
      <body className="min-h-full flex flex-col bg-latar text-gray-800">
        {children}
        <Footer />
      </body>
    </html>
  );
}
