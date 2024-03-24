import { TypeAnimation } from "react-type-animation";

export default function Home() {
    return (
        <>
            {/* Headers */}
            <div className="flex flex-row w-full px-8 py-4 bg-white sticky top-0 justify-center items-center gap-14 z-10">
                <div className="flex flex-row w-1/5 h-full justify-evenly items-center mt-2">
                    <img src="/images/zl_logo4.png" alt="ZakatLoop Logo" width="94" height="94"></img>
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
                    <div className="flex flex-row px-4 py-2 cursor-pointer hover:text-green-700 text-green-600 rounded-full justify-center items-center transition duration-700 font-semibold hover:font-bold">
                        <span className="text-lg">Tentang Kami</span>
                    </div>
                    <div className="flex flex-row px-4 py-2 cursor-pointer hover:text-green-700 text-green-600 rounded-full justify-center items-center transition duration-700 font-semibold hover:font-bold">
                        <span className="text-lg">Program</span>
                    </div>
                    <div className="flex flex-row px-4 py-2 cursor-pointer hover:text-green-700 text-green-600 rounded-full justify-center items-center transition duration-700 font-semibold hover:font-bold">
                        <span className="text-lg">Publikasi</span>
                    </div>
                    <div className="flex flex-row px-4 py-2 cursor-pointer hover:text-green-700 text-green-600 rounded-full justify-center items-center transition duration-700 font-semibold hover:font-bold">
                        <span className="text-lg">Kontak Kami</span>
                    </div>
                </div>
            </div>

            {/* Slogan */}
            <div className="overflow-y-hidden overflow-x-hidden p-10">
                <div className="2xl:mx-auto lg:py-2 lg:px-20 md:py-12 md:px-6 py-9 px-4">
                    <div>
                        <div className="flex items-center">
                            <div className="w-1/3 pb-6 md:pb-0 md:pr-6 flex-col md:block flex items-center justify-center md:pt-0 pt-4">
                                <TypeAnimation
                                    // style={{ whiteSpace: 'pre-line', height: '195px', display: 'block' }}
                                    className="text-8xl font-bold text-green-700"
                                    sequence={[
                                        `Empowering\nChanges for\nTomorrow`,
                                        5000,
                                        ''
                                    ]}
                                    repeat={Infinity}
                                />
                            </div>
                            <div className="flex justify-end w-2/3">

                                <div class="relative h-64 w-64 bg-green-600 rounded-full">
                                    <div class="absolute h-32 w-32 -left-12 -top-4 bg-purple-400 shadow-xl rounded-md">
                                        <img src="/images/tf1.3.jpg" className="w-full h-full shadow-xl rounded-md" />
                                    </div>
                                    <div class="absolute h-32 w-32 left-24 -top-12 bg-pink-400 shadow-xl rounded-md">
                                        <img src="/images/sf1.2.png" className="w-full h-full shadow-xl rounded-md" />
                                    </div>
                                    <div class="absolute h-32 w-32 left-16 top-16 bg-pink-400 shadow-xl rounded-md">
                                        <img src="/images/sf2.2.jpg" className="w-full h-full shadow-xl rounded-md" />
                                    </div>
                                    <div class="absolute h-32 w-32 left-52 bottom-6 bg-pink-400 shadow-xl rounded-md">
                                        <img src="/images/sf1.1.jpg" className="w-full h-full shadow-xl rounded-md" />
                                    </div>
                                    <div class="absolute h-32 w-32 right-36 -bottom-8 bg-pink-400 shadow-xl rounded-md">
                                        <img src="/images/sf2.1.jpg" className="w-full h-full shadow-xl rounded-md" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Visi - Misi */}
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



                        <div
                            className="w-full lg:w-6/12 p-10 flex flex-col items-center justify-center text-center"
                        >
                            <h2
                                className="w-full font-bold lg:text-5xl text-3xl lg:leading-10 leading-9 text-left whitespace-normal"
                            >
                                Apa itu ZakatLoop?
                            </h2>
                            <p
                                className="font-normal text-base leading-6 text-gray-700 mt-6 text-left whitespace-normal"
                            >
                                ZakatLoop adalah organisasi non-profit yang menyalurkan dan
                                mendistribusikan zakat. ZakatLoop telah memiliki lisensi Unit
                                Pengumpul Zakat (UPZ) di bawah ZakatHub dan diawasi oleh BAZNAS dan
                                Kitabisa. Fokus kegiatan ZakatLoop adalah untuk memberdayakan
                                generasi muda melalui berbagai macam bentuk penyaluran Zakat
                                produktif yang dapat memberikan dampak berkelanjutan.
                            </p>
                        </div>
                    </div>


                    <div className="p-10">
                        <div className="relative mt-20" id="visi-misi">
                            <div className="w-full lg:w-6/12">
                                <h2
                                    className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-left"
                                >
                                    Our Mission
                                </h2>
                            </div>
                            <br />
                            <hr className="z-10 absolute bottom-0 w-full bg-gray-700" />
                        </div>



                        <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-8 gap-4 mt-5">
                            <div className="w-full flex p-5 shadow-lg shadow-green-800">
                                <div className="">
                                    <p
                                        className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-700 text-left"
                                    >
                                        First
                                    </p>
                                    <p
                                        className="mt-4 font-normal text-base leading-6 text-gray-600 text-left"
                                    >
                                        Membentuk lingkaran kebaikan yang berputar secara terus-menerus.
                                    </p>
                                </div>
                            </div>

                            <div className="w-full flex p-5 shadow-lg shadow-green-800">
                                <div className="">
                                    <p
                                        className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-700 text-left"
                                    >
                                        Second
                                    </p>
                                    <p
                                        className="mt-4 font-normal text-base leading-6 text-gray-600 text-left"
                                    >
                                        Mentransformasi kehidupan Mustahik menjadi Muzakki dan membantu
                                        Mustahik lain.
                                    </p>
                                </div>
                            </div>

                            <div className="w-full flex p-5 shadow-lg shadow-green-800">
                                <div className="">
                                    <p
                                        className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-700 text-left"
                                    >
                                        Third
                                    </p>
                                    <p
                                        className="mt-4 font-normal text-base leading-6 text-gray-600 text-left"
                                    >
                                        Mentransformasi kehidupan Mustahik menjadi Muzakki dan membantu
                                        Mustahik lain.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}