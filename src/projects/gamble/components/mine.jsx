import React, { useState } from "react";
import "./mine.css";

function Mine() {
  const VerticalAxis = 4;
  const HorizontalAxis = 4;
  const totalBoxes = VerticalAxis * HorizontalAxis;
  const [selected, setSelected] = useState(null);
  const [clickedBoxes, setClickedBoxes] = useState({});
  const [remainingBoxes, setRemainingBoxes] = useState(totalBoxes);
  const [gameOver, setGameOver] = useState(false);

  const handleChange = (value) => {
    setSelected(value);
    resetGame(); // Reset the game when a new option is selected
  };

  const mineClick = (key) => {
    if (gameOver) return;

    if (selected === 'loose') {
      markLooseBoxes();
    } else if (selected === 'win') {
      markWinBoxes();
    } else {
      // Temporarily mark box
      setClickedBoxes(prev => ({ ...prev, [key]: 'yellow' }));
    }

    setRemainingBoxes(prev => prev - 1);
    if (remainingBoxes <= 1 && selected === 'loose') {
      setGameOver(true);
      alert("Game Over! Click 'OK' to restart the game.");
      resetGame();
    }
  };

  const markLooseBoxes = () => {
    const last3Keys = Object.keys(clickedBoxes).slice(-3);
    const randomIndex = Math.floor(Math.random() * last3Keys.length);
    const keyToMark = last3Keys[randomIndex];
    setClickedBoxes(prev => ({ ...prev, [keyToMark]: 'red' }));
  };

  const markWinBoxes = () => {
    const last1Key = Object.keys(clickedBoxes).slice(-1)[0];
    const last2Key = Object.keys(clickedBoxes).slice(-2, -1)[0];
    if (last1Key) {
      setClickedBoxes(prev => ({ ...prev, [last1Key]: 'green' }));
    }
    if (last2Key) {
      setClickedBoxes(prev => ({ ...prev, [last2Key]: 'green' }));
    }
  };

  const resetGame = () => {
    setClickedBoxes({});
    setRemainingBoxes(totalBoxes);
    setGameOver(false);
  };

  const mines = [];
  for (let j = VerticalAxis - 1; j >= 0; j--) {
    for (let i = 0; i < HorizontalAxis; i++) {
      const key = `${j}-${i}`;
      mines.push(
        <div
          key={key}
          className="mine"
          onClick={() => mineClick(key)}
          style={{ backgroundColor: clickedBoxes[key]}}
        >
        </div>
      );
    }
  }

  return (
    <>
      <div className="mine-container">{mines}</div>

      <input
        type="checkbox"
        checked={selected === "loose"}
        onChange={() => handleChange("loose")}
      />
      loose

      <input
        type="checkbox"
        checked={selected === "win"}
        onChange={() => handleChange("win")}
      />
      win
    </>
  );
}

export default Mine;
