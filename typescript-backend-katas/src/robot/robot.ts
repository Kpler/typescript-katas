export function navigateRobot(cmd?: string) {
  const directions = ['North', 'East', 'South', 'West'];
  let directionIndex = 0;

  for (const command of cmd || []) {
      if (command === 'L') {
        directionIndex = (directionIndex + 3) % 4;
      } else if (command === 'R') {
        directionIndex = (directionIndex + 1) % 4;
      }
  }

  return {
      position: [0, 0],
      direction: directions[directionIndex]
  }
}
