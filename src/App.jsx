import Footer from "./components/common/Footer";
import Navegacion from "./components/common/Navbar";
import Login from "./components/Login";
import { Error404 } from "./components/views/Error404";
import { Contacto } from "./components/views/Contacto";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <Navegacion></Navegacion>
      <Login></Login>
      <Footer></Footer>
      <Error404 />
      <Contacto />
    </>
  );
}

export default App;
