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
        if( command === 'L'){
            rotateLeft(state);
        }

    });

    return state;
}

function rotateLeft(state: RobotState) {
    switch (state.direction){
        case "North": 
            state.direction = "East";
            break;
        case "East": state.direction = "South"
        case "South": state.direction = "West"
        case "West": state.direction = "North"
    }
}

