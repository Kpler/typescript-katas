const alphabet = ["A", "B", "C"]
const computeDiamond = (letter: string) => {
    const diamondContent = [];
    alphabet.forEach(alphabetLetter => {
        diamondContent.push(alphabetLetter)
        if (letter === alphabetLetter)
            break;
    })

    // if (letter === "A")
    //     diamondContent.push("A")
    //
    // if (letter === "B")
    //     diamondContent.push("A", "BB", "A");


    return diamondContent;
}

describe("Compute diamond", () => {
    it("should return the list of strings displayed for the simplest character - A", () => {
        const result = computeDiamond("A");
        expect(result).toEqual(["A"]);
    });
    it("should return the list of strings displayed for A and B", () => {
        const result = computeDiamond("B");
        expect(result).toEqual(["A", "BB", "A"]);
    });
    it("should return the list of strings displayed for A, B and C", () => {
        const result = computeDiamond("C");
        expect(result).toEqual(["A", "BB", "CC", "BB", "A"]);
    });
});


/*
Input A:
Output: [A]

Input: [A]
Output:
A
=======
Input A:
Output:
A

---------
Input A:
Output: [A, BB, A]

Input: [A, BB, A]
Input B:
 A
B B
 A


 ========

 Input B:
Output:
 A
B B
 A
 */