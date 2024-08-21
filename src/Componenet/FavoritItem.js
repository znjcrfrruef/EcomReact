import React from "react";
import { Button, Stack } from "react-bootstrap";
import StoreItems from "../Data/StoreItems.json";
import { useShoppingContext } from "./ShoppingCartContext";


export const FavoritItem = ({ id }) => {
  const { removeFromFavorit } = useShoppingContext();
  const item = StoreItems.find((item) => item.id === id);
  if (item == null) return null;
  return (
    <Stack gap={5} direction="horizontal" className="d-flex align-items-center">
      <img src={item.imgUrl} style={{ width: "100px", height: "100px" }} />
      <div>
        {item.name} 
        <div>{item.price}$</div> 
      </div>

      <Button className="me-" onClick={() => removeFromFavorit(id)}>
        remove
      </Button>
    </Stack>
  );
};
