import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../GameComplete/GameComplete.css";
import { db } from "../../firebase";

function GameComplete(props) {
  const [playerName, setPlayerName] = useState("unknown");
  const history = useHistory();
  function handleSubmit(e) {
    e.preventDefault();
    db.collection("playersRecords")
      .add({
        level: props.towerLevel,
        movesCount: props.moveCount,
        playerName: playerName,
        timeCount: props.buildTime,
      })
      .then(() => {
        history.push("/leaderboard");
      })
      .catch((error) => {
        alert(error);
      });
    setPlayerName("");
  }

  return (
    <div game__complete>
      {/* {recordSubmitted?<Lea} */}
      <form action="/" type="POST" onSubmit={handleSubmit}>
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
          onChange={(e) => setPlayerName(e.target.value)}
          value={playerName}
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
