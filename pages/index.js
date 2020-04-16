
import React from "react";
import { connect } from "react-redux";
import Sidebar from "../components/Sidebar";

import Booklist from "../components/Booklist";

import Createbook from "./Createbook";

class App extends React.Component {
  static getInitialProps({ store }) {}
  constructor(props) {
    super(props);
  }
  
  render() { console.log("state",this.props)
      
    
    return (
      <div>
        
      <React.Fragment>
      <div className=" home-page container">

        <div className="row">
          <div className="col-lg-3">
            <Sidebar add={this.props.add}/>
            
          </div>
          <div className="col-lg-9">
          <div className="row">
          <Booklist list={this.props.state.reducer}/>
        </div>
          </div>
          <div class="form-group row">
          <Createbook/>
          </div>
          
          </div>
                
      </div>
    </React.Fragment>
        
      </div>
    );
  }
}


const mapStateToProps = state => ({
  state: state
});




export default connect(
  mapStateToProps
)(App);