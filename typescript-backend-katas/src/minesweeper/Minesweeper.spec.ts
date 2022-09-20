import { LOOSE_STR, Minesweeper, Position } from "./Minesweeper";

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


  it("should loose when player hit the mine", () => {
    const expectedResult = LOOSE_STR;
    const onlyMinePosition: Position = [0, 1]
    const minePositions: Position[] = [
      onlyMinePosition,
    ]
    const game = new Minesweeper(3, 3, minePositions);

    
    expect(game.play(onlyMinePosition)).toBe(expectedResult);
  });

  it("should reveal the number of adjascent mine", () => {
    const expectedResult = '*1*\n***\n***';
    const onlyMinePosition: Position = [0, 0]
    const minePositions: Position[] = [
      onlyMinePosition,
    ]
    const game = new Minesweeper(3, 3, minePositions);

    
    expect(game.play(onlyMinePosition)).toBe(expectedResult);
  });
});
