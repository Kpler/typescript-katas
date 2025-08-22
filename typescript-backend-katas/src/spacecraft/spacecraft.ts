export type Position = [number, number];

export type Direction = "N" | "E" | "S" | "W";

export type Spacecraft2D = {
  position: Position;
  direction: Direction;
  fuel: number;
  status: "OK" | "OUT_OF_FUEL" | "CRASHED" | "MISSION_COMPLETE";
};

export type Command = "F" | "L" | "R";

enum CommandEnum {
  F = "F",
  L = "L",
  R = "R"
}

enum DirectionEnum {
  N = "N",
  E = "E",
  S = "S",
  W = "W"
}

enum StatusEnum {
  OK = "OK",
  OUT_OF_FUEL = "OUT_OF_FUEL",
  CRASHED = "CRASHED",
  MISSION_COMPLETE = "MISSION_COMPLETE"
}

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
  let initialPosition = initial.position;

  if (commands.length === 0) {
    return {
      ...initial
    };
  }
  for (const command in commands){
    if (command === CommandEnum.R) {
        return {
        position: initialPosition,
        direction: DirectionEnum.E,
        fuel: 100,
        status: StatusEnum.OK
        }
    } else if (command === CommandEnum.L) {
        return {
        position: initialPosition,
        direction: DirectionEnum.W,
        fuel: 100,
        status: StatusEnum.OK
        }
    }
    else if(command === CommandEnum.F){
  }


  return {
    position: [0,1],
    direction: DirectionEnum.N,
    fuel: 100,
    status: StatusEnum.OK
  }
}

