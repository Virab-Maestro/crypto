import Image from "next/image";
import { StaticImageData } from "next/image";
import style from "../../page.module.scss";

interface GuideCardProps{
  title:string;
  text:string;
  image: StaticImageData;
}

export default function GuideCard({title, text, image}:GuideCardProps) {
  return (
    <div className={`${style["guide__card"]} relative bg-[#0D0D2D] rounded-lg p-5 max-w-[480px] sm:max-w-[620px] lg:max-w-[460px] 2xl:max-w-[600px] sm:pt-10 2xl:pt-12 sm:pb-5`}>
        {/* max - 22px */}
        <div className={`${style["guide__card-title"]} text-base sm:text-xl 2xl:text-2xl mb-2 sm:mb-4 sm:max-w-[430px]`}>{title}</div> 
        {/* max - 20px */}
        <p className="text-sm sm:text-lg 2xl:text-xl">{text}</p>
        <div className={`${style["guide__icon"]} `}>
            <Image src={image} alt="guide-icon"/>
        </div>
    </div>
  )
}
