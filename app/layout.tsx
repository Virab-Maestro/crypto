// "use client"

import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
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
          <div className="relative">
            <div className="max-w-full xl:max-w-7xl mx-auto px-3 sm:px-5">
              <Navbar/>
              {/* <FramerTest>{children}</FramerTest> */}
              {children}
              {/* <Footer/> */}
            </div>
            <FramerTest classes="hidden absolute -z-[5] top-[4%] md:top-[3%] lg:top-[4%] xl:top-[6%] 2xl:top-[3%] -right-[1%] 2xl:right-[0%] sm:block" position="left">
                <div className="relative">
                  <img className="w-[400px] md:w-[500px] lg:w-[650px] 2xl:w-[870px] " src="/images/home_img.png" alt="home_img" />
                  <div className="absolute top-[47%] right-[48%] xl:right-[55%] text-xl xl:text-2xl text-center font-bold bg-[#07003E] w-[135px] h-[135px] xl:w-[175px] xl:h-[175px] rounded-full py-6 xl:py-10 px-4 border border-[#DF1CFF] ">Cyber Samurai #177</div>
                </div>
            </FramerTest>

          </div>
      </body>
    </html>
  );
}
