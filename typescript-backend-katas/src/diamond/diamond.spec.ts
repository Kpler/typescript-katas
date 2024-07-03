import {createDiamond} from "./diamond";

describe("diamond", () => {
    it("should print a simple A", () => {
        // GIVEN
        const expectedResult = "A"

        // WHEN
        const result = createDiamond();

        // THEN
        expect(result).toEqual(expectedResult);
    });

    it('should create a diamond of level 2', () => {
        // GIVEN
        const level = 2
        const expectedResult = "*A*-B*B-*A*"

        // WHEN

        // THEN
    });
});


// GIVEN

// WHEN

// THEN