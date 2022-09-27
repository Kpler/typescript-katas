import { Minesweeper } from "./Minesweeper";

describe("constructor", () => {
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
});

describe("play", () => {
  it("should display the cell played", () => {
    // GIVEN
    const game = new Minesweeper(3, 3, []);
    // WHEN
    const result = game.play(0, 0);
    // THEN
    expect(result).toBe("0..\n...\n...");
  });

  it("should display the cells played when called several time", () => {
    // GIVEN
    // WHEN
    // THEN
  });

  it("should return a game over when played on a mine", () => {
    // GIVEN
    // WHEN
    // THEN
  });

  it("should display all adjacent cells without mines when played on a 0", () => {
    // GIVEN
    // WHEN
    // THEN
  });
});
