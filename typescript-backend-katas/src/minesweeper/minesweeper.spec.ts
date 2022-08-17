import {MinesweeperGame} from "./minesweeper";


describe("MinesweeperGame", () => {
    it("should print empty game", () => {
        const minesweeperGame = new MinesweeperGame(2, 2)
        expect(minesweeperGame.print()).toBe("..\n..\n")
    });

    it("should print one bomb", () => {
        const minesweeperGame = new MinesweeperGame(2, 2)
        expect(minesweeperGame.print()).toBe("..\n..\n")
    });
});
