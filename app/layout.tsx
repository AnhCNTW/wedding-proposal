import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
