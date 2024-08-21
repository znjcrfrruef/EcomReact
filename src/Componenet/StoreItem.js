import React from "react";
import { Button, Card, Carousel } from "react-bootstrap";
import { useShoppingContext } from "./ShoppingCartContext";

export const StoreItem = ({ id, name, price, imgUrl }) => {
  const {
    cartItem,
    getItemsQuantite,
    increaseCartQuantite,
    decreaseCartQuantite, 
    removeFromCart,
    AjoutFavorit,
  } = useShoppingContext();
  const quantity = getItemsQuantite(id);
  return (
    <>
      <Card className="h-100">
        <Card.Img
          src={imgUrl}
          variant="top"
          style={{ height: "200px", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title className="d-flex justify-content-between align-items-baseline">
            <span className="fs-2 ">{name}</span>
            <span className="text-muted me-2">{price}$</span>
          </Card.Title>
          {/* {quantity===0 &&  <Button     variant='outline-primary' className='w-100'  > addToCart</Button>}*/}
          <div>
            {quantity === 0 ? (
              <div>
              <Button
                onClick={() => {
                  increaseCartQuantite(id);
                }}
                variant="outline-primary"
                className="w-100"
              >
                addToCart
              </Button>
              <Button
               onClick={() => {
                AjoutFavorit(id) ;
              }}
              variant="outline-primary"
              className="w-100"
              >
                Favorite {}
              </Button>
              </div>
            ) : (
              <div
                className="d-flex align-items-center flex-column"
                style={{ gap: "1rem" }}
              >
                <div className="d-flex align-items-center justify-content-center">
                  <Button onClick={() => decreaseCartQuantite(id)}>-</Button>
                  <span className="fs-3">{quantity} in Cart</span>
                  <Button onClick={() => increaseCartQuantite(id)}>+</Button>
                </div>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => removeFromCart(id)}
                >
                  Remove
                </Button>
              </div>
            )}
            
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
