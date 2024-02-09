// "use client"

import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./sections/Footer/Footer";
import FramerTest from "./components/FramerTest/FramerTest";

// export const metadata: Metadata = {
//   title: "Crypto",
//   description: "Crypto Application",
// };

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
