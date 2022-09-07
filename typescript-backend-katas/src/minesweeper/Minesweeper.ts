enum MineStatus {
  MINE = "*",
  CLEAR = ".",
  UNKNOWN = "#",
}

interface Position {
  row: number;
  col: number;
}

const GAME_OVER_MSG = "Game Over Samir you suck"

type Cell = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "*" ;

export class Minesweeper {
  #grid: Cell[][];
  #moves: Position[];

  constructor(rows: number, columns: number, mines: [number, number][]) {
    const gridWithMines = this.#generateMinefield(rows, columns, mines);
    this.#grid = this.#addCountsToMinefield(gridWithMines, mines);
    this.#moves = []
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

        const adjacentMines = mines.filter(([x, y]) => {
          return (
            [rowIndex - 1, rowIndex, rowIndex + 1].includes(x) &&
            [cellIndex - 1, cellIndex, cellIndex + 1].includes(y)
          );
        });
        return adjacentMines.length.toString() as Cell;
      })
    );
  }

  toString(): string {
    return this.#grid
      .map(row => row.join(""))
      .join("\n");
  }

  play(position: Position) : string {

    if (this.#grid[position.row][position.col] === MineStatus.MINE)
      return GAME_OVER_MSG

    this.#moves.push(position);
    return this.#grid
      .map((row, rowIndex) =>
          row.map((col, collIndex) => {
            const isPositionInMoves = this.#moves.some((position, i) => position.col === collIndex && position.row === rowIndex);
            return isPositionInMoves ? col : MineStatus.UNKNOWN
          }).join("")
      )
      .join("\n");
  }
}
