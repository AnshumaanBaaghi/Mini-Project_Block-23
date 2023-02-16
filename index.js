const squares = document.getElementById("squares");

let index = [0, 0];

const renderSquares = () => {
  const arr = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ];

  squares.innerHTML = `
  ${arr
    .map((row, rowIndex) => {
      return row
        .map((square, colIndex) => {
          const flag = index[0] == rowIndex && index[1] == colIndex;
          return `<div class="${flag ? "square active":"square"}"></div>`;
        })
        .join("");
    })
    .join("")}
  `;
};

const changeSquare = (direction) => {
  if (direction === "left" && index[1] !== 0) {
    index[1] -= 1;
    renderSquares();
  } else if (direction === "right" && index[1] !== 2) {
    index[1] += 1;
    renderSquares();
  } else if (direction === "top" && index[0] !== 0) {
    index[0] -= 1;
    renderSquares();
  } else if (direction === "bottom" && index[0] !== 2) {
    index[0] += 1;
    renderSquares();
  }
};

renderSquares();

addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    changeSquare("top");
  } else if (event.key === "ArrowDown") {
    changeSquare("bottom");
  } else if (event.key === "ArrowLeft") {
    changeSquare("left");
  } else if (event.key === "ArrowRight") {
    changeSquare("right");
  }
});
