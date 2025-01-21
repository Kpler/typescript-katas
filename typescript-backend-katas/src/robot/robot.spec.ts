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

    it("should be able to turn right", () => {
        const args = "R";
        const position = navigateRobot(args)
        // THEN
        const expectedResult = {position: [0, 0], direction: "East"}
        expect(position).toEqual(expectedResult);
    })

    it("should be able to make a step", () => {
        //GIVEN
        const args = "M";

        // WHEN
        const position = navigateRobot(args);

        // THEN
        const expectedResult = {position: [0, 1], direction: "North"};
        expect(position).toEqual(expectedResult)
    });

    it("should be able to turn and then move", () => {
        //GIVEN
        const args = "LM";

        // WHEN
        const position = navigateRobot(args);

        // THEN
        const expectedResult = {position: [-1, 0], direction: "West"};
        expect(position).toEqual(expectedResult)
    })
});
