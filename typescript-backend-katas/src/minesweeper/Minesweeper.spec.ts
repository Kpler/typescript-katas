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

  it("should play a clear cell", () => {
    const expectedResult = "###\n##1\n###";

    const game = new Minesweeper(3, 3, [
      [0, 1]
    ]);

    expect(game.play({ row: 1, col: 2 })).toBe(expectedResult);
  });


});
