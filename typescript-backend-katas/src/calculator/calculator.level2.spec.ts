import { calculate } from "./calculator.level2";

describe("Calculator", () => {
  // it("should execute additions and soustractions correctly", () => {
  //   expect(calculate("1 + 2")).toBe(3);
  //   expect(calculate("5 - 3")).toBe(2);
  //   expect(calculate("5 - -3")).toBe(8);
  //   expect(calculate("10 + 20 - 5")).toBe(25);
  //   expect(calculate("100 - 50 + 25")).toBe(75);
  //   expect(calculate("4 + 8 + 15 + 16 + 23 + 42")).toBe(108);
  // });
  //
  // it("should execute multiplications and divisions correctly", () => {
  //   expect(calculate("2 * 3")).toBe(6);
  //   expect(calculate("2 * 5 * 10")).toBe(100);
  //   expect(calculate("2 + 3 * 4")).toBe(14);
  //   expect(calculate("2 * 3 + 4")).toBe(10);
  //   expect(calculate("3 * 4 + 5 * 6")).toBe(42);
  //   expect(calculate("-3 * -4 + -5 * -6")).toBe(42);
  // });

  it("should execute operations in paranthesis first", () => {
    expect(calculate("2 * ( 1 + 2 ) ")).toBe(6);
    // expect(calculate("2 * ( 1 - 2 ) ")).toBe(-2);
    // expect(calculate("2 * (( 1 - 2 ) ")).toBe(-2);
    // expect(calculate("( 1 + 2 ) * ( 1 - 2 ) ")).toBe(-2);
    // expect(calculate("(( 1 + 2 ) + 3) * ( 1 - 2 ) * 5 ")).toBe(-2);


  });
});
