import React, { Component } from "react";
import { Card, CardDeck, ListGroup, Button, Form, Col } from "react-bootstrap";
import "./userBookings.css";
import * as api from "../../api";

const booking_initial_state = {
  newRestaurantName: "",
  newAddress: "",
  newPhoneNo: "",
  newBookingTime: "",
  newBookingDate: ""
};

class UserBookings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: [{}],
      ...booking_initial_state
    };
  }

  state = {};
  //load all the bookings into cards when the page opens
  componentDidMount() {
    api
      .getAllBookings()
      .then(resp => {
        this.setState({ bookings: resp });
      })
      .catch(console.error);
  }

  // //add a new booking

  handleSubmit = event => {
    event.preventDefault();
    const {
      newRestaurantName,
      newAddress,
      newPhoneNo,
      newBookingTime,
      newBookingDat
    } = this.state;
    this.addNewBooking(
      newRestaurantName,
      newAddress,
      newPhoneNo,
      newBookingTime,
      newBookingDat
    );
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  // add a new booking, used addNewsItem from lab notes as guidelin

  addNewBooking = async (
    newRestaurantName,
    newAddress,
    newPhoneNo,
    newBookingTime,
    newBookingDate
  ) => {
    try {
      const resp = await api.addBooking(
        newRestaurantName,
        newAddress,
        newPhoneNo,
        newBookingTime,
        newBookingDate
      );
      const newBooking = {
        bookingId: resp.id,
        restaurantName: newRestaurantName,
        address: newAddress,
        phoneNo: newPhoneNo,
        bookingTime: newBookingTime,
        bookingDate: newBookingDate
      };
      this.setState({ bookings: this.state.bookings.concat([newBooking]) });
    } catch (e) {
      alert(`failed to add new booking${e}`);
    }
  };

  //edit a booking
  //   editBooking() {
  //     api.updateBooking().then(resp =>{ this.setState({bookings:resp.bookings});
  //     }).catch(console.error)
  //   };
  // //delete a booking
  //   deleteBooking() {
  //       api.deleteBooking()

  //   }

  render() {
    // const {restName, restAddres, restPhoneNo, bookingTime, bookingDate} = this.state;
    const { bookings } = this.state;
    if (this.state.bookings.length == 0) return;
    const userBookings = bookings.map(booking => {
      return (
        <React.Fragment>
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

    //currently screwing with the state of getting my bookings from my mongodb

    return (
      <React.Fragment>
        <div className="heading">
          <h1>Bookings</h1>
          <p>List of current bookings, add more, edit or delete </p>
        </div>

        <div className="addBooking">
          <Form onSubmit={this.handleSubmit}>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Restaurant Name</Form.Label>
                <Form.Control
                  name="newRestaurantName"
                  type="text"
                  value={this.state.newRestaurantName}
                  onChange={this.handleChange}
                  placeholder="Restaurant Name"
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Restaurant Address</Form.Label>
                <Form.Control
                  name="newAddress"
                  type="text"
                  value={this.state.newAddress}
                  onChange={this.handleChange}
                  placeholder="Restaurant Address"
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group>
                <Form.Label>Restaurant Phone No</Form.Label>
                <Form.Control
                  name="newPhoneNo"
                  type="text"
                  value={this.state.newPhoneNo}
                  onChange={this.handleChange}
                  placeholder="Restaurant Phone No"
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group>
                <Form.Label>Booking Time</Form.Label>
                <Form.Control
                  name="newBookingTime"
                  type="text"
                  value={this.state.newBookingTime}
                  onChange={this.handleChange}
                  placeholder="18:30"
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group>
                <Form.Label>Booking Date</Form.Label>
                <Form.Control
                  name="newBookingDate"
                  type="text"
                  value={this.state.newBookingDate}
                  onChange={this.handleChange}
                  placeholder="30/01/2020"
                />
              </Form.Group>
              <Button type="submit">Submit</Button>
            </Form.Row>
          </Form>
        </div>
        {userBookings}
      </React.Fragment>
    );
  }
}

export default UserBookings;
