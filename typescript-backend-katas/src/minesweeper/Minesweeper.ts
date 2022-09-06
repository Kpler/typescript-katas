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

  displayAdjacentMines(): string {
    //initialize an array with 0 everywhere
    const field: number[][] = this.#grid.map(row => row.map(col => 0));
    // here fields is equal to an array or array of 0
    
    //loop each mine to replace 0 around the cell if there is a mine
    this.#mines.forEach(([row, col]) => {
      field[row-1][col-1] += 1;
      field[row][col-1] += 1;
      field[row+1][col-1] += 1;
      field[row-1][col] += 1;
      //field[row][col] += 1;
      field[row+1][col] += 1;
      field[row-1][col+1] += 1;
      field[row][col+1] += 1;
      field[row+1][col+1] += 1;
    })

    return field.map((row) => row.join("")).join("\n");
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
