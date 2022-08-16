import { Game } from "./game"

describe("When playing Bowling", () => {
    describe("if player throws always in the gutter ", () => {
        it("should return 0", () => {
            // Given
            const game = new Game()
            for (let i= 0; i < 20; i++) {
                game.roll(0)
            }

            // When
            const score = game.score()

            // Then
            expect(score).toEqual(0)
        });
    });
    describe("if player takes down only one pin per roll", () => {
        it("should add up correctly the basic number of pins", () => {
            // Given
            const game = new Game()
            for (let i= 0; i < 20; i++) {
                game.roll(1)
            }

            // When
            const score = game.score()

            // Then
            expect(score).toEqual(20)
        });
    });
    describe("if player has a spare", () => {
        it("should add up the next number of pins twice", () => {
            // Given
            const game = new Game()
            game.roll(3);
            game.roll(7); // 10 + next roll (1) --> 11
            game.roll(1);

            // When
            const score = game.score();

            // Then
            expect(score).toEqual(12);
        });
    });
    describe("if player has two spares", () => {
        it("should add up the next number of pins twice", () => {
            // Given
            const game = new Game()
            game.roll(3);
            game.roll(7); // 10 + 9 --> 19
            game.roll(9);
            game.roll(1); // 10 + next roll (1) --> 15
            game.roll(5);

            // When
            const score = game.score();

            // Then
            expect(score).toEqual(39);
        });
    });

    describe("roll", () => {
        it("shall build the frames correctly", () => {
            // Given
            const game = new Game()

            // When
            game.roll(3);
            game.roll(7);
            game.roll(9);
            game.roll(1);
            game.roll(5);
            const frames = game.frames;

            // Then
            expect(frames).toEqual([
                // TODO
            ]);
        });
    });

    // TODO uncomment this method after having done the previous one
    /*describe("if player has a strike", () => {
        it("should add up the next two number of pins twice", () => {
            // Given
            const game = new Game()
            game.roll(10); // 10 + 5 + 3 = 18
            game.roll(5); // 
            game.roll(3); 
            game.roll(7);

            // When
            const score = game.score();

            // Then
            expect(score).toEqual(33);
        });
    });*/
});
