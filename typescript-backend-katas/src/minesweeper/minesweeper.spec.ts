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

  it("can instantiate mines in the grid", () => {
    const mines = [[0,0],[1,1],[2,2],[3,3]]
    const game = new Minesweeper(4, 4, mines);
    expect(game.display()).toBe(
`*...
.*..
..*.
...*`)
  });

});
