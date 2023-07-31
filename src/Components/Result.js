import React from "react";
import { Card, Container } from "react-bootstrap";
import "../App.css";

export default function Result(props) {
  return (
    <div>
      {props.result.map((building) => (
        <Container>
          <Card style={{ width: "18rem" }}>
            <Card.Header>
              {building.location} || {building.number}{" "}
            </Card.Header>
            <Card.Body>
              <Card.Title>{building.name}</Card.Title>
              <Card.Text>{building.description}</Card.Text>
            </Card.Body>
          </Card>
        </Container>
      ))}
    </div>
  );
}
