enum MineStatus {
  MINE = "*",
  CLEAR = ".",
}

export enum GameStatus {
  IN_PROGRESS,
  GAME_OVER,
}

type Cell = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "*";

export class Minesweeper {
  #grid: [Cell, boolean][][];
  #status = GameStatus.IN_PROGRESS;

  constructor(rows: number, columns: number, mines: [number, number][]) {
    const gridWithMines = this.#generateMinefield(rows, columns, mines);
    this.#grid = this.#addCountsToMinefield(gridWithMines, mines);
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

  #addCountsToMinefield(grid: MineStatus[][], mines: [number, number][]): [Cell, boolean][][] {
    return grid.map((row, rowIndex) =>
      row.map((cell, cellIndex) => {
        if (cell === MineStatus.MINE) {
          return ["*", false];
        }

        const adjacentMines = mines.filter(([x, y]) => {
          return (
            [rowIndex - 1, rowIndex, rowIndex + 1].includes(x) &&
            [cellIndex - 1, cellIndex, cellIndex + 1].includes(y)
          );
        });
        return [adjacentMines.length.toString() as Cell, false];
      })
    );
  }

  toString(reveal = true): string {
    return this.#grid
      .map(row => row.map(([cell, flag]) => {
        return (reveal || flag) ? cell : ".";
      }).join(""))
      .join("\n");
  }

  play(row: number, col: number): GameStatus {
    this.#grid[row][col] = [this.#grid[row][col][0], true];
    if (this.#grid[row][col][0] === '*') {
      this.#status = GameStatus.GAME_OVER;
    }
    return this.#status;
  }
}
