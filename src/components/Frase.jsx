import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const Frase = (props) => {
  return (
    <>
      <Card className="mt-3">
        <Card.Body>
          <Row className="d-flex mt-3 bg-white">
            <Col md={4}>
              <img
                src={props.personaje.image}
                className="w-50 img-fluid"
                alt={props.personaje.character}
              />
            </Col>
            <Col md={8}>
              <Card.Title>{props.personaje.character}</Card.Title>
              <Card.Text className="mt-3">
                 {props.personaje.quote}
              </Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default Frase;
