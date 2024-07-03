export function createDiamond(level: number = 1) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  if (level === 1) {
    return "A";
  }

  // for (let levelIndex = 0; levelIndex < level; levelIndex++) {
  //     if (levelIndex === 0) {
  //         return "A";
  //     }

  if (level === 2) {
    const firstLetter = characters[level - 1];
    for (let i = 0; i < level; i++) {
      if (i === 0) {
        return `*${firstLetter}*`;
      }
    }
  }
}
