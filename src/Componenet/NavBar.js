import React from "react";
import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { useShoppingContext } from "./ShoppingCartContext";
export const NavBar = () => { 
  const { openCart, cartQuantity,openFavorit,favoritQuantity } = useShoppingContext();
  return (
    //sticky pour la nav bar rest top tjr
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3 ">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            {" "} 
            Home{" "}
          </Nav.Link>
          <Nav.Link to="/Store" as={NavLink}>
            {" "}
            Store{" "}
          </Nav.Link>
          <Nav.Link to="/About" as={NavLink}>
            {" "}
            About{" "}
          </Nav.Link>
        </Nav>

        <Button
          variant="outline-primary"
          className="rounded-circle  "
          style={{ with: "3rem", height: "3rem", position: "relative" }}
          onClick={openCart}
        >
          <ShoppingCart size={32} />
          <div
            className="bg-danger rounded-circle d-flex justify-content-center"
            style={{
              position: "absolute",
              transform: "translate(25%,25%)",
              width: "1.5rem",
              height: "1.5rem",
              bottom: 0,
              right: 0,
            }}
          >
            {cartQuantity}
          </div>
        </Button>

        <Button
          variant="outline-primary"
          className="rounded-circle  "
          style={{ with: "3rem", height: "3rem", position: "relative" }}
          onClick={openFavorit}
        >
          <h5>Favorit</h5>
          <div
            className="bg-danger rounded-circle d-flex justify-content-center"
            style={{
              position: "absolute",
              transform: "translate(25%,25%)",
              width: "1.5rem",
              height: "1.5rem",
              bottom: 0,
              right: 0,
            }}
          >
            {favoritQuantity}
          </div>
        </Button>


<Button variant="second-primary" > <Link to="/SignUp" ><span   >SignUp</span></Link> </Button>

      </Container>
    </NavbarBs>
  );
};
