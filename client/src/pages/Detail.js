import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import Thumbnail from "../components/Thumbnail";

class Detail extends Component {
  state = {
    select: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    //console.log(this.props.match.params.id)
    API.getPlant(this.props.match.params.id)
      .then(res => this.setState({ select: res.data.plant }))
      .catch(err => console.log(err));
  }

  render() {
    //var select = this.state.select
    //var select= 0
    //console.log(select)
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.select.common_name}, AKA: {this.state.select.scientific_name}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <Thumbnail src={process.env.PUBLIC_URL + '/plant.jpg'} />
              <h1>Synopsis</h1>
              <p>
                {this.state.select.id}
              </p>
              <a rel="noreferrer noopener" target="_blank" href={"http://trefle.io/api/" + this.state.select.id}>
                Go to summary!
            </a>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Search</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
//this.state.select.images[0] ? this.state.select.images[0]: