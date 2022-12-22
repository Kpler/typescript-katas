export const getChristmasTree = (height: number): string[] => {
  if (height === 1) {
    return [
      "X",
      "|",
    ];
  }
  const newHeight = height - 1 
  const smallerTree = getChristmasTree(newHeight)
  
  const largerTree = smallerTree.map((stage, stageIndex) => {
      const to_add = stageIndex !== 0 ? " " : "X";
      const biggerStage = `${to_add}${stage}${to_add}`;
      return biggerStage;
  })

  let spaceToAdd = "";
  for (let i = 1; i <= newHeight; i++) {
    spaceToAdd += " ";
  }
  
  const higherStage = `${spaceToAdd}X${spaceToAdd}`;
  largerTree.unshift(higherStage);

  return largerTree;
}
