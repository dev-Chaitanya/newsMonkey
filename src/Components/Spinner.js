import React, { Component } from 'react'
import loding from './loding.gif';
export class Spinner extends Component {
  render() {
    return (
      <div style={{width:"max-content",float:"left", textAlign:"center"}}>
        <img style={{height:"52px"}} src={loding} alt="" />
      </div>
    )
  }
}

export default Spinner
