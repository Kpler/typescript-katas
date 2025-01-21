const enum Actions {
    LEFT = 'L',
    RIGHT = 'R'
}

export function navigateRobot(actions?: string) {
    let direction = 'North'

    if (actions === Actions.LEFT) {
        direction = 'West';
    } else if (actions === Actions.RIGHT) {
        direction = 'East';
    }

    return {position: [0, 0], direction};
}