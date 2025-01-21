export function navigateRobot(actions?: string) {
    let direction = 'North'
    return {position: [0, 0], direction: actions ? "West" : "North"}
}