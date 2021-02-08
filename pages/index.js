import Head from 'next/head';
import {useEffect} from 'react'
import "tailwindcss/tailwind.css";
import Navbar from './components/Navbar';
import Particles from 'react-particles-js';
import Typed from 'react-typed';
import particleParams from './config/particleConfig.json';
import Popup from 'reactjs-popup';
import StrengthPop from './components/PopupStrengths';
import strengthConfig from './config/strengthDescConfig.json';
import AOS from 'aos';
import Contact from './components/Contact';
import 'aos/dist/aos.css';
export default function Home() {
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
  const strengthTab = strengthConfig["strengths"].map((data) => {
      return (
        <div className="grid grid-cols-1">
            <img className="w-64 h-64" src={data.photoUrl}></img>
            <p className="text-center">{data.type} in {data.title}</p>
            <Popup trigger={<button>See Projects</button>} modal><StrengthPop title={data.title} content={data.content}/></Popup>
        </div>   
      )
  })
  const learningTab = strengthConfig["learning"].map((data) => {
    return (
      <div className="grid grid-cols-1">
          <img className="w-64 h-64" src={data.photoUrl}></img>
          <p className="text-center">{data.type} in {data.title}</p>
          <Popup trigger={<button>See Projects</button>} modal><StrengthPop title={data.title} content={data.content}/></Popup>
      </div>   
    )
})
  return (
        <>
            <Head>
                <title>Sirbot</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar className="relative w-screen"/>

                <div className="slide w-screen">
                    <div className="z-0 absolute h-screen w-screen">
                    <Particles style={styles.particle} params={particleParams}/>
                    </div>
                    <div>
                        <div className="relative z-10 flex justify-center items-center min-h-screen w-screen">
                            <h1 className="text-5xl text-center ">
                                <Typed strings={["A <br/>16 Year-Old <br/> Developer"]} typeSpeed={100}/>
                            </h1>
                            <br/>
                                <div className="absolute mt-64 headerButton bg-green-100 w-20 text-center rounded-md animate-bounce shadow-lg"><a href="#">My<br/>Projects</a></div>
                        </div>
                    </div>
                </div>


                <div className="relative z-10 flex flex-col justify-center items-center bg-white h-192 w-screen">
                    <h1 className="flex w-33 h-15 text-5xl text-center mt-5">Strengths</h1>
                    <div className="absolute mx-32 right-0 object-right w-64 h-64 m-0 top-20">
                        <img className="w-64 h-64 m-0" src='svg/Cloud.svg'/>
                    </div>
                    {/* Portfolio projects */}
                    <div className="justify-self-center">These are my biggest strengths</div>
                    <div className="grid justify-self-center grid-cols-3 mt-5 gap-y-2.5" data-aos={"fade-up"}>
                        {strengthTab}
                        
                    </div>

                    {/* <Strengths/> */}


                </div>
                <div className="relative z-10 flex flex-col justify-center items-center h-192 w-screen  mt-32">
                    <div className="grid grid-cols-3 h-64">
                        <div className="col-span-2" data-aos={"fade-up"}>
                            <h1 className="flex w-33 h-15 text-5xl text-center">What I'm Currently Learning </h1>
                            <div className="justify-self-center">I'm always looking to learn new things, 
                            to test out new ideas and see what is the best solution to problems.</div>
                        </div>
                        <div className="w-64 h-64 m-0 top-20">
                            <img className="w-128 h-128 m-0" src='svg/manLamp.svg'/>
                        </div>
                    </div>
 
                    {/* Portfolio projects */}
             
                    <div className="grid justify-self-center grid-cols-3 mt-5 gap-y-2.5 gap-x-10">
                        {learningTab}
                        
                    </div>
                </div>
                <div className="relative z-10 flex flex-col justify-center items-center h-192 w-screen  mt-32">
                    <Contact/>
                </div>
        </>
  )
}
