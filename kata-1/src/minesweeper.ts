class MineSweeper {
}

const parseDimensions = (line: string): [number, number] => {
  return line.split(' ').map(x => Number(x)) as [number, number]
}

export const splitInputInFields = (input: string): MineSweeper[] => {
  const byLine = input.split("\n");
  let globalIndex = 0;
  const instruction = parseDimensions(byLine[globalIndex]);
  
  let linesToRead = instruction[0];
  const output = [];

  while (linesToRead > 0) {
    debugger;
    globalIndex += 1;
    const mineSweeperLines = byLine.slice(globalIndex, globalIndex + linesToRead);
    output.push(new MineSweeper());

    globalIndex += linesToRead;
    linesToRead = parseDimensions(byLine[globalIndex])[0];

    // slice input as we know dimensions
    // store in an array
    // update global index with how many lines we've just read


    // const currentLine = byLine[globalIndex];
    // linesToRead--;
  }

  return output
};
