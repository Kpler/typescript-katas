enum Cell {
  EMPTY = 'empty',
  MINE = 'mine'
}

export class Minesweeper {
  #grid: Cell[][];
  #mines: [number, number][];

  constructor(rows: number, columns: number, mines: [number, number][]) {
    this.#mines = mines;
    this.#grid = this.#generateGrid(rows, columns);
    this.#addMines();
  }

  toString(): string {
    return this.#grid.map((row) => row.map(x => {
      if (x === Cell.EMPTY) {
        return '.';
      }
      if (x === Cell.MINE) {
        return '*';
      }
    }).join("")).join("\n");
  }

  #addMines() {
    this.#mines.forEach((mine) => {
      const [mineX, mineY] = mine;
      this.#grid[mineY][mineX] = Cell.MINE;
    });
  }

  #generateGrid(rows: number, columns: number): Cell[][] {
    const grid = [];

    for (let i = 0; i < rows; i++) {
      const rowArr = [];
      for (let j = 0; j < columns; j++) {
        rowArr.push(Cell.EMPTY);
      }
      grid.push(rowArr);
    }

    return grid;
  }

  displayField(): string {
    const field: number[][] = this.#grid.map();

    // return this.toString().replaceAll(".", "0");
  }
}
