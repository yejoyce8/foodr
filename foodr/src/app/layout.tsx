import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Foodr - Find Your Perfect Restaurant",
  description: "The app for indecisive food lovers - swipe with friends to find the perfect restaurant!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
