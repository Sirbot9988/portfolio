import React, { Component } from 'react'
import strengthConfig from '../config/strengthDescConfig.json';
import Popup from 'reactjs-popup';
import StrengthPop from './PopupStrengths';
export default class LearningTab extends Component {
    render() {
        const learningTab = strengthConfig["learning"].map((data) => {
            if (data.title == "Adobe Premiere Pro") {
                return (
                    <div className="grid grid-cols-1">
                        <img className="w-20 h-20 justify-self-center sm:w-64 sm:h-64" src={data.photoUrl} alt={data.title}></img>
                        <p className="text-center">Adobe <br/> Premiere Pro</p>
                    </div>   
                  )               
            }
            return (
              <div className="grid grid-cols-1">
                  <img className="w-24 h-24 justify-self-center sm:w-64 sm:h-64" src={data.photoUrl} alt={data.title}></img>
                  <p className="text-center">{data.title}</p>
              </div>   
            )
        })
        return (
            <>
            {learningTab}
            </>
        )
    }
}
