import React from "react";

function About() {
  return (
    <div>
      <div className="game__description">
        <p>
          Hello 👋👋! In this game you have to solve a popular mathematical
          game-puzzle called <strong>Hanoi Towers! </strong>
          The objective of the puzzle is to move the entire stack to last rod,
          obeying the following simple rules:
        </p>
        <p>Only one disk can be moved at a time. </p>
        <p>
          Each move consists of taking the upper disk from one of the stacks and
          placing it on top of another stack or on an empty rod.
        </p>
        <p>No larger disk may be placed on top of a smaller disk.</p>
      </div>
    </div>
  );
}

export default About;
