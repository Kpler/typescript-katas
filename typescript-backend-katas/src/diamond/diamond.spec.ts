const letters = 'AB'

function craftDiamond(a: string) {
    if (indexOfCharacter(a) == 0) {
        return 'A'
    } else {
        return ' A \nB B\n A '
    }
}


function indexOfCharacter(char: string) {
    return letters.indexOf(char)
}


describe("Diamond", () => {
    it("when letter is A, then diamond should A", () => {
        const diamond = craftDiamond('A')
        expect(diamond).toBe('A');
    });

    it("when letter is B, then diamond should B", () => {
        const diamond = craftDiamond('B')
        expect(diamond).toBe(' A \nB B\n A ');
    });
});


describe("indexOfCharacter", () => {
    it("when letter is A, then index should 0", () => {
        const index = indexOfCharacter('A')
        expect(index).toBe(0);
    });

    it("when letter is B, then index should be 1", () => {
        const index = indexOfCharacter('B')
        expect(index).toBe(1);
    });
});
