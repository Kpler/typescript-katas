enum Cell {
  MINE = "*",
  UNKOWN = ".",
}

type Field = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "*";
// type Field = string;

export class Minesweeper {
  #grid: Field[][];

  constructor(rows: number, columns: number, mines: [number, number][]) {
    this.#grid = this.#generateField(rows, columns, mines);
  }

  toString(): string {
    return this.#grid.map((str) => str.join("")).join("\n");
  }

  toStringWithCounters(): string {
    return this.#countMines(this.#grid)
      .map((str) => str.join(""))
      .join("\n");
  }

  #generateField(
    rows: number,
    columns: number,
    mines: [number, number][]
  ): Field[][] {
    const gridWithMines = this.#generateGrid(rows, columns, mines);
    return this.#countMines(gridWithMines, mines);
  }

  #generateGrid(
    rows: number,
    columns: number,
    mines: [number, number][]
  ): Cell[][] {
    const grid: Cell[][] = [];

    for (let i = 0; i < rows; i++) {
      const rowArr = [];
      for (let j = 0; j < columns; j++) {
        rowArr.push(Cell.UNKOWN);
      }
      grid.push(rowArr);
    }

    mines.forEach((mine) => {
      const [mineX, mineY] = mine;
      grid[mineY][mineX] = Cell.MINE;
    });

    return grid;
  }

  #countMines(grid: Cell[][], mines: [number, number][]): Field[][] {
    return grid.map((row, rowIndex) =>
      row.map((cell, cellIndex) => {
        if (cell === Cell.MINE) {
          return "*";
        }

        const filteredThing = mines.filter(([y, x]) => {
          return (
            [rowIndex - 1, rowIndex, rowIndex + 1].includes(x) &&
            [cellIndex - 1, cellIndex, cellIndex + 1].includes(y)
          );
        });
        return filteredThing.length.toString() as Field;
      })
    );
  }
}
