export default function Footer() {
  return (
    <footer className="pt-24">
        <div className="lg:flex lg:gap-4 lg:justify-between border-t border-white border-opacity-25 py-10">
            <div className="text-center lg:text-left">Copyright © 2022 Nazmul Shanto. All Rights Reserved</div>
            <div className="lg:flex gap-4 xl:gap-10">
                <a className="opacity-30 transition hover:opacity-100" href="#">Home</a>
                <a className="opacity-30 transition hover:opacity-100" href="#">All NFTs</a>
                <a className="opacity-30 transition hover:opacity-100" href="#">Team</a>
                <a className="opacity-30 transition hover:opacity-100" href="#">Terms & Co.</a>
                <a className="opacity-30 transition hover:opacity-100" href="#">Contact</a>
            </div>
        </div>
    </footer>
  )
}
