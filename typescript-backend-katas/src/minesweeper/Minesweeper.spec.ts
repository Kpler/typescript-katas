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

  describe('detectSurroundingMines', () => {
    it("should detect mines by returning -1", () => {
      const game = new Minesweeper(3, 3, [
        [1, 0],
        [1, 1],
      ]);

      const actual = game.detectSurroundingMines(0, 1);
      expect(actual).toBe(-1);
    });

    it("should display adjacent mines", () => {
      const game = new Minesweeper(3, 3, [
        [1, 0],
        [1, 1],
      ]);

      /*
        2*2
        2*2
        111
      */

      const actual = game.detectSurroundingMines(1, 0);
      expect(actual).toBe(2);
    });
  });
});
