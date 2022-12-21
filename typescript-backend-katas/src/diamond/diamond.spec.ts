const computeDiamond = (letter: string) => {
    return []
}

describe("Compute diamond", () => {
    it("should return the list of strings displayed for the simplest character - A", () => {
        const result = computeDiamond("A");
        expect(result).toBe(["A"]);
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