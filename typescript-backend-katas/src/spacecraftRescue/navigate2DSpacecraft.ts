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
  astronaut?: Position;
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

  // Compute final position starting from initial then applying commands
  let finalPosition: Position = [...initial.position];
  for (const command of commands) {
    switch (command) {
      case "F":
        if (initial.direction === "N") finalPosition[1]++;
/*      if (initial.direction === "E") finalPosition[0]++;
        if (initial.direction === "S") finalPosition[1]--;
        if (initial.direction === "W") finalPosition[0]--; */
        break;
      default:
        throw Error("Not yet implemented");
    }
  }

  // Computing status based on final position vs quest
  let finalStatus: "OK" | "OUT_OF_FUEL" | "CRASHED" | "MISSION_COMPLETE" = "OK";
  if (quest) {
    if (finalPosition[0] === quest.base[0] && finalPosition[1] === quest.base[1]) {
      finalStatus = "MISSION_COMPLETE";
    }
  }

  return {
    position: finalPosition,
    direction: "N",
    fuel: 100,
    status: finalStatus,
  };
}
