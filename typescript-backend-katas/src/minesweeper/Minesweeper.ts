enum MineStatus {
  MINE = "*",
  CLEAR = ".",
}

type Cell = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "*";

export class Minesweeper {
  #grid: Cell[][];
  #reveal: boolean[][];

  constructor(rows: number, columns: number, mines: [number, number][]) {
    const gridWithMines = this.#generateMinefield(rows, columns, mines);
    this.#grid = this.#addCountsToMinefield(gridWithMines, mines);

    this.#reveal = new Array(rows)
      .fill(undefined)
      .map(() => new Array(columns).fill(false));
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

  toString(): string {
    return this.#grid.map((row) => row.join("")).join("\n");
  }

  #isWon(): boolean {
    const safeCellCount = this.#grid
      .flatMap((row, x) => {
        return row.map((cell, y) => {
          const isRevealed = this.#reveal[x][y];
          const isBomb = cell === "*";
          return { isRevealed, isBomb };
        });
      })
      .filter(({ isRevealed, isBomb }) => {
        return !isRevealed && !isBomb;
      }).length;

    return safeCellCount === 0;
  }

  #displayGame() {
    return this.#grid
      .map((row, gX) =>
        row
          .map((item, gY) => {
            const isRevealed = this.#reveal[gX][gY];
            return isRevealed ? item : ".";
          })
          .join("")
      )
      .join("\n");
  }

  #getBoundedNeighbors(x: number, y: number): [number, number][] {
    const deltas = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ];

    return deltas
      .map(([dx, dy]): [number, number] => [x + dx, y + dy])
      .filter(([nx, ny]) => this.#grid[nx]?.[ny] !== undefined);
  }

  #play(coordinates: [number, number]): void {
    const [x, y] = coordinates;
    this.#reveal[x][y] = true;

    const isZero = this.#grid[x][y] === "0";
    if (!isZero) {
      return;
    }

    const neighbors = this.#getBoundedNeighbors(x, y);
    neighbors
      .filter(([nx, ny]) => !this.#reveal[nx][ny])
      .forEach((cords) => this.#play(cords));
  }

  play(coordinates: [number, number]): string {
    const [x, y] = coordinates;
    const isBomb = this.#grid[x][y] === "*";
    if (isBomb) {
      return "You lose";
    }

    this.#play(coordinates);
    if (this.#isWon()) {
      return "Win!";
    }

    return this.#displayGame();
  }
}
