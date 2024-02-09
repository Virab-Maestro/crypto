"use client";
import Image from "next/image";
import style from "./News.module.scss";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import news_icon from "/public/images/news-icon.svg";
import news_1 from "/public/images/news-1.jpg";
import news_2 from "/public/images/news-2.jpg";
import Button1 from "../../components/Button1/Button1";
import { useEffect, useRef } from "react";

export default function News() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const newsInfo = useRef<HTMLDivElement>();
  const newsItem = useRef<HTMLAnchorElement>();
  const newsBtn = useRef<HTMLDivElement>();

  const onBtnClick = ()=>{
    if (newsInfo.current) { // Check if the ref is assigned
      // News flexible items wrapper after 1024px
      newsInfo.current.classList.add('news-info');
      (newsInfo.current.parentNode as HTMLElement).style.transition = "all .4s";
      (newsInfo.current.parentNode as HTMLElement).style.width = "100%";
      (newsInfo.current as HTMLElement).style.height = "0";
      
      //News items
      let news = document.querySelectorAll('a.news-item[href^="#"]'); //3 items
      news.forEach((el:HTMLElement,i)=>{
        el.style.transition = 'all .2s'; 
        el.style.transform = 'translateX(0)'; //Sets items to normal position
      })

      //Display the new button
      newsBtn.current.style.transition = "all 1000ms !important";
      newsBtn.current.style.visibility = "visible";
      newsBtn.current.style.opacity = "1";
    }
  }

  return (
    <div className="pt-16 lg:pt-24 lg:pb-16">
        <div className="">
          <div className="flex flex-col items-center justify-center lg:hidden">
            <Image className="mx-auto mb-4" src={news_icon} alt="news-icon"/>
            <h2 className="text-2xl sm:text-3xl xl:text-4xl text-center font-semibold capitalize mb-5 sm:mb-7 md:mb-9"><span className="font-normal text-[#1EE0E1] italic">Trending</span> Crypto Market News</h2>
            <p className="text-sm sm:text-lg 2xl:text-xl text-center max-w-96 sm:max-w-[530px] mb-10 md:mb-12 ">Set a secondary sales fee and add social links, a description, profile and banner images, and a description.</p>
          </div>

          <div className="flex flex-col items-center gap-y-10 lg:hidden">
            {/* <Slider {...settings}> */}
              <a href="#" className="max-w-[300px] sm:max-w-[370px]">
                <Image className="rounded-2xl object-cover max-w-full h-[250px] mb-4" src={news_1} alt="news-image"/>
                <p className="text-lg mb-1 opacity-55">April 18, 2022</p>
                <p className="text-2xl font-medium line-clamp-2">Few Reasons to Sell NFTs on Nico</p>
              </a>
              <a href="#" className="max-w-[300px] sm:max-w-[370px]">
                <Image className="rounded-2xl object-cover max-w-full h-[250px] mb-4" src={news_2} alt="news-image"/>
                <p className="text-lg mb-1 opacity-55">April 18, 2022</p>
                <p className="text-2xl font-medium line-clamp-2">Few Reasons to Sell NFTs on Nico</p>
              </a>
              <a href="#" className="max-w-[300px] sm:max-w-[370px]">
                <Image className="rounded-2xl object-cover max-w-full h-[250px] mb-4" src={news_1} alt="news-image"/>
                <p className="text-lg mb-1 opacity-55">April 18, 2022</p>
                <p className="text-2xl font-medium line-clamp-2">Few Reasons to Sell NFTs on Nico</p>
              </a>
            {/* </Slider> */}
          </div>

          {/* news block after 1024px-screen */}
          <div className="relative">
            <div className="hidden w-[138%] lg:flex gap-5 xl:gap-10 justify-center items-start">
                <div className="flex flex-1 flex-col items-start justify-start max-w-[420px] xl:max-w-[450px]" ref={newsInfo}>
                  <Image className="mb-6" src={news_icon} alt="news-icon"/>
                  <h2 className="text-2xl sm:text-3xl xl:text-4xl text-left font-semibold capitalize mb-7"><span className="font-normal text-[#1EE0E1] italic">Trending</span> Crypto Market News</h2>
                  <p className="text-sm sm:text-lg 2xl:text-xl text-left max-w-96 sm:max-w-[530px] mb-10 md:mb-12 ">Set a secondary sales fee and add social links, a description, profile and banner images, and a description.</p>
                  
                  <div className="mt-2 lg:mt-0 text-left" onClick={()=>onBtnClick()}>
                    <Button1 title="Explore NFTs"></Button1>
                  </div>
                </div>

                <a href="#" className="news-item max-w-[300px] sm:max-w-[370px] lg:max-w-[310px] 2xl:max-w-[373px] flex-1 translate-x-24">
                  <Image className="rounded-2xl object-cover max-w-full h-[250px] mb-4 2xl:mb-6" src={news_1} alt="news-image"/>
                  <p className="opacity-55 text-sm lg:text-lg 2xl:text-xl mb-1 lg:mb-3 2xl:mb-5">April 18, 2022</p>
                  <p className="text-md lg:text-2xl 2xl:text-3xl font-medium lg:font-bold line-clamp-2">Few Reasons to Sell NFTs on Nico</p>
                </a>
                <a href="#" className="news-item max-w-[300px] sm:max-w-[370px] lg:max-w-[310px] 2xl:max-w-[373px] flex-1 translate-x-24">
                  <Image className="rounded-2xl object-cover max-w-full h-[250px] mb-4 2xl:mb-6" src={news_2} alt="news-image"/>
                  <p className="opacity-55 text-sm lg:text-lg 2xl:text-xl mb-1 lg:mb-3 2xl:mb-5">April 18, 2022</p>
                  <p className="text-md lg:text-2xl 2xl:text-3xl font-medium lg:font-bold line-clamp-2">Few Reasons to Sell NFTs on Nico</p>
                </a>
                <a href="#" className="news-item max-w-[300px] sm:max-w-[370px] lg:max-w-[310px] 2xl:max-w-[373px] flex-1 translate-x-24">
                  <Image className="rounded-2xl object-cover max-w-full h-[250px] mb-4 2xl:mb-6" src={news_1} alt="news-image"/>
                  <p className="opacity-55 text-sm lg:text-lg 2xl:text-xl mb-1 lg:mb-3 2xl:mb-5">April 18, 2022</p>
                  <p className="text-md lg:text-2xl 2xl:text-3xl font-medium lg:font-bold line-clamp-2">Few Reasons to Sell NFTs on Nico</p>
                </a>
            </div>

            <div ref={newsBtn} className="collapse opacity-0 transition-all absolute top-[100%] left-1/2 -translate-x-1/2 mt-6 lg:mt-12 text-center">
              <Button1 title="Explore NFTs"></Button1>
            </div>
          </div>
          {/* end */}

          <div className="mt-8 lg:mt-12 text-center lg:hidden">
            <Button1 title="Explore NFTs"></Button1>
          </div>
        </div>
    </div>
  )
}
