import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div className="w-11/12 sm:w-auto bg-yellow-300 rounded mb-10 shadow-md">
                <div className="m-10">
                <h1 className="text-5xl sm:text-9xl text-white">Contact Me</h1>
                <div className="justify-self-center mt-8 flex flex-col">
                    <form className="grid grid-cols-1 text-xl sm:text-2xl gap-y-5" action="/success" name="contact" method="POST" data-netlify="true">
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="grid grid-cols-2 gap-x-20">
                        <div className="grid grid-cols-1 grid-rows-1">
                            <label htmlFor="name">First Name</label>
                            <input className="w-30 sm:w-60 h-10 border-black border rounded" type="text" id="firstName" name="name" />
                        </div>
                        <div className="grid grid-cols-1 grid-rows-2">
                            <label htmlFor="name">Last Name</label>
                            <input className="w-30 sm:w-60 h-10 border-black border rounded" type="text" id="lastName" name="name" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1">
                        <label htmlFor="email">Email</label>
                        <input className="w-100 h-10 border-black border rounded" type="text" id="email" name="email" />
                    </div>
                    <div className="grid grid-col-1">
                        <label htmlFor="message">Message</label>
                        <textarea className="w-100 h-50 border-black border rounded" id="message" name="message"></textarea>
                    </div>
                        <button type="submit" className="justify-self-center">Send</button>
                    </form>
                </div>
                </div>
            </div>
        )
    }
}
