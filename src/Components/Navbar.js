import React, { Component } from 'react'
import {Link} from "react-router-dom"
export class Navbar extends Component {
  render() {
    // let {search,query}=this.props;
    return (
      <div className='sticky-top z-3'>
        <nav className="navbar navbar-expand bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand text-light"  to="#">NewsMonkey</Link>
    <button className="navbar-toggler text-light bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto  mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-light" aria-current="page" to="/Home">Home</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link dropdown-item text-light" to="/Everything" >Everything</Link>
            </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle text-light" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            TOPHEADLINES
          </Link>
          <ul className="dropdown-menu">
           <li><Link className="nav-link  dropdown-item" to="/business" >Business</Link></li>
            <li><Link className="nav-link  dropdown-item" to="/entertainment" >Entertainment</Link></li>
            <li><Link className="nav-link dropdown-item" to="/general" >General</Link></li>
            <li><Link className="nav-link dropdown-item" to="/health" >Health</Link></li>
            <li><Link className="nav-link dropdown-item" to="/science" >Science</Link></li>
            <li><Link className="nav-link dropdown-item" to="/sports" >Sports</Link></li>
            <li><Link className="nav-link dropdown-item" to="/technology" >Technology</Link></li>
          </ul>
        </li>
      <li>{this.props.search}</li>
      </ul>
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar
