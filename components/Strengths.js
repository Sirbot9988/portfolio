import React, { Component } from 'react'
import StrengthsTab from '../components/StrengthsTab';
export default class Strengths extends Component {
    render() {
        return (
            <div className="relative z-10 flex flex-col justify-center items-center bg-white h-192 w-screen" >
            <h1 className="flex w-33 h-15 text-5xl text-center mt-5" data-aos={"fade-up"}>Strengths</h1>
            <div className="absolute mx-32 right-0 object-right w-64 h-64 m-0 top-20" data-aos={"fade-up"}>
                <img className="sm:w-64 sm:h-64 sm:m-0 sm:rellax sm:visible invisible" src='svg/Cloud.svg' alt="floating me 2!"/>
            </div>
            {/* Portfolio projects */}
            <div className="justify-self-center" data-aos={"fade-up"}>These are my biggest strengths</div>
            <div className="grid justify-self-center grid-cols-3 mt-5 gap-y-2.5" data-aos={"fade-up"}>
                <StrengthsTab/>
                
            </div>

            {/* <Strengths/> */}


        </div>
        )
    }
}
