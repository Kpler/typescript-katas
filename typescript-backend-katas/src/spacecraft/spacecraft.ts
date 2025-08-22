type Position = [number, number];

type Direction = "N" | "E" | "S" | "W";

type Spacecraft2D = {
  position: Position;
  direction: Direction;
  fuel: number;
  status: "OK" | "OUT_OF_FUEL" | "CRASHED" | "MISSION_COMPLETE";
};

type Command = "F" | "L" | "R";

type Quest = {
  astronaut: Position;
  base: Position;
  bounds?: { x: [number, number]; y: [number, number] }; // Level 4
  noFlyZones?: Position[]; // Level 4
};

function navigate2DSpacecraft(
  initial: Spacecraft2D,
  commands: Command[],
  obstacles: Position[],
  quest?: Quest
): Spacecraft2D;

