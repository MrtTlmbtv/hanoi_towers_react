import React, { useState, useEffect, Fragment } from "react";
import "./Game.css";
import Tower from "../Tower/Tower";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import GameComplete from "../GameComplete/GameComplete";

function Game(props) {
  const [gameCompleted, setGameCompleted] = useState(false);
  const [moveCount, setMoveCount] = useState(0);
  const [gameTimer, setGameTimer] = useState(0);
  const [disks, setDisks] = useState({
    1: [...Array(props.gameLevel).keys()].map((item) => item + 1),
    2: [],
    3: [],
  });

  function handleDiskMove(fromTower = 1, toTower = 2) {
    let diskscopy = { ...disks };
    let diskMoved = diskscopy[fromTower].shift();
    setMoveCount((prev) => prev + 1);
    setDisks({
      ...disks,
      fromTower: diskscopy[fromTower],
      toTower: diskscopy[toTower].unshift(diskMoved),
    });
  }

  useEffect(() => {
    let interval = setInterval(() => {
      setGameTimer((gameTimer) => gameTimer + 1);
    }, 1000);

    if (
      disks[2].length === props.gameLevel ||
      disks[3].length === props.gameLevel
    ) {
      clearInterval(interval);
      setGameCompleted(true);
    }

    return () => {
      clearInterval(interval);
    };
  }, [disks]);

  return (
    <>
      {gameCompleted ? (
        <GameComplete
          towerLevel={props.gameLevel}
          buildTime={gameTimer}
          moveCount={moveCount}
        ></GameComplete>
      ) : (
        <div>
          <div className="game__timer">Time: {gameTimer} s</div>
          <div className="game__move-count">Moves: {moveCount}</div>
          <div className="towers">
            <DndProvider backend={HTML5Backend}>
              <Tower
                disks={disks["1"]}
                handleDiskMove={handleDiskMove}
                towerNum={1}
              ></Tower>
              <Tower
                disks={disks["2"]}
                towerNum={2}
                handleDiskMove={handleDiskMove}
              ></Tower>
              <Tower
                disks={disks["3"]}
                towerNum={3}
                handleDiskMove={handleDiskMove}
              ></Tower>
            </DndProvider>
          </div>
        </div>
      )}
    </>
  );
}

export default Game;
