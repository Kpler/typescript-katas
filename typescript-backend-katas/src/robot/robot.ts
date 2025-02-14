export type Position = [number, number];
export type Direction = "North" | "East" | "South" | "West";

enum Command {
    Move = "M",
    Left = "L",
    Right = "R"
}

export interface RobotState {
    position: Position;
    direction: Direction;
}

export function navigateRobot(commands: string): RobotState {
    let result: RobotState = {position: [0, 0], direction: "North"}

    for (const command of commands) {
        if (command === Command.Move) {
            result = move(result)
        }

        if (command === Command.Left) {
            result = rotateLeft(result)
        }

        if (command === Command.Right) {
            result = rotateRight(result)
        }
    }

    return result
}

const move = (result: RobotState): RobotState => {
    switch (result.direction) {
        case "North":
            result.position = [result.position[0], result.position[1]+1] 
            break;
        case "East":
            result.position = [1, 0]
            break;
        case "South":
            result.position = [0, -1]
            break;
        case "West":
            result.position = [-1, 0]
            break;
    }

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
