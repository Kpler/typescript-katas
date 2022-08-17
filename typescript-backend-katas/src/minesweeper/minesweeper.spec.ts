import { generateField } from "./minesweeper";

describe("generateField", () => {
  it("should return an filled array", () => {
    // GIVEN
    const rowsNumber = 1;
    const colsNumber = 1;
    const minesPositions: number[][] = [];
    // WHEN
    const result = generateField(rowsNumber, colsNumber, minesPositions);
    // THEN
    expect(result).toStrictEqual([0]);
  });

  it("should return an filled array with mines", () => {
    // GIVEN
    const rowsNumber = 2;
    const colsNumber = 2;
    const minesPositions: number[][] = [[0, 1]];
    // WHEN
    const result = generateField(rowsNumber, colsNumber, minesPositions);
    // THEN
    expect(result).toStrictEqual([0, 1, 0, 0]);
  });
});
