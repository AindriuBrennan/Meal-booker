import React, { Component } from "react";
import { Card, CardDeck, ListGroup, Button, Form, Col } from "react-bootstrap";
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
//load all the bookings into cards when the page opens
  componentDidMount() {
    api
      .getAllBookings()
      .then(resp => {
        this.setState({ bookings: resp.bookings });
      })
      .catch(console.error);
  };
//add a new booking
  
      handleSubmit = event => {
          event.preventDefault();
          const {restName, restAddres, restPhoneNo, bookingTime, bookingDate} = this.state;
          this.addNewBooking(restName, restAddres, restPhoneNo, bookingTime, bookingDate);
      };

      handleChange = event => {
          this.setState({ [event.target.name]: event.target.value});
      };

addNewBooking = (restName, restAddres, restPhoneNo, bookingTime, bookingDate) =>  {
    api.addBooking().then(resp => {
        this.setState({bookings: resp.bookings})
    });

};

//edit a booking
  editBooking() {
    api.updateBooking().then(resp =>{ this.setState({bookings:resp.bookings});
    }).catch(console.error)
  };
//delete a booking
  deleteBooking() {
      api.deleteBooking()

  }

  render() {
    // const {restName, restAddres, restPhoneNo, bookingTime, bookingDate} = this.state;
    const { bookings } = this.state;
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

    // return (
    //     <React.Fragment>
    //     <div className="heading">
    //         <h1>Bookings</h1>
    //         <p>List of current bookings, add more, edit or delete </p>
    //     </div>

    //     <div className="addBooking">
    //         <Form onSubmit={this.handleSubmit}>
    //             <Form.Row>
    //                 <Form.Group as={Col}>
    //                     <Form.Label>Restaurant Name</Form.Label>
    //                     <Form.Control 
    //                     name="restName"
    //                     type="text"
    //                     value={restName}
    //                     onChange={this.handleChange}
    //                     placeholder="Restaurant Name"/>
    //                 </Form.Group>
    //             </Form.Row>
    //             <Form.Row>
    //                 <Form.Group as={Col}>
    //                     <Form.Label>Restaurant Address</Form.Label>
    //                     <Form.Control
    //                     name="restAddress"
    //                     type="text"
    //                     value={restAddres}
    //                     onChange={this.handleChange}
    //                     placeholder="Restaurant Address"/>
    //                 </Form.Group>
    //             </Form.Row>
    //             <Form.Row>
    //                 <Form.Group>
    //                     <Form.Label>Restaurant Phone No</Form.Label>
    //                     <Form.Control
    //                     name="restPhoneNo"
    //                     type="text"
    //                     value={restPhoneNo}
    //                     onChange={this.handleChange}
    //                     placeholder="Restaurant Phone No"/>
    //                 </Form.Group>
    //             </Form.Row>
    //             <Form.Row>
    //                 <Form.Group>
    //                     <Form.Label>Booking Time</Form.Label>
    //                     <Form.Control
    //                     name="bookingTime"
    //                     type="text"
    //                     value={bookingTime}
    //                     onChange={this.handleChange}
    //                     placeholder="18:30"/>
    //                 </Form.Group>
    //             </Form.Row>
    //             <Form.Row>
    //                 <Form.Group>
    //                     <Form.Label>Booking Date</Form.Label>
    //                     <Form.Control
    //                     name="bookingDate"
    //                     type="text"
    //                     value={bookingDate}
    //                     onChnage={this.handleChange}
    //                     placeholder="30/01/2020"/>
    //                 </Form.Group>
    //             </Form.Row>

    //         </Form>
    //     </div>
    //     </React.Fragment>
    // );

    return userBookings;
  }
}

export default UserBookings;
