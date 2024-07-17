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
    const [topBars, setTopBars] = useState([]);
    const [ourPrograms, setOurPrograms] = useState([]);
    // const [loading, setLoading] = useState(false);

    const fetchTopBars = async () => {
        // setLoading(true);
        console.log('haloaaa');
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
            console.log({data});

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
            {/* //header */}
            <Header topBars={topBars} />

            {/* // WelcomingSection */}
            <WelcomingSection />

            {/* // Visi misi */}
            <Visimisi />

            {/* // Program */}
            <Program ourPrograms={ourPrograms}/>

            {/* Berita */}
            <Berita />

            {/* Kontak kami */}
            <Kontakkami />

            {/* Footer */}
            <Footer />

        </>
    );
}
