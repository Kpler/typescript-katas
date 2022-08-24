export class Minesweeper {
  #grid: string[][];
  #mines: [number, number][];

  constructor(rows: number, columns: number, mines: [number, number][]) {
    this.#mines = mines;
    this.#grid = this.#generateGrid(rows, columns);
    this.#addMines();
  }

  toString(): string {
    return this.#grid.map((str) => str.join("")).join("\n");
  }

  toStringWithCounters(): string {
    return this.#countMines(this.#grid).map(str => str.join("")).join("\n");
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

  #countMines(grid: string[][]): (Cell | number)[][] {
    return grid.map((row, rowIndex) => row.map((cell, cellIndex) => {

      if (cell === "*") {
        return Cell.MINE;
      } else {
        const filteredThing = this.#mines.filter(([y, x]) => {
          return [rowIndex -1, rowIndex, rowIndex+1].includes(x) && [cellIndex -1, cellIndex, cellIndex +1].includes(y)
        });
        return filteredThing.length;
      }
    }));
  }
}

enum Cell {
  MINE = "*",
  UNKOWN = ".",
}
