import { navigateRobot } from "./robot";

describe("Robot", () => {
    it("should have init position", () => {
        // GIVEN

        // WHEN
        const position = navigateRobot();

        // THEN
        const expectedResult = { position: [0, 0], direction: "North" };
        expect(position).toEqual(expectedResult);
    });

    it("should be able to turn left", () => {
        // GIVEN
        const args = 'L';

        // WHEN
        const position = navigateRobot(args);

        // THEN
        const expectedResult = {position: [0, 0], direction: "West"}
        expect(position).toEqual(expectedResult);
    })
});