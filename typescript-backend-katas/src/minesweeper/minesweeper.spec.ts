import { generateField, getNeighbors, renderField } from "./minesweeper";

describe("generateField", () => {
  it("should return an filled array", () => {
    // GIVEN
    const rowsNumber = 1;
    const colsNumber = 1;
    const minesPositions: number[][] = [];
    // WHEN
    const result = generateField(rowsNumber, colsNumber, minesPositions);
    // THEN
    expect(result).toStrictEqual([[0]]);
  });

  it("should return an filled array with mines", () => {
    // GIVEN
    const rowsNumber = 2;
    const colsNumber = 2;
    const minesPositions: number[][] = [[0, 1]];
    // WHEN
    const result = generateField(rowsNumber, colsNumber, minesPositions);
    // THEN
    expect(result).toStrictEqual([[0, 1], [0, 0]]);
  });
});

describe("renderField", () => {
  it("an empty field should render an empty string", () => {
    // GIVEN
    const field: number[][] = []
    // WHEN
    const result = renderField(field);
    // THEN
    expect(result).toBe("");
  });

  it("an non empty field without mines should render a lot of dots", () => {
    // GIVEN
    const field: number[][] = [[0, 0, 0]]
    // WHEN
    const result = renderField(field);
    // THEN
    expect(result).toBe("...");
  });

  it("an non empty field with multiple lines and mines should render", () => {
    // GIVEN
    const field: number[][] = [[0, 0, 0], [1, 0, 1]]
    // WHEN
    const result = renderField(field);
    // THEN
    expect(result).toBe("...\n*.*");
  });
});

describe("getNeighbors", () => {
  it("should return every neighbor values", () => {
    // GIVEN
    const field = [[0,0,0], [0,0,0], [0,0,0]];
    const position: [number, number] = [1, 1];
    // WHEN
    const result = getNeighbors(position, field);
    // THEN
    expect(result).toStrictEqual([0, 0, 0, 0, 0, 0, 0, 0]);
  });
});
