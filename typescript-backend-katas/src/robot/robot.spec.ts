import { navigateRobot } from "./robot";

describe("Robot", () => {
    it("should start in position [0,0] facing north", () => {
        const result = navigateRobot("");
        expect(result).toEqual({ position: [0, 0], direction: "North" });
    });

    it.each([
        {command: "R", expectedDirection: "East" },
        {command: "L", expectedDirection: "West" }
    ])("should rotate", ({command}) => {
        const result = navigateRobot(command);

    });
});
