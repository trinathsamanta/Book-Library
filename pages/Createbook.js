import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchdata} from '../redux/action/action'

 class Createbook extends Component {
     constructor(props) {
         super(props);
         this.state={
            id: "",
            name: "",
            releaseYear: "",
            description: "",
            genre: "",
            image: "",
            
         }
     }
    
    handleInputChange = (event) =>{
        let target = event.target
        let name = target.name
        let value=target.value
        
        this.setState({
            [name]:value
        },()=>{console.log(this.state)})
    } 
    
    handleSubmit = (e) => {
        e.preventDefault()
        
        this.props.dispatch(fetchdata(this.state))
        
    }

    render() { console.log(this.props)
        return (
            <div>
            <h1>Enter the book details</h1>
            <form className="form-horizontal" action="/action_page.php">
            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor="id">Id:</label>
              <div className="col-sm-10">
                <input type="number" name="id" onChange={this.handleInputChange} className="form-control" id="id" value={this.state.id} placeholder="Enter id"/>
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor="name">Name:</label>
              <div className="col-sm-10">
                <input type="text" name="name" onChange={this.handleInputChange} className="form-control" id="name" value={this.state.name} placeholder="Enter name"/>
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor="year">Year:</label>
              <div className="col-sm-10">
                <input type="number" name="releaseYear" onChange={this.handleInputChange} value={this.state.releaseYear} className="form-control" id="year" placeholder="Enter year"/>
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor="name">Description:</label>
              <div className="col-sm-10">
                <input type="text" name="description" onChange={this.handleInputChange} value={this.state.description} className="form-control" id="name" placeholder="Enter description"/>
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor="genre">Genre:</label>
              <div className="col-sm-10">
                <input type="text" name="genre" onChange={this.handleInputChange} value={this.state.genre} className="form-control" id="genre" placeholder="Enter genre"/>
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor="img">image:</label>
              <div className="col-sm-10">
                <input type="img" name="image" onChange={this.handleInputChange} value={this.state.image} className="form-control" id="image" placeholder="Enter image link"/>
              </div>
            </div>
            
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" onClick={this.handleSubmit} className="btn btn-primary mb-2">Submit</button>
              </div>
            </div>
          </form>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    state: state
  });
  
  
  
  export default connect(
    mapStateToProps
  )(Createbook);