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
        const commandToAction = {
            [Command.Move]: move,
            [Command.Left]: rotateLeft,
            [Command.Right]: rotateRight
        }

        result = commandToAction[command as Command](result)
    }

    return result
}

const move = (result: RobotState): RobotState => {
    const [x, y] = result.position
    switch (result.direction) {
        case "North":
            result.position = [x, y + 1]
            break;
        case "East":
            result.position = [x + 1, y]
            break;
        case "South":
            result.position = [x, y - 1]
            break;
        case "West":
            result.position = [x - 1, y]
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
