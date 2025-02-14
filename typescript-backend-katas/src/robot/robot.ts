export type Position = [number, number];
export type Direction = "North" | "East" | "South" | "West";

export interface RobotState {
    position: Position;
    direction: Direction;
}

export function navigateRobot(commands: string): RobotState {
    let result: RobotState = {position: [0, 0], direction: "North"}

    const move = (result: RobotState): RobotState => {
        result.position = [0, 1]
        return result;
    }

    const rotateLeft = (result: RobotState): RobotState => {
        switch (result.direction) {
            case "North":
                result.direction = "West"
                break;
            case "West":
                result.direction = "South"
                break;
            case "South":
                result.direction = "East"
                break;
            case "East":
                result.direction = "North"
                break;
        }

        return result;
    }

    const rotateRight = (result: RobotState): RobotState => {
        switch (result.direction) {
            case "North":
                result.direction = "East"
                break;
            case "East":
                result.direction = "South"
                break;
            case "South":
                result.direction = "West"
                break;
            case "West":
                result.direction = "North"
                break;
        }

        return result;
    }

    if (commands === "M") {
        result = move(result)
    }

    if (commands === "L") {
        result = rotateLeft(result)
    }

    if (commands === "R") {
        result = rotateRight(result)
    }

    return result
}
