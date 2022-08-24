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

  revealGrid(): string {
    const grid = this.#grid;
    for (mineIndex in this.#mines) {
      // get mines y x
      // increment neighbors count in grid
      // check for mines and bounds
    }
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
}
