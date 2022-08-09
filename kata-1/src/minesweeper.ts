class MineSweeper {
}

export const splitInputInFields = (input: string): MineSweeper[] => {
  const byLine = input.split("\n");
  const instruction = byLine[0]

  return []
};

const parseField = (line: string): [number, number] => {
  return line.split(' ').map(x => Number(x)) as [number, number]
}
