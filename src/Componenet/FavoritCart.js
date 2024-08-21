import React from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingContext } from "./ShoppingCartContext";
import { FavoritItem } from "./FavoritItem";

export const FavoritCart = ({ isOpenFavorit }) => {
  const { favoriteItems, closeFavorit } = useShoppingContext();

  return (    
    <Offcanvas show={isOpenFavorit} onHide={closeFavorit} placement="end">
      <Offcanvas.Header closeButton> 
        <Offcanvas.Title>Favorit</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body> 
        <Stack gap={5}>
          {favoriteItems.map((item) => (
            <FavoritItem key={item.id} {...item} /> 
          ))} 
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
