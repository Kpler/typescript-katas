import { Game } from "./game"

describe("When playing Bowling ", () => {
    describe("if player throws always in the gutter ", () => {
        it("should return 0", () => {
            // Given
            const game = new Game()
            for (let i= 0; i < 20; i++) {
                game.roll(0)
            }

            // When
            const actualResult = game.score()

            // Then
            expect(actualResult).toEqual(0)
        });
    });
    describe("if player takes down only one pin per roll ", () => {
        it("should add up correctly the basic number of pins", () => {
            // Given
            const game = new Game()
            for (let i= 0; i < 20; i++) {
                game.roll(1)
            }

            // When
            const actualResult = game.score()

            // Then
            expect(actualResult).toEqual(20)
        });
    });
    describe("if player has a spare ", () => {
        it("should add up the next number of pins twice", () => {
            // Given
            const game = new Game()
            game.roll(3)
            game.roll(7) //  10 + next roll (1) --> 11
            for (let i= 0; i < 18; i++) {
                game.roll(1)
            }

            // When
            const actualResult = game.score()

            // Then
            expect(actualResult).toEqual(29)
        });
    });
});
