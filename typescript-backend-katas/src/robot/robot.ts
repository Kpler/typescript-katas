export type Position = [number, number];
export type Direction = "North" | "East" | "South" | "West";

export interface RobotState {
    position: Position;
    direction: Direction;
}



export function navigateRobot(commands: string): RobotState {
    const result: RobotState = { position: [0, 0], direction: "North" }
    return result
}
