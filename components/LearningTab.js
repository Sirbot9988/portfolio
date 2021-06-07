import React, { Component } from 'react'
import strengthConfig from '../config/strengthDescConfig.json';
import Popup from 'reactjs-popup';
import StrengthPop from './PopupStrengths';
export default class LearningTab extends Component {
    render() {
        const learningTab = strengthConfig["learning"].map((data) => {
            return (
              <div className="grid grid-cols-1">
                  <img className="w-64 h-64" src={data.photoUrl} alt={data.title}></img>
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
