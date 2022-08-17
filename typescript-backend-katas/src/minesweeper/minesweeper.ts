export const generateField = (rowsNumber: number, colsNumber: number, minesPositions: number[][]) => {
  const result = [];
  for (let rowIdx=0 ; rowIdx < rowsNumber ; rowIdx++) {
    for (let colIdx=0 ; colIdx < colsNumber ; colIdx++) {
      result.push(minesPositions.includes([rowIdx, colIdx]) ? 1 : 0)
    }
  }
  return result;
}
