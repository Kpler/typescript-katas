import {Command, Spacecraft2D, Position, Quest, navigate2DSpacecraft} from "./navigate2DSpacecraft"

describe("navigate2DSpacecraft", () => {
  it("should return MISSION_COMPLETE if the spacecraft its on the quest", () => {
    // GIVEN
    const initial: Spacecraft2D = {
      position: [4, 3],
      direction: "N",
      fuel: 100,
      status: "OK",
    };
    const commands: Command[] = [];
    const obstacles: Position[] = [];
    const quest: Quest = {
      base: [4, 3],
    };

    // WHEN
    const result = navigate2DSpacecraft(initial, commands, obstacles, quest);

    expect(result).toStrictEqual({
      position: [4, 3],
      direction: "N",
      fuel: 100,
      status: "MISSION_COMPLETE",
    });
  });

  it("should navigate one position moving forward to base then returns MISSION_COMPLETE", () => {
    // GIVEN
    const initial: Spacecraft2D = {
      position: [4, 3],
      direction: "N",
      fuel: 100,
      status: "OK",
    };
    const commands: Command[] = ["F"];
    const obstacles: Position[] = [];
    const quest: Quest = {
      base: [4, 4],
    };

    // WHEN
    const result = navigate2DSpacecraft(initial, commands, obstacles, quest);

    expect(result).toStrictEqual({
      position: [4, 4],
      direction: "N",
      fuel: 100,
      status: "MISSION_COMPLETE",
    });
  });

  it.each([
    {
        base: [4, 3],
        commands: [],
    },
    {
        base: [4, 4],
        commands: ["F"],
    }
    
    ])("should match parcels according to their weight", ({ base, commands }) => {
      // GIVEN
      const initial: Spacecraft2D = {
        position: [4, 3],
        direction: "N",
        fuel: 100,
        status: "OK",
      };
      const obstacles: Position[] = [];
      const quest: Quest = {
        base: [4, 4],
      };

      // WHEN
      const result = navigate2DSpacecraft(initial, commands, obstacles, quest);

      expect(result).toStrictEqual({
        position: [4, 4],
        direction: "N",
        fuel: 100,
        status: "MISSION_COMPLETE",
      });
  });

});
