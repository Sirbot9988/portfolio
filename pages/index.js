// Default Deps
import Head from 'next/head';
import {useEffect, useRef} from 'react'
// Tailwind Deps
import "tailwindcss/tailwind.css";
import Navbar from '../components/Navbar';
// Landing Slide Deps
import Hero from '../components/Hero';
// Effects
import Rellax from "rellax";
import AOS from 'aos';
import 'aos/dist/aos.css';
// Components
import Learning from '../components/Learning';
import Contact from '../components/Contact';
import Strengths from '../components/Strengths'
import Github from '../components/GithubLink'
export default function Home() {
    const rellaxRef = useRef();
    useEffect(() => {
        new Rellax(".rellax", {
            speed: -1,
            center: false,
            wrapper: null,
            round: true, 
            vertical: true,
            horizontal: false});
        })
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);
  return (
        <div className="sm:bg-white bg-white">
            <Head>
                <title>Sirbot</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="A 16 Year Old Developer ready to serve your tech needs"/>
                <meta name="theme-color" content="#F1C21B"></meta>
            </Head>
            <Navbar className="relative w-screen"/>
            <Hero className="w-screen"/>
            <Strengths className="w-screen bg-white"/>
            <Learning className="w-screen bg-white"/>
                <div id="contacts" className="bg-white relative z-10 flex flex-col justify-center items-center h-192 w-screen  mt-32" data-aos={"fade-up"}>
                    <Contact/>
                    <Github/>
                </div>
        </div>
  )
}
