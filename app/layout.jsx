import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisScroll from "@/src/components/LenisScroll";
import { ClerkProvider } from "@clerk/nextjs";

// Load Geist Sans Font
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Load Geist Mono Font
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FileVerse - Minimal Cloud Storage & Secure File Sharing",
  description: "Store, organize, and share all your files securely with FileVerse.",
};

export default function RootLayout({ children }) {
  return (
    // Wrap entire application with Clerk Authentication Provider
    <ClerkProvider>
      <html
        lang="en"
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
        <body className="min-h-full flex flex-col bg-white text-black selection:bg-black selection:text-white">
          <LenisScroll />
          <main className="flex-1">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}