import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Devjobs",
  description: "A jobs board to find your ideal work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-kumbh-sans bg-light-grey">
        {children}
        <div id="modal"></div>
      </body>
    </html>
  );
}
