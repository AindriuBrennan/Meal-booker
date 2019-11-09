import React, { Component, Fragment } from "react";
import { Col } from "react-bootstrap";

import { withRouter } from "react-router-dom";
import axios from "axios";
import { Form, CardDeck ,Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";

import "./searchMeal.css";

const initial_state = {
  location: "",
  cuisine: "",
  searchResults: []
};

class SearchMealForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initial_state };
  }
  //handle user input and inject it into yelp api get request
  handleSubmit = event => {
    event.preventDefault();
    const { location, cuisine, searchResults } = this.state;
    this.searchYelpRestaurants(location, cuisine, searchResults);

    // this.props.setState(location, cuisine, searchResults)
    // .then(this.searchYelpRestaurants);
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  //YELP http api get request
  searchYelpRestaurants = (location, cuisine) => {
    axios
      .get(
        //using CORS anywhere as a proxy to enable the yelp get request
        `${"https://cors-anywhere.herokuapp.com/"}https://api.yelp.com/v3/businesses/search?location=${location}+IE&categories=${cuisine}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY_YELP}`
          }
        }
      )
      .then(res => this.setState({ searchResults: res.data.businesses }));
  };

  render() {
    const { location, cuisine, searchResults } = this.state;

    //create cards with the results from the Yelp API GET
    const YelpSearchResults = this.state.searchResults.map(result => {
      return (
        <div className="searchResults" key={result.id}>
          <CardDeck>
            <Card>
              <Card.Img variant="top" src={result.image_url} />
              <Card.Body>
                <Card.Title>{result.name}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Rating {result.rating}</ListGroupItem>
              </ListGroup>
              <Button variant="primary">Book restaurant</Button>
            </Card>
          </CardDeck>
        </div>
      );
    });
    // return YelpSearchResults;
    // }

    return (
      <React.Fragment>
        <div className="SearchMeal">
          <Form onSubmit={this.handleSubmit}>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>City</Form.Label>
                <Form.Control
                  name="location"
                  type="text"
                  value={location}
                  onChange={this.handleChange}
                  placeholder="location"
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Cuisine</Form.Label>
                <Form.Control
                  name="cuisine"
                  type="text"
                  value={cuisine}
                  onChange={this.handleChange}
                  placeholder="cuisine"
                />
              </Form.Group>
            </Form.Row>
            <Button type="submit">Submit</Button>
            <Button type="reset">Clear</Button>
          </Form>
        </div>

        {YelpSearchResults}
      </React.Fragment>
    );
  }
}

export default SearchMealForm;
