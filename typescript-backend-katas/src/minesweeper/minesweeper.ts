export class MinesweeperGame {
  private rows: number
  private cols: number
  private minePositions: [number, number][]

  constructor(rows: number, cols: number, minePositions: [number, number][]) {
    this.rows = rows
    this.cols = cols
    this.minePositions = []
  }

  print(): string {
    let output : string = ""

    const minePositionMap = this.minePositions.reduce((acc, [x, y]) => ({
      ...acc,
      [`${x},${y}`]: true,
    }), {});

    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {

        // if c and r match the tuple, use *

        output += '.'
      }
      output += "\n"
    }
    return output
  }
}
