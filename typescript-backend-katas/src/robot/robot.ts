type Position = [number, number];
type Direction = "North" | "East" | "South" | "West";

interface RobotState {
    position: Position;
    direction: Direction;
}

export function navigateRobot(commands: string) {
    const state: RobotState = {
        position: [0, 0],
        direction: "North"
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
        case "North":
            state.position[1]++;
            break;
        case "East":
            state.position[0]++;
            break;
        case "South":
            state.position[1]--;
            break;
        case "West":
            state.position[0]--;
            break;
    }
}

function rotateLeft(state: RobotState) {
    switch (state.direction) {
        case "North":
            state.direction = "West";
            break;
        case "East":
            state.direction = "North";
            break;
        case "South":
            state.direction = "East";
            break;
        case "West":
            state.direction = "South"
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


