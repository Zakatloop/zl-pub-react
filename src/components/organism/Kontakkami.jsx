export default function Kontakkami() {
    return (
        <div className="relative">
            {/* <img
                src="https://cdn.tuk.dev/assets/templates/radian/Back_Image.png"
                className="h-2/5 lg:h-full w-full lg:w-1/2 absolute inset-0 object-cover object-center xl:block hidden"
                alt="map"
                /> */}
            <div className="xl:mx-auto xl:container relative ">
                <div className="flex flex-wrap xl:mx-auto xl:container">
                    <div className="w-full relative lg:w-1/2 xl:mt-10 mb-10 2xl:pr-24 2xl:pl-0 xl:pl-12 pl-0 ">
                        {/* <img
                    src="https://cdn.tuk.dev/assets/templates/radian/Back_Image.png"
                    className="h-full w-full xl:w-1/2 absolute inset-0 bg-cover bg-center xl:hidden"
                    alt="map"
                /> */}
                        <div className="w-full flex flex-col items-start  xl:justify-start  relative z-20 xl:px-0 px-4 xl:py-0 py-4">
                            <div className="w-full 2xl:pl-20 xl:pt-1">
                                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-wider text-gray-800">
                                    Hubungi Kami
                                </h1>
                                <div className="w-full md:w-10/12 mt-3">
                                    <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider">
                                        Punya pertanyaan tentang kami? Jangan ragu untuk hubungi
                                        kami kapanpun.
                                    </h2>
                                    <div className="mt-4 md:mt-8">
                                        <h2 className="text-md md:text-base text-green-700 font-semibold">
                                            Alamat
                                        </h2>
                                        <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">
                                            Jl. Raya Cilandak KKO No.31 14, RT.1/RW.8, Ragunan, Ps.
                                            Minggu, Kota Jakarta Selatan, Daerah Khusus Ibukota
                                            Jakarta 12550, Indonesia
                                        </h2>
                                    </div>
                                    <div className="mt-4 md:mt-8">
                                        <h2 className="text-md md:text-base text-green-700 font-semibold">
                                            Telepon
                                        </h2>
                                        <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">
                                            (+62) 051 4567890
                                        </h2>
                                    </div>
                                    <div className="mt-4 md:mt-8">
                                        <h2 className="text-md md:text-base text-green-700 font-semibold">
                                            Email
                                        </h2>
                                        <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">
                                            zakatloop@example.com
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 ">
                        {/* <div className="flex flex-col items-start xl:justify-start 2xl:justify-end xl:px-0 px-4">
            <div className="w-full 2xl:w-8/12 mt-3">
            <div className="mt-4 md:mt-8">
                <p className="text-gray-800 text-base font-medium">Name</p>
                <input
                className="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black py-5 pl-4 text-gray-800"
                type="text"
                placeholder="Your Name"
                />
            </div>
            <div className="mt-4 md:mt-8">
                <p className="text-gray-800 text-base font-medium">
                Email Address
                </p>
                <input
                className="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black py-5 pl-4 text-gray-800"
                type="email"
                placeholder="Your Name"
                />
            </div>
            <div className="mt-4 md:mt-8">
                <p className="text-gray-800 text-base font-medium">
                Message
                </p>
                <textarea
                className="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 resize-none hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black xl:h-40 py-5 pl-4 text-gray-800"
                type="text"
                placeholder="Your Message"
                defaultValue={""}
                />
            </div>
            <div className="py-5">
                <button className="py-3 md:py-5 px-5 md:px-10 bg-green-700 text-white hover:opacity-90 ease-in duration-150 text-sm md:text-lg tracking-wider font-semibold">
                Send
                </button>
            </div>
            </div>
        </div> */}
                        <div className="w-full h-full rounded-4xl overflow-hidden">
                            <iframe
                                className="w-full h-full p-5"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.6548116104273!2d106.81140987407998!3d-6.308999561739795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69efe3a453ad6d%3A0x1f84ea872ce73988!2sKitabisa%20HQ!5e0!3m2!1sen!2sus!4v1711254162837!5m2!1sen!2sus"
                                //   width="600"
                                //   height="450"
                                style={{ border: 0 }}
                                //   allowfullscreen="yes"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}