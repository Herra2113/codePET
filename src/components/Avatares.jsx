import { Col, Card, Button } from "react-bootstrap";
import Javi from "../assets/Javi.jpg";
import "./about.css";
const Avatares = () => {
  return (
    <>
      <Col md={4}>
        <Card className="mb-4" id="card-contenedor-about">
          <Card.Body className="cardBackgound d-flex flex-column justify-content-between p-3">
            <div className="mainCard">
              <Card.Title className="fw-bold fs-2 my-3" id="card-nombre">
                Herrera Carlos Javier
              </Card.Title>
              <Card.Text className="compressed-text my-4">
                Un estudiante de Programador universitario, apacionado del mundo
                de la programacion.
              </Card.Text>
            </div>
            <div className="footerCard">
              <Card.Img src={Javi} className="rounded-circle w-50"></Card.Img>
              <Card.Text>
                <strong>Lenguajes y Tecnologias:</strong> HTML, CSS, JavaScript,
                , ReactJS, NodeJS, MySQL, MongoDB
              </Card.Text>
              <Card.Text>
                <strong>Animal Favorito:</strong>Gato
              </Card.Text>
              <Button
                variant="btn btn-lg"
                className="text-center"
                href="https://github.com/Herra2113"
                target="_blank"
              >
                <i className="bi bi-github" id="tamaño-icono"></i>
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Avatares;
