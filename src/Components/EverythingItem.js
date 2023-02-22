import React, { Component } from 'react'


export class EverythingItem extends Component {
    render() {
        let {author,title,description,url,urlToImage,source,date,time}=this.props;
        return (
            <div className="container text-center my-6">
                <div className="card">
                <div className="card-header">
  <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger">
    {source}
  </span>
  </div>
                    <img src={urlToImage} className="card-img-top" alt="Image Is Not Present" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={url} target="_blank" className="btn btn-primary float-start">Read More</a>
                        <p className='float-end'>by~{author}</p>
                        <div className="card-footer">
                        <p className='float-end'>on-{new Date(date).toLocaleDateString()}</p>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default EverythingItem
