import { parseMinesweepers } from "./minesweeper";

const input = `4 4
*...
....
.*..
....
3 5
**...
.....
.*...
0 0`;

describe("Minesweeper", () => {
  describe("parseMinesweepers()", () => {
    it("should return an array of two fields", () => {
      let actual = parseMinesweepers(input);
      expect(actual.length).toStrictEqual(2);

      let minesweeper = actual[0];
      expect(minesweeper.dimensions.rows).toBe(4);
      expect(minesweeper.dimensions.cols).toBe(4);

      minesweeper = actual[1];
      expect(minesweeper.dimensions.rows).toBe(3);
      expect(minesweeper.dimensions.cols).toBe(5);
    });
  });
});
