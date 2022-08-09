import { splitInputInFields } from "./minesweeper";

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
  describe("splitInputInFields()", () => {
    it("should return an array of two fields", () => {
      let actual = splitInputInFields(input);
      expect(actual.length).toStrictEqual(2);
    });
  });
});
