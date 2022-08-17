import { Minesweeper } from './minesweeper';

describe("Minesweeper", () => {
  it("initialize a minesweeper game", () => {
    const game = new Minesweeper(4, 4, []);
    expect(game.rows).toBe(4);
    expect(game.columns).toBe(4);
    expect(game.display()).toBe(
    `....
....
....
....`)
  });
});
