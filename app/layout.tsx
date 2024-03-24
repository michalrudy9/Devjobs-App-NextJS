import type { Metadata } from "next";

import "./globals.css";
import ReduxProvider from "@/store/reduxProvider";
import QueryProvider from "@/components/QueryProvider";

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
      <body className="font-kumbh-sans">
        <QueryProvider>
          <ReduxProvider>{children}</ReduxProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
