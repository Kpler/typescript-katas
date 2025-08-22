import { Command, navigate2DSpacecraft, Position, Spacecraft2D } from "./spacecraft";

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

    it.each([
        {
            command: 'R',
            expectedDirection: 'E',
            expectedPosition: [1, 0]
        },
        {
        command: 'F',
        expectedDirection: 'N',
        expectedPosition: [0, 1]
    }
])('should move to the direction $direction', ({command, expectedDirection, expectedPosition}) => {
        const initial: Spacecraft2D = {
            position: [0, 0],
            direction: "N",
            fuel: 100,
            status: "OK",
        }

        const expected: Spacecraft2D = {
            position: expectedPosition as Position,
            direction: expectedDirection as 'E' | 'N' | 'W',
            fuel: 100,
            status: "OK",
        }

        const result = navigate2DSpacecraft(initial, [command as Command], []);

        expect(result).toEqual(expected);
    });
})
