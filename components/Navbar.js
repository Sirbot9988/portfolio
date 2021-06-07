import React, { Component } from 'react'
export default class Navbar extends Component {
    constructor() {
      super();
      this.state = {
      'solutionsShow': false}
    }

    render() {
        return (
            <div className="relative bg-white">
              <div className="hidden sm:block max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                  <div className="flex justify-start lg:w-0 lg:flex-1">
                    <a href="#">
                      <span className="sr-only">Home</span>
                      <img className="h-8 w-auto sm:h-10" src="./logo.png" alt=""/>
                    </a>
                  </div>
                  <nav className="hidden md:flex space-x-10">
                  <a href="#projects" className="text-base font-medium text-gray-500 hover:text-gray-900">
                      Projects
                    </a> 
                    <a href="#contacts" className="text-base font-medium text-gray-500 hover:text-gray-900">
                      Contact
                    </a>
                  </nav>
                </div>
              </div>
            

              <div className="relative top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden bg-yellow-300">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                  <div className="pt-5 pb-6 px-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <img className="h-8 w-auto" src="./logo.png" alt="Workflow"/>
                      </div>
                      {/* <div className="-mr-2">
                        <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Close menu</span>
             
                          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div> */}
                    </div>
                    <div className="mt-6">
                      <nav className="grid gap-y-8">
            
                        <a href="#contacts" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
        
                          <svg className="flex-shrink-0 h-6 w-6 text-yellow-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                          </svg>
                          <span className="ml-3 text-base font-medium text-gray-900">
                            Contact
                          </span>
                        </a>
            
                        <a href="#projects" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
   
                          <svg className="flex-shrink-0 h-6 w-6 text-yellow-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                          </svg>
                          <span className="ml-3 text-base font-medium text-gray-900">
                            Projects
                          </span>
                        </a>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
        )
    }
}
