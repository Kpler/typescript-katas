export class Minesweeper {
  #grid: (string | number)[][];
  #mines: [number, number][];
  #rowsNumber: number
  #colsNumber: number

  constructor(rows: number, columns: number, mines: [number, number][]) {
    this.#mines = mines;
    this.#grid = this.#generateGrid(rows, columns);
    this.#addMines();
    this.#rowsNumber = rows
    this.#colsNumber = columns
  }

  toString(): string {
    return this.#grid.map((str) => str.join("")).join("\n");
  }

  #addMines() {
    this.#mines.forEach((mine) => {
      const [mineX, mineY] = mine;
      this.#grid[mineY][mineX] = "*";
    });
  }

  #generateGrid(rows: number, columns: number): string[][] {
    const grid = [];

    for (let i = 0; i < rows; i++) {
      const rowArr = [];
      for (let j = 0; j < columns; j++) {
        rowArr.push(".");
      }
      grid.push(rowArr);
    }

    return grid;
  }

  computeAdjacentMines() : void {
    this.#mines.forEach(([mineY, mineX]) => {
      for (let y=-1; y<=1; y++) {
        for (let x=-1; x<=1; x++) {
          if (y !== 0 && x !== 0) {
            let cellY = mineY + y;
            let cellX = mineX + x;

            const xCondition = cellX >= 0 && cellX < this.#rowsNumber
            const yCondition = cellY >= 0 && cellY < this.#colsNumber
            if (xCondition && yCondition) {
                const previousCellValue = this.#grid[cellY][cellX]
                if (typeof previousCellValue === 'string') {
                    this.#grid[cellY][cellX] = 1
                } else {
                    this.#grid[cellY][cellX] = previousCellValue + 1
                }
            }

          }
        }
      }
    })
    return
  }
}
