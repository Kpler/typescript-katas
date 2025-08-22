import { navigate2DSpacecraft, Spacecraft2D } from "./spacecraft";

describe("navigate2DSpacecraft", () => {
    it("should return the initial position when no commands are given", () => {
        const initial: Spacecraft2D = {
            position: [0, 0],
            direction: "N",
            fuel: 100,
            status: "OK",
        }

        const result = navigate2DSpacecraft(initial, [], []);

        expect(result).toEqual(initial);
    })

    it('should move to the east', () => {
        const initial: Spacecraft2D = {
            position: [0, 0],
            direction: "N",
            fuel: 100,
            status: "OK",
        }

        const expected: Spacecraft2D = {
            position: [1, 0],
            direction: "E",
            fuel: 100,
            status: "OK",
        }

        const result = navigate2DSpacecraft(initial, ['R'], []);

        expect(result).toEqual(expected);
    });
})
