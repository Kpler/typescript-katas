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

  it("should display adjacent mines on empty minefield", () => {
    const expectedResult = "000\n000\n000";
    const game = new Minesweeper(3, 3, []);

    expect(game.toStringWithCounters()).toBe(expectedResult);
  });

  it("should display adjacent mines", () => {
    const expectedResult = "2*2\n2*2\n111";
    const game = new Minesweeper(3, 3, [
      [1, 0],
      [1, 1],
    ]);

    expect(game.toStringWithCounters()).toBe(expectedResult);
  });
});

describe("Play minesweeper", () => {
  it("should show number of mines adjacents to where we play", () => {
    // GIVEN a new minesweeper game
    const game = new Minesweeper(3, 3, [
      [1, 0],
      [1, 1],
    ]);

    // WHEN we play one move
    const result = game.play(0, 0);

    // THEN we shall have a new grid with few things displayed
    expect(result).toBe("2..\n...\n...")
  });
});
