import { buildChristmasTree } from "./christmasTree";

describe('build a christmas tree', () => {
  it('should build the simplest tree', () => {
    expect(buildChristmasTree(1)).toBe("X\n|");
  });

  it("should build a 2-height tree", () => {
    expect(buildChristmasTree(2)).toBe(" X \nXXX\n | ");
  });
});
