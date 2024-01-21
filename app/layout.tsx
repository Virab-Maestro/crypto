import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });
{/* <body className={inter.className}>{children}</body>
 */}

export const metadata: Metadata = {
  title: "Crypto",
  description: "Crypto Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-full xl:max-w-7xl mx-auto px-3 sm:px-5">
          <Navbar/>
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
