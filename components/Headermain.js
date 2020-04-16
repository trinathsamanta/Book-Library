import React, { Component } from 'react'

export default class Headermain extends Component {
    render() {
        return (
            <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <a className="navbar-brand" href="#">BOOksHOW</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
            <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/about">About us</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/contact">Contact us</a>
            </li>    
            </ul>
            </div>  
            </nav>
          
            </div>
        )
    }
}
