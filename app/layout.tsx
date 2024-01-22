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
        <div className="relative">
          <div className="max-w-full xl:max-w-7xl mx-auto px-3 sm:px-5">
            <Navbar/>
            {children}
            {/* <Footer/> */}
          </div>

          <div className="hidden absolute -z-10 top-[4%] md:top-[3%] lg:top-[4%] xl:top-[6%] 2xl:top-[3%] -right-[1%] 2xl:right-[0%] sm:block">
            <div className="relative">
              <img className="w-[500px] md:w-[600px] lg:w-[750px] 2xl:w-[870px] " src="/images/home_img.png" alt="" />
              <div className="absolute top-[47%] right-[48%] xl:right-[55%] text-xl xl:text-2xl text-center font-bold bg-[#07003E] w-[135px] h-[135px] xl:w-[175px] xl:h-[175px] rounded-full py-6 xl:py-10 px-4 border border-[#DF1CFF] ">Cyber Samurai #177</div>
            </div>
          </div>

        </div>
      </body>
    </html>
  );
}
