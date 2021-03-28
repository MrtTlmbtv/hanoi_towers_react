import React, { useState } from "react";
import Game from "./components/Game/Game";
import "./App.css";
function App() {
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
    <div className="App">
      <h1 className="game__title">HANOI TOWERS</h1>
      {!start && (
        <>
          <div className="game__description">
            <p>
              Hello 👋👋! In this game you have to solve a popular mathematical
              game-puzzle called <strong>Hanoi Towers! </strong>
              The objective of the puzzle is to move the entire stack to last
              rod, obeying the following simple rules:
            </p>
            <p>Only one disk can be moved at a time. </p>
            <p>
              Each move consists of taking the upper disk from one of the stacks
              and placing it on top of another stack or on an empty rod.
            </p>
            <p>No larger disk may be placed on top of a smaller disk.</p>
          </div>
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
        </>
      )}

      {start && <Game gameLevel={Number(gameLevel)}></Game>}
    </div>
  );
}

export default App;
