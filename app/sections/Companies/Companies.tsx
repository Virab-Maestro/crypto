import Image from "next/image"
import comp_1 from "/public/images/comp-1.svg";
import comp_2 from "/public/images/comp-2.svg";
import comp_3 from "/public/images/comp-3.svg";
import comp_4 from "/public/images/comp-4.svg";
import comp_5 from "/public/images/comp-5.svg";
import comp_6 from "/public/images/comp-6.svg";

export default function Companies() {
  return (
    <div className="flex flex-col sm:flex-row sm:gap-x-10 lg:gap-x-20 items-center justify-center flex-wrap gap-y-8 pt-14 lg:pt-24 2xl:pt-28">
        <div>
            <Image src={comp_1} alt="companies-icon" />
        </div>
        <div>
            <Image src={comp_2} alt="companies-icon" />
        </div>
        <div>
            <Image src={comp_3} alt="companies-icon" />
        </div>
        <div>
            <Image src={comp_4} alt="companies-icon" />
        </div>
        <div>
            <Image src={comp_5} alt="companies-icon" />
        </div>
        <div>
            <Image src={comp_6} alt="companies-icon" />
        </div>
    </div>
  )
}
