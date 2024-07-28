import axios from "axios";
import { useEffect, useState } from "react";

import Header from "../organism/Header";
import WelcomingSection from "../organism/WelcomingSection";
import Visimisi from "../organism/Visimisi";
import Program from "../organism/Program";
import Berita from "../organism/Berita";
import Kontakkami from "../organism/Kontakkami";
import Footer from "../organism/Footer";

export default function Home() {
  //   const [topBars, setTopBars] = useState([]);
  const [ourPrograms, setOurPrograms] = useState([]);
  const [token, setToken] = useState("");
  // const [loading, setLoading] = useState(false);

  const fetchToken = async () => {
    try {
      const response = await axios.post("http://localhost:3000/getToken");
      console.log("Token:", response.data);
      return response.data; // Assuming the token is in response.data
    } catch (error) {
      console.error("Error fetching token:", error);
      return null;
    }
  };

  useEffect(() => {
    const getToken = async () => {
      const data = await fetchToken();
      if (data && data.access_token) {
        setToken(data.access_token);
      }
    };
    getToken();
  }, []);

  useEffect(() => {
    console.log(token);
  }, [token]);

  return (
    <>
      {/* //header */}
      <Header topBars={topBars} />

      {/* // WelcomingSection */}
      <WelcomingSection token={token} />

      {/* // Visi misi */}
      <Visimisi />

      {/* // Program */}
      <Program ourPrograms={ourPrograms} />

      {/* Berita */}
      <Berita />

      {/* Kontak kami */}
      <Kontakkami />

      {/* Footer */}
      <Footer />
    </>
  );
