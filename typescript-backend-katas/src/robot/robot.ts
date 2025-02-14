type Position = [number, number];
type Direction = "North" | "East" | "South" | "West";

interface RobotState {
  position: Position;
  direction: Direction;
}

export function navigateRobot(commands: string) {
    const state: RobotState = { 
        position: [0, 0],
        direction: "North"
    };

    return state;
}

