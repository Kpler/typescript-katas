import { MinesweeperGame } from "./minesweeper";

describe("MinesweeperGame", () => {
    it("should print empty game", () => {
        const minesweeperGame = new MinesweeperGame(2, 2, [])
        expect(minesweeperGame.print()).toBe("..\n..\n")
    });

    it("should print one mine", () => {
        const minesweeperGame = new MinesweeperGame(2, 2, [[0, 1]])
        expect(minesweeperGame.print()).toBe(".*\n..\n")
    });

    it("should print two mines", () => {
        const minesweeperGame = new MinesweeperGame(2, 2, [[0, 1], [1, 1]])
        expect(minesweeperGame.print()).toBe(".*\n.*\n")
    });
});