const enum Actions {
    Left = 'L',
    Right = 'R',
    Move = 'M'
}

export function navigateRobot(actions?: string) {
    let direction = 'North'
    let position = [0, 0];

    for (const action of actions || []) {
        if (actions === Actions.Left) {
            direction = 'West';
        } else if (actions === Actions.Right) {
            direction = 'East';
        } else if (actions === Actions.Move) {
            position = [0, 1];
            return {position, direction};
        }
    }

    return {position: [0, 0], direction};
}