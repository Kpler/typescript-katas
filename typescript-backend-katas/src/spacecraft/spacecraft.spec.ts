import { Command, navigate2DSpacecraft, Position, Spacecraft2D } from "./spacecraft";

describe('navigate2DSpacecraft',()=>{
    it('should navigate the spacecraft according to the commands',()=>{
        const initial: Spacecraft2D = {
            position: [0, 0],
            direction: "N",
            fuel: 100,
            status: "OK"
        };
        const commands: Command[] = ["F"];
        const obstacles: Position[] = [];
        const result = navigate2DSpacecraft(initial, commands, obstacles);
        expect(result).toEqual({
            position: [0, 1],
            direction: "N",
            fuel: 100,
            status: "OK"
        });
    });

    it('should rotate to the right and heading to east',()=>{
        const initial: Spacecraft2D = {
            position: [0, 0],
            direction: "N",
            fuel: 100,
            status: "OK"
        };
        const commands: Command[] = ["R"];
        const obstacles: Position[] = [];
        const result = navigate2DSpacecraft(initial, commands, obstacles);
        expect(result).toEqual({
            position: [0, 0],
            direction: "E",
            fuel: 100,
            status: "OK"
        });
    });

    it('should rotate to the left and heading to west',()=>{
        const initial: Spacecraft2D = {
            position: [0, 0],
            direction: "N",
            fuel: 100,
            status: "OK"
        };
        const commands: Command[] = ["L"];
        const obstacles: Position[] = [];
        const result = navigate2DSpacecraft(initial, commands, obstacles);
        expect(result).toEqual({
            position: [0, 0],
            direction: "W",
            fuel: 100,
            status: "OK"
        });
    });
})