import { Minesweeper } from './minesweeper';

describe('MineSweeper ', () => {
  it('should generate a map with the right dimensions ', () => {
    const expectedResult = `...
...
...`;

    const game = new Minesweeper(3, 3, []);
    const actual = game.toString();

    expect(actual).toBe(expectedResult);
  });
  
  it('should generate a map with not-squared dimensions ', () => {
    const expectedResult = `..
..
..`;

    const game = new Minesweeper(3, 2, []);
    const actual = game.toString();

    expect(actual).toBe(expectedResult);
  });

  it('should generate a map bombs ', () => {
    const expectedResult = `.*.
.*.
...`;

    const game = new Minesweeper(3, 3, [[1, 0], [1, 1]]);
    const actual = game.toString();

    expect(actual).toBe(expectedResult);
  });
});
