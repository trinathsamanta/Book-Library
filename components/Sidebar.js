import React, { Component } from 'react'

export default class Sidebar extends Component {
    render() {console.log("side",this.props)
        return (
            <div>
            <div className="col-sm-4">
      
      
            
            <h3>Welcome</h3>
            
            <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">contact</a>
              </li>
              
              
            </ul>
            <hr className="d-sm-none"/>
          </div> 
            </div>
        )
    }
}
