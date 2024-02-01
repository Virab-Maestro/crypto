import style from "../../page.module.scss";

import GuideCard from "../../components/GuideCard/GuideCard";
import img_1 from "/public/images/guide-img-1.png";
import img_2 from "/public/images/guide-img-2.png";
import img_3 from "/public/images/guide-img-3.png";
import img_4 from "/public/images/guide-img-4.png";

export default function Guide() {
  return (
    <div className="flex flex-col items-center mt-11">
        <div className="text-base font-medium uppercase bg-gradient-to-r from-[#1EE0E1] to-[rgba(24, 254, 255, 0.00)] py-2 px-4 rounded-[36px] mb-4 sm:mb-6">UNIQUE FILES</div>
        <h2 className="text-2xl sm:text-3xl xl:text-4xl text-center font-semibold capitalize mb-14 sm:mb-20">How to <span className="font-normal text-[#1EE0E1] italic">Create & Sell</span> Your NFT Files.</h2>

        <div className="flex flex-col flex-wrap lg:flex-row lg:justify-center lg:gap-x-8 lg:gap-y-20 items-center gap-y-14">
          <GuideCard title="Set Up Your Wallet" text="Connect your wallet to Nico by clicking the wallet icon in the top right corner after you've set it up." image={img_1}/>
          <GuideCard title="Create Unique Collection" text="Set a secondary sales fee and add social links, a description, profile and banner images, and a description." image={img_2}/>
          <GuideCard title="Download NFTs" text="Add a title and description to your work (picture, video, audio, or 3D art), then customize your NFTs with properties." image={img_3}/>
          <GuideCard title="Put Them Up for Sale" text="Auctions, fixed-price listings, and declining-price listings are all options. You decide how you'd like to sell your NFTs." image={img_4}/>
        </div>
    </div>
  )
}
