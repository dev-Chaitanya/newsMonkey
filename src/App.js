
import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import Everything from './Components/Everything';
import SearchBtn from './Components/SearchBtn';
import Home from './Components/Home';
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
export default class App extends Component {
constructor(props){
  super(props);
  this.state={
    query:"Breaking-news"
  }
}
handelState=(text)=>{
  this.setState({query:text})
  // console.log(text)
}
  render() {
    return (
      <>
  
      
          <div className=".container-fluid">
            <Router>
          <Navbar/>
          <Switch>
      <Route exact  path={"/business"}>
          <News  key="business" pageSize={4} country={"in"} category={"business"} />
      </Route>
      <Route exact  path={"/entertainment"}>
          <News  key="entertainment" pageSize={6} country={"in"} category={"entertainment"}  />
      </Route>
      <Route exact  path={"/general"}>
          <News  key="general" pageSize={6} country={"in"} category={"general"}  />
      </Route>
      <Route exact  path={"/health"}>
          <News  key="health" pageSize={6} country={"in"} category={"health"}  />
      </Route>
      <Route exact  path={"/science"}>
          <News  key="science" pageSize={3} country={"in"} category={"science"}  />
      </Route>
      <Route exact  path={"/sports"}>
          <News  key="sports" pageSize={6} country={"in"} category={"sports"} />
      </Route>
      <Route exact  path={"/technology"}>
          <News   key="technology" pageSize={10} country={"in"} category={"technology"} />
      </Route>
      <Route exact path={"/Everything"}>
        <Everything key="Everything" searchCompo={<SearchBtn onStateHandel={this.handelState} />} query={this.state.query}/>
      </Route>
      <Route exact  path={"/Home"}>
       <Home/>
      </Route>
          </Switch>
          <Footer/>
            </Router>
          </div>
       
      
      </>
    )
  }
}
