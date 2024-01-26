import Burger from "../Burger/Burger";
import { Button } from "@mui/material";

export default function Navbar() {

  return (
    <header className="py-5 xl:py-7">
        <nav className="flex justify-between items-center">
            <div className="bg-clip-text text-transparent bg-gradient-to-b from-[#DF1CFF] to-[#EA0070] font-extrabold text-lg md:text-xl lg:text-2xl 2xl:text-3xl uppercase"> <a href="#">knft.</a></div>
            <Burger></Burger>
            <ul className='hidden sm:flex gap-5 md:gap-8 lg:gap-12 capitalize text-xs md:text-sm lg:text-base 2xl:text-xl'>
                <li className="opacity-45 hover:opacity-100 transition duration-150"><a href="#">Home</a></li>
                <li className="opacity-45 hover:opacity-100 transition duration-150"><a href="#">All NFTs</a></li>
                <li className="opacity-45 hover:opacity-100 transition duration-150"><a href="#">Team</a></li>
                <li className="opacity-45 hover:opacity-100 transition duration-150"><a href="#">Terms & Co.</a></li>
                <li className="opacity-45 hover:opacity-100 transition duration-150"><a href="#">Contact</a></li>
            </ul>
              <Button className="Button" variant="outlined" size='small' sx={{
                borderRadius: '8px',
                background: 'linear-gradient(#04011C, #04011C) padding-box,linear-gradient(to right, #E50AA7, rgba(208, 17, 204, 0.15)) border-box !important',
                border: '1.3px solid transparent !important',
                padding: "7px 0",
                display: 'none',
                color: 'white',
                fontSize: '12px',
                textTransform: 'capitalize',
                fontWeight: '700',
                '@media(min-width: 640px)':{
                  display: 'block',
                  padding: '8px 10px'
                },
                '@media(min-width: 768px)':{
                  fontSize: '14px',
                },
                '@media(min-width: 1024px)':{
                  fontSize: '16px',
                  padding: '8px 25px'
                },
                '@media(min-width: 1280px)':{
                  fontSize: '20px',
                  padding: '8px 35px'
                }
              }}>Get in Touch</Button>
        </nav>
    </header>
  )
}
