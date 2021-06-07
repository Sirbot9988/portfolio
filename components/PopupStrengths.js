import React, { Component } from 'react'

export default class PopupStrengths extends Component {

    constructor(props) {
        super();

    }
    render() {

        return (
            <>
                <h1>{this.props.title}</h1>
                <p dangerouslySetInnerHTML={{__html: this.props.content}}></p>
            </>
        )
    }
}
