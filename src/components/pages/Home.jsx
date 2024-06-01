import { TypeAnimation } from "react-type-animation";

export default function Home() {
    return (
        <>
            {/* Headers */}
            <div className="flex flex-row w-full px-8 py-4 bg-white sticky top-0 justify-center items-center gap-14 z-50">
                <div className="flex flex-row w-1/5 h-full justify-evenly items-center mt-2">
                    <img
                        src="/images/zl_logo4.png"
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
                    <div className="flex flex-row px-4 py-2 cursor-pointer hover:text-green-700 text-green-600 rounded-full justify-center items-center transition duration-700 font-semibold hover:font-bold">
                        <span className="text-lg">Tentang Kami</span>
                    </div>
                    <div className="flex flex-row px-4 py-2 cursor-pointer hover:text-green-700 text-green-600 rounded-full justify-center items-center transition duration-700 font-semibold hover:font-bold">
                        <span className="text-lg">Our Values</span>
                    </div>
                    <div className="flex flex-row px-4 py-2 cursor-pointer hover:text-green-700 text-green-600 rounded-full justify-center items-center transition duration-700 font-semibold hover:font-bold">
                        <span className="text-lg">Our Program</span>
                    </div>
                    <div className="flex flex-row px-4 py-2 cursor-pointer hover:text-green-700 text-green-600 rounded-full justify-center items-center transition duration-700 font-semibold hover:font-bold">
                        <span className="text-lg">Kontak Kami</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-row w-full h-screen pb-48">
                <div className="flex items-center justify-center w-1/2 pl-24">
                    <TypeAnimation
                        // style={{ whiteSpace: 'pre-line', height: '195px', display: 'block' }}
                        className="text-8xl font-bold text-green-700"
                        sequence={[`Empowering\nChanges for\nTomorrow`, 5000, ""]}
                        repeat={Infinity}
                    />
                </div>
                <div className="flex items-center justify-center w-1/2">
                    <div class="relative h-64 w-64 bg-green-600 rounded-full">
                        <div class="absolute h-32 w-32 -left-12 -top-4 bg-purple-400 shadow-xl rounded-md">
                            <img
                                src="/images/tf1.1.jpg"
                                className="w-full h-full shadow-xl rounded-md"
                            />
                        </div>
                        <div class="absolute -z-10 h-32 w-32 -left-40 bottom-14 bg-purple-400 shadow-xl rounded-md">
                            <img
                                src="/images/sf1.1.jpg"
                                className="w-full h-full shadow-xl rounded-md"
                            />
                        </div>
                        <div class="absolute h-32 w-32 z-20 left-36 -top-12 bg-pink-400 shadow-xl rounded-md">
                            <img
                                src="/images/tf1.2.jpg"
                                className="w-full h-full shadow-xl rounded-md"
                            />
                        </div>
                        <div class="absolute h-32 w-32 left-72 -top-1 z-10 bg-pink-400 shadow-xl rounded-md">
                            <img
                                src="/images/sf2.3.jpg"
                                className="w-full h-full shadow-xl rounded-md"
                            />
                        </div>
                        <div class="absolute h-32 w-32 z-10 left-16 top-16 bg-pink-400 shadow-xl rounded-md">
                            <img
                                src="/images/tf1.3.jpg"
                                className="w-full h-full shadow-xl rounded-md"
                            />
                        </div>
                        <div class="absolute h-32 w-32 left-52 bottom-6 bg-pink-400 shadow-xl rounded-md">
                            <img
                                src="/images/tf1.4.jpg"
                                className="w-full h-full shadow-xl rounded-md"
                            />
                        </div>
                        <div class="absolute h-32 w-32 left-36 -bottom-28 bg-pink-400 shadow-xl rounded-md">
                            <img
                                src="/images/tf1.5.jpg"
                                className="w-full h-full shadow-xl rounded-md"
                            />
                        </div>
                        <div class="absolute h-32 w-32 right-36 -bottom-8 bg-pink-400 shadow-xl rounded-md">
                            <img
                                src="/images/sf2.1.jpg"
                                className="w-full h-full shadow-xl rounded-md"
                            />
                        </div>
                        <div class="absolute h-32 w-32 -left-40 -bottom-24 bg-pink-400 shadow-xl rounded-md">
                            <img
                                src="/images/sf2.2.jpg"
                                className="w-full h-full shadow-xl rounded-md"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Slogan */}
            {/* <div className="overflow-y-hidden w-100 p-10">
        <div className="2xl:mx-auto lg:py-2 lg:px-20 md:py-12 md:px-6 py-9 px-4">

            <div className="flex items-center">
              <div className="w-1/3 pb-6 md:pb-0 md:pr-6 flex-col md:block flex items-center justify-center md:pt-0 pt-4">
                <TypeAnimation
                  // style={{ whiteSpace: 'pre-line', height: '195px', display: 'block' }}
                  className="text-8xl font-bold text-green-700"
                  sequence={[`Empowering\nChanges for\nTomorrow`, 5000, ""]}
                  repeat={Infinity}
                />
              </div>
              <div className="flex justify-end w-2/3">
                <div class="relative h-64 w-64 bg-green-600 rounded-full">
                  <div class="absolute h-32 w-32 -left-12 -top-4 bg-purple-400 shadow-xl rounded-md">
                    <img
                      src="/images/tf1.1.jpg"
                      className="w-full h-full shadow-xl rounded-md"
                    />
                  </div>
                  <div class="absolute h-32 w-32 left-24 -top-12 bg-pink-400 shadow-xl rounded-md">
                    <img
                      src="/images/tf1.2.jpg"
                      className="w-full h-full shadow-xl rounded-md"
                    />
                  </div>
                  <div class="absolute h-32 w-32 left-16 top-16 bg-pink-400 shadow-xl rounded-md">
                    <img
                      src="/images/tf1.3.jpg"
                      className="w-full h-full shadow-xl rounded-md"
                    />
                  </div>
                  <div class="absolute h-32 w-32 left-52 bottom-6 bg-pink-400 shadow-xl rounded-md">
                    <img
                      src="/images/tf1.4.jpg"
                      className="w-full h-full shadow-xl rounded-md"
                    />
                  </div>
                  <div class="absolute h-32 w-32 right-36 -bottom-8 bg-pink-400 shadow-xl rounded-md">
                    <img
                      src="/images/sf2.1.jpg"
                      className="w-full h-full shadow-xl rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
        
        </div>
      </div> */}

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

            {/* OKA ADD NEW */}

            <div class="bg-green-400">
                <section class="relative pt-24 pb-36 overflow-hidden">
                    <img
                        class="absolute bottom-0 left-1/2 transform -translate-x-1/2"
                        src="flaro-assets/images/contact/gradient.svg"
                        alt=""
                    />
                    <div class="relative z-10 container px-4 mx-auto">
                        <p class="mb-5 text-3xl md:text-6xl xl:text-8xl text-center font-bold font-heading tracking-px-n leading-none animate-bounce">
                            Our Program
                        </p>
                        <p class="mb-20 text-lg text-gray-600 text-center font-medium leading-normal md:max-w-lg mx-auto">
                            Lorem ipsum dolor sit amet, to the con adipiscing. Volutpat tempor
                            to the condimentum vitae vel purus.
                        </p>

                        {/* EACH MISSIONS START */}
                        <div class="flex flex-wrap -m-3">
                            <div class="w-full md:w-1/3 p-3">
                                {/*  */}

                                <div class="p-11 h-full text-center bg-white bg-opacity-90 border border-blueGray-100 rounded-xl shadow-11xl hover:scale-125 transition ease-in-out duration-300">
                                    <div class="mb-6 relative mx-auto w-16 h-16 bg-green-700 border border-blueGray-200 rounded-full">
                                        <div class="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                            {/* <img> */}
                                        </div>
                                    </div>
                                    <h3 class="mb-3 text-xl font-bold font-heading leading-snug">
                                        Tech Fellowship Program
                                    </h3>
                                    <p class="font-medium max-w-xs mx-auto text-gray-600 leading-relaxed">
                                        Lorem ipsum dolor sit amet, to the con adipiscing. Volutpat
                                        tempor to the condimentum vitae vel purus.
                                    </p>
                                </div>
                                {/*  */}
                            </div>

                            <div class="w-full md:w-1/3 p-3">
                                {/*  */}
                                <div class="p-11 h-full text-center bg-white bg-opacity-90 border border-blueGray-100 rounded-xl shadow-11xl hover:scale-125 transition ease-in-out duration-300">
                                    <div class="mb-6 relative mx-auto w-16 h-16 bg-green-700 border border-blueGray-200 rounded-full">
                                        <div class="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                            {/* <svg
                      width="32"
                      height="33"
                      viewbox="0 0 32 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 7.16667C4 5.69391 5.19391 4.5 6.66667 4.5H11.039C11.6129 4.5 12.1224 4.86724 12.3039 5.4117L14.301 11.4029C14.5108 12.0324 14.2258 12.7204 13.6324 13.0172L10.6227 14.522C12.0923 17.7816 14.7184 20.4077 17.978 21.8773L19.4828 18.8676C19.7796 18.2742 20.4676 17.9892 21.0971 18.199L27.0883 20.1961C27.6328 20.3776 28 20.8871 28 21.461V25.8333C28 27.3061 26.8061 28.5 25.3333 28.5H24C12.9543 28.5 4 19.5457 4 8.5V7.16667Z"
                        stroke="#4F46E5"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg> */}
                                        </div>
                                    </div>
                                    <h3 class="mb-3 text-xl font-bold font-heading leading-snug">
                                        Student Fellowship
                                    </h3>
                                    <p class="font-medium max-w-xs mx-auto text-gray-600 leading-relaxed">
                                        Lorem ipsum dolor sit amet, to the con adipiscing. Volutpat
                                        tempor to the condimentum vitae vel purus.
                                    </p>
                                </div>
                                {/*  */}
                            </div>

                            <div class="w-full md:w-1/3 p-3">
                                {/*  */}
                                <div class="p-11 h-full text-center bg-white bg-opacity-90 border border-blueGray-100 rounded-xl shadow-11xl transform hover:scale-125 transition ease-in-out duration-300">
                                    <div class="mb-6 relative mx-auto w-16 h-16 bg-green-700 border border-blueGray-200 rounded-full">
                                        <div class="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                            {/* <svg
                      width="32"
                      height="33"
                      viewbox="0 0 32 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.5431 22.7091C22.1797 24.0725 19.192 27.0602 17.4133 28.8389C16.6323 29.62 15.3693 29.6203 14.5883 28.8392C12.8393 27.0903 9.91373 24.1647 8.45818 22.7091C4.29259 18.5435 4.29259 11.7898 8.45818 7.62419C12.6238 3.4586 19.3775 3.4586 23.5431 7.62419C27.7087 11.7898 27.7087 18.5435 23.5431 22.7091Z"
                        stroke="#4F46E5"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M20.0007 15.1667C20.0007 17.3758 18.2098 19.1667 16.0007 19.1667C13.7915 19.1667 12.0007 17.3758 12.0007 15.1667C12.0007 12.9575 13.7915 11.1667 16.0007 11.1667C18.2098 11.1667 20.0007 12.9575 20.0007 15.1667Z"
                        stroke="#4F46E5"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg> */}
                                        </div>
                                    </div>
                                    <h3 class="mb-3 text-xl font-bold font-heading leading-snug">
                                        Mission
                                    </h3>
                                    <p class="font-medium max-w-xs mx-auto text-gray-600 leading-relaxed">
                                        Lorem ipsum dolor sit amet, to the con adipiscing. Volutpat
                                        tempor to the condimentum vitae vel purus.
                                    </p>
                                </div>

                                {/*  */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>

         

            {/* PUBLIKASI */}
            <section class="pt-24 pb-36 bg-white overflow-hidden">
                <div class="container p-5 mx-auto">
                    <h2 class="mb-4 text-5xl md:text-6xl text-center font-bold font-heading tracking-px-n leading-tight font-serif italic">
                        Laporan
                    </h2>
                    <p class="mb-24 font-medium text-gray-600 text-center leading-relaxed md:max-w-lg mx-auto">
                        Lorem ipsum dolor sit amet, to the consectr adipiscing elit.
                        Volutpat tempor to the condimentum vitae vel purus.
                    </p>
                    {/* <a
                          class="inline-block hover:text-blue-400 hover:underline"
                          href="#"
                        >
                          <h3 class="text-xl font-semibold leading-normal">
                            How life insurance helps you during financial
                            insolvency
                          </h3>
                        </a> */}
                </div>

                <div class="container px-4 mx-auto">
                    <div class="flex flex-wrap -mx-4">
                        <div class="w-full lg:w-1/3 px-4 mb-12 lg:mb-0">
                            <div class="max-w-sm mx-auto">
                                <img
                                    class="block w-full h-64 mb-6 object-cover  transform hover:scale-110 transition flip-in duration-500"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1q17H2xR5oSo5VBiot_dCC9XOYDqskvdvyr0Rf8VYiTDrZoMcw4XoQVvoX85QEB7RMFs&usqp=CAU"
                                    alt=""
                                />
                                <span class="text-sm font-semibold uppercase text-gray-200">
                                    10 JUN 2022
                                </span>

                                <a
                                    class="inline-block hover:text-blue-400 hover:underline"
                                    href="#"
                                >
                                    <h3 class="font-heading font-medium text-lg mt-2 mb-4">
                                        There are many variations of passages of Lorem Ipsum
                                        available
                                    </h3>
                                </a>

                                <p class="leading-7 mb-4">
                                    There are many variations of passages of Lorem Ipsum
                                    available.
                                </p>
                                {/* <a
                  class="group inline-flex items-center font-heading font-medium"
                  href="#"
                >
                  <span class="mr-4">Read more</span>
                  <div class="flex items-center justify-center w-10 h-10 rounded-full bg-green-50 group-hover:bg-green-100">
                    <svg
                      width="10"
                      height="8"
                      viewbox="0 0 10 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.49992 4H8.49992M8.49992 4L5.49992 1M8.49992 4L5.49992 7"
                        stroke="#00CBA6"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                </a> */}
                            </div>
                        </div>
                        <div class="w-full lg:w-1/3 px-4 mb-12 lg:mb-0">
                            <div class="max-w-sm mx-auto">
                                <img
                                    class="block w-full h-64 mb-6 object-cover transform hover:scale-110 transition flip-in duration-500"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1q17H2xR5oSo5VBiot_dCC9XOYDqskvdvyr0Rf8VYiTDrZoMcw4XoQVvoX85QEB7RMFs&usqp=CAU"
                                    alt=""
                                />
                                <span class="text-sm font-semibold uppercase text-gray-200">
                                    10 JUN 2022
                                </span>

                                <a
                                    class="inline-block hover:text-blue-400 hover:underline"
                                    href="#"
                                >
                                    <h3 class="font-heading font-medium text-lg mt-2 mb-4">
                                        There are many variations of passages of Lorem Ipsum
                                        available
                                    </h3>
                                </a>
                                <p class="leading-7 mb-4">
                                    There are many variations of passages of Lorem Ipsum
                                    available.
                                </p>
                            </div>
                        </div>
                        <div class="w-full lg:w-1/3 px-4">
                            <div class="max-w-sm mx-auto">
                                <img
                                    class="block w-full h-64 mb-6 object-cover transform hover:scale-110 transition flip-in duration-500"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1q17H2xR5oSo5VBiot_dCC9XOYDqskvdvyr0Rf8VYiTDrZoMcw4XoQVvoX85QEB7RMFs&usqp=CAU"
                                    alt=""
                                />
                                <span class="text-sm font-semibold uppercase text-gray-200">
                                    10 JUN 2022
                                </span>

                                <a
                                    class="inline-block hover:text-blue-400 hover:underline"
                                    href="#"
                                >
                                    <h3 class="font-heading font-medium text-lg mt-2 mb-4">
                                        There are many variations of passages of Lorem Ipsum
                                        available
                                    </h3>
                                </a>
                                <p class="leading-7 mb-4">
                                    There are many variations of passages of Lorem Ipsum
                                    available.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


               {/* KONTAK KAMI */}
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
                            <div class="w-full h-full rounded-4xl overflow-hidden">
                                <iframe
                                    class="w-full h-full p-5"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.6548116104273!2d106.81140987407998!3d-6.308999561739795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69efe3a453ad6d%3A0x1f84ea872ce73988!2sKitabisa%20HQ!5e0!3m2!1sen!2sus!4v1711254162837!5m2!1sen!2sus"
                                    //   width="600"
                                    //   height="450"
                                    style={{ border: 0 }}
                                    //   allowfullscreen="yes"
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer class="w-full h-60 flex flex-row px-16 py-4 bg-slate-200">
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
        </>
    );
}
