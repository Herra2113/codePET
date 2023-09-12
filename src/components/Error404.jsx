import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export const Error404 = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={8} className="p-3 offset-md-2">
          <h1>¡Ups! parece que hubo un error</h1>
          <h4>No encontramos lo que estas buscando</h4>
          <h2>Error 404</h2>

          <div className="p-3">
            <div className="m-3 text-center">
              <img
                className="my-3"
                style={{ width: "100%", maxWidth: "32rem" }}
                src="https://static.vecteezy.com/system/resources/previews/004/447/618/non_2x/design-layout-for-the-404-error-page-not-found-with-a-silhouette-of-a-cat-on-the-background-of-a-window-vector.jpg"
              />
            </div>
            <button className="btn btn-secondary mb-4">Volver</button>
            <p>
              Lo que estas buscando ya no está. Si crees que deberias ver este
              recurso, comunicate con Soporte.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Error404;
