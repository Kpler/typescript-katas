import {computeDiamond} from "./diamond"

describe("computeDiamond", () => {
  it("should return a", () => {
    const diamond = computeDiamond('a');
    expect(diamond).toEqual(['a']);
  });

  it("should return diamond with b ", () => {
    const diamond = computeDiamond('b');
    expect(diamond).toEqual(['*a','b*b','*a']);
  });

  it("should return diamond with c ", () => {
    const diamond = computeDiamond('c');
    expect(diamond).toEqual(['**a','*b*b', 'c**c', '*b*b','**a']);
  });
});





