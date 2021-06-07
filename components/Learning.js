import React, { Component } from 'react'
import LearningTab from '../components/LearningTab';

export default class Learning extends Component {
    render() {
        const learningDescription = "As a young, aspiring developer, I realise that my lack of experience is a major weakness but I try to make up for it by learning new technologies everyday. By doing this, I better understand the world around me and strengthen my tools with which I can solve problems."
        return (
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
        )
    }
}
