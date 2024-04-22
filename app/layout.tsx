import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";

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
        <Navbar />
        <main className="">
          <div className="mx-auto max-w-4xl px-4">{children}</div>
        </main>
      </body>
    </html>
  );
}
