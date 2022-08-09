import { Minesweeper, parseMinesweepers } from "./minesweeper";

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
  describe("parseMinesweepers", () => {
    it("should return an array of two fields", () => {
      let actual = parseMinesweepers(input);
      expect(actual.length).toStrictEqual(2);

      const [firstMinesweeper, secondMinesweeper] = actual;
      expect(firstMinesweeper.dimensions).toStrictEqual({ rows: 4, columns: 4 });
      expect(secondMinesweeper.dimensions).toStrictEqual({ rows: 3, columns: 5 });
    });
  });

  describe("Minesweeper", () => {
    it("should display mine fields", () => {
      const minesweeper = new Minesweeper({ rows: 4, columns: 4 }, [{ row: 0, column: 0 }]);
      expect(minesweeper.display).toBe(`*1..
11..
....
....`)

      const minesweeper2 = new Minesweeper({ rows: 4, columns: 4 }, [{ row: 0, column: 0 }, { row: 0, column: 1 }, { row: 2, column: 0 }]);
      expect(minesweeper2.display).toBe(`**1.
331.
*1..
11..`)
    })
  });
});
