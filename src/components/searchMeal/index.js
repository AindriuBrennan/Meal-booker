import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import "./searchMeal.css";

class searchMealForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="searchMeal">
      <Form>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>City</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Cuisine</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Date</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Time</Form.Label>
            <Form.Control type="float" />
          </Form.Group>
        </Form.Row>
      </Form>
    </div>
    );
  }
}

export default searchMealForm;