// Nested for loop: outer loop rows ke liye, inner loop columns ke liye.
function buildGrid(rows, columns) {
  const cells = [];

  for (let row = 1; row <= rows; row++) {
    const rowCells = [];

    for (let column = 1; column <= columns; column++) {
      rowCells.push(`<div class="cell">${row}, ${column}</div>`);
    }

    cells.push(rowCells.join(""));
  }

  return cells.join("");
}

const runButton = document.querySelector("#run");
const output = document.querySelector("#output");

runButton.addEventListener("click", () => {
  output.innerHTML = `<div class="grid">${buildGrid(3, 4)}</div>`;
});
