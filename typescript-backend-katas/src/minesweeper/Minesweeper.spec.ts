import { Minesweeper } from "./Minesweeper";

describe("Minesweeper", () => {
  it("should generate game and display adjacent mines on empty minefield", () => {
    const expectedResult = "000\n000\n000";
    const game = new Minesweeper(3, 3, []);

    expect(game.toString()).toBe(expectedResult);
  });

  it("should display adjacent mines", () => {
    const expectedResult = "2*2\n2*2\n111";
    const game = new Minesweeper(3, 3, [
      [0, 1],
      [1, 1],
    ]);

    expect(game.toString()).toBe(expectedResult);
  });

  it("should play a simple move display a single cell", () => {
    const expectedResult = "2..\n...\n...";
    const game = new Minesweeper(3, 3, [
      [0, 1],
      [1, 1],
    ]);
    expect(game.play(0, 0)).toBe(expectedResult)
  })

  it("should play on a mine finish the game", () => {
    const game = new Minesweeper(3, 3, [
      [0, 1],
      [1, 1],
    ]);

    expect(() => {
      game.play(0, 1);
    }).toThrow();
  })
});
