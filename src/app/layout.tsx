import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "AI Brand Asset Generator", description: "AI-powered AI Brand Asset Generator" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
