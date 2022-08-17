class Minesweeper {
  #rows: number
  #columns: number
  #grid: string[][]
  constructor(rows: number, columns: number, mines: [number, number][]) {
    this.#rows = rows
    this.#columns = columns
    this.#grid = new Array()

    for (let row in rows) {
      let rowArr = []
      for (let column in columns) {
        rowArr.push(".")
      }
      this.#grid.push(rowArr)
    } 
  }


  toString(): string {
    return this.#grid.map(str => str.join('')).join('\n')
  }

}

describe("MineSweeper ", () => {
  it("should generate a map with the right dimensions ", () => {
    const expectedResult = `...
    ...
    ...
    `

    const game = new Minesweeper(3, 3, [])
    const actual = game.toString()

    expect(actual).toBe(expectedResult);
  });
});
