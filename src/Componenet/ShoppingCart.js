import React from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingContext } from "./ShoppingCartContext";
import { CartItem } from "./CartItem";

export const ShoppingCart = ({ isOpen }) => {
  const { cartItem, closeCart, TotalePrice } = useShoppingContext();

  return (    
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body> 
        <Stack gap={5}>
          {cartItem.map((item) => (
            <CartItem key={item.id} {...item} /> 
          ))} 
          {TotalePrice()}$
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
