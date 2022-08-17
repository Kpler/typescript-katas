export const generateField = (rowsNumber: number, colsNumber: number, minesPositions: number[][]) => {
  const result: number[][] = [];

  for (let rowIdx=0 ; rowIdx < rowsNumber ; rowIdx++) {
    for (let colIdx=0 ; colIdx < colsNumber ; colIdx++) {
      result.push(minesPositions.find(([mineX, mineY]) => mineX === rowIdx && mineY === colIdx) ? 1 : 0)
    }
  }

  return result;
}

// export const renderField = (field: number[]) => {}