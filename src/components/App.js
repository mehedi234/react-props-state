import React, { Component } from "react";

class Prop_State extends Component {
  render() {
    return (
      <div>
        <h1>Properties and State</h1>
        <Parent />
      </div>
    );
  }
}

class Parent extends Component {
  render() {
    return (
      <div>
        <h2>Just another info</h2>
        <Cars msg="Cars are awesome with props" />
      </div>
    );
  }
}
class Cars extends Component {
  render() {
    return (
      <div>
        <h3>Just another info from cars component</h3>
        <p>{this.props.msg}</p>
      </div>
    );
  }
}
export default Prop_State;
