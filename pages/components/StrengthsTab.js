import React, { Component } from 'react'
import strengthConfig from '../config/strengthDescConfig.json';
import Popup from 'reactjs-popup';
import StrengthPop from './PopupStrengths';
export default class StrengthsTab extends Component {
    render() {
        const strengthTab = strengthConfig["strengths"].map((data) => {
            return (
              <div className="grid grid-cols-1" key={`${data.title}-${data.type}`}>
                  <img className="w-64 h-64" src={data.photoUrl} alt={data.title}></img>
                  <p className="text-center">{data.type} in {data.title}</p>
                  <Popup trigger={<button>See Projects</button>} modal><StrengthPop title={data.title} content={data.content}/></Popup>
              </div>   
            )
        })
        return (
            <>
            {strengthTab}
            </>
        )
    }
}
