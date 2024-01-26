import style from "../../page.module.scss";
import Button1 from "../../components/Button1/Button1";
import FramerTest from "../../components/FramerTest/FramerTest";

export default function Home() {
  return (
      <section id="home" className={`${style["home"]} relative py-20 lg:py-40 xl:py-52`}>
        {/* <div className="mb-14 lg:mb-20 xl:mb-44"> */}
        <FramerTest classes="mb-14 lg:mb-20 xl:mb-44" position="right">
          <h1 className={`${style["home__title"]} capitalize text-4xl lg:text-6xl sm:max-w-[300px] lg:max-w-[400px] xl:max-w-[500px] 2xl:max-w-[550px] mb-5 lg:mb-6`}>Buy, Create & Sell <span className="text-[#1EE0E1]">Unique NFTs</span> File.</h1>
          <p className={`${style["home__dec-1"]} text-sm lg:text-lg max-w-[320px] sm:max-w-[280px] lg:max-w-[380px] xl:max-w-[450px] leading-6 relative mb-8 `}>NFTs are used for digital art and collectibles, GameFi projects, metaverses, and more.</p>
          <Button1 title="Explore NFTs"/>
        </FramerTest>
        {/* </div> */}

        <FramerTest position="right">
          <div className="flex items-center gap-4 mb-8">
            <img className="w-9 h-9 lg:w-12 lg:h-12" src='/images/home_dec_2.png' alt="dec" />
            {/* Worked with this part, changed: md,lg:max-w */}
            <div className="font-bold capitalize max-w-[230px] md:max-w-[300px] lg:max-w-full lg:text-4xl">Nico NFT Marketplace Overview</div>
          </div> 

          {/* Worked with this part, changed: flex gap, fontSize */}
          <div className="flex items-start lg:text-left gap-x-4 xs:gap-x-5 lg:gap-x-8">
            <div>
              <div className="pb-2 opacity-75 text-base xs:text-lg lg:text-xl">World Arts</div>
              <div className="text-lg xs:text-xl lg:text-4xl text-nowrap">30.000 +</div>
            </div>
            <div>
              <div className="pb-2 opacity-75 text-base xs:text-lg lg:text-xl">Digital Artists</div>
              <div className="text-lg xs:text-xl lg:text-4xl text-nowrap">17.000 +</div>
            </div>
            <div>
              <div className="pb-2 opacity-75 text-base xs:text-lg lg:text-xl">Live Auctions</div>
              <div className="text-lg xs:text-xl lg:text-4xl text-nowrap">22.000 +</div>
            </div>
          </div>
        </FramerTest>
      </section>
  );
}
