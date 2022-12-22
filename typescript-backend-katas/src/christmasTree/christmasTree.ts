export function buildChristmasTree(height: number): string {
  if (height === 1) {
    return "X\n|";
  }

  const treeRows = [];
  for (let i = 0; i < height; i++) {
    const row = buildRow(height, i);
    treeRows.push(row);
  }

  return 'X';
}

export function buildRow(height: number, rowNumber: number): string {
  // if (rowNumber === height - 1) {
  //   return "|";
  // }
  const numberOfSpaces = height - rowNumber - 1;

  return `${" ".repeat(numberOfSpaces)}${"X".repeat(rowNumber * 2 + 1)}${" ".repeat(numberOfSpaces)}`;
}

export function buildTrunk(height: number): string {

  const numberOfSpaces = height - 1;

  return `${" ".repeat(numberOfSpaces)}|${" ".repeat(numberOfSpaces)}`
}

`
Height = 3
    X
   XXX
  XXXXX
    |

rowNum = 0 --> 1 X
rowNum = 1 --> 3 X
rowNum = 2 --> 5 X
rowNum == height --> |
`
