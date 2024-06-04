// NEXTJS
import type { Metadata } from "next";

// PROVIDERS
import AppProviders from "@/app/providers";

// STYLES
import "@/app/styles/globals.css";
import { nexa } from "@/app/styles/NexaFont";

export const metadata: Metadata = {
  title: "365 Viagens",
  description: "Travels all around the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nexa.className}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
