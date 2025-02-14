export type Position = [number, number];
type Direction = "North" | "East" | "South" | "West";

enum CARDINAL_DIRECTIONS {
    NORTH = "North",
    WEST = "West",
    SOUTH = "South",
    EAST = "East"
}

export const OBSTACLE_ENCOUNTERED = "Obstacle encountered";
interface RobotState {
    position: Position;
    direction: Direction;
    status?: string;
}

export function navigateRobot(
    commands: string,
    obstacles: Position[] = []
): RobotState {
    const state: RobotState = {
        position: [0, 0],
        direction: CARDINAL_DIRECTIONS.NORTH,
        status: undefined
    };
    try {
        commands.split("").forEach(command => {
            if (command === 'L') {
                rotateLeft(state);
            } else if (command === 'R') {
                rotateRight(state);
            } else if (command === 'M') {
                move(state, obstacles);
            }
        });
    } catch (error: any) {
        state.status = error.message
    }

    return state;
}

function move(state: RobotState, obstacles: Position[]) {
    let newPos = [state.position[0], state.position[1]] as Position;
    switch (state.direction) {
        case CARDINAL_DIRECTIONS.NORTH:
            newPos[1]++;
            break;
        case CARDINAL_DIRECTIONS.EAST:
            newPos[0]++;
            break;
        case CARDINAL_DIRECTIONS.SOUTH:
            newPos[1]--;
            break;
        case CARDINAL_DIRECTIONS.WEST:
            newPos[0]--;
            break;
    }

    if (obstacles.some(([x, y]) => newPos[0] === x && newPos[1] === y)) {
        throw Error(OBSTACLE_ENCOUNTERED)
    } else {
        state.position = newPos;
    }
}

function rotateLeft(state: RobotState) {
    switch (state.direction) {
        case CARDINAL_DIRECTIONS.NORTH:
            state.direction = CARDINAL_DIRECTIONS.WEST;
            break;
        case CARDINAL_DIRECTIONS.EAST:
            state.direction = CARDINAL_DIRECTIONS.NORTH;
            break;
        case CARDINAL_DIRECTIONS.SOUTH:
            state.direction = CARDINAL_DIRECTIONS.EAST;
            break;
        case CARDINAL_DIRECTIONS.WEST:
            state.direction = CARDINAL_DIRECTIONS.SOUTH
            break;
    }
}


function rotateRight(state: RobotState) {
    switch (state.direction) {
        case CARDINAL_DIRECTIONS.NORTH:
            state.direction = CARDINAL_DIRECTIONS.EAST;
            break;
        case CARDINAL_DIRECTIONS.EAST:
            state.direction = CARDINAL_DIRECTIONS.SOUTH;
            break;
        case CARDINAL_DIRECTIONS.SOUTH:
            state.direction = CARDINAL_DIRECTIONS.WEST;
            break;
        case CARDINAL_DIRECTIONS.WEST:
            state.direction = CARDINAL_DIRECTIONS.NORTH
            break;
    }
}


