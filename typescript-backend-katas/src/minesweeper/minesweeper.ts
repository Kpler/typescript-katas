class Minesweeper {
  #grid: string[][];
  #mines: [number, number][]
  constructor(rows: number, columns: number, mines: [number, number][]) {
    this.#mines = mines
    this.#grid = this.generateGrid(rows, columns)
    this.addMines()
  }

  toString(): string {
    return this.#grid.map((str) => str.join('')).join('\n')
  }

  addMines() {
    for (let mine in this.#mines) {
        const [mineY, mineX] = mine
        this.#grid[mineX][mineY] = '*'
    }
  }

  generateGrid(rows: number, columns: number): string[][] {
    let grid = []

    for (let i = 0; i < rows; i++) {
      let rowArr = []
      for (let j = 0; j < columns; j++) {
        rowArr.push('.')
      }
      grid.push(rowArr)
    }
    return grid
  }
}

export { Minesweeper };
