function craftDiamond(a: string) {
    return a
}

describe("Diamond", () => {
    it("when letter is A, then diamond should A", () => {
        const diamond = craftDiamond('A')
        expect(diamond).toBe('A');
    });
});

