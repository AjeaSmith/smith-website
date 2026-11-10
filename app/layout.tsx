import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/lib/content";

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.title}`,
  description: profile.intro,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
