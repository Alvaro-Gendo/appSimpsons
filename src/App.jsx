import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import Frase from "./components/Frase";
import Spinner from "./components/Spinner";
import "./style.css";


function App() {
  const [personaje, setPersonaje] = useState({});
  const [mostrarSpinner, setMostrarSpinner] = useState(true)

  useEffect(()=>{
    consultarAPI();

  },[])

  const consultarAPI = async() =>{
      //mostrar el spinner
    setMostrarSpinner(true)
    try {
      const respuesta = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes");
      // console.log(respuesta)
      const dato = await respuesta.json();
      // console.log(dato[0])
      setPersonaje(dato[0])
      // mostrar el componente frase
      setMostrarSpinner(false)
    } catch (error) {
      console.log(error)
      //mostrar un msj al usuario de que ocurrio un error
    }
  }

  //condicion logica if/ operador ternario
  //(condicion logica)?(logica a ejecutar si cumplo la condicion logica):(codigo a ejecutar si no se cuple la condicion logica)
  const mostrarComponente = (mostrarSpinner)?(<Spinner/>):(<Frase personaje={personaje}></Frase>)

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
          <Button variant="warning" onClick={consultarAPI}>Obtener frase</Button>
          {mostrarComponente}
      </Container>
    </>
  );
}

export default App;
