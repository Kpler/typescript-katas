enum MineStatus {
    MINE = "*",
    CLEAR = ".",
}

type Cell = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "*";

export class YouLoose extends Error {
}

export class YouWin extends Error {
}


export class Minesweeper {
    #grid: Cell[][];
    #playedCells = 0
    #numberOfCells:number
    #numberOfMines:number



    constructor(rows: number, columns: number, mines: [number, number][]) {
        const gridWithMines = this.#generateMinefield(rows, columns, mines);
        this.#grid = this.#addCountsToMinefield(gridWithMines, mines);
        this.#numberOfCells = rows * columns
        this.#numberOfMines = mines.length
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

    play([x, y]: [number, number]): number {
      this.#playedCells++
      const cell_value = this.#grid[x][y]
      if (cell_value === MineStatus.MINE) {
          throw new YouLoose()
      }

      const winCondition = this.#numberOfCells === this.#playedCells + this.#numberOfMines
      if (winCondition) {
        throw new YouWin()
      }
      return Number(cell_value);
    }
}

