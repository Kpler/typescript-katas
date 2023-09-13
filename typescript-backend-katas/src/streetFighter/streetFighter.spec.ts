
describe("Given a match between chun-li and sagat won 2 rounds to 1", () => {
    it("should return the 2 players in a list with chun-li having 3 points and sagat having 0 pts", () => {
        const expectedResult = [PlayerResult("chun-li", 3, 1), PlayerResult("sagat", 3, 1)];
        const result = computeMatchResults();
        expect(result).toBe(expectedResult);
    });
});
