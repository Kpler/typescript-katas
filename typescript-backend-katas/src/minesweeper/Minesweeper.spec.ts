import { CellStatus, Minesweeper } from "./Minesweeper";

describe("Minesweeper", () => {
  it("should generate minefield with the right dimensions", () => {
    const expectedResult = "..\n..\n..";

    const game = new Minesweeper([[CellStatus.EMPTY, CellStatus.EMPTY], [CellStatus.EMPTY, CellStatus.EMPTY], [CellStatus.EMPTY, CellStatus.EMPTY]]);
    const actual = game.toString();

    expect(actual).toBe(expectedResult);
  });

  it("should generate a minefield with bombs", () => {
    const expectedResult = ".*.\n.*.\n...";

    const game = new Minesweeper([[CellStatus.EMPTY,CellStatus.MINE,CellStatus.EMPTY],[CellStatus.EMPTY,CellStatus.MINE,CellStatus.EMPTY],[CellStatus.EMPTY,CellStatus.EMPTY,CellStatus.EMPTY]]);
    const actual = game.toString();

    expect(actual).toBe(expectedResult);
  });

  it("should display adjacent mines", () => {
    // @TODO
  });
});
