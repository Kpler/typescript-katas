export enum CellStatus {
  MINE,
  EMPTY,
}

export class Minesweeper {

  constructor(
    private grid: CellStatus[][]
  ) {
  }

  toString(): string {
    return this.grid.map((row) => row.map(cell => {
      return cell === CellStatus.MINE ? "*" : ".";
    }).join("")).join("\n");
  }
}
