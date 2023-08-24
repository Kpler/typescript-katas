import { calculate, DivisionError } from "./calculator.level2";

fdescribe("Calculator", () => {
  it("should execute additions correctly", () => {
    expect(calculate("1 + 2")).toBe(3);
    expect(calculate("4 + 8 + 15 + 16 + 23 + 42")).toBe(108);
  });

  it("should execute subtractions correctly", () => {
    expect(calculate("5 - 3")).toBe(2);    
    expect(calculate("5 - -3")).toBe(8);
  });

  it("should execute substractions and additions in the same expression correctly", () => {
    expect(calculate("5 + 40 - 30")).toBe(15);
  });

  it("should execute multiplications correctly", () => {
    expect(calculate("3 * 2")).toBe(6);
  });

  it("should execute additions and multiplications correctly", () => {
    expect(calculate("6 + 3 * 2")).toBe(12);
  });

  it("should execute additions and more than one multiplication correctly", () => {
    expect(calculate("6 + 3 * 2 + 3 * 3")).toBe(21);
  });

  it("should execute division correctly", () => {
    expect(calculate("6 / 3")).toBe(2);
  });

  it("should execute multiplications and division correctly", () => {
    expect(calculate("4 * 6 / 3")).toBe(8);
  });

  it("should execute division by 0 correctly", () => {
    expect(() => {calculate("6 / 0")}).toThrow(DivisionError);
  });

});

