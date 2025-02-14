enum Directions {
    North = "North"
}

export function navigateRobot(cmd?: string) {
  const directions = [Directions.North, 'East', 'South', 'West'];
  let directionIndex = 0;
  let position = [0, 0];

  for (const command of cmd || []) {
      if (command === 'L') {
        directionIndex = (directionIndex + 3) % 4;
      } else if (command === 'R') {
        directionIndex = (directionIndex + 1) % 4;
      } else if (command === 'M') {
          let [x,y] = position
          if (directions[directionIndex] === Directions.North) y += 1;
          if (directions[directionIndex] === "West") x -= 1;

        position = [x, y]
      }
  }

    return {
        position,
        direction: directions[directionIndex]
    }
}
