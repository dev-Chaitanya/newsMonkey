import React, { Component } from 'react'
import PropTypes from 'prop-types'
export class NewsItem extends Component {
 
  static ProppropTypes={
    text: PropTypes.string,
  description: PropTypes.string,
  imageurl: PropTypes.string,
  sourceName: PropTypes.string,
  author: PropTypes.string,
  }


  render() {
        let {title,description,imageurl,newsurl,sourceName,author,time}=this.props;

    return (
    
        <div className="card text-center my-4 mx-2">
  <div className="card-header">
  <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger">
    {sourceName}
  </span>
  </div>
    <img className='img-fluid card-image-top bg-dark' src={imageurl} alt="Not Presenent" />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsurl} target="_blank" rel='noreferrer' className="btn btn-sm btn-primary readmore" >Read More</a>
  </div>
  <div className="card-footer d-flex text-center">
  <li className="card-text fs-6  badge text-muted"> <cite className='d-flex'>By~{!author?"Unknown":author}</cite>
  <ul className='d-flex'>
  <li className="card-text fs-5 text-muted badge">On~ {new Date(time).toLocaleDateString()}</li>
  <li className="card-text fs-5 text-muted  badge"> {new Date(time).toLocaleTimeString()}</li>
  </ul>
  </li>
  
  </div>
</div>
   
    )
  }
}

export default NewsItem
