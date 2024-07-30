import axios from "axios";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
export default function WelcomingSection() {
    // const [welcomingSectionData, setWelcomingSectionData] = useState(null);

    // const fetchSectionContent = async (token) => {
    //     try {
    //         const response = await axios.post(
    //             "http://localhost:3000/contents/section",
    //             { section: "welcome-page" },
    //             { headers: { Authorization: `Bearer ${token}` } }
    //         );
    //         console.log("Section Content:", response.data);
    //         return response.data; // Ensure this returns the data
    //     } catch (error) {
    //         console.error("Error fetching section content:", error);
    //         return null;
    //     }
    // };

    // useEffect(() => {
    //     if (token) {
    //         const getSectionWelcomingPage = async () => {
    //             const data = await fetchSectionContent(token);
    //             console.log(data);
    //             if (data) {
    //                 setWelcomingSectionData(data[0]); // Adjust based on your data structure
    //             }
    //         };
    //         getSectionWelcomingPage();
    //     }
    // }, [token]);



    return (
        <div className="flex flex-row w-full h-screen 2xl:pb-36 md:pt-10 2xl:pt-0">
            {/* Web view */}
            <div className="hidden 2xl:flex items-center justify-center w-1/2 mb-20 2xl:pl-0 sm:pl-16">
            {/* {welcomingSectionData && (
                <TypeAnimation
                    className="text-8xl font-bold text-green-700"
                    // sequence={[Empowering\nChanges for\nTomorrow, 5000, ""]}
                    sequence={[welcomingSectionData.content, 5000, ""]}
                    repeat={Infinity}
                />
            )} */}
            <TypeAnimation
                    style={{ whiteSpace: 'pre-line', height: '300px', display: 'block' }}
                    className="text-8xl font-bold text-green-700"
                    sequence={[`Empowering\nChanges\nfor Tomorrow`, 6000, ""]}
                    repeat={Infinity}
            />
            </div>
            <div className="2xl:flex items-center justify-center w-1/2 hidden">
                <div className="relative h-64 w-64 bg-green-600 rounded-full">
                    <div className="absolute h-32 w-32 -left-12 -top-4 bg-purple-400 shadow-xl rounded-md">
                        <img
                            src="/images/awardees/1.png"
                            className="w-full h-full shadow-xl rounded-md"
                        />
                    </div>
                    <div className="absolute -z-10 h-32 w-32 -left-40 bottom-14 bg-purple-400 shadow-xl rounded-md">
                        <img
                            src="/images/awardees/2.png"
                            className="w-full h-full shadow-xl rounded-md"
                        />
                    </div>
                    <div className="absolute h-32 w-32 z-20 left-36 -top-12 bg-pink-400 shadow-xl rounded-md">
                        <img
                            src="/images/awardees/3.png"
                            className="w-full h-full shadow-xl rounded-md"
                        />
                    </div>
                    <div className="absolute h-32 w-32 left-72 -top-1 z-10 bg-pink-400 shadow-xl rounded-md">
                        <img
                            src="/images/awardees/4.png"
                            className="w-full h-full shadow-xl rounded-md"
                        />
                    </div>
                    <div className="absolute h-32 w-32 z-10 left-16 top-16 bg-pink-400 shadow-xl rounded-md">
                        <img
                            src="/images/awardees/5.png"
                            className="w-full h-full shadow-xl rounded-md"
                        />
                    </div>
                    <div className="absolute h-32 w-32 left-52 bottom-6 bg-pink-400 shadow-xl rounded-md">
                        <img
                            src="/images/awardees/6.png"
                            className="w-full h-full shadow-xl rounded-md"
                        />
                    </div>
                    <div className="absolute h-32 w-32 left-36 -bottom-28 bg-pink-400 shadow-xl rounded-md">
                        <img
                            src="/images/awardees/7.png"
                            className="w-full h-full shadow-xl rounded-md"
                        />
                    </div>
                    <div className="absolute h-32 w-32 right-36 -bottom-8 bg-pink-400 shadow-xl rounded-md">
                        <img
                            src="/images/awardees/8.png"
                            className="w-full h-full shadow-xl rounded-md"
                        />
                    </div>
                    <div className="absolute h-32 w-32 -left-40 -bottom-24 bg-pink-400 shadow-xl rounded-md">
                        <img
                            src="/images/awardees/9.png"
                            className="w-full h-full shadow-xl rounded-md"
                        />
                    </div>
                    {/* <div className="absolute h-32 w-32 -left-12 -top-4 bg-purple-400 shadow-xl rounded-md">
                        {
                            welcomingSectionData && (
                                <img
                                    src={welcomingSectionData.Documents[0].dir}
                                    className="w-full h-full shadow-xl rounded-md"
                                />
                                // <img
                                //     src="/images/tf1.1.jpg"
                                //     className="w-full h-full shadow-xl rounded-md"
                                // />
                            )
                        }
                        
                    </div>
                    <div className="absolute -z-10 h-32 w-32 -left-40 bottom-14 bg-purple-400 shadow-xl rounded-md">
                        {
                            welcomingSectionData && (
                                <img
                                    src={welcomingSectionData.Documents[1].dir}
                                    className="w-full h-full shadow-xl rounded-md"
                                />
                                // <img
                                //     src="/images/sf1.1.jpg"
                                //     className="w-full h-full shadow-xl rounded-md"
                                // />
                            )
                        }
                    </div>
                    <div className="absolute h-32 w-32 z-20 left-36 -top-12 bg-pink-400 shadow-xl rounded-md">
                        {
                            welcomingSectionData && (
                                <img
                                    src={welcomingSectionData.Documents[2].dir}
                                    className="w-full h-full shadow-xl rounded-md"
                                />
                                // <img
                                //     src="/images/tf1.2.jpg"
                                //     className="w-full h-full shadow-xl rounded-md"
                                // />
                            )
                        }
                    </div>
                    <div className="absolute h-32 w-32 left-72 -top-1 z-10 bg-pink-400 shadow-xl rounded-md">
                        {
                            welcomingSectionData && (
                                <img
                                    src={welcomingSectionData.Documents[3].dir}
                                    className="w-full h-full shadow-xl rounded-md"
                                />
                                // <img
                                //     src="/images/sf2.3.jpg"
                                //     className="w-full h-full shadow-xl rounded-md"
                                // />
                            )
                        }
                    </div>
                    <div className="absolute h-32 w-32 z-10 left-16 top-16 bg-pink-400 shadow-xl rounded-md">
                        {
                            welcomingSectionData && (
                                <img
                                    src={welcomingSectionData.Documents[4].dir}
                                    className="w-full h-full shadow-xl rounded-md"
                                />
                                // <img
                                //     src="/images/tf1.3.jpg"
                                //     className="w-full h-full shadow-xl rounded-md"
                                // />
                            )
                        }
                    </div>
                    <div className="absolute h-32 w-32 left-52 bottom-6 bg-pink-400 shadow-xl rounded-md">
                        {
                            welcomingSectionData && (
                                <img
                                    src={welcomingSectionData.Documents[5].dir}
                                    className="w-full h-full shadow-xl rounded-md"
                                />
                                // <img
                                //     src="/images/tf1.4.jpg"
                                //     className="w-full h-full shadow-xl rounded-md"
                                // />
                            )
                        }
                    </div>
                    <div className="absolute h-32 w-32 left-36 -bottom-28 bg-pink-400 shadow-xl rounded-md">
    
                        {
                            welcomingSectionData && (
                                <img
                                    src={welcomingSectionData.Documents[6].dir}
                                    className="w-full h-full shadow-xl rounded-md"
                                />
                                // <img
                                //     src="/images/tf1.5.jpg"
                                //     className="w-full h-full shadow-xl rounded-md"
                                // />
                            )
                        }
                    </div>
                    <div className="absolute h-32 w-32 right-36 -bottom-8 bg-pink-400 shadow-xl rounded-md">

                        {
                            welcomingSectionData && (
                                <img
                                    src={welcomingSectionData.Documents[0].dir}
                                    className="w-full h-full shadow-xl rounded-md"
                                />
                                // <img
                                //     src="/images/sf2.1.jpg"
                                //     className="w-full h-full shadow-xl rounded-md"
                                // />
                            )
                        }

                    </div>
                    <div className="absolute h-32 w-32 -left-40 -bottom-24 bg-pink-400 shadow-xl rounded-md">

                        {
                            welcomingSectionData && (
                                <img
                                    src={welcomingSectionData.Documents[1].dir}
                                    className="w-full h-full shadow-xl rounded-md"
                                />
                                // <img
                                //     src="/images/sf2.2.jpg"
                                //     className="w-full h-full shadow-xl rounded-md"
                                // />
                            )
                        }
                    </div> */}
                </div>
            </div>
            
            <div className="2xl:hidden flex flex-col justify-center items-center w-full gap-16 mt-16 md:mt-96 md:mb-52">
                <div className="flex flex-row justify-center items-center w-full gap-4 md:gap-8 ">
                        <div className="flex mt-16 h-16 w-16 md:h-28 md:w-28 bg-purple-400 shadow-xl rounded-full animate-fade-up animate-duration-1000 animate-delay-[4000ms]">
                            <img
                                src="/images/awardees/5.png"
                                className="w-full h-full shadow-xl rounded-full"
                            />
                        </div>
                        <div className="h-16 w-16 md:h-28 md:w-28 bg-purple-400 shadow-xl rounded-full animate-fade-down animate-duration-1000 animate-delay-[4000ms]">
                            <img
                                src="/images/awardees/6.png"
                                className="w-full h-full shadow-xl rounded-full"
                            />
                        </div>
                        <div className="flex mt-16 h-16 w-16 md:h-28 md:w-28 bg-purple-400 shadow-xl rounded-full animate-fade-up animate-duration-1000 animate-delay-[4000ms]">
                            <img
                                src="/images/awardees/7.png"
                                className="w-full h-full shadow-xl rounded-full"
                            />
                        </div>
                        <div className="h-16 w-16 md:h-28 md:w-28 bg-purple-400 shadow-xl rounded-full animate-fade-down animate-duration-1000 animate-delay-[4000ms]">
                            <img
                                src="/images/awardees/1.png"
                                className="w-full h-full shadow-xl rounded-full"
                            />
                        </div>
                </div>
                <div className="flex flex-col justify-center items-center w-full sm:gap-8 gap-4">
                    <svg
                        className="absolute 2xl:hidden -z-10 top-100 md:right-48 right-8 mt-6 animate-fade-right animate-duration-1000 animate-delay-0 animate-ease-in"
                        viewBox="0 0 200 200"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill="#A7F0BA"
                            d="M58,-25.1C60.3,-11.6,37.2,3.9,16.1,18.3C-5.1,32.8,-24.2,46.2,-40.9,38.3C-57.7,30.4,-72,1.2,-64.8,-19C-57.6,-39.2,-28.8,-50.4,-0.5,-50.2C27.8,-50.1,55.6,-38.6,58,-25.1Z"
                            transform="translate(100 100)"
                        />
                    </svg>
                    <span className="animate-fade-up animate-duration-[2000ms] text-5xl sm:text-7xl md:text-8xl font-bold text-green-700">
                            Empowering
                    </span>
                    <div className="animate-fade-up animate-duration-[2000ms] animate-delay-1000 flex justify-center text-center items-center px-8 pb-4 pt-1 mt-3 sm:px-14 sm:pt-3 sm:pb-8 bg-green-700 rounded-full sm:mt-2">
                        <span className="text-5xl sm:text-7xl md:text-8xl font-bold text-white text-center italic">
                                Changes
                        </span>
                    </div>
                    <span className="animate-fade-up animate-duration-[2000ms] animate-delay-[2000ms] text-5xl sm:text-7xl md:text-8xl font-bold text-green-700">
                            for Tommorow
                    </span>
                </div>
                <div className="flex flex-row justify-center items-center w-full gap-4 md:gap-8">
                        <div className="flex mb-16 h-16 w-16 md:h-28 md:w-28 bg-purple-400 shadow-xl rounded-full animate-fade-up animate-duration-1000 animate-delay-[4000ms]">
                            <img
                                src="/images/awardees/2.png"
                                className="w-full h-full shadow-xl rounded-full"
                            />
                        </div>
                        <div className="h-16 w-16 md:h-28 md:w-28 bg-purple-400 shadow-xl rounded-full animate-fade-down animate-duration-1000 animate-delay-[4000ms]">
                            <img
                                src="/images/awardees/3.png"
                                className="w-full h-full shadow-xl rounded-full"
                            />
                        </div>
                        <div className="flex mb-16 h-16 w-16 md:h-28 md:w-28 bg-purple-400 shadow-xl rounded-full animate-fade-up animate-duration-1000 animate-delay-[4000ms]">
                            <img
                                src="/images/awardees/4.png"
                                className="w-full h-full shadow-xl rounded-full"
                            />
                        </div>
                        <div className="h-16 w-16 md:h-28 md:w-28 bg-purple-400 shadow-xl rounded-full animate-fade-down animate-duration-1000 animate-delay-[4000ms]">
                            <img
                                src="/images/awardees/8.png"
                                className="w-full h-full shadow-xl rounded-full"
                            />
                        </div>



                {/* <div className="absolute bg-green-700 -z-10 rounded-full"> */}
                {/* </div> */}
                </div>
            </div>
           

        </div>
    )
}