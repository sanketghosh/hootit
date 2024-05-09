import type { Metadata } from "next";
import "./globals.css";
import RootProvider from "@/providers/root-provider";

export const metadata: Metadata = {
  title: "Hootit",
  description: "A social media for you to hoot at world your thoughts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
