export function navigateRobot(positionArgs?: string) {
    return positionArgs ? { position: [0, 0], direction: "West" } : { position: [0, 0], direction: "North" };
}