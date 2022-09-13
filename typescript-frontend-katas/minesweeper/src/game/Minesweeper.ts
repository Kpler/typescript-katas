export class GameOver extends Error {
  name = "GameOver";
}

export class Win extends Error {
  name = "Win";
}

enum MineStatus {
  MINE = "*",
  CLEAR = ".",
}

type Cell = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "*" | ".";

export class Minesweeper {
  #grid: Cell[][];
  #playerGrid: Cell[][];

  constructor(
    private rows: number,
    private columns: number,
    private mines: [number, number][]
  ) {
    const gridWithMines = this.#generateMinefield(rows, columns, mines);
    this.#grid = this.#addCountsToMinefield(gridWithMines, mines);
    this.#playerGrid = this.#initPlayerGrid(rows, columns);
  }

  #initPlayerGrid(rows: number, columns: number): Cell[][] {
    const grid: Cell[][] = [];

    for (let i = 0; i < rows; i++) {
      const rowArr: Cell[] = [];
      for (let j = 0; j < columns; j++) {
        rowArr.push(".");
      }
      grid.push(rowArr);
    }

    return grid;
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

  #addCountsToMinefield(
    grid: MineStatus[][],
    mines: [number, number][]
  ): Cell[][] {
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

  #toString(grid: string[][]): string {
    return grid.map((row) => row.join("")).join("\n");
  }

  toString(): string {
    return this.#toString(this.#grid);
  }

  play(row: number, col: number): Cell[][] {
    const currentMove = this.#grid[row][col];
    this.#playerGrid[row][col] = currentMove;

    if (currentMove === "0") {
      const neighbors = [
        [row - 1, col - 1],
        [row - 1, col],
        [row - 1, col + 1],
        [row, col - 1],
        [row, col + 1],
        [row + 1, col - 1],
        [row + 1, col],
        [row + 1, col + 1],
      ]

      neighbors.forEach(([neighborRow, neighborCol]) => {
        if (neighborRow >= 0 && neighborRow <= this.rows && neighborCol >= 0 && neighborCol <= this.columns && this.#playerGrid[neighborRow][neighborCol] === ".") {
          this.play(neighborRow, neighborCol);
        }
      })
    }

    if (currentMove === "*") {
      throw new GameOver();
    }

    const unsweptCellCount = this.#playerGrid
      .flat()
      .filter((c) => c === ".").length;
    if (unsweptCellCount == this.mines.length) {
      throw new Win();
    }

    return this.#playerGrid;
  }
}
