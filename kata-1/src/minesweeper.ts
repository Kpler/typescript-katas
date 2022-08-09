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

  while (linesToRead > 0) {
    // slice input as we know dimensions
    // store in an array
    // update global index with how many lines we've just read


    globalIndex++;
    const currentLine = byLine[globalIndex];
    linesToRead--;
  }

  return []
};
