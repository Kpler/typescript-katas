export class Minesweeper {

  constructor(
    private grid: number[][]
  ) {
  }

  toString(): string {
    return this.grid.map((row) => row.map(cell => {
      return cell > 0 ? "*" : ".";
    }).join("")).join("\n");
  }
}
