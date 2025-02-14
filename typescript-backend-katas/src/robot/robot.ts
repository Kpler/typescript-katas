type Position = [number, number];
type Direction = "North" | "East" | "South" | "West";

enum CARDINAL_DIRECTIONS {
    NORTH = "North",
    WEST = "West",
    SOUTH = "South",
    EAST = "East"
}


interface RobotState {
    position: Position;
    direction: Direction;
}

export function navigateRobot(commands: string) {
    const state: RobotState = {
        position: [0, 0],
        direction: CARDINAL_DIRECTIONS.NORTH
    };

    commands.split("").forEach(command => {
        if (command === 'L') {
            rotateLeft(state);
        } else if (command === 'R') {
            rotateRight(state);
        } else if (command === 'M') {
            move(state);
        }

    });

    return state;
}

function move(state: RobotState) {
    switch (state.direction) {
        case CARDINAL_DIRECTIONS.NORTH:
            state.position[1]++;
            break;
        case CARDINAL_DIRECTIONS.EAST:
            state.position[0]++;
            break;
        case CARDINAL_DIRECTIONS.SOUTH:
            state.position[1]--;
            break;
        case CARDINAL_DIRECTIONS.WEST:
            state.position[0]--;
            break;
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
        case "North":
            state.direction = "East";
            break;
        case "East":
            state.direction = "South";
            break;
        case "South":
            state.direction = "West";
            break;
        case "West":
            state.direction = "North"
            break;
    }
}


