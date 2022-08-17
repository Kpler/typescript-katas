class Minesweeper {
  #rows: number
  #columns: number
  constructor(rows: number, columns: number, mines: [number, number][]) {
    this.#rows = rows
    this.#columns = columns
  }

  toString(): string {
    return ``
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
