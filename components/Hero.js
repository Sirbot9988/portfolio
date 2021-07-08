import React, { Component } from 'react'
import Particles from 'react-particles-js';
import Typed from 'react-typed';
import particleParams from '../config/particleConfig.json';

export default class Hero extends Component {

    render() {
        const styles = {
            particle: {
                height: 120 + "vh",
            }, 
            text: {
                pointerEvents: 'none',
            }
          }
        return (
            <div className="slide w-screen">
            <div className="z-0 hidden sm:block relative sm:absolute h-screen w-screen">
            <Particles className="sm:max-height-100" params={particleParams}/>
            </div>
            <div className="bg-yellow-300 sm:bg-transparent">
                <div style={styles.text} className="relative z-10 flex justify-center items-center min-h-screen w-screen">
                    <h1 className="text-5xl text-center">
                        <Typed strings={["A <br/>17 Year-Old <br/> Developer"]} typeSpeed={100}/>
                    </h1>
                    <br/>
                        <div style={{pointerEvents: 'all'}} className="absolute mt-64 headerButton bg-green-100 w-20 text-center rounded-md animate-bounce shadow-lg"><a href="#projects">My<br/>Projects</a></div>
                </div>
            </div>
            </div>
        )
    }
}
