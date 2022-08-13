import { Calc } from "./calc";

const initCalc = () => new Calc();

describe("Calc.add()", () => {
  it("should return 4 for 2x2", () => {
    const calc = initCalc();
    expect(calc.add(2, 2)).toBe(4);
  });
});
