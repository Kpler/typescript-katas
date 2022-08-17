export class MinesweeperGame {
  private rows: number
  private cols: number

  private minePositions: [number, number][]
  private minePositionsMap: { [key: string]: boolean }

  constructor(rows: number, cols: number, minePositions: [number, number][]) {
    this.rows = rows
    this.cols = cols
    this.minePositions = minePositions
    this.minePositionsMap = this.minePositions.reduce((acc, [r, c]) => ({
      ...acc,
      [`${r},${c}`]: true,
    }), {});
  }

  print(): string {
    let output: string = ""

    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        output += this.minePositionsMap[`${r},${c}`] ? '*' : '.'
      }
      output += "\n"
    }
    return output
  }
}
