import { createMatrice } from "./minesweeper";

describe("My method", () => {
  it("should generate a 4x4 matrice", () => {
    // GIVEN
    const rowsNumber = 4;
    const colsNumber = 4;
    const mines = [[0,0], [2, 1]];

    // WHEN
    const result = createMatrice(rowsNumber, colsNumber, mines)

    // THEN
    
    expect(result).toStrictEqual([
      ['*', '.', '.', '.'],
      ['.', '.', '.', '.'],
      ['.', '*', '.', '.'],
      ['.', '.', '.', '.'],
    ]);
  });
});
