function navigateRobot() {
    return {}
}

describe("Example test", () => {
    it("should sum numbers correctly", () => {
        expect(1 + 1).toBe(2);
    });

    it("should have init position", () => {
        // GIVEN

        // WHEN
        const position = navigateRobot();

        // THEN
        const expectedResult = { position: [0, 0], direction: "North" };
        expect(position).toEqual(expectedResult);
    })
});