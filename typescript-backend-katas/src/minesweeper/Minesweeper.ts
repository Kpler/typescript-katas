enum MineStatus {
  MINE = "*",
  CLEAR = ".",
}

type Cell = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "*";

export type Position = [number,number]
export const LOOSE_STR = "you loose"

export class Minesweeper {
  #grid: Cell[][];
  #mines: [number, number][];

  constructor(rows: number, columns: number, mines: [number, number][]) {
    const gridWithMines = this.#generateMinefield(rows, columns, mines);
    this.#grid = this.#addCountsToMinefield(gridWithMines, mines);
    this.#mines = mines;
  }

  #generateMinefield(
    rows: number,
    columns: number,
    mines: [number, number][]
  ): MineStatus[][] {
    const grid: MineStatus[][] = [];

    for (let i = 0; i < rows; i++) {
      const rowArr = [];
      for (let j = 0; j < columns; j++) {
        rowArr.push(MineStatus.CLEAR);
      }
      grid.push(rowArr);
    }

    mines.forEach((mine) => {
      const [mineX, mineY] = mine;
      grid[mineX][mineY] = MineStatus.MINE;
    });

    return grid;
  }

  #addCountsToMinefield(grid: MineStatus[][], mines: [number, number][]): Cell[][] {
    return grid.map((row, rowIndex) =>
      row.map((cell, cellIndex) => {
        if (cell === MineStatus.MINE) {
          return "*";
        }

        const adjacentMines = this.#findAdjacentMines(mines, rowIndex, cellIndex);
        return adjacentMines.length.toString() as Cell;
      })
    );
  }

  #findAdjacentMines(mines: [number, number][], rowIndex: number, cellIndex: number) {
    const adjacentMines = mines.filter(([x, y]) => {
      return (
          [rowIndex - 1, rowIndex, rowIndex + 1].includes(x) &&
          [cellIndex - 1, cellIndex, cellIndex + 1].includes(y)
      );
    });
    return adjacentMines;
  }

  play([row, col]:[number, number]): string {
    if (this.#grid[row][col] !== MineStatus.MINE) {
      this.#grid[row][col] = this.#findAdjacentMines(this.#mines, row, col)
    }
    return "you loose";

  }

  toString(): string {
    return this.#grid
      .map(row => row.join(""))
      .join("\n");
  }
}
