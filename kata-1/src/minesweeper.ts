interface FieldDimension {
  rows: number;
  columns: number;
}

interface Position {
  row: number;
  column: number;
}

export class Minesweeper {
  #mineLocations: Map<number, Set<number>>;

  constructor(
    readonly dimensions: Readonly<FieldDimension>,
    readonly mines: Position[]
  ) {
    const locations = new Map<number, Set<number>>();

    mines.forEach(({ row, column }) => {
      let columnsInRow = locations.get(row);
      if (columnsInRow === undefined) {
        columnsInRow = new Set<number>();
        locations.set(row, columnsInRow);
      }

      columnsInRow.add(column);
    });

    this.#mineLocations = locations;
  }

  static fromRawLines(
    dimensions: Readonly<FieldDimension>,
    rawLines: string[]
  ): Minesweeper {
    // @TODO: not implemented
    return new Minesweeper(dimensions, []);
  }

  #hasMine(row: number, column: number): boolean {
    return this.#mineLocations.get(row)?.has(column) === true;
  }

  #getBoundedValue(row: number, column: number): number {
    if (row < 0 || column < 0 || row > this.dimensions.rows || column > this.dimensions.columns) {
      return 0;
    }

    return this.#hasMine(row, column) ? 1 : 0;
  }

  #countNeighborMines(row: number, column: number): number {
    const neighborsCoordinates: Position[] = [
      { row: -1, column: -1},
      { row: 0, column: -1},
      { row: 1, column: -1},
      { row: -1, column: 0},
      { row: 1, column: 0},
      { row: -1, column: 1},
      { row: 0, column: 1},
      { row: 1, column: 1},
    ]

    return neighborsCoordinates.reduce((acc, { row: x, column: y }) => {
      return acc + this.#getBoundedValue(row + x, column + y);
    }, 0)
  }

  get display(): string {
    const rows = [];
    for (let i = 0; i < this.dimensions.rows; i++) {
      let row = "";
      for (let j = 0; j < this.dimensions.columns; j++) {
        const neightborMines = this.#countNeighborMines(i, j);
        row += this.#hasMine(i, j) ? "*" : neightborMines === 0 ? "." : neightborMines.toString();
      }
      rows.push(row);
    }

    return rows.join('\n');
  }
}

const parseDimensions = (line: string): FieldDimension => {
  const [rows, columns] = line.split(" ", 2).map((x) => Number(x));
  return { rows, columns };
};

export const parseMinesweepers = (input: string): Minesweeper[] => {
  const lines = input.split("\n");
  let globalIndex = 0;

  const output: Minesweeper[] = [];

  let dimensions = parseDimensions(lines[globalIndex]);
  while (dimensions.rows !== 0) {
    const linesToRead = dimensions.rows;

    globalIndex += 1;
    const minesweeperLines = lines.slice(
      globalIndex,
      globalIndex + linesToRead
    );
    output.push(Minesweeper.fromRawLines(dimensions, minesweeperLines));

    globalIndex += linesToRead;
    dimensions = parseDimensions(lines[globalIndex]);
  }

  return output;
};
