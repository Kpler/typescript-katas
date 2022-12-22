export const getChristmasTree = (height: number): string[] => {
  if (height === 1) {
    return [
      "X",
      "|",
    ];
  }
  const smallTree = getChristmasTree(height-1)
  
  return smallTree.forEach((stage, stageIndex) => {
      if (stageIndex === 0) {
        stage.unshift(" ");
        stage.push(" ");
      }
      else {
        stage.unshift("X");
        stage.push("X");
      }
  })
}
