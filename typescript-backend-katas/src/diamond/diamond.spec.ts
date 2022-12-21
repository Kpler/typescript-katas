const letters = 'ABC'
const answers = ["A", " A \nB B\n A ", "  A \nB B\nC   C\nB B\n A  "]

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

function craftDiamondLine(currentChar: string, maxChar: string) {
    const indexCurrentChar = indexOfCharacter(currentChar)
    const indexMaxChar = indexOfCharacter(maxChar)

    if (currentChar == 'A') {
        return " ".repeat(indexMaxChar) + currentChar
    } else {
        return " ".repeat(indexMaxChar - indexCurrentChar) + currentChar + " ".repeat(indexCurrentChar) + currentChar + " ".repeat(indexMaxChar - indexCurrentChar)
    }
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

    it("when letter is C, then diamond should C", () => {
        const diamond = craftDiamond('B')
        expect(diamond).toBe('  A \nB B\nC   C\nB B\n A  ');
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

describe("craftDiamondLine", () => {
    it("when letter is A, and the size of the diamond is A", () => {
        const line = craftDiamondLine('A', 'A')
        expect(line).toBe('A');
    });
    it("when letter is B and the size of the diamond of C", () => {
        const line = craftDiamondLine('B', 'C')
        expect(line).toBe(' B B ');
    });
    it("when letter is C and the size of the diamond of C", () => {
        const line = craftDiamondLine('C', 'C')
        expect(line).toBe('C  C');
    });
    it("when letter is C and the size of the diamond of B", () => {
        const line = craftDiamondLine('C', 'B')
        expect(line).toBe('C  C');
    });
})