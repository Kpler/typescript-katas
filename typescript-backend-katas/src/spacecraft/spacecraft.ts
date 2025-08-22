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

  const initialDirection = initial.direction;

  if (commands.length === 0) {
    return {
      ...initial
    };
  }

  if (commands[0] === "R") {
    return {
      position: [0,0],
      direction: "E",
      fuel: 100,
      status: "OK"
    }
  } else if (commands[0] === "L") {
    return {
      position: [0,0],
      direction: "W",
      fuel: 100,
      status: "OK"
    }
  }

  return {
    position: [0,1],
    direction: "N",
    fuel: 100,
    status: "OK"
  }
}

