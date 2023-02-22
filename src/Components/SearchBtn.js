import React, { Component } from 'react'
// import Everything from './Everything'
// import Navbar from './Navbar';
import App from '../App';
export class SearchBtn extends Component {
  constructor() {
    super();
    this.state = {
      text: "Breaking-News", 
    }
  }
  handel = (event) => {
    event.preventDefault();
    const data = this.state.text
    this.props.onStateHandel(data)
    this.setState({ text: " " })
  }
  render() {
    return (
      <form className="w-10 d-flex my-2  " onSubmit={this.handel}>
        <input className="form-control me-2 searchBar" id='searchInpu' type={"search"} onChange={(e) => { this.setState({ text: e.target.value }) }} placeholder="Search To Get News" />
  <button className="btn btn-outline-success" type='submit' onClick={() => { <App query={this.state.text} /> }}>Search</button>
      </form>
    )
  }
}

export default SearchBtn
