import Presentacion from "./views/Presentacion";
import Planes from "./views/Planes";
import Servicios from "./views/Servicios";
import Colaboradores from "./views/Colaboradores";
import Testimonios from "./views/Testimonios";
import Marcas from "./views/Marcas";
import "../App.css";
import Publicaciones from "./views/Publicaciones";

const Principal = () => {
  return (
    <>
      <Presentacion></Presentacion>
      <Planes></Planes>
      <Colaboradores></Colaboradores>
      <Servicios></Servicios>
      <Publicaciones />
      <Testimonios></Testimonios>
      <Marcas></Marcas>
    </>
  );
};

export default Principal;
