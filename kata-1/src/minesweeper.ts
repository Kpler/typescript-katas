interface FieldDimension {
  rows: number;
  cols: number;
}

class Minesweeper {
  constructor(public readonly dimensions: Readonly<FieldDimension>) {}
}

const parseDimensions = (line: string): FieldDimension => {
  const [rows, cols] = line.split(" ").map((x) => Number(x));
  return { rows, cols };
};

export const parseMinesweepers = (input: string): Minesweeper[] => {
  const byLine = input.split("\n");
  let globalIndex = 0;
  const instruction = parseDimensions(byLine[globalIndex]);

  let linesToRead = instruction.rows;
  const output: Minesweeper[] = [];

  while (linesToRead > 0) {
    // debugger;
    globalIndex += 1;
    const minesweeperLines = byLine.slice(
      globalIndex,
      globalIndex + linesToRead
    );
    output.push(new Minesweeper());

    globalIndex += linesToRead;
    linesToRead = parseDimensions(byLine[globalIndex]).rows;
  }

  return output;
};
