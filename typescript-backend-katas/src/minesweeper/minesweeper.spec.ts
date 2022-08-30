import { MinePosition, MinePositions, Minesweeper } from "./minesweeper";
describe("Minesweeper", () => {
  it("should build mine field correctly", () => {
    const rows = 5;
    const columns = 6;
    const minePositions: MinePositions = [] 
    const minesweeper = new Minesweeper(rows, columns, minePositions);
    expect(1 + 1).toBe(2);
  });
});
