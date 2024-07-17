import { TypeAnimation } from "react-type-animation";
export default function WelcomingSection() {
    return (
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
    )
}