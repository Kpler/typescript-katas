class Minesweeper {
  #rows: number;
  #columns: number;
  #grid: string[][];
  constructor(rows: number, columns: number, mines: [number, number][]) {
    this.#rows = rows;
    this.#columns = columns;
    this.#grid = this.generateGrid(rows, columns);
  }

  toString(): string {
    return this.#grid.map((str) => str.join('')).join('\n');
  }

  generateGrid(rows: number, columns: number): string[][] {
    let grid = new Array();

    for (let i = 0; i < rows; i++) {
      let rowArr = [];
      for (let j = 0; j < columns; j++) {
        rowArr.push('.');
      }
      grid.push(rowArr);
    }
    return grid;
  }
}

export { Minesweeper };
