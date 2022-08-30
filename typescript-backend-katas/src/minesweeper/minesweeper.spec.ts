import { createMatrice } from "./minesweeper";

describe("My method", () => {
  it("should generate a 4x4 matrice", () => {
    // GIVEN
    const rowsNumber = 4;
    const colsNumber = 4;
    const mines = [result[0][0]];

    // WHEN
    const result = createMatrice(rowsNumber, colsNumber)

    // THEN
    
    expect(result).toBe([
      ['*', '.', '.', '.'],
      ['.', '.', '.', '.'],
      ['.', '*', '.', '.'],
      ['.', '.', '.', '.'],
    ]);
  });
});
