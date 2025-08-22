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
        });
    });
})