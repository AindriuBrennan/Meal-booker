import React, { Component } from "react";
import { Card, CardDeck, ListGroup, Button } from "react-bootstrap";
import "./userBookings.css";
import * as api from "../../api";

class UserBookings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: [{}]
    };
  }

  state = {};

  componentDidMount() {
    api
      .getAllBookings()
      .then(resp => {
        this.setState({ bookings: resp.bookings });
      })
      .catch(console.error);
  }

  render() {
    const { bookings } = this.state;

    if (this.state.bookings.length == 0) return;

    const userBookings = bookings.map(booking => {
      return (
        <React.Fragment>
          <h1>Your Bookings</h1>

          <div className="userBookings">
            <CardDeck>
              <Card>
                <Card.Body>
                  <Card.Title>{booking.restaurantName}</Card.Title>
                </Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>{booking.address}</ListGroup.Item>
                  <ListGroup.Item>{booking.phoneNo}</ListGroup.Item>
                  <ListGroup.Item>{booking.bookingTime}</ListGroup.Item>
                  <ListGroup.Item>{booking.bookingDate}</ListGroup.Item>
                </ListGroup>
                <Button variant="primary">Edit Booking</Button>
                <Button variant="danger">Delete Booking</Button>
              </Card>
            </CardDeck>
          </div>
        </React.Fragment>
      );
    });

    return userBookings;
  }
}

export default UserBookings;
