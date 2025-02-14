enum Directions {
    North = "North",
    East = "East",
    South = "South",
    West = "West"
}

type Position = [number, number];

export function navigateRobot(cmd?: string, obstacles?: Array<Position>) {
  const directions = [Directions.North, Directions.East, Directions.South, Directions.West];
  let directionIndex = 0;
  let position = [0, 0];
  const errorMessage = 'Obstacle encountered';


  for (const command of cmd || []) {
      if (command === 'L') {
        directionIndex = (directionIndex + 3) % 4;
      } else if (command === 'R') {
        directionIndex = (directionIndex + 1) % 4;
      } else if (command === 'M') {
          let [x,y] = position
          if (directions[directionIndex] === Directions.North) y += 1;
          if (directions[directionIndex] === Directions.West) x -= 1;
          if (directions[directionIndex] === Directions.East) x += 1;
          if (directions[directionIndex] === Directions.South) y -= 1;

          if (obstacles && obstacles.find(([ox, oy]) => ox === x && oy === y)) {
              return {
                  position,
                  direction: directions[directionIndex],
                  status: errorMessage
              }
          }

        position = [x, y]
      }
  }

    return {
        position,
        direction: directions[directionIndex]
    }
}
