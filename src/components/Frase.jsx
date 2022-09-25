import React from "react";
import { Card } from "react-bootstrap";

const Frase = () => {
  return (
    <>
    <section className="d-flex mt-3 bg-white">
      <Card.Img
        src="https://www.nicepng.com/png/detail/191-1914646_homero-simpson-png-sin-fondo-homer-pizza.png"
        className="w-50 img-fluid"
      ></Card.Img>
      <Card.Body className="mt-3">
        <Card.Title>Homero Simpsons</Card.Title>
        <Card.Text className="mt-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita,
            dolorem.
        </Card.Text>
      </Card.Body>
    </section>
    </>
  );
};

export default Frase;
