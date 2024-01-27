import Burger from "../Burger/Burger";
import Button2 from "../Button2/Button2";

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
            <Button2>Get In Touch</Button2>
        </nav>
    </header>
  )
}
