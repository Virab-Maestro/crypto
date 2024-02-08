import Button1 from "../../components/Button1/Button1";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import Social from "../../components/Social/Social";
import Contact from "../../components/Contact/Contact";

export default function Contacts() {
  return (
    <div className="flex flex-col items-center pt-24 lg:pt-40">
        <h2 className="contacts__title">Get in Touch</h2>
        <form action="/" method="post" className="w-full">
            <input type="email" placeholder="Enter your email address" className="block text-base lg:text-xl py-3 md:py-4 lg:py-6 pl-3 md:pl-5 md:pl-6 w-full max-w-[700px] mx-auto bg-[#0D0D2D] rounded-xl placeholder:text-base lg:placeholder:text-xl mb-10 outline-none" />
            <Button1 title="Contact Us" width={false} classes="flex mx-auto"/>
        </form>

        <div className="flex flex-col md:flex-row md:justify-between gap-14 pt-20">
            <Contact text_1="example@gmail.com" text_2="sample@gmail.com"/>
            <Contact text_1="We are on Telegram" text_2="@NicoCryptoChannel"/>
            <Contact text_1="+1 800 123 456 789" text_2="+1 800 123 456 780"/>
        </div>

        <div className="flex items-center gap-4 pt-10 md:pt-12">
            <Social img={
                <FacebookIcon sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                }}/>
            }/>
            <Social img={
                <LinkedInIcon sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                }}/>
            }/>
            <Social img={
                <XIcon sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                }}/>
            }/>
            <Social img={
                <InstagramIcon sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                }}/>
            }/>
        </div>
    </div>
  )
}
