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

  displayadjacentmines(): string{
  //get lens of the array, then get width, loop over the cells, from left top to the lower right,
  //  if there is a mine, then bomb, else counts four lines around the cell
  // boundary
    return

  }

}
