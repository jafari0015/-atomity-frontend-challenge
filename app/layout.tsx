import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { NavBar } from "@/components/ui/nav-bar";
import { FooterSection } from "@/components/sections/footer-section";
import "./globals.css";

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
      className={`${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-foreground">
        <div className="relative z-10 flex min-h-full flex-1 flex-col">
          <div id="top" />
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-white"
          >
            Skip to content
          </a>
          <NavBar />
          {children}
          <FooterSection />
        </div>
      </body>
    </html>
  );
}
