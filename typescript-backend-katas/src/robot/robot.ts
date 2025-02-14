export function navigateRobot(cmd?: string) {
  let direction = 'North';
  if (cmd === 'L') {
    direction = 'West';
  } else if (cmd === 'R') {
    direction = 'East';
  }
  return {
      position: [0, 0],
      direction: cmd ? 'West' : 'North'
  }
}
