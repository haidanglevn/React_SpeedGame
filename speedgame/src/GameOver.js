import React from "react";
import "./GameOver.css";

const GameOver = (props) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="close-button" onClick={props.resetHandler}>
          <span className="close">&times;</span>
        </div>
        <h1>Oops, Game is over!</h1>
        <h2>Your final score is: {props.score} </h2>
        <button onClick={props.resetHandler}>Try Again</button>
      </div>
    </div>
  );
};

export default GameOver;
