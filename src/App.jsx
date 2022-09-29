import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import Frase from "./components/Frase";
import "./style.css";


function App() {
  const [personaje, setPersonaje] = useState({});

  useEffect(()=>{
    consultarAPI();

  },[])

  const consultarAPI = async() =>{
    
    
    try {
      const respuesta = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes");
      // console.log(respuesta)
      const dato = await respuesta.json();
      // console.log(dato[0])
      setPersonaje(dato[0])
      
    } catch (error) {
      console.log(error)
      //mostrar un msj al usuario de que ocurrio un error
    }
  }

  return (
    <>
      <Container className="text-center mt-5">
        <div>
          <img
            src="https://i.pinimg.com/originals/9e/37/23/9e37239fd85356a05187ef7cfb46874a.png"
            className="img-fluid"
            alt="The Simpsons"
          />
        </div>
          <Button variant="warning">Obtener frase</Button>
          <Frase personaje={personaje}></Frase>
      </Container>
    </>
  );
}

export default App;
