import {navigateRobot, RobotState} from "./robot";

describe("navigateRobot", () => {
    it("should return the starting position if there is no instructions", () => {
        // Given
        // When
        const result = navigateRobot("")

        // Then
        expect(result.position).toEqual([0, 0])
        expect(result.direction).toBe("North")
    });

    it.each(
        [
            {commands: "M", expectedPosition: [0, 1], expectedDirection: "North"},
            {commands: "R", expectedPosition: [0, 0], expectedDirection: "East"},
            {commands: "L", expectedPosition: [0, 0], expectedDirection: "West"},
            {commands: "LM", expectedPosition: [-1, 0], expectedDirection: "West"},
            {commands: "LLM", expectedPosition: [0, -1], expectedDirection: "South"},
            {commands: "LLLM", expectedPosition: [1, 0], expectedDirection: "East"},
            {commands: "MM", expectedPosition: [0, 2], expectedDirection: "North"},
            {commands: "LMLMLMLM", expectedPosition: [0, 0], expectedDirection: "North"},
        ]
    )("Given command is $commands, the resulting position should be $expectedPosition and the resulting direction should be $expectedDirection", (
        {
            commands,
            expectedPosition,
            expectedDirection
        }
    ) => {
        // Given
        // When
        const result = navigateRobot(commands)

        // Then
        expect(result.position).toEqual(expectedPosition)
        expect(result.direction).toBe(expectedDirection)
    })
});
