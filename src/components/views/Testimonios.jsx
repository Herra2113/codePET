import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ShareIcon from "@mui/icons-material/Share";
import { Row, Col } from "react-bootstrap";
import "../../App.css";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
const copiarEnlace = () => {
  const enlace = "https://www.codePET.com";
  navigator.clipboard
    .writeText(enlace)
    .then(() => {
      alert("Enlace copiado al portapapeles: " + enlace);
    })
    .catch((error) => {
      console.error("Error al copiar el enlace:", error);
      alert(
        "Ha ocurrido un error al copiar el enlace. Por favor, inténtalo de nuevo."
      );
    });
};

export default function Testimonios() {
  return (
    <div className="container d-flex justify-content-center my-4">
      <Row id="serviciosContenedor" className="py-4">
        <h2 className="letras text-black">Nuestros Clientes Dicen:</h2>
        <Col xs={12} sm={12} md={12} lg={4} className="my-3">
          <Card sx={{ height: 250 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "black" }} aria-label="recipe">
                  AN
                </Avatar>
              }
              title="Ana Carrizo"
              subheader="Septiembre 14, 2023"
              sx={{ color: "black" }}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                La atencion que dan los profesionales es increible super
                calidos, amables y cariñosos!. Le regalaron un caramelo para que
                mi gatita se tranquilice,los mas lindos!!
              </Typography>
            </CardContent>
            <CardActions disableSpacing className="align-self-end">
              <IconButton
                sx={{ color: "black" }}
                aria-label="share"
                onClick={copiarEnlace}
              >
                <Typography className="mx-4 my-1">Compartir Enlace</Typography>
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Col>

        <Col xs={12} sm={12} md={12} lg={4} className="my-3">
          <Card sx={{ height: 250, color: "black" }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "black" }} aria-label="recipe">
                  FF
                </Avatar>
              }
              title="Fernando Fernandez"
              subheader="Abril 10, 2021"
              sx={{ color: "black" }}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Pensé que seria imposible encontrar un veterinario para mi
                conejito, Buddy, es la excepcion a todo lo que siempre buscas y
                no encontras.
              </Typography>
            </CardContent>
            <CardActions disableSpacing className="">
              <IconButton
                sx={{ color: "black" }}
                aria-label="share"
                onClick={copiarEnlace}
              >
                <Typography className="mx-4 my-1">Compartir Enlace</Typography>
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={12} lg={4} className="my-3">
          <Card sx={{ height: 250, color: "black" }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "black" }} aria-label="recipe">
                  CH
                </Avatar>
              }
              title="Carlos Herrera"
              subheader="Abril 05, 2023"
              sx={{ color: "black" }}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Recomiendo 100%. Los veterinarios son de confianza, cero
                comerciantes y apasionados por lo que hacen.
              </Typography>
            </CardContent>
            <CardActions disableSpacing className="">
              <IconButton
                sx={{ color: "black" }}
                aria-label="share"
                onClick={copiarEnlace}
              >
                <Typography className="mx-4 my-1">Compartir Enlace</Typography>
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={12} lg={4} className="my-3">
          <Card sx={{ height: 250, color: "black" }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "black" }} aria-label="recipe">
                  JR
                </Avatar>
              }
              title="Julio Roldan"
              subheader="Marzo 25, 2023"
              sx={{ color: "black" }}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                No me gustó, fui y el lugar es chico para la cantidad de gente
                que va, tendrían que abrir una sucursal para atender a mas
                gente, algunos venimos de lejos.
              </Typography>
            </CardContent>
            <CardActions disableSpacing className="">
              <IconButton
                sx={{ color: "black" }}
                aria-label="share"
                onClick={copiarEnlace}
              >
                <Typography className="mx-4 my-1">Compartir Enlace</Typography>
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
