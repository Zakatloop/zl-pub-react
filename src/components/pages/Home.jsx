import axios from "axios";
import { useEffect, useState } from "react";

import Header from "../organism/Header";
import WelcomingSection from "../organism/WelcomingSection";
import Visimisi from "../organism/Visimisi";
import Program from "../organism/Program";
import Berita from "../organism/Berita";
import Kontakkami from "../organism/Kontakkami";
import Footer from "../organism/Footer";
import OurValues from "../organism/OurValues";
import AboutUs from "../organism/AboutUs";

export default function Home() {
  // const [topBars, setTopBars] = useState([]);
  // const [ourPrograms, setOurPrograms] = useState([]);
  // const [token, setToken] = useState("");
  // const [loading, setLoading] = useState(false);

  // const fetchToken = async () => {
  //   try {
  //     const response = await axios.post("http://localhost:3000/getToken");
  //     console.log("Token:", response.data);
  //     return response.data; // Assuming the token is in response.data
  //   } catch (error) {
  //     console.error("Error fetching token:", error);
  //     return null;
  //   }
  // };

  // useEffect(() => {
  //   const getToken = async () => {
  //     const data = await fetchToken();
  //     if (data && data.access_token) {
  //       setToken(data.access_token);
  //     }
  //   };
  //   getToken();
  // }, []);

  // useEffect(() => {
  //   console.log(token);
  // }, [token]);

  return (
    <>
      {/* //header */}
      <Header />

      {/* // WelcomingSection */}
      {/* <div > */}
        <WelcomingSection />
      {/* </div> */}


      {/* // Visi misi */}
      <div id="tentang-kami">
        <AboutUs />
      </div>

      <div id="nilai-kami">
        <OurValues />
      </div>
      
      {/* // Program */}
      <div id="program-kami">
        <Program/>
      </div>

      {/* Berita */}
      <Berita />

      {/* Kontak kami */}
      <div id="kontak-kami">
        <Kontakkami />
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}