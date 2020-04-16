import React, { Component } from 'react'
import Link from "next/link";


export default class Booklist extends Component {
    shorten(text, maxLength) {
        if (text && text.length > maxLength) {
          return text.substr(0, maxLength) + "...";
        }
        return text;
      }
      render() { 
        const { list } = this.props;
        
         
        return (<React.Fragment>
          <div>
          {
            list.map((b, i) => (
              <div className="col-lg-4 col-md-6 mb-4" key={i}>
                            <div className="card h-100">
                              <Link href="#">
                                <a>
                                  <img
                                    className="card-img-top"
                                    src={b.image}
                                    alt=""
                                  />
                                </a>
                              </Link>
                              <div className="card-body">
                                <h4 className="card-title">
                                  <Link href="#">
                                    <a>{b.name}</a>
                                  </Link>
                                </h4>
                                <p className="card-text">
                                  Year:{b.releaseYear}
                                </p>
                                <p className="card-text">
                                  Description:{" "}{this.shorten(b.description,100)}
                                </p>
                                <p className="card-text">
                                  Genre:{b.genre}
                                </p>
                              </div>
                              
                            </div>
                          </div>
            )
          )
            }
          </div></React.Fragment>);
      }
    }


    