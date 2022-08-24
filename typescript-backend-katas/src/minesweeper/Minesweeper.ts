export type Position = {col:number, row:number}

export class Minesweeper {
  #grid: string[][];
  #mines: Position[]

  constructor(private columns: number, private rows: number, mines: Position[]) {
    this.#mines = mines
    this.#grid = this.#generateGrid(rows, columns);
    this.#addMines();
  }

  toString(): string {
    return this.#grid.map((str) => str.join("")).join("\n");
  }

  getNeighbors(position: Position): Position[] {
    const neighbors = []
    for (let j= position.row - 1; j < position.row + 1; j++ ) {
      if (j < 0 || j >= this.rows) continue
      for (let i= position.col - 1; i < position.col + 1; i++ ) {
        if (i < 0 || i >= this.columns) continue
        neighbors.push({col: i, row: j})
      } 
    }
    return neighbors;
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
      const {col,row} = mine;
      this.#grid[row][col] = "*";
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
