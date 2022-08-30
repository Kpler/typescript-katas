export const createMatrice = (rowsNumber: number, colsNumber: number, mines: number[][] ): string[][] => {
  const result: string[][] = [];
  for (let row=0; row++; row<rowsNumber) {
    const currentRow: string[] = [];
    result.push(currentRow);
    for (let col=0; col++; col<colsNumber) {
      currentRow.push(".");
    }
  }
  return result;
}
