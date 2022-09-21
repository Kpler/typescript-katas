import { Minesweeper, GameOver, Win, Position } from "../Minesweeper";

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
    const expectedResult = "2..\n...\n...".split('\n').map(x => x.split(''));
    const game = new Minesweeper(3, 3, [
      [0, 1],
      [1, 1],
    ]);
    expect(game.play(0, 0)).toStrictEqual(expectedResult);
  });

  it("should play on a mine finish the game", () => {
    const game = new Minesweeper(3, 3, [
      [0, 1],
      [1, 1],
    ]);

    expect(() => {
      game.play(0, 1);
    }).toThrow(GameOver);
  });

  it("should play on no mines finish the game", () => {
    const game = new Minesweeper(3, 3, [
      [0, 1],
      [1, 1],
    ]);
    game.play(0, 0);
    game.play(0, 2);
    game.play(1, 0);
    game.play(1, 2);
    game.play(2, 0);
    game.play(2, 1);
    expect(() => {
      game.play(2, 2);
    }).toThrow(Win);
  });

  it("should recursively reveal adjacent mines when playing on zero", () => {
    const expectedResult = "001.\n112.\n....\n....".split('\n').map(x => x.split(''));
    const game = new Minesweeper(4, 4, [
      [0, 3],
      [2, 1],
    ]);

    expect(game.play(0, 0)).toStrictEqual(expectedResult);
  });

  describe("generateMines", () => {
    const mineCount = 1000;
    const rowCount = 10;
    const colCount = 10;
    const iterationCount = 100;
    for (let i = 0; i < iterationCount; i++) {
      const mines = Minesweeper.generateMines(mineCount, rowCount, colCount);
      it("should return the correct number of mines", () => {
        expect(mines.length).toBe(mineCount);
      });
      it("should return mines within the bounds of the grid", () => {
        mines.forEach((m: Position) => {
          expect(m[0]).toBeLessThan(rowCount);
          expect(m[0]).toBeGreaterThanOrEqual(0);
          expect(m[1]).toBeLessThan(colCount);
          expect(m[1]).toBeGreaterThanOrEqual(0);
        });
      });
      it("should not return duplicated mines", () => {
        const mineSet = new Set(mines);
        expect(mineSet.size).toBe(mines.length);
      });
    }
  });
});
