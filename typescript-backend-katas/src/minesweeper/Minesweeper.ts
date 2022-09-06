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

   /*
    Creating convetion to define a mine as a value of -1 
  */
  detectSurroundingMines(row: number, column: number): number {
    const condition = true; // if is mine
    /* 
    2*2
    2*2
    111

    -*-
    -*-
    ---

    row = 0, column = 2

    */

    
    if (condition) {
      return -1;
    }
    return 0;
  }

  isMineAtLocation(row: number, column: number): boolean {
    if (row < 0 || column < 0) {
      return false;
    }
    if (this.#grid[row][column] === "*") {
      return true;
    }
    return false;
  }
}
