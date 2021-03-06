/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "../logo.svg";
import "./App.css";
import { fetchSmurfs } from "../actions";
import { createSmurf } from "../actions";
import Smurfs from "./Smurfs";
import SmurfForm from "./SmurfForm";

class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>Smurf Village 2.0</h1>
        {this.props.fetchingSmurfs ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <div>
            <SmurfForm />
            <Smurfs />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    smurfAdded: state.smurfAdded,

    error: state.error
  };
};

export default connect(
  mapStateToProps,
  {
    /* actions go here */
    fetchSmurfs,
    createSmurf
  }
)(App);
