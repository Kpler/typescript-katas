import { buildChristmasTree, buildRow, buildTrunk } from "./christmasTree";

describe('build a christmas tree', () => {
  it('should build the simplest tree', () => {
    expect(buildChristmasTree(1)).toBe("X\n|");
  });

  it.skip("should build a 2-height tree", () => {
    expect(buildChristmasTree(2)).toBe(" X \nXXX\n | ");
  });



});

describe('build row method', () => {
  it('should return new row', () => {
    expect(buildRow(1, 0)).toBe('X');
  });

  it("should return new row with longer row number", () => {
    expect(buildRow(2, 1)).toBe("XXX");
  });

  it("should return the first row of a 2-tall tree", () => {
    expect(buildRow(2, 0)).toBe(" X ");
  });

  it("should return the first row of a 3-tall tree", () => {
    expect(buildRow(3, 0)).toBe("  X  ");
  });
})

describe('build trunk', () => {
  it('build trunk for 3-tall tree', () => {
    expect(buildTrunk(3)).toBe('  |  ')
  });
  it('build trunk for 2-tall tree', () => {
    expect(buildTrunk(2)).toBe(' | ')
  });
})
