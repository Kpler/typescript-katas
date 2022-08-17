import {MinesweeperGame} from "./minesweeper";


describe("Mine sweeper", () => {
    it("print empty game", () => {
        const minesweeperGame = () => new MinesweeperGame()
        expect(minesweeperGame().print()).toBe("..\n..")
    });
});
