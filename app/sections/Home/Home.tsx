"use client";
import style from "../../page.module.scss";
import Button1 from "../../components/Button1/Button1";
import FramerTest from "../../components/FramerTest/FramerTest";
import { useEffect } from "react";

export default function Home() {
  
  useEffect(()=>{
    const counters: NodeListOf<HTMLDivElement> = document.querySelectorAll('.counter');

    counters.forEach((counter: HTMLDivElement) => {
      const target: number = +counter.dataset.count;
      const increment: number = target / 200; // Adjust the speed of counting
      let count: number = 0;
    
      const updateCounter = () => {
        count += increment;
    
        if (count < target) {
          // Format the count with commas
          counter.innerText = numberWithCommas(Math.ceil(count));
          setTimeout(updateCounter, 10); // Adjust the interval for smoothness
        } else {
          // Set the final count with commas
          counter.innerText = numberWithCommas(target);
        }
      };
    
      setTimeout(()=>updateCounter(), 1500)
    });
    
    // Function to add commas to numbers
    function numberWithCommas(x: number): string {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
  }, [])

  return (
      <section id="home" className={`${style["home"]} relative py-20 lg:py-40 xl:py-52`}>
        {/* <div className="mb-14 lg:mb-20 xl:mb-44"> */}
        <FramerTest classes="mb-14 lg:mb-20 xl:mb-44" position="right">
          <h1 className={`${style["home__title"]} capitalize text-4xl lg:text-6xl sm:max-w-[300px] lg:max-w-[400px] xl:max-w-[500px] 2xl:max-w-[550px] mb-5 lg:mb-6`}>Buy, Create & Sell <span className="text-[#1EE0E1]">Unique NFTs</span> File.</h1>
          <p className={`${style["home__dec-1"]} text-sm lg:text-lg max-w-[320px] sm:max-w-[280px] lg:max-w-[380px] xl:max-w-[450px] leading-6 relative mb-8 `}>NFTs are used for digital art and collectibles, GameFi projects, metaverses, and more.</p>
          <Button1 title="Explore NFTs" width={false}/>
        </FramerTest>
        {/* </div> */}

        <FramerTest position="right">
          <div className="flex items-center gap-4 mb-8">
            <img className="w-9 h-9 lg:w-12 lg:h-12" src='/images/home_dec_2.png' alt="dec" />
            {/* Worked with this part, changed: md,lg:max-w */}
            <div className="font-bold capitalize max-w-[230px] md:max-w-[300px] lg:max-w-full lg:text-4xl">Nico NFT Marketplace Overview</div>
          </div> 
        </FramerTest>

        <FramerTest position="right">
          <div className="flex items-start lg:text-left gap-x-4 xs:gap-x-5 lg:gap-x-14">
            <div>
              <div className="pb-2 opacity-75 text-base xs:text-lg lg:text-xl">World Arts</div>
              <div className="flex gap-1 text-lg xs:text-xl lg:text-4xl text-nowrap lg:w-[130px]"><div className="counter" data-count="30000">0</div> <span>+</span></div>
            </div>
            <div>
              <div className="pb-2 opacity-75 text-base xs:text-lg lg:text-xl">Digital Artists</div>
              <div className="flex gap-1 text-lg xs:text-xl lg:text-4xl text-nowrap lg:w-[130px]"><div className="counter" data-count="17000">0</div> <span>+</span></div>
            </div>
            <div>
              <div className="pb-2 opacity-75 text-base xs:text-lg lg:text-xl">Live Auctions</div>
              <div className="flex gap-1 text-lg xs:text-xl lg:text-4xl text-nowrap lg:w-[130px]"><div className="counter" data-count="22000">0</div> <span>+</span></div>
            </div>
          </div>
        </FramerTest>
        

        {/* The main image */}
        <FramerTest classes="hidden min-[1921px]:block absolute top-[1%] lg:top-[1%] xl:top-[2%] 2xl:top-[0.7%] -right-[240px] -z-[20]" position="left">
          <div className="relative">
            <img className="w-[800px]" src="/images/home_img_2-transformed.png" alt="home_img" />
            <div className="absolute top-[47%] right-[48%] xl:right-[55%] text-base xl:text-2xl text-center font-bold bg-[#07003E] w-[115px] h-[115px] 
            lg:w-[135px] lg:h-[135px] lg:text-xl xl:w-[175px] xl:h-[175px] rounded-full py-6 xl:py-10 px-4 border border-[#DF1CFF] ">Cyber Samurai #177</div>
          </div>
        </FramerTest>
      </section>
  );
}
