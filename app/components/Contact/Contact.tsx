interface ContactProps{
    text_1: string,
    text_2?: string
}

export default function Contact({text_1, text_2}: ContactProps) {
  return (
    <div className="flex flex-col items-center gap-8">
        {/* the circle */}
        <div className="relative w-20 h-20 bg-[#1A124F] rounded-full before:absolute before:w-1/2 before:h-1/2 before:bg-[#100943] before:rounded-full before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2"></div>
        {/* the info */}
        <div className="text-center">
            <p className="text-xl mb-2">{text_1}</p>
            <p className="text-xl mb-2">{text_2}</p>
        </div>
    </div>
  )
}
