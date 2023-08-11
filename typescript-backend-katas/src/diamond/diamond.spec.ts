import {computeDiamond} from "./diamond"

describe("computeDiamond", () => {
  it("shoud return a", () => {
    const diamond = computeDiamond('a');
    expect(diamond).toEqual(['a']);
  });

  it("shoud return diamond with b ", () => {
    const diamond = computeDiamond('b');
    expect(diamond).toEqual(['*a','b*b','*a']);
  });
});





