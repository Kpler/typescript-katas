import Game from './game';

// To check the scores : https://www.bowlinggenius.com/
describe("Example test", () => {
    it("should start the game with a score of 0", () => {
        const game = new Game();

        expect(game.score()).toBe(0);
    });
    it("should return 3 after a roll of 3", () => {
        const game = new Game();

        game.roll(3);

        expect(game.score()).toBe(3)
    })
    it("should return 8 after a roll of 3 and a roll of 5", () => {
        const game = new Game();

        game.roll(3);
        game.roll(5);

        expect(game.score()).toBe(8)
    })

    it("should return 16 after two rolls of 5 and a roll of 3", () => {
        const game = new Game();

        game.roll(5);
        game.roll(5);
        game.roll(3);

        expect(game.score()).toBe(16)
    })


    it('should return 26 after one roll of 10, one roll of 5 and one roll of 3', () => {
        const game = new Game();

        game.roll(10);
        game.roll(5);
        game.roll(3);

        expect(game.score()).toBe(26)
    })

    it('should return 26 after one roll of 10, one roll of 5 and one roll of 3', () => {
        const game = new Game();

        game.roll(10);
        game.roll(5);
        game.roll(3);

        expect(game.score()).toBe(26)
    })

    it('should return 51 after two roll of 10, one roll of 5 and one roll of 3', () => {
        const game = new Game();

        game.roll(10);
        game.roll(10);
        game.roll(5);
        game.roll(3);

        expect(game.score()).toBe(51)
    })

    it("should return 300 after 12 rolls of 10", () => {
        const game = new Game();

        game.roll(10);
        game.roll(10);
        game.roll(10);
        game.roll(10);
        game.roll(10);
        game.roll(10);
        game.roll(10);
        game.roll(10);
        game.roll(10);
        game.roll(10);
        game.roll(10);
        game.roll(10);

        expect(game.score()).toBe(300)
    })

    it("should return 290 after 11 rolls of 10 and one roll of 0", () => {
        const game = new Game();

        game.roll(10);
        game.roll(10);
        game.roll(10);
        game.roll(10);
        game.roll(10);
        game.roll(10);
        game.roll(10);
        game.roll(10);
        game.roll(10);
        game.roll(10);
        game.roll(10);
        game.roll(0);

        expect(game.score()).toBe(290)
    })
    it("should return 279 after 9 rolls of 10, one roll of 9, one roll of 1, and one roll of 10", () => {
        const game = new Game();

        game.roll(10);
        game.roll(10);
        game.roll(10);
        game.roll(10);
        game.roll(10);
        game.roll(10);
        game.roll(10);
        game.roll(10);
        game.roll(10);
        game.roll(9);
        game.roll(1);
        game.roll(10);

        expect(game.score()).toBe(279)
    });

    it('should be 118', () => {
        const game = new Game();

        game.roll(6);
        game.roll(2);
        game.roll(10);
        game.roll(3);
        game.roll(1);
        game.roll(10);
        game.roll(5);
        game.roll(2);
        game.roll(10);
        game.roll(4);
        game.roll(2);
        game.roll(7);
        game.roll(3);
        game.roll(8);
    })
});
