import { calculate } from "./calculator.level2";

fdescribe("Calculator", () => {
  it("should execute additions correctly", () => {
    expect(calculate("1 + 2")).toBe(3);
    expect(calculate("4 + 8 + 15 + 16 + 23 + 42")).toBe(108);
  });

});
