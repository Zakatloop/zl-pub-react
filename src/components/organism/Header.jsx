export default function Header({topBars}) {
    return (
        <>
            {/* Headers */}
            <div className="flex flex-row w-full px-8 py-4 bg-white sticky top-0 justify-center items-center gap-14 z-50">
                <div className="flex flex-row w-1/5 h-full justify-evenly items-center mt-2">
                
                    <img
                        src={ topBars[0]?.documents[0]?.dir }
                        alt="ZakatLoop Logo"
                        width="94"
                        height="94"
                    ></img>
                    {/* <div className="flex flex-row px-4 py-2 cursor-pointer hover:bg-white hover:text-green-700 text-white rounded-full justify-center items-center transition duration-700 font-semibold hover:font-bold">
                    <span className="text-xl">Slogan</span>
                </div>
                <a href="#visi-misi">
                    <div className="flex flex-row px-4 py-2 cursor-pointer hover:bg-white hover:text-green-700 text-white rounded-full justify-center items-center transition duration-700 font-semibold hover:font-bold">
                        <span className="text-xl">Visi Misi</span>
                    </div>
                </a>
                <div className="flex flex-row px-4 py-2 cursor-pointer hover:bg-white hover:text-green-700 text-white rounded-full justify-center items-center transition duration-700 font-semibold hover:font-bold">
                    <span className="text-xl">Statistik</span>
                </div> */}
                </div>
                {/* <div className="flex flex-row w-2/12  p-5 items-center justify-center">
                <div className="absolute top-0 flex flex-row px-6 pb-4 pt-2 cursor-pointer justify-center items-center transition duration-700 bg-green-700 rounded-2xl">
                
                    <img src="/images/zl_logo3.png" alt="ZakatLoop Logo" width="96" height="96"></img>
                </div>
            </div> */}
                <div className="flex flex-row w-4/5 justify-end items-end gap-2">
                    {
                        topBars.map((el, idx) => {
                            if (idx > 0) {
                                return (
                                    <div key={idx} className="flex flex-row px-4 py-2 cursor-pointer hover:text-green-700 text-green-600 rounded-full justify-center items-center transition duration-700 font-semibold hover:font-bold">
                                        <span className="text-lg">{ el.content }</span>
                                    </div>
                                );
                            } else {
                                return null;
                            }
                        })
                    }

                    {/* <div className="flex flex-row px-4 py-2 cursor-pointer hover:text-green-700 text-green-600 rounded-full justify-center items-center transition duration-700 font-semibold hover:font-bold">
                        <span className="text-lg">Tentang Kami </span>
                    </div>
                    <div className="flex flex-row px-4 py-2 cursor-pointer hover:text-green-700 text-green-600 rounded-full justify-center items-center transition duration-700 font-semibold hover:font-bold">
                        <span className="text-lg">Our Values</span>
                    </div>
                    <div className="flex flex-row px-4 py-2 cursor-pointer hover:text-green-700 text-green-600 rounded-full justify-center items-center transition duration-700 font-semibold hover:font-bold">
                        <span className="text-lg">Our Program</span>
                    </div>
                    <div className="flex flex-row px-4 py-2 cursor-pointer hover:text-green-700 text-green-600 rounded-full justify-center items-center transition duration-700 font-semibold hover:font-bold">
                        <span className="text-lg">Kontak Kami</span>
                    </div> */}
                </div>
            </div>
        
        </>
    );
}