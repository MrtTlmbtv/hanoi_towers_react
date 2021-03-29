import React, { useState } from "react";

function GameStart() {
  const [start, setStart] = useState(false);
  const [gameLevel, setGameLevel] = useState(3);
  const [errors, setErrors] = useState([]);
  function handleStart(e) {
    setStart(true);
  }

  function handleLevelInput(e) {
    if (e.target.value > 10) {
      setErrors((prev) => [
        "Level can't be over 10 (It might just take you a bit longer than you think 🤭)",
      ]);
    } else if (e.target.value < 3) {
      setErrors((prev) => [
        "Level can't be less than 3 (You won't enjoy building it if it's that easy 😉)",
      ]);
    } else {
      setErrors([]);
      setGameLevel(e.target.value || 3);
    }
  }

  return (
    <div>
      <span>Please select the level: </span>
      <span className="game__error-message" style={{ color: "red" }}>
        {errors}
      </span>
      <div className="game__level">
        <input
          placeholder="Enter the level"
          type="number"
          className="game__level-input"
          name="level"
          min={3}
          max={10}
          onInput={handleLevelInput}
        />

        <div>
          <button
            className="game__btn"
            onClick={handleStart}
            disabled={errors.length !== 0}
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
}

export default GameStart;
