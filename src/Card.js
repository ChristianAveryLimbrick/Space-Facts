import React from "react";
import spaceFacts from "./facts";
import "bootstrap/dist/css/bootstrap.min.css";

function Card({ question, answer }) {
  const [isFlipped, setIsFlipped] = React.useState(false);

  function toggleCard() {
    setIsFlipped((prevState) => !prevState);
  }

  return (
    <div
      className={`card mb-3 ${isFlipped ? "bg-primary" : ""}`}
      style={{ cursor: "pointer" }}
      onClick={toggleCard}
    >
      <div className="card-body">{isFlipped ? answer : question}</div>
    </div>
  );
}

export default function CardList() {
  console.log(spaceFacts);

  return (
    <div className="cards">
      {spaceFacts.map((spaceFact, index) => (
        <Card
          key={index}
          className="mb-3"
          question={spaceFact.question}
          answer={spaceFact.answer}
        />
      ))}
    </div>
  );
}

console.log(spaceFacts[2]);
