import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const Frase = () => {
  return (
    <>
      <Card className="mt-3">
        <Card.Body>
          <Row className="d-flex mt-3 bg-white">
            <Col md={4}>
              <img
                src="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
                className="w-50 img-fluid"
                alt="Homero Simpson"
              />
            </Col>
            <Col md={8}>
              <Card.Title>Homero Simpson</Card.Title>
              <Card.Text className="mt-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Expedita, dolorem.
              </Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default Frase;
