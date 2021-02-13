// Default Deps
import Head from 'next/head';
import {useEffect, useRef} from 'react'
// Tailwind Deps
import "tailwindcss/tailwind.css";
import Navbar from './components/Navbar';
// Landing Slide Deps
import Particles from 'react-particles-js';
import Typed from 'react-typed';
import particleParams from './config/particleConfig.json';

// Effects
import Rellax from "rellax";
import AOS from 'aos';
import 'aos/dist/aos.css';
// Components
import Contact from './components/Contact';
import StrengthsTab from './components/StrengthsTab';
import LearningTab from './components/LearningTab';
import Github from './components/GithubLink'
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
  const styles = {
    particle: {
        height: 120 + "vh",
    }
  }
const learningDescription = "As a young, aspiring developer, I realise that my lack of experience is a major weakness but I try to make up for it by learning new technologies everyday. By doing this, I better understand the world around me and strengthen my tools with which I can solve problems."
  return (
        <>
            <Head>
                <title>Sirbot</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="A 16 Year Old Developer ready to serve your tech needs"/>
                <meta name="theme-color" content="#F1C21B"></meta>
            </Head>
            <Navbar className="relative w-screen"/>

                <div className="slide w-screen">
                    <div className="z-0 absolute h-screen w-screen">
                    <Particles style={styles.particle} params={particleParams}/>
                    </div>
                    <div>
                        <div className="relative z-10 flex justify-center items-center min-h-screen w-screen">
                            <h1 className="text-5xl text-center">
                                <Typed strings={["A <br/>16 Year-Old <br/> Developer"]} typeSpeed={100}/>
                            </h1>
                            <br/>
                                <div className="absolute mt-64 headerButton bg-green-100 w-20 text-center rounded-md animate-bounce shadow-lg"><a href="#">My<br/>Projects</a></div>
                        </div>
                    </div>
                </div>


                <div className="relative z-10 flex flex-col justify-center items-center bg-white h-192 w-screen" >
                    <h1 className="flex w-33 h-15 text-5xl text-center mt-5" data-aos={"fade-up"}>Strengths</h1>
                    <div className="absolute mx-32 right-0 object-right w-64 h-64 m-0 top-20" data-aos={"fade-up"}>
                        <img className="w-64 h-64 m-0 rellax" src='svg/Cloud.svg' alt="floating me 2!"/>
                    </div>
                    {/* Portfolio projects */}
                    <div className="justify-self-center" data-aos={"fade-up"}>These are my biggest strengths</div>
                    <div className="grid justify-self-center grid-cols-3 mt-5 gap-y-2.5" data-aos={"fade-up"}>
                        <StrengthsTab/>
                        
                    </div>

                    {/* <Strengths/> */}


                </div>
                <div className="relative z-10 flex flex-col justify-center items-center h-192 w-screen  mt-32" data-aos={"fade-up"}>
                    <div className="grid grid-cols-3 h-64">
                        <div className="col-span-2 w-96" data-aos={"fade-up"}>
                            <h1 className="flex w-33 h-15 text-5xl text-center right-0">What I'm Currently Learning </h1>
                            <div className="justify-self-center">{learningDescription}</div>
                        </div>
                        <div className="w-64 h-64 m-0 top-20">
                            <img className="w-128 h-128 m-0" src='svg/manLamp.svg' alt="floating cloud me!"/>
                        </div>
                    </div>
 
                    {/* Portfolio projects */}
             
                    <div className="grid justify-self-center grid-cols-3 mt-5 gap-y-2.5 gap-x-10">
                        <LearningTab/>
                        
                    </div>
                </div>
                <div className="relative z-10 flex flex-col justify-center items-center h-192 w-screen  mt-32" data-aos={"fade-up"}>
                    <Contact/>
                    <Github/>
                </div>
        </>
  )
}
