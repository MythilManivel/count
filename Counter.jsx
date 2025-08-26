import React, { useState } from "react";

function Counter() {
  const options = ["Dell", "HP", "Lenova"];
  const [votes,setVotes] = useState([0,0,0]);
   const handleVote = (index) => {
    const newVotes = [...votes];
    newVotes[index] += 1;
    setVotes(newVotes);
  };
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Poll App</h1>
      <h2>Vote for your favorite Laptop:</h2>

      {options.map((option, index) => (
        <div key={index} style={{ margin: "10px" }}>
          <button onClick={() => handleVote(index)}>{option}</button>
          <span style={{ marginLeft: "10px" }}>Votes: {votes[index]}</span>
        </div>
      ))}
    </div>
  );
}

export default Counter;
