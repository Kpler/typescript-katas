const enum Actions {
    Left = 'L',
    Right = 'R',
    Move = 'M'
}

enum Direction {
    North = "North",
    East = 'East',
    West = "West",
}


export function navigateRobot(actions?: string) {
    let direction = Direction.North
    let position = [0, 0];

    for (const action of actions || []) {
        if (action === Actions.Left) {
            direction = Direction.West;
        } else if (action === Actions.Right) {
            direction = Direction.East;
        } else if (action === Actions.Move) {
            if (direction === Direction.North) {
                position = [0, 1]
            } else if (direction === Direction.West) {
                position = [-1, 0]
            }
        }
    }

    return {position, direction};
}