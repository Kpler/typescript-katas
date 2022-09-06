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
    // GIVEN
    const game = new Minesweeper(4, 4, [
      [0, 0],
      [2, 1],
    ]);
    // WHEN
    const actual = game.displayAdjacentMines();
    // THEN
    const expectedResult = "*100\n2210\n1*10\n1110";
    expect(actual).toBe(expectedResult);
  });
});