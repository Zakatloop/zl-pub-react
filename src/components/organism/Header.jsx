import axios from "axios";
import { useEffect, useState } from "react";

export default function Header({ token }) {
  const [topBars, setTopBars] = useState([]);
  const fetchSectionContent = async (token) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/contents/section",
        { section: "navbar" },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("Section Content:", response.data);
      //   return response.data;
    } catch (error) {
      console.error("Error fetching section content:", error);
    }
  };

  useEffect(() => {
    if (token) {
      const getNavbar = async () => {
        const data = await fetchSectionContent(token);
        console.log(data, "ini datanya!");
        if (data) {
          setTopBars(data);
        }
      };
      getNavbar();
    }
  }, [token]);

  return (
    <>
      {/* Headers */}
      <div className="flex flex-row w-full px-8 py-4 bg-white sticky top-0 justify-center items-center gap-14 z-50">
        <div className="flex flex-row w-1/5 h-full justify-evenly items-center mt-2">
          <img
            src={topBars[0]?.documents[0]?.dir}
            alt="ZakatLoop Logo"
            width="94"
            height="94"
          ></img>
        </div>

        <div className="flex flex-row w-4/5 justify-end items-end gap-2">
          {topBars.map((el, idx) => (
            <div
              key={idx}
              className="flex flex-row px-4 py-2 cursor-pointer hover:text-green-700 text-green-600 rounded-full justify-center items-center transition duration-700 font-semibold hover:font-bold"
            >
              <span className="text-lg">{el.content}</span>
            </div>
          ))}

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
