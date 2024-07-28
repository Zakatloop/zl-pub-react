export default function Footer() {
    return (
        <footer className="w-full h-60 flex flex-row px-16 py-4 bg-slate-200">
            <div className="w-1/2 h-full flex flex-row">
                <div className="w-1/2 h-full flex flex-col">
                    <div className="flex w-full h-1/3">
                        <span className="font-light text-xs">For business communication, vendors, etc. (excluding charitable donations), contact us using our Administrative office address:</span>
                    </div>
                    <div className="flex flex-col w-full h-1/3">
                        <span className="font-semibold text-xs">Zakatloop</span>
                        <span className="font-semibold text-xs">(KitaBisa HQ)</span>
                        <span className="font-semibold text-xs">Jl. Raya Cilandak KKO No.31 14, RT.1/RW.8, Ragunan, Ps. Minggu,</span>
                        <span className="font-semibold text-xs">Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12550, Indonesia</span>
                    </div>
                </div>
                <div className="w-1/2 h-full flex flex-col">
                    <div className="flex w-full h-1/3">
                        <span className="font-light text-xs">For donations, please send to our Institute For Food & Development Policy Gift procession office:</span>
                    </div>
                    <div className="flex flex-col w-full h-1/3">
                        <span className="font-semibold text-xs">Zakatloop</span>
                        <span className="font-semibold text-xs">(KitaBisa HQ)</span>
                        <span className="font-semibold text-xs">Jl. Raya Cilandak KKO No.31 14, RT.1/RW.8, Ragunan, Ps. Minggu,</span>
                        <span className="font-semibold text-xs">Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12550, Indonesia</span>
                        {/* <span className="font-semibold text-xs">Lockbox: 913469</span>
                        <span className="font-semibold text-xs">Pasadena, CA 91107-9905</span> */}
                    </div>
                </div>
            </div>
            <div className="w-1/2 h-full flex flex-row">
                <div className="w-1/2 h-full flex flex-col">
                    <div className="flex w-full h-1/5">
                        <span className="font-semibold text-xs">Get In Touch</span>
                    </div>
                    <div className="flex flex-col w-full h-1/3">
                        <span className="font-light text-xs">For donations, please contact <span className="font-normal text-xs">development@foodfirst.org</span>. For all other non donation inquiries, please send inquires to <span className="font-normal text-xs">info@foodfirst.org</span>.</span>
                    </div>
                    <div className="flex w-full h-1/5">
                        <span className="font-semibold text-xs">1-240-271-8685</span>
                    </div>
                </div>
                <div className="w-1/2 h-full flex flex-col ">
                    <div className="flex w-full h-1/3">
                        <span className="font-light text-xs">For donations, please send to our Institute For Food & Development Policy Gift procession office:</span>
                    </div>
                    <div className="flex flex-col w-full h-1/3">
                        <a href="https://kitabisa.com/campaign/ZakatLoop"><span className="font-semibold text-xs">KitaBisa Campaign</span></a>
                        {/* <span className="font-semibold text-xs"></span> */}
                        <span className="font-semibold text-xs">Twitter</span>
                        <a href="https://www.instagram.com/zakatloop/"><span className="font-semibold text-xs">Instagram</span></a>
                    </div>
                
                </div>
            </div>
    
        </footer>
    );
}