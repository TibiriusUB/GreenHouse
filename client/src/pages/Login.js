import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import Thumbnail from "../components/Thumbnail";

class Login extends Component {
  state = {
    select: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/plants/599dcb67f0f16317844583fc
  componentDidMount() {
    //console.log(this.props.match.params.id)
    API.getPlant(this.props.match.params.id)
      .then(res => this.setState({ select: res.data.plant }))
      .catch(err => console.log(err));
  }

  render() {
      //Login page info goes here!!!
    return (
//your stuff goes here
    );
  }
}

export default Login;
