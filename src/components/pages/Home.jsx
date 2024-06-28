import axios from "axios";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
    const [topBars, setTopBars] = useState([]);
    const [ourPrograms, setOurPrograms] = useState([]);
    // const [loading, setLoading] = useState(false);

    const fetchTopBars = async () => {
        // setLoading(true);

        try {
            const { data }  = await axios.get(`http://localhost:3000/top-bar`, {
                // headers: {
                //     'authorization': `Bearer ` + localStorage.getItem('access_token'),
                // }
            });
            // console.log(data, 'data');
    
            // let newTopBars = [...topBars];
            // data.map(el => {
            //     // newTopBars.push(el.Club);
            // })

            setTopBars(data);
        } catch (error) {
            // Swal.fire({
            //     title: 'Failed!',
            //     text: error.response,
            //     icon: 'error',
            //     confirmButtonText: 'Ok'
            // });
        } finally {
            // setTimeout(() => {
            //     setLoading(false);
            // }, 500);
        }
    }

    const fetchOurPrograms = async () => {
        // setLoading(true);

        try {
            const { data }  = await axios.get(`http://localhost:3000/our-program`, {
                // headers: {
                //     'authorization': `Bearer ` + localStorage.getItem('access_token'),
                // }
            });
            console.log(data, 'setOurPrograms');
    
            // let newTopBars = [...topBars];
            // data.map(el => {
            //     // newTopBars.push(el.Club);
            // })

            setOurPrograms(data);
        } catch (error) {
            // Swal.fire({
            //     title: 'Failed!',
            //     text: error.response,
            //     icon: 'error',
            //     confirmButtonText: 'Ok'
            // });
        } finally {
            // setTimeout(() => {
            //     setLoading(false);
            // }, 500);
        }
    }


    useEffect(() => {
        fetchTopBars();
        fetchOurPrograms();

    }, []);
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
                    <div className="relative h-64 w-64 bg-green-600 rounded-full">
                        <div className="absolute h-32 w-32 -left-12 -top-4 bg-purple-400 shadow-xl rounded-md">
                            <img
                                src="/images/tf1.1.jpg"
                                className="w-full h-full shadow-xl rounded-md"
                            />
                        </div>
                        <div className="absolute -z-10 h-32 w-32 -left-40 bottom-14 bg-purple-400 shadow-xl rounded-md">
                            <img
                                src="/images/sf1.1.jpg"
                                className="w-full h-full shadow-xl rounded-md"
                            />
                        </div>
                        <div className="absolute h-32 w-32 z-20 left-36 -top-12 bg-pink-400 shadow-xl rounded-md">
                            <img
                                src="/images/tf1.2.jpg"
                                className="w-full h-full shadow-xl rounded-md"
                            />
                        </div>
                        <div className="absolute h-32 w-32 left-72 -top-1 z-10 bg-pink-400 shadow-xl rounded-md">
                            <img
                                src="/images/sf2.3.jpg"
                                className="w-full h-full shadow-xl rounded-md"
                            />
                        </div>
                        <div className="absolute h-32 w-32 z-10 left-16 top-16 bg-pink-400 shadow-xl rounded-md">
                            <img
                                src="/images/tf1.3.jpg"
                                className="w-full h-full shadow-xl rounded-md"
                            />
                        </div>
                        <div className="absolute h-32 w-32 left-52 bottom-6 bg-pink-400 shadow-xl rounded-md">
                            <img
                                src="/images/tf1.4.jpg"
                                className="w-full h-full shadow-xl rounded-md"
                            />
                        </div>
                        <div className="absolute h-32 w-32 left-36 -bottom-28 bg-pink-400 shadow-xl rounded-md">
                            <img
                                src="/images/tf1.5.jpg"
                                className="w-full h-full shadow-xl rounded-md"
                            />
                        </div>
                        <div className="absolute h-32 w-32 right-36 -bottom-8 bg-pink-400 shadow-xl rounded-md">
                            <img
                                src="/images/sf2.1.jpg"
                                className="w-full h-full shadow-xl rounded-md"
                            />
                        </div>
                        <div className="absolute h-32 w-32 -left-40 -bottom-24 bg-pink-400 shadow-xl rounded-md">
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
                <div className="relative h-64 w-64 bg-green-600 rounded-full">
                  <div className="absolute h-32 w-32 -left-12 -top-4 bg-purple-400 shadow-xl rounded-md">
                    <img
                      src="/images/tf1.1.jpg"
                      className="w-full h-full shadow-xl rounded-md"
                    />
                  </div>
                  <div className="absolute h-32 w-32 left-24 -top-12 bg-pink-400 shadow-xl rounded-md">
                    <img
                      src="/images/tf1.2.jpg"
                      className="w-full h-full shadow-xl rounded-md"
                    />
                  </div>
                  <div className="absolute h-32 w-32 left-16 top-16 bg-pink-400 shadow-xl rounded-md">
                    <img
                      src="/images/tf1.3.jpg"
                      className="w-full h-full shadow-xl rounded-md"
                    />
                  </div>
                  <div className="absolute h-32 w-32 left-52 bottom-6 bg-pink-400 shadow-xl rounded-md">
                    <img
                      src="/images/tf1.4.jpg"
                      className="w-full h-full shadow-xl rounded-md"
                    />
                  </div>
                  <div className="absolute h-32 w-32 right-36 -bottom-8 bg-pink-400 shadow-xl rounded-md">
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

            <div className="bg-green-400">
                <section className="relative pt-24 pb-36 overflow-hidden">
                    <img
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
                        src="flaro-assets/images/contact/gradient.svg"
                        alt=""
                    />
                    <div className="relative z-10 container px-4 mx-auto">
                        <p className="mb-5 text-3xl md:text-6xl xl:text-8xl text-center font-bold font-heading tracking-px-n leading-none animate-bounce">
                            Our Program
                        </p>
                        <p className="mb-20 text-lg text-gray-600 text-center font-medium leading-normal md:max-w-lg mx-auto">
                            Lorem ipsum dolor sit amet, to the con adipiscing. Volutpat tempor
                            to the condimentum vitae vel purus.
                        </p>

                        {/* EACH MISSIONS START */}
                        <div className="flex flex-wrap -m-3">
                        {
                            (() => {
                                let elements = [];
                                for (let index = 1; index < ourPrograms.length; index += 2) {
                                    elements.push(
                                        <div className="w-full md:w-1/3 p-3">
                                            {/*  */}
            
                                            <div className="p-11 h-full text-center bg-white bg-opacity-90 border border-blueGray-100 rounded-xl shadow-11xl hover:scale-125 transition ease-in-out duration-300">
                                                <div className="mb-6 relative mx-auto w-16 h-16 bg-green-700 border border-blueGray-200 rounded-full">
                                                    <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                                        {/* <img> */}
                                                    </div>
                                                </div>
                                                <h3 className="mb-3 text-xl font-bold font-heading leading-snug">
                                                    { ourPrograms[index].content }
                                                </h3>
                                                <p className="font-medium max-w-xs mx-auto text-gray-600 leading-relaxed">
                                                    { ourPrograms[index + 1].content }
                                                </p>
                                            </div>
                                            {/*  */}
                                        </div>
                                    );
                                }
                                return elements;
                            })()
                        }
                        
                           

                           
                        </div>
                    </div>
                </section>
            </div>

         

            {/* PUBLIKASI */}
            <section className="pt-24 pb-36 bg-white overflow-hidden">
                <div className="container p-5 mx-auto">
                    <h2 className="mb-4 text-5xl md:text-6xl text-center font-bold font-heading tracking-px-n leading-tight font-serif italic">
                        Laporan
                    </h2>
                    <p className="mb-24 font-medium text-gray-600 text-center leading-relaxed md:max-w-lg mx-auto">
                        Lorem ipsum dolor sit amet, to the consectr adipiscing elit.
                        Volutpat tempor to the condimentum vitae vel purus.
                    </p>
                    {/* <a
                          className="inline-block hover:text-blue-400 hover:underline"
                          href="#"
                        >
                          <h3 className="text-xl font-semibold leading-normal">
                            How life insurance helps you during financial
                            insolvency
                          </h3>
                        </a> */}
                </div>

                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full lg:w-1/3 px-4 mb-12 lg:mb-0">
                            <div className="max-w-sm mx-auto">
                                <img
                                    className="block w-full h-64 mb-6 object-cover  transform hover:scale-110 transition flip-in duration-500"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1q17H2xR5oSo5VBiot_dCC9XOYDqskvdvyr0Rf8VYiTDrZoMcw4XoQVvoX85QEB7RMFs&usqp=CAU"
                                    alt=""
                                />
                                <span className="text-sm font-semibold uppercase text-gray-200">
                                    10 JUN 2022
                                </span>

                                <a
                                    className="inline-block hover:text-blue-400 hover:underline"
                                    href="#"
                                >
                                    <h3 className="font-heading font-medium text-lg mt-2 mb-4">
                                        There are many variations of passages of Lorem Ipsum
                                        available
                                    </h3>
                                </a>

                                <p className="leading-7 mb-4">
                                    There are many variations of passages of Lorem Ipsum
                                    available.
                                </p>
                                {/* <a
                  className="group inline-flex items-center font-heading font-medium"
                  href="#"
                >
                  <span className="mr-4">Read more</span>
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-50 group-hover:bg-green-100">
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
                        <div className="w-full lg:w-1/3 px-4 mb-12 lg:mb-0">
                            <div className="max-w-sm mx-auto">
                                <img
                                    className="block w-full h-64 mb-6 object-cover transform hover:scale-110 transition flip-in duration-500"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1q17H2xR5oSo5VBiot_dCC9XOYDqskvdvyr0Rf8VYiTDrZoMcw4XoQVvoX85QEB7RMFs&usqp=CAU"
                                    alt=""
                                />
                                <span className="text-sm font-semibold uppercase text-gray-200">
                                    10 JUN 2022
                                </span>

                                <a
                                    className="inline-block hover:text-blue-400 hover:underline"
                                    href="#"
                                >
                                    <h3 className="font-heading font-medium text-lg mt-2 mb-4">
                                        There are many variations of passages of Lorem Ipsum
                                        available
                                    </h3>
                                </a>
                                <p className="leading-7 mb-4">
                                    There are many variations of passages of Lorem Ipsum
                                    available.
                                </p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3 px-4">
                            <div className="max-w-sm mx-auto">
                                <img
                                    className="block w-full h-64 mb-6 object-cover transform hover:scale-110 transition flip-in duration-500"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1q17H2xR5oSo5VBiot_dCC9XOYDqskvdvyr0Rf8VYiTDrZoMcw4XoQVvoX85QEB7RMFs&usqp=CAU"
                                    alt=""
                                />
                                <span className="text-sm font-semibold uppercase text-gray-200">
                                    10 JUN 2022
                                </span>

                                <a
                                    className="inline-block hover:text-blue-400 hover:underline"
                                    href="#"
                                >
                                    <h3 className="font-heading font-medium text-lg mt-2 mb-4">
                                        There are many variations of passages of Lorem Ipsum
                                        available
                                    </h3>
                                </a>
                                <p className="leading-7 mb-4">
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
        </>
    );
}
