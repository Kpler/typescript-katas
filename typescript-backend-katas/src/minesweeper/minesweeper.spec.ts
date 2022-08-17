import { generateField } from "./minesweeper";

describe("Our main method", () => {
  it("should not break", () => {
    // GIVEN
    const rowsNumber = 1;
    const colsNumber = 1;
    const minesPositions: number[][] = [];
    // WHEN
    const result = generateField(rowsNumber, colsNumber, minesPositions);
    // THEN
    expect(1 + 1).toBe(2);
  });
});
