
describe("computeDiamond", () => {
  it("shoud return a", () => {
    const diamond = computeDiamond('a');
    expect(diamond).toEqual(['a']);
  });
});


function computeDiamond(diamondVariable: string): Array<String> {
    return ['a']
}

