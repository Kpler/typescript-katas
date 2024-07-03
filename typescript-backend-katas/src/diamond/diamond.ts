export function createDiamond(level: number = 1) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let output: string = "";
  let outputArray: string[] = [];
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
        const letter = `*${characters[i]}*`;
        outputArray.push(letter);
      } else {
        const letter = `${characters[i]}*${characters[i]}`;
        outputArray.push(letter);
      }
    }
  }

  const revercedList = outputArray.reverse().slice(1);
    console.log(revercedList);
  const resultArray = outputArray.concat(revercedList.slice(0).reverse())
  return resultArray.join('-');
}
