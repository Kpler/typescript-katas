import {Game} from "./game";

describe("when playing bowling", () => {
    let game: Game;
    beforeEach(() => {
        game = new Game();
    });

    it("we should initialise the score at the start", () => {
        expect(game.score()).toBe(0);
    });

    it("we should increase score when playing once", () => {
        game.roll(1)
    expect(game.score()).toBe(1);
    });

    it("when somebody knocks down 5 then 5 then 3 the score should be 16", () => {
        game.roll(5);
        game.roll(5);
        game.roll(3);

        expect(game.score()).toBe(16);
    });
});
