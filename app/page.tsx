import "./page.module.scss";
import Category from "./sections/Category/Category";
import Companies from "./sections/Companies/Companies";
import Contacts from "./sections/Contacts/Contacts";
import Guide from "./sections/Guide/Guide";
import Home from "./sections/Home/Home";
import News from "./sections/News/News";
import Products from "./sections/Products/Products";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./sections/Footer/Footer";
import FramerTest from "./components/FramerTest/FramerTest";

export default function Page() {
  return (
    <div className="relative">
      <div className="max-w-full xl:max-w-7xl mx-auto px-3 sm:px-5">
        <Navbar/>

        <Home/>
        <Products/>
        <Guide/>
        <Category/>
        <Companies/>
        <News/>
        <Contacts/>

        <Footer/>
      </div>
      <FramerTest classes="hidden sm:block min-[1921px]:hidden absolute top-[1%] lg:top-[1%] xl:top-[2%] 2xl:top-[0.7%] -right-[1%] 2xl:right-[0%] -z-[20]" position="left">
            <div className="relative">
              <img className="w-[400px] md:w-[500px] lg:w-[650px] 2xl:w-[870px] " src="/crypto/images/home_img.png" alt="home_img" />
              <div className="absolute top-[47%] right-[48%] xl:right-[55%] text-base xl:text-2xl text-center font-bold bg-[#07003E] w-[115px] h-[115px] 
              lg:w-[135px] lg:h-[135px] lg:text-xl xl:w-[175px] xl:h-[175px] rounded-full py-6 xl:py-10 px-4 border border-[#DF1CFF] ">Cyber Samurai #177</div>
            </div>
      </FramerTest>
  </div>
  );
}
