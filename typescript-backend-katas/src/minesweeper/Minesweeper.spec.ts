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
      [0, 1],
      [1, 1],
    ]);
    const actual = game.toString();

    expect(actual).toBe(expectedResult);
  });

  it("should display an empty minefields", () => {
    const expectedResult = "000\n000\n000";

    const game = new Minesweeper(3, 3, []);
    const actual = game.displayField();

    expect(actual).toBe(expectedResult);
  });

  it("should display a minefield with adjacent mines", () => {
    const expectedResult = "1*1\n111\n000";

    const game = new Minesweeper(3, 3, [[0, 1]]);
    const actual = game.displayField();

    expect(actual).toBe(expectedResult);
  });
});
