import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import brand from "../img/brand.png";
import CardWidget from "./CardWidget";

export function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container class="d-flex justify-content-around">
          <Navbar.Brand href="#home">
            <img
              src={brand}
              width="40"
              height="40"
              className="d-inline-block align-items-center "
            ></img>{" "}
            Total-Phone
          </Navbar.Brand>
          <Nav className="align-items-center ">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Equipos</Nav.Link>
            <Nav.Link href="#pricing">Accesorios</Nav.Link>
            <div className="mx-4 p-1 rounded ">
              <Nav.Link href="#carrito">
                <CardWidget />
              </Nav.Link>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
