import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Button from "../components/Button";
import { BookList, BookListItem } from "../components/BookList";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input } from "../components/Form";

class GreenHouse extends Component {
  state = {
    selection: {},
    plants: [],
    plantSearch: "",
    garden: [],
    title: "",
    sciName: "",
    href: "",
    idNo: "",
    thumbnail: ""
  };

  componentDidMount() {
    this.loadPlants();
  }

  loadPlants = () => {
    API.getPlants()
      .then(res =>
        this.setState({ garden: res.data })
      )
      .catch(err => console.log(err));
  };

  deletePlant = id => {
    API.deletePlant(id)
      .then(res => this.loadPlants())
      .catch(err => console.log(err));
  };

  savePlant = () => {
  //  if (this.state.title && this.state.sciName) {
  //      console.log(this.state.sciName)
      API.savePlant({
        plant: this.state.plant
        // title: this.state.title,
        // sciName: this.state.sciName,
        // description: this.state.idNo,
        // //image: this.state.thumbnail,
        // link: this.state.href
      })
        .then(res => this.loadPlants())
        .catch(err => console.log(err));
  //  }
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.sciName) {
      API.savePlant({
        title: this.state.title,
        sciName: this.state.sciName,
        idNo: this.state.idNo,
        href: this.state.href,
        //thumbnail: this.state.thumbnail
      })
        .then(res => this.loadPlant())
        .catch(err => console.log(err));
    }
  };


  handleFormSubmit2 = event => {
    // When the form is submitted, prevent its default behavior, get books update the books state
    event.preventDefault();
    API.getPlantSearch(this.state.plantSearch)
      .then(res => this.setState({ plants: res.data, plantSearch: "" }))
      .catch(err => console.log(err));
  };

  handleFormSubmit3 = event => {
    console.log(event.target.id)
    event.preventDefault();
    API.savePlantSearch(event.target.id)
      .then(res => {this.setState({ 
        plant: res.data
        // title: res.common_name,
        // sciName: res.scientific_name,
        // idNo: res.id,
        // href: "http://trefle.io/api/plants/"+res.id,
       // thumbnail: res.data[0].volumeInfo.imageLinks.thumbnail
       });
       this.savePlant()
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
          <Row>
            <Col size="lg-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="plantSearch"
                        value={this.state.plantSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search For a plant"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit2}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="md-6">
            <Jumbotron>
              <h1>What Should I Plant?</h1>
            </Jumbotron>
              {!this.state.plants.length ? (
                <h3 className="text-center">No Plants to Display,{this.state.plants}</h3>
              ) : (
                  <BookList>
                    {this.state.plants.map(listing => {
                      return (
                        <div key={listing.id}>
                          <BookListItem
                            key={listing.index}
                            title={listing.common_name}
                            sciName={listing.scientific_name}
                            href={listing.link}
                            idNo={listing.id}
                            //thumbnail={listing.imageLinks?listing.volumeInfo.imageLinks.thumbnail:"https://books.google.com/googlebooks/images/no_cover_thumb.gif"}
                          />
                          <Button 
                          onClick={this.handleFormSubmit3}
                          type="success"
                          className="input-lg"
                          id={listing.id}
                          >
                            Save to Database
                          </Button>
                        </div>
                      );
                    })}
                  </BookList>
                )}
            </Col>
         
          {/* <Col size="md-6">
            {/* <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.sciName}
                onChange={this.handleInputChange}
                name="sciName"
                placeholder="Author (required)"
              />
              <TextArea
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                disabled={!(this.state.sciName && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form> */}
         {/* </Col> */}
        
          <Col size="md-6">
            <Jumbotron>
              <h1>Plants In My Garden</h1>
            </Jumbotron>
            {this.state.garden.length ? (
              <List>
                {this.state.garden.map(select => (
                  <ListItem key={select._id}>
                    <Link to={"/plants/" + select._id}>
                      <strong>
                        {select.plant.common_name}, AKA: {select.plant.scientific_name}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deletePlant(select._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default GreenHouse;
