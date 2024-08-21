import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import StoreItems from "../Data/StoreItems.json";
import { StoreItem } from "./StoreItem";

export const Store = () => {
  const [filtre, setFiltre] = useState(false);
  const [numberFilter, setNumberFilter] = useState();
  const handlFilter = (event) => {
    return setNumberFilter(event.target.value);
  };
  return (
    <>
      <h1>Store</h1>
      <input
        type="number"
        placeholder="price < ...$"
        onInput={handlFilter}
      ></input>
      <Button onClick={() => setFiltre(true)}>filtrer</Button>{" "}
      {/*affiche que les prices<100 */}
      {filtre && (
        <Row className="g-3" lg={3} md={2} xs={1}>
          {StoreItems.filter((item) => item.price < numberFilter)?.map(
            (item) => (
              <Col key={item.id}>
                <StoreItem {...item} />
              </Col>
            )
          ) || 0}
          {StoreItems.filter((item) => item.price < numberFilter).length ===
            0 && (
            <span
              style={{
                fontSize: "70px",
                color: "red",
                marginLeft: "30rem",
                marginTop: "17rem",
              }}
            >
              {"Any Product"}
            </span>
          )}
        </Row>
      )}
      {!filtre && (
        <Row className="g-3" lg={3} md={2} xs={1}>
          {StoreItems.map((item) => (
            <Col key={item.id}>
              <StoreItem {...item} /> 
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};
