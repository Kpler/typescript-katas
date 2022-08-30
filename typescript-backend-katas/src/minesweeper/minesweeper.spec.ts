import { MinePosition, MinePositions, Minesweeper } from "./minesweeper";
describe("Minesweeper", () => {
  it("should build mine field correctly", () => {
    const rows = 1;
    const columns = 2;
    const minePositions: MinePositions = [] 
    const minesweeper = new Minesweeper(rows, columns, minePositions);
    expect(minesweeper.outputField()).toBe(
      '..\n'
    );
  });

  it("creating a mine at the end", () => {
    const rows = 1;
    const columns = 3;
    const minePositions: MinePositions = [{x: 0, y: 2}] 
    const minesweeper = new Minesweeper(rows, columns, minePositions);
    expect(minesweeper.outputField()).toBe(
      '..*\n'
    );
  });
});
