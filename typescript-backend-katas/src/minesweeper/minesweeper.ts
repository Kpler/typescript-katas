export const generateField = (rowsNumber: number, colsNumber: number, minesPositions: number[][]): number[][] => {
  const result: number[][] = [];

  for (let rowIdx=0 ; rowIdx < rowsNumber ; rowIdx++) {
    const currentRow = [];
    for (let colIdx=0 ; colIdx < colsNumber ; colIdx++) {
      currentRow.push(minesPositions.find(([mineX, mineY]) => mineX === rowIdx && mineY === colIdx) ? 1 : 0)
    }
    result.push(currentRow);
  }

  return result;
}

export const renderField = (field: number[][]): string => {
  return field.map(row => row.join("")).join("\n");
}
