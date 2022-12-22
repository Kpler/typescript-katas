export function buildChristmasTree(height: number): string {
  if (height === 1) {
    return "X\n|";
  }

  const treeRows = [];
  for (let i = 0; i < height; i++) {
    const row = buildRow(height, i);
    treeRows.push(row);
  }
}

export function buildRow(height: number, row_number: number): string {
  return "X";
}