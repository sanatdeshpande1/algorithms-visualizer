import React from "react";
import ArrayBar from "./ArrayBar";
import { useState } from "react";

const MainScreen = () => {
  const temp = Array(100)
    .fill()
    .map(() => Math.round(Math.random() * 100) * 5 + 5);
  const [numbers, setNumbers] = useState(temp);

  const fillArray = () => {
    setNumbers(
      Array(100)
        .fill()
        .map(() => Math.round(Math.random() * 100) * 5 + 5)
    );
  };

  const bubbleSort = () => {
    for (let i = 0; i < numbers.length; i++) {
      let swapped = false;
      for (let j = 0; j < numbers.length; j++) {
        const num1 = document.getElementById(j);
        const num2 = document.getElementById(j + 1);

        if (numbers[j] > numbers[j + 1]) {
          const temp = numbers[j];
          numbers[j] = numbers[j + 1];
          numbers[j + 1] = temp;
          num1.style.height = numbers[j] + "px";
          num2.style.height = numbers[j + 1] + "px";

          setTimeout(() => {
            num1.style.backgroundColor = "green";
            num2.style.backgroundColor = "green";

            setTimeout(() => {
              num1.style.backgroundColor = "brown";
              num2.style.backgroundColor = "brown";
            }, (i + 1) * 20);
          }, i * 20);
          swapped = true;
          setNumbers(numbers);
        }
      }
      // if (swapped) setNumbers(numbers);
      if (!swapped) {
        break;
      }
    }
  };
  return (
    <>
      <h1>Sorting Visualizer</h1>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button className="btn btn-primary btn-dark" onClick={fillArray}>
          New Array
        </button>
        <button className="btn btn-primary btn-dark" onClick={bubbleSort}>
          Bubble Sort
        </button>
        <button className="btn btn-primary btn-dark">Selection Sort</button>
        <button className="btn btn-primary btn-dark">Insertion Sort</button>
        <button className="btn btn-primary btn-dark">Quick Sort</button>
        <button className="btn btn-primary btn-dark">Merge Sort</button>
      </nav>
      <div id="sort-bars">
        {numbers.map((height, id) => {
          return <ArrayBar height={height} id={id} />;
        })}
      </div>
    </>
  );
};

export default MainScreen;
