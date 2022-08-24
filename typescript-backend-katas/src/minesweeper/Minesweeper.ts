export class Minesweeper {
  #grid: string[][];
  #mines: [number, number][];

  constructor(private columns: number, private rows: number, mines: [number, number][]) {
    this.#mines = mines;
    this.#grid = this.#generateGrid(rows, columns);
    this.#addMines();
  }

  toString(): string {
    return this.#grid.map((str) => str.join("")).join("\n");
  }

  getNeighbors(position: [number, number]): [number, number][] {
    //
    return [];
  }

  revealGrid(): string {
    const grid = this.#grid;
    for (const mine of this.#mines) {
      const neighbors = this.getNeighbors(mine)
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

  #generateGrid(columns: number, rows: number): string[][] {
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
