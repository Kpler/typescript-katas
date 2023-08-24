import { calculate } from "./calculator.level2";

describe("Calculator", () => {
  it("should execute additions and subtractions correctly", () => {
    expect(calculate("1 + 2")).toBe(3);
    expect(calculate("5 - 3")).toBe(2);
    expect(calculate("5 - -3")).toBe(8);
    expect(calculate("10 + 20 - 5")).toBe(25);
    expect(calculate("100 - 50 + 25")).toBe(75);
    expect(calculate("4 + 8 + 15 + 16 + 23 + 42")).toBe(108);
  });

});
