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
});

describe("play", () => {
  it("should ", () => {
    // GIVEN
    const game = new Minesweeper(3, 3, [
      [0, 1],
      [1, 1],
    ]);

    // WHEN
    const result = game.play(0, 2);

    // THEN
    const expectedResult = "..2\n...\n...";
    expect(result).toBe(expectedResult);
  });
});
