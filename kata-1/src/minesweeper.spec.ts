import { kataResult, Minesweeper, parseMinesweepers } from "./minesweeper";

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

const output = `Field #1:
*100
2210
1*10
1110

Field #2:
**100
33200
1*100`

describe("Minesweeper game", () => {
  describe("parseMinesweepers", () => {
    it("should return an array of two fields", () => {
      let actual = parseMinesweepers(input);
      expect(actual.length).toStrictEqual(2);

      const [firstMinesweeper, secondMinesweeper] = actual;
      expect(firstMinesweeper.dimensions).toStrictEqual({
        rows: 4,
        columns: 4,
      });
      expect(secondMinesweeper.dimensions).toStrictEqual({
        rows: 3,
        columns: 5,
      });
      expect(firstMinesweeper.toDisplay()).toBe(
        ["*100", "2210", "1*10", "1110"].join("\n")
      );
    });
  });

  describe("Minesweeper", () => {
    it("should display mine fields", () => {
      const minesweeper = new Minesweeper({ rows: 4, columns: 4 }, [
        { row: 0, column: 0 },
      ]);
      expect(minesweeper.toDisplay()).toBe(
        ["*100", "1100", "0000", "0000"].join("\n")
      );

      const minesweeper2 = new Minesweeper({ rows: 4, columns: 4 }, [
        { row: 0, column: 0 },
        { row: 0, column: 1 },
        { row: 2, column: 0 },
      ]);

      expect(minesweeper2.toDisplay()).toBe(
        ["**10", "3310", "*100", "1100"].join("\n")
      );
    });
  });

  describe('kataResult', () => {
    it('should display all the mine fields', () => {
      expect(kataResult(input)).toBe(output);
    });
  })
});
