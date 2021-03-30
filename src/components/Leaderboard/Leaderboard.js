import React, { useState, useEffect } from "react";
import "../Leaderboard/Leaderboard.css";
import { db } from "../../firebase";

function Leaderboard() {
  const [records, setRecords] = useState([]);
  const [currentLevel, setCurrentLevel] = useState(3);

  useEffect(() => {
    let records1 = [];
    db.collection("playersRecords")
      .where("level", "==", currentLevel)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          records1.push(doc.data());
        });
        setRecords(records1);
      });
  }, [currentLevel]);

  return (
    <div>
      <div className="leaderboard__list">
        <span>Level:</span>

        <select
          id="levels"
          onChange={(e) => {
            setCurrentLevel(Number(e.target.value));
          }}
        >
          <option value={3}>Three</option>
          <option value={4}>Four</option>
          <option value={5}>Five</option>
          <option value={6}>Six</option>
          <option value={7}>Seven</option>
        </select>
      </div>

      <table className="leaderboard__leaders-table">
        <tr>
          <th>position</th>
          <th>name</th>
          <th>moves</th>
          <th>time</th>
        </tr>
        {records
          .sort((a, b) => a.timeCount - b.timeCount)
          .map((item, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{item["playerName"]}</td>
              <td>{item["movesCount"]}</td>
              <td>{item["timeCount"]}</td>
            </tr>
            //   <span>{item}</span>
          ))}
      </table>
    </div>
  );
}

export default Leaderboard;
