import "./App.css";
import Footer from "./components/common/Footer";
import Navegacion from './components/common/Navbar'
import Login from "./components/Login";
import { Error404 } from "./components/views/Error404";
function App() {
  return (
    <>
      <Login></Login>
      <Footer></Footer>
      <Navegacion></Navegacion>
      <Error404 />
    </>
  );
}

export default App;
