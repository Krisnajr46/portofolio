import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const title = "Raja Krisna | Cloud Engineer & DevOps Enthusiast";
const description = "Portfolio of Raja Krisna, an Informatics student passionate about Cloud Engineering, DevOps, Networking, Linux, Docker, AWS, and infrastructure.";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"), // ganti dengan domain kamu
  title, description,
  openGraph: { title, description, type: "website", siteName: "Raja Krisna" },
  twitter: { card: "summary_large_image", title, description },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#060b17", colorScheme: "dark" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body className={inter.className}>{children}</body></html>);
}
