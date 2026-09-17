import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/lib/providers";
import { NavBar } from "@/components/ui/nav-bar";
import { FooterSection } from "@/components/sections/footer-section";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Opsera — The Control Layer for Sovereign Cloud Decisions",
  description:
    "Opsera helps teams decide where every workload should run, prove why, and keep it optimized across clouds — with cost, compliance, sovereignty and carbon in one control layer.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-foreground">
        <div className="bg-sand fixed inset-0 -z-10" aria-hidden="true" />
        <Providers>
          <div className="relative z-10 flex min-h-full flex-1 flex-col">
            <div id="top" />
            <NavBar />
            {children}
            <FooterSection />
          </div>
        </Providers>
      </body>
    </html>
  );
}
