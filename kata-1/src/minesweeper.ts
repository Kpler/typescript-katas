interface Dimensions {
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
    readonly dimensions: Readonly<Dimensions>,
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
    dimensions: Readonly<Dimensions>,
    rawLines: string[]
  ): Minesweeper {
    const mines = rawLines.flatMap((line, rowIndex) => {
      return line
        .split("")
        .map((char, columnIndex): [string, number, number] => {
          return [char, rowIndex, columnIndex];
        })
        .filter(([char]) => char === "*")
        .map(([, row, column]) => ({ row, column }));
    });

    return new Minesweeper(dimensions, mines);
  }

  #hasMine(row: number, column: number): boolean {
    return this.#mineLocations.get(row)?.has(column) === true;
  }

  #getBoundedValue(row: number, column: number): number {
    if (
      row < 0 ||
      column < 0 ||
      row > this.dimensions.rows ||
      column > this.dimensions.columns
    ) {
      return 0;
    }

    return this.#hasMine(row, column) ? 1 : 0;
  }

  #countNeighborMines(row: number, column: number): number {
    const neighborsCoordinates: Position[] = [
      { row: -1, column: -1 },
      { row: 0, column: -1 },
      { row: 1, column: -1 },
      { row: -1, column: 0 },
      { row: 1, column: 0 },
      { row: -1, column: 1 },
      { row: 0, column: 1 },
      { row: 1, column: 1 },
    ];

    return neighborsCoordinates.reduce((acc, { row: x, column: y }) => {
      return acc + this.#getBoundedValue(row + x, column + y);
    }, 0);
  }

  toDisplay(): string {
    const rows = [];
    for (let i = 0; i < this.dimensions.rows; i++) {
      let row = "";
      for (let j = 0; j < this.dimensions.columns; j++) {
        const neightborMines = this.#countNeighborMines(i, j);
        row += this.#hasMine(i, j) ? "*" : neightborMines.toString();
      }
      rows.push(row);
    }

    return rows.join("\n");
  }
}

const parseDimensions = (line: string): Dimensions => {
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

export const kataResult = (input: string): string => {
  const minesweepers = parseMinesweepers(input);

  const lines = minesweepers.flatMap((minesweeper, index) => {
    const padding = index > 0 ? [""] : [];
    return [...padding, `Field #${index + 1}:`, minesweeper.toDisplay()];
  });

  return lines.join("\n");
};
