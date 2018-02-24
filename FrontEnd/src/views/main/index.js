import React, { Component } from 'react';
import { Redirect } from 'react-router';
import MyFancyComponent from './map'
// import { Link } from 'react-router-dom'; Not using link ATM
// import { connect } from "tls"; NOT USED YET
// import '../../App.css';

class Main extends Component {
  constructor() {
    super();
    this.state = { hoverBar: null };
  }

  barInfo = () => {
    //Function will take the bar info and push the info to the rating page
  };


  render() {
    console.log(this.props)
    //props.location.state is the login information originated at login/index.js
    console.log('Main page ', this.props.location.state)
    //for now the state is undefined unless someone logs in
    if (this.props.location.state.loggedIn === true) {
      return (
        <div>
          <h1>Bar Map </h1>
          <div>
            <button onClick={() => this.props.history.push("/profile", this.props.location.state)}>Your Profile</button>
          </div>
          <div>
            <button onClick={() => this.props.history.push("/ratings", this.props.location.state)}>Rating </button>
          </div>
          <div>
            <MyFancyComponent />
            {/* <BarList hoverBar={this.state.hoverBar} setHoverBar={this.setHoverBar} /> */}
          </div>
        </div>
      )
    } else {
      return (
        <Redirect to="/"/>
      )
    }
  }
}

export default Main;