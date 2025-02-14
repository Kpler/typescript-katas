import { navigateRobot, Position } from "./robot";

describe("Robot", () => {
    it("should start in position [0,0] facing north", () => {
        const result = navigateRobot("");
        expect(result).toEqual({ position: [0, 0], direction: "North" });
    });

    it.each([
        { command: "R", expectedDirection: "East" },
        { command: "L", expectedDirection: "West" },
        { command: "RR", expectedDirection: "South" },
        { command: "LL", expectedDirection: "South" },
        { command: "RL", expectedDirection: "North" },
        { command: "LR", expectedDirection: "North" },
        { command: "LLLL", expectedDirection: "North" },
        { command: "RRRR", expectedDirection: "North" },
        { command: "III", expectedDirection: "North" }
    ])("should rotate %s", ({ command, expectedDirection }) => {
        const result = navigateRobot(command);
        expect(result.direction).toEqual(expectedDirection);
    });

    it.each([
        { command: "M", expectResult: { position: [0, 1], direction: "North" } },
        { command: "RM", expectResult: { position: [1, 0], direction: "East" } },
        { command: "RRM", expectResult: { position: [0, -1], direction: "South" } },
        { command: "LM", expectResult: { position: [-1, 0], direction: "West" } },
        { command: "LMLMLMLM", expectResult: { position: [0, 0], direction: "North" } },
    ])("should move and rotate %s", ({ command, expectResult }) => {
        const result = navigateRobot(command);
        expect(result).toEqual(expectResult);
    });

    it.each([
        { command: "M", obstacles: [[0, 1]], expectResult: { position: [0, 0], direction: "North", status: "Obstacle encountered" } },
    ])("should move and rotate %s", ({ command, expectResult, obstacles }) => {
        const result = navigateRobot(command, obstacles as Position[]);
        expect(result).toEqual(expectResult);
    });


});
