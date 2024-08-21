import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";

export const Home = () => {
  const videoRef = useRef(null);

  
  return (
    <Container> 
      
      <video width="100%" height="auto" controls autoPlay loop>
        <source src={require("./Video.mp4")} type="video/mp4" />
      </video>

    </Container>
  );
};

/*const Product = ({ id, name, price, quantité }) => {
  return (
    <Container className="">
      <p>Product Id: {id} </p>
      <p>Product Name:{name} </p>
      <p>Product Price:{price} </p>
      <p>Product Quantité:{quantité} </p>
    </Container>
  );
};*/
