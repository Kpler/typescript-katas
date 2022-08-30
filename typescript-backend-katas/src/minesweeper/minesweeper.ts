export const createMatrice = (rowsNumber: number, colsNumber: number, mines: number[][] ): string[][] => {
  const result: string[][] = [];
  for (let row=0; row<rowsNumber; row++) {
    const currentRow: string[] = [];
    result.push(currentRow);
    for (let col=0; col<colsNumber; col++) {
      currentRow.push(".");
    }
  };
  mines.forEach(([x,y]) => {
    result[x][y] = '*';
  })
  return result;
}
