import React, { useState } from "react";
import Game from "./components/Game/Game";
import "./App.css";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import About from "./components/About/About";

import { HashRouter, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <div className="app-main">
          <h1 className="game__title">HANOI TOWERS</h1>

          <Switch>
            {/* <Route path="/home" component={Game} /> */}
            <Route path="/" exact component={GameStart} />
            <Route path="/about" component={About} />
            <Route path="/leaderboard" component={Leaderboard} />
            {/* <Redirect from="/" to="/home" /> */}
          </Switch>
        </div>

        <nav className="nav-menu">
          <ul className="nav-list">
            <li className="nav__item">
              <Link className="SectionNavigation-Item Section" to={"/"}>
                Game
              </Link>
            </li>
            <li className="nav__item">
              <Link
                className="SectionNavigation-Item Section"
                to={"/leaderboard"}
              >
                Leaderboard
              </Link>
            </li>
            <li className="nav__item">
              <Link className="SectionNavigation-Item Section" to={"/about"}>
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

const GameStart = (props) => {
  const [start, setStart] = useState(false);
  const [gameLevel, setGameLevel] = useState(3);
  const [errors, setErrors] = useState([]);

  function handleStart(e) {
    console.log(start);
    setStart(true);
  }

  function handleLevelInput(e) {
    if (e.target.value > 7) {
      setErrors((prev) => [
        "Level can't be over 7 (It might just take you a bit longer than you think 🤭)",
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
    <>
      {!start && (
        <>
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
              max={7}
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
    </>
  );
};
export default App;
