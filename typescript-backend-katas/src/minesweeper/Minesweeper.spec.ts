import {YouLoose, Minesweeper} from "./Minesweeper";

describe("Minesweeper", () => {
    it("should generate game and display adjacent mines on empty minefield", () => {
        const expectedResult = "000\n000\n000";
        const game = new Minesweeper(3, 3, []);

        expect(game.toString()).toBe(expectedResult);
    });


    it("should display adjacent mines", () => {
        const expectedResult = "2*2\n2*2\n111";
        const game = new Minesweeper(3, 3, [
            [0, 1],
            [1, 1],
        ]);

        expect(game.toString()).toBe(expectedResult);
    });

//   get set coordinates, show number of near mines or tells about game over
//   game over, winner
//

    it("should lose if current coordinates have a mine", () => {
        const game = new Minesweeper(3, 3, [
            [0, 0],
        ]);
        expect(() => game.play([0, 0])).toThrowError(YouLoose);
    });

    it("should continue if you are not on a mine and reveal adj number of mines", () => {
        const game = new Minesweeper(3, 3, [
            [0, 0],
        ]);
        expect(game.play([0, 1])).toBe(1);
    });
});
