import React from "react";
import { Container, Dropdown, Tab, Tabs } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
/*import camera from "../img/camera.jpg";
import desk from "../img/desk.jpg";
import portable from "../img/portable.jpg";*/

export const About = () => {
  return (
    <Container>
      <Tabs defaultActiveKey="profile" className="mb-3" fill>
        <Tab eventKey="said" title="Said">
          <Dropdown>
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
              style={{ width: "auto", height: "auto", fontSize: "20px" }}
            >
              list
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/Store"> Store </Dropdown.Item>
              <Dropdown.Item href="/"> Home </Dropdown.Item>
              <Dropdown.Item href="/About"> About </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Tab>

        <Tab eventKey="sadaoui" title="sadoui">
          sadaoui
        </Tab>
        <Tab eventKey="mahboul" title="mahboul">
          mahboul
        </Tab>
        <Tab eventKey="hidou" title="hidou" disabled>
          hidou
        </Tab>
      </Tabs>

      <Carousel fade data-bs-theme="dark">
        {/* fade pour fair transition automatique  */}
        {/* slide={false} --> ne fait de transition entre slide */}
        <Carousel.Item className="bg-white w-200">
          {/*interval={1000} utilser dans cahque item scrolling auto chaque 1 seconde  */}
          <img
            className="d-block w-100  "
            alt="first slide"
            style={{ height: "90vh" }}
          />

          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            alt="second slide"
            style={{ height: "90vh" }}
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item i>
          <img
            className="d-block w-100"
            alt="third slide"
            style={{ height: "90vh" }}
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};
