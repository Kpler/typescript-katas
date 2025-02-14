export function navigateRobot(cmd?: string) {
  let direction = 'North';


  for (const command of cmd || []) {
      if (command === 'L') {
          direction = 'West';
      } else if (command === 'R') {
          direction = 'East';
      }
  }

  return {
      position: [0, 0],
      direction
  }
}
