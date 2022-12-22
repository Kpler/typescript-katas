import { getChristmasTree } from "./christmasTree";

describe("getChristmasTree", () => {
  it("should return X if height is 1", () => {
      const christmasTree = getChristmasTree(1);
      expect(christmasTree).toStrictEqual([
        "X",
        "|",
      ]);
  });

  it("should return a 2 stage tree if height is 2", () => {
    const christmasTree = getChristmasTree(2);
    expect(christmasTree).toStrictEqual([
      //" X ",
      "XXX",
      " | ",
    ]);
});
});
