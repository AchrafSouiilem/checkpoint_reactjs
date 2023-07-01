import "./App.css";
import React from "react";
import Name from "./components/name";
import Price from "./components/Price";
import Description from "./components/description";
import Card from "react-bootstrap/Card";
import { MyProduct } from "./product";

function App() {
  return (
    <div className="App">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={MyProduct.Image} />
        <Card.Body>
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
