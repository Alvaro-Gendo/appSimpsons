import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container } from "react-bootstrap";
import Frase from "./components/Frase";
import "./style.css";

function App() {
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
        <div>
          <Button variant="warning">Obtener frase</Button>
        </div>
        <div>
          <Frase></Frase>
        </div>
      </Container>
    </>
  );
}

export default App;
