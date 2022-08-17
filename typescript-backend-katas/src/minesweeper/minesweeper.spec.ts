function generateGrid(rows: number,
                      columns: number,
                      mines: number[][]
): string[][] {

  let  result: string[][] = [[]]
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      result.push(["."])
    }
  }
    return [['.']];
}


describe("Example test", () => {

  it("should generate an empty grid", () => {
    expect(generateGrid(1, 1, [])).toEqual([['.']]);
  });

  it("should generate an 3x3 grid", () => {
    expect(generateGrid(3, 3, [])).toEqual([['.','.','.'],['.','.','.'],['.','.','.']]);
  });



});