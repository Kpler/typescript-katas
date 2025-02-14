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

    it("should move up with one single Move instruction from the initial state", () => {
        // Given
        const command = "M"

        // When
        const result = navigateRobot(command)

        // Then
        expect(result.position).toEqual([0, 1])
        expect(result.direction).toBe("North")
    });

    it("should change direction to West instruction from the initial state", () => {
        // Given
        const command = "L"

        // When
        const result = navigateRobot(command)

        // Then
        expect(result.position).toEqual([0, 0])
        expect(result.direction).toBe("West")
    });

    it("should change direction to East instruction from the initial state", () => {
        // Given
        const command = "R"

        // When
        const result = navigateRobot(command)

        // Then
        expect(result.position).toEqual([0, 0])
        expect(result.direction).toBe("East")
    });
});
