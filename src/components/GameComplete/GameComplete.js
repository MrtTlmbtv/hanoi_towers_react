import React from "react";
import "../GameComplete/GameComplete.css";

function GameComplete(props) {
  return (
    <div game__complete>
      <form action="/" type="POST">
        <div className="game__complete-description">
          <p>Congratulations 🎉🎉🎉</p>
          <p>
            You built the {props.towerLevel}-disk Hanoi Tower in only
            {props.buildTime}
            {props.time} seconds and {props.moveCount} moves 👏.
          </p>
          <p>Please enter your name to be in the leaderboard!</p>
        </div>
        <input
          type="text"
          name="name"
          className="game__username-input"
          placeholder="your name"
        ></input>
        <div>
          <button type="submit" className="game__btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default GameComplete;
