import { Minesweeper } from "./Minesweeper";

describe("Minesweeper", () => {
  it("should generate minefield with the right dimensions", () => {
    const expectedResult = "..\n..\n..";

    const game = new Minesweeper(3, 2, []);
    const actual = game.toString();

    expect(actual).toBe(expectedResult);
  });

  it("should generate a minefield with bombs", () => {
    const expectedResult = ".*.\n.*.\n...";

    const game = new Minesweeper(3, 3, [
      [1, 0],
      [1, 1],
    ]);
    const actual = game.toString();

    expect(actual).toBe(expectedResult);
  });

  it("should display adjacent mines", () => {
    const expectedResult = '*100\n2210\n1*10\n1110'
    const game = new Minesweeper(4, 4, [
      [0, 0],
      [1, 2],
    ]);

    const actual = game.revealGrid()

    expect(actual).toBe(expectedResult)
  });

  it("should find neighboor in corner", () => {
    const expectedOutput = [[0,1], [1,0], [1,1]]
    const game = new Minesweeper(4, 4, [
      [0, 0],
    ]);
    // getNeighbors(position: [number, number]): [number, number][] {
    const output = game.getNeighbors([0,0])

    expect(output).toBe(expectedOutput)
  });

  it("should find neighboor in upper line", () => {
    const expectedOutput = [[1,0], [3,0], [1,1], [2,1], [3,1]]
    const game = new Minesweeper(5, 5, [
      [0, 0],
    ]);
    // getNeighbors(position: [number, number]): [number, number][] {
    const output = game.getNeighbors([2, 0])

    expect(output).toBe(expectedOutput)
  });


});
