export default function Visimisi() {
    return (
        <div className="overflow-y-hidden overflow-x-hidden mt-8">
            <div className="2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
                <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
                    <div className="w-full lg:w-6/12 p-10">
                        <img
                            className="lg:block hidden w-full"
                            src="https://img.kitabisa.cc/size/960/170dc6e7-cb53-43aa-b9a7-d88c6f23f62e.jpg"
                            alt="zakatloop"
                        ></img>
                        <img
                            className="lg:hidden sm:block hidden w-full"
                            src="https://img.kitabisa.cc/size/960/170dc6e7-cb53-43aa-b9a7-d88c6f23f62e.jpg"
                            alt="zakatloop"
                        ></img>
                        <img
                            className="sm:hidden block w-full"
                            src="https://img.kitabisa.cc/size/960/170dc6e7-cb53-43aa-b9a7-d88c6f23f62e.jpg"
                            alt="zakatloop"
                        ></img>
                    </div>

                    <div className="w-full lg:w-6/12 p-10 flex flex-col items-center justify-center text-center">
                        <h2 className="w-full font-bold lg:text-5xl text-3xl lg:leading-10 leading-9 text-left whitespace-normal">
                            Apa itu ZakatLoop?
                        </h2>
                        <p className="font-normal text-base leading-6 text-gray-700 mt-6 text-left whitespace-normal">
                            ZakatLoop adalah organisasi non-profit yang menyalurkan dan
                            mendistribusikan zakat. ZakatLoop telah memiliki lisensi Unit
                            Pengumpul Zakat (UPZ) di bawah ZakatHub dan diawasi oleh BAZNAS
                            dan Kitabisa. Fokus kegiatan ZakatLoop adalah untuk
                            memberdayakan generasi muda melalui berbagai macam bentuk
                            penyaluran Zakat produktif yang dapat memberikan dampak
                            berkelanjutan.
                        </p>
                        <div className="flex flex-row w-full h-full justify-center items-center">
                            <div className="px-6 py-2 flex justify-center items-center rounded-full bg-orange-500 cursor-pointer transition-all duration-700 shadow-xl italic hover:bg-white hover:border-4 hover:border-orange-500 hover:text-orange-500 text-white font-semibold text-xl hover:font-bold"><a href="https://kitabisa.com/campaign/ZakatLoop" target="_blank">Donate Now !</a></div>
                        </div>
                    </div>
                </div>

                <div className="p-10">
                    <div className="relative mt-20" id="visi-misi">
                        <div className="w-full lg:w-6/12">
                            <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-left">
                                Our Values
                            </h2>
                        </div>
                        <br />
                        <hr className="z-10 absolute bottom-0 w-full bg-gray-700" />
                    </div>

                    <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-8 gap-4 mt-5">
                        <div className="w-full flex p-5 shadow-lg shadow-green-800">
                            <div className="">
                                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-700 text-left">
                                    First
                                </p>
                                <p className="mt-4 font-normal text-base leading-6 text-gray-600 text-left">
                                    Membentuk lingkaran kebaikan yang berputar secara
                                    terus-menerus.
                                </p>
                            </div>
                        </div>

                        <div className="w-full flex p-5 shadow-lg shadow-green-800">
                            <div className="">
                                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-700 text-left">
                                    Second
                                </p>
                                <p className="mt-4 font-normal text-base leading-6 text-gray-600 text-left">
                                    Mentransformasi kehidupan Mustahik menjadi Muzakki dan
                                    membantu Mustahik lain.
                                </p>
                            </div>
                        </div>

                        <div className="w-full flex p-5 shadow-lg shadow-green-800">
                            <div className="">
                                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-700 text-left">
                                    Third
                                </p>
                                <p className="mt-4 font-normal text-base leading-6 text-gray-600 text-left">
                                    Mentransformasi kehidupan Mustahik menjadi Muzakki dan
                                    membantu Mustahik lain.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}