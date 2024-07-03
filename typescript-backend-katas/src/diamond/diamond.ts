export function createDiamond(level: number = 1) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let output: string = "";
  if (level === 1) {
    output += "A";
  }

  // for (let levelIndex = 0; levelIndex < level; levelIndex++) {
  //     if (levelIndex === 0) {
  //         return "A";
  //     }

  if (level === 2) {
    // const firstLetter = characters[level - 2];
    for (let i = 0; i < level; i++) {
      if (i === 0) {
        output.concat(`*${characters[i]}*-`);
      } else {
        output.concat(`${characters[i]}*${characters[i]}`);
      }
    }
  }
  return output;
}
