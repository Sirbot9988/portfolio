import React, { Component } from 'react'
import strengthConfig from '../config/strengthDescConfig';
export default class PopupStrengths extends Component {

    constructor(props) {
        super();

    }
    render() {

        return (
            <>
                <h1>{this.props.title}</h1>
                <p>{this.props.content}</p>
            </>
        )
    }
}
