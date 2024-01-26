"use client"
import style from "./Product.module.scss";
import { useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";

export default function Products() {
    const [tabs, setTabs] = useState([
        {id:1, title:'All', classes:''},
        {id:2, title:'Hape prime', classes:''},
        {id:3, title:'Lazy Lions', classes:''},
        {id:4, title:'Peaceful ape', classes:''},
    ])

    const tabClick = (index: number) => {
        const updatedTabs = tabs.map((tab, i) => ({
            ...tab,
            classes: i === index ? style["tab"] : '',
          }));
          setTabs(updatedTabs);
    };

    return (
        <section id="Products" className="">
            <h2 className="text-2xl text-center font-semibold capitalize mb-5"><span className="font-normal text-[#1EE0E1] italic">Most Popular</span> NFTs</h2>
            <div className="flex justify-center items-center gap-9 text-sm mb-14">
                {tabs.map((el, i)=>(
                    <div 
                    className={`cursor-pointer ${el.classes}`}
                    onClick={()=>tabClick(i)}
                    key={el.id}
                    >{el.title}</div>    
                ))}
            </div> 
            <div className="flex flex-col gap-y-10">
                <ProductCard title="CCyber Samurai #575" price={8.5} rating={4} img="/images/nft-3.png"></ProductCard>
                <ProductCard title="Cyber Samurai #784" price={7.5} rating={3} img="/images/nft-2.png"></ProductCard>
                <ProductCard title="Cyber Samurai #475" price={15.5} rating={3} img="/images/nft-3.png"></ProductCard>

                <ProductCard title="Cyber Samurai #784" price={7.5} rating={5} img="/images/nft-4.png"></ProductCard>
                <ProductCard title="Cyber Samurai #784" price={7.5} rating={4} img="/images/nft-5.png"></ProductCard>
                <ProductCard title="Cyber Samurai #475" price={15.5} rating={4} img="/images/nft-6.png"></ProductCard>
            </div>
        </section>
    )
}
