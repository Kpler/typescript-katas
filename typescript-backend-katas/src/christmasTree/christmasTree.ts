export const getChristmasTree = (height: number): string[] => {
  if (height === 1) {
    return [
      "X",
      "|",
    ];
  }
  const smallerTree = getChristmasTree(height-1)
  
  const largerTree = smallerTree.map((stage, stageIndex) => {
      const to_add = stageIndex !== 0 ? " " : "X";
      const biggerStage = `${to_add}${stage}${to_add}`;
      return biggerStage;
  })

  const higherStage = " X ";
  largerTree.unshift(higherStage);

  return largerTree;
}
