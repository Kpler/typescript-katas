export class Minesweeper {
  constructor(
    public rows: number,
    public columns: number,
    public minePositions: MinePositions
  ) {}

  outputField(): string {
    let field = "";
    for (let row = 0; row < this.rows; row++) {
      for (let column = 0; column < this.columns; column++) {
        const isMatchingMinePosition = this.minePositions.find(
          (minePosition: MinePosition) => {
            return row === minePosition.row && column === minePosition.col;
          }
        );
        field = field.concat(isMatchingMinePosition ? "*" : ".");
      }
      field = field.concat("\n");
    }
    return field;
  }
}

export type MinePosition = { col: number; row: number };
export type MinePositions = MinePosition[];
