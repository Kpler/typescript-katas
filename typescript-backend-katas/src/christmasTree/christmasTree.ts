export const getChristmasTree = (height: number): string[] => {
  if (height === 1) {
    return [
      "X",
      "|",
    ];
  }
  
  return getChristmasTree(height-1)
}
