const computeDiamond = (letter: string) => {
    const diamonContent = [];
    if(letter === "A")
        diamonContent.push("A")

    if(letter === "B")
        diamonContent.push(["A", "BB", "A"]);

    return diamonContent;
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