export type Position = [number, number];

export type Direction = "N" | "E" | "S" | "W";

export type Spacecraft2D = {
    position: Position;
    direction: Direction;
    fuel: number;
    status: "OK" | "OUT_OF_FUEL" | "CRASHED" | "MISSION_COMPLETE";
};

export type Command = "F" | "L" | "R";

export type Quest = {
    astronaut: Position;
    base: Position;
    bounds?: { x: [number, number]; y: [number, number] }; // Level 4
    noFlyZones?: Position[]; // Level 4
};

export function navigate2DSpacecraft(
    initial: Spacecraft2D,
    commands: Command[],
    obstacles: Position[],
    quest?: Quest
): Spacecraft2D {
    let result = {
        position: initial.position,
        direction: initial.direction,
        fuel: initial.fuel,
        status: initial.status,
    }
    if (commands.length && commands[0] === 'R') {
        return {
            position: move(initial.position, 'R'),
            direction: "E",
            fuel: initial.fuel,
            status: initial.status,
        }
    }
    return result;
}

function move(initialPosition: Position, command: Command): Position {
    if (command === 'R') {
        return [initialPosition[0] + 1, initialPosition[1]];
    }
   // if (command === 'L') {
   //     return [initialPosition[0] - 1, initialPosition[1]];
   // }
    if (command === 'F') {
        return [initialPosition[0], initialPosition[1] + 1];
    }
    return initialPosition;
}
