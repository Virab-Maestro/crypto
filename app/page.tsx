'use client'
import style from "./page.module.scss";
import Button1 from "./components/Button1/Button1";

export default function Home() {
  return (
      <section id="home" className={`${style["home"]} relative py-20 lg:py-40 xl:py-48`}>
        <div className="mb-14 lg:mb-20">
          <h1 className={`${style["home__title"]} capitalize text-4xl lg:text-6xl max-w-[300px] lg:max-w-[400px] xl:max-w-[500px] 2xl:max-w-[550px] mb-5 lg:mb-6`}>Buy, Create & Sell <span className="text-[#1EE0E1]">Unique NFTs</span> File.</h1>
          <p className={`${style["home__dec-1"]} text-sm lg:text-lg max-w-[280px] lg:max-w-[380px] leading-6 relative mb-8`}>NFTs are used for digital art and collectibles, GameFi projects, metaverses, and more.</p>
          <Button1 title="Explore NFTs"/>
        </div>

        <div>
          <div className="flex items-center gap-4 mb-8">
            <img className="w-9 h-9 lg:w-12 lg:h-12" src='/images/home_dec_2.png' alt="dec" />
            <div className="font-bold capitalize max-w-[230px] md:max-w-full lg:text-4xl">Nico NFT Marketplace Overview</div>
          </div> 

          <div className="flex flex-nowrap flex-col items-center gap-y-5 text-center lg:text-left xs:flex-row xs:gap-y-0 xs:gap-x-5 xs:items-start lg:gap-x-8">
            <div>
              <div className="pb-2 opacity-75 xs:text-lg lg:text-xl">World Arts</div>
              <div className="text-3xl xs:text-xl lg:text-4xl text-nowrap">30.000 +</div>
            </div>
            <div>
              <div className="pb-2 opacity-75 xs:text-lg lg:text-xl">Digital Artists</div>
              <div className="text-3xl xs:text-xl lg:text-4xl text-nowrap">17.000 +</div>
            </div>
            <div>
              <div className="pb-2 opacity-75 xs:text-lg lg:text-xl">Live Auctions</div>
              <div className="text-3xl xs:text-xl lg:text-4xl text-nowrap">22.000 +</div>
            </div>
            {/* <div>
              <div className="pb-2 opacity-75 xs:text-lg lg:text-xl">Unique Products</div>
              <div className="text-3xl xs:text-xl lg:text-4xl text-nowrap">50.000 +</div>
            </div> */}
          </div>
        </div>

        {/* <div className="hidden absolute -z-10 -top-[10%] xl:-top-[5%] -right-[50px] sm:block">
          <div className="relative">
            <img className="w-[500px] md:w-[600px] lg:w-[750px]" src="/images/home_img.png" alt="" />
            <div className="absolute top-[47%] right-[48%] xl:right-[55%] text-xl xl:text-2xl text-center font-bold bg-[#07003E] w-[135px] h-[135px] xl:w-[175px] xl:h-[175px] rounded-full py-10 px-4 border border-[#DF1CFF] ">Cyber Samurai #177</div>
          </div>
        </div> */}
      </section>
  );
}
