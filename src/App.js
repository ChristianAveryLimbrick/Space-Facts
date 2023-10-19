import React from "react";
import CardList from "./Card.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./header.js";

function App() {
  return (
    <div className="App">
      <Header />
      <CardList />
    </div>
  );
}

export default App;
