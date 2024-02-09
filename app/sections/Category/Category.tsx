import Image from "next/image";
import category_1 from "/public/images/category-1.png";
import category_2 from "/public/images/category-2.png";
import category_3 from "/public/images/category-3.png";
import category_4 from "/public/images/category-4.png";
import Button2 from "../../components/Button2/Button2";
import FramerTest from "../../components/FramerTest/FramerTest";

export default function Category() {
  return (
    <div className="flex flex-col items-center pt-16 sm:pt-32">
        <h2 className="text-2xl sm:text-3xl xl:text-4xl text-center font-semibold capitalize mb-5 sm:mb-7 md:mb-9"><span className="font-normal text-[#1EE0E1] italic">Browse By</span> Category</h2>
        <p className="text-sm sm:text-lg 2xl:text-xl text-center max-w-96 sm:max-w-[530px] mb-10 md:mb-12 ">Set a secondary sales fee and add social links, a description, profile and banner images, and a description.</p>
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-y-8 md:gap-x-8 lg:mb-5">
            <FramerTest position="right" delay={0.25} classes="max-w-[350px] h-[355px] lg:max-w-full lg:max-h-auto lg:flex-[36%]">
                    <Image className="w-full h-full object-cover rounded-3xl" src={category_1} alt="category-img" />
            </FramerTest>

            <FramerTest position="top" delay={0.4} classes="max-w-[350px] h-[355px] lg:max-w-full lg:max-h-auto lg:flex-[60%]">
                    <Image className="w-full h-full object-cover rounded-3xl" src={category_2} alt="category-img" />
            </FramerTest>

            <FramerTest position="bottom" delay={0.55} classes="max-w-[350px] h-[355px] lg:max-w-full lg:max-h-auto lg:flex-[60%]">
                    <Image className="w-full h-full object-cover rounded-3xl" src={category_3} alt="category-img" />
            </FramerTest>
            
            <FramerTest position="left" delay={0.7} classes="max-w-[350px] h-[355px] lg:max-w-full lg:max-h-auto lg:flex-[36%]">
                <Image className="w-full h-full object-cover rounded-3xl" src={category_4} alt="category-img" />
            </FramerTest>
        </div>
        <Button2 centered={true}>Explore NFTs Category</Button2>
    </div>
  )
}
