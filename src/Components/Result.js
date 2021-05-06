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

  /*
  <Card
          id="resultcard"
          elevation={4}
          width={400}
          height={120}
          marginRight={30}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          backgroundColor="#F1FBFC"
        >
          <Heading>{building.name}</Heading>
          <Text size={200} fontWeight="{bold}" color="#234361">
            {building.description}
          </Text>
          <Heading>{building.location}</Heading>
          <Heading>{building.number}</Heading>
          key={building.id}
        </Car
  */
}
