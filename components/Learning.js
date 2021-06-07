import React, { Component } from 'react'
import LearningTab from '../components/LearningTab';

export default class Learning extends Component {
    render() {
        const learningDescription = "As a young, aspiring developer, I realise that my lack of experience is a major weakness but I try to make up for it by learning new technologies everyday. By doing this, I better understand the world around me and strengthen my tools with which I can solve problems."
        return (
            <div className="sm:relative z-10 sm:flex sm:flex-col sm:justify-center sm:items-center sm:h-192 w-screen sm:mt-32" data-aos={"fade-up"}>
            <div className="grid sm:grid-cols-3 sm:h-64">
                <div className="sm:col-span-2 textIndentBoxes sm:w-96" data-aos={"fade-up"}>
                    <h1 className="sm:flex sm:h-auto sm:w-auto text-xl sm:text-5xl text-center sm:right-0">What I'm Currently Learning </h1>
                    <div className="justify-self-center">{learningDescription}</div>
                </div>
                <div className="sm:visible invisible sm:w-64 sm:h-64 sm:m-0 sm:top-20">
                    <img className="sm:w-128 sm:h-128 sm:m-0" src='svg/manLamp.svg' alt="floating cloud me!"/>
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
