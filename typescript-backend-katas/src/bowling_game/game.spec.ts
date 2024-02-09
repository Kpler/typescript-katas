import {Game} from "./game";

describe("when playing bowling", () => {
    it("we should initialise the score at the start", () => {
        const game = new Game();
        expect(game.score()).toBe(0);
    });
    it("we should increase score when playing once", () => {
        const game = new Game();
        game.roll(1)
        expect(game.score()).toBe(1);
    });
});
