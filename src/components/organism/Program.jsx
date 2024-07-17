export default function Program(ourPrograms) {
    return (
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
    )
}