export function createDiamond(level: number = 1) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    if (level === 1) {
        return "A";
    }

    for (let levelIndex = 0; levelIndex < level; levelIndex++) {
        if (levelIndex === 0) {
            return "A";
        }

        
    }
}