import React from "react";
import { useState } from "react";

const MainScreen = () => {
  const [isSorting, setIsSorting] = useState(false);
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

  const resetArray = () => {
    if (isSorting) {
      return;
    } else {
      fillArray();
      for (let i = 0; i < numbers.length; i++) {
        const style1 = document.getElementById(i).style;
        style1.backgroundColor = "brown";
      }
    }
  };

  const bubbleSort = () => {
    const arr = [];
    const copyArr = [...numbers];
    for (let i = 0; i < copyArr.length - 1; i++) {
      let swapped = false;

      for (let j = 0; j < copyArr.length - i - 1; j++) {
        const num1 = document.getElementById(j);
        const num2 = document.getElementById(j + 1);
        if (copyArr[j] > copyArr[j + 1]) {
          swapped = true;
          arr.push([num1, num2], true);
          const temp = copyArr[j];
          copyArr[j] = copyArr[j + 1];
          copyArr[j + 1] = temp;
        } else {
          arr.push([num1, num2], false);
        }
      }

      if (!swapped) {
        break;
      }
    }
    setIsSorting(true);
    animateSort(arr);
    setIsSorting(false);
  };

  const animateSort = (arr) => {
    console.log(arr);

    for (let i = 0; i < arr.length; i += 2) {
      console.log(isSorting);
      const first = arr[i][0];
      const second = arr[i][1];
      const swapped = arr[i + 1];

      if (swapped) {
        setTimeout(() => {
          first.style.backgroundColor = "turquoise";
          second.style.backgroundColor = "turquoise";

          const tempHeight = first.style.height;
          first.style.height = second.style.height;
          second.style.height = tempHeight;

          setTimeout(() => {
            first.style.backgroundColor = "green";
            second.style.backgroundColor = "green";
          }, (i + 1) * 5);
        }, i * 5);
      } else {
        setTimeout(() => {
          first.style.backgroundColor = "green";
          second.style.backgroundColor = "green";
        }, (i + 1) * 5);
      }
    }
  };
  return (
    <>
      <h1>Sorting Visualizer</h1>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button
          className="btn btn-primary btn-dark"
          onClick={isSorting === false ? resetArray : ""}
        >
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
          return (
            <div
              className="array-bar"
              id={id}
              style={{ height: `${height}px` }}
            ></div>
          );
        })}
      </div>
    </>
  );
};

export default MainScreen;
