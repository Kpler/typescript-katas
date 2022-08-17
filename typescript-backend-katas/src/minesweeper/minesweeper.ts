export class MinesweeperGame {
  private rows: number
  private cols: number
  private bombs: [number,number][]

  constructor(rows: number, cols: number) {
    this.rows = rows
    this.cols = cols
    this.bombs = []
  }

  print(): string {
    let output : string = ""
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        output += '.'
      }
      output += "\n"
    }
    return output
  }
}
