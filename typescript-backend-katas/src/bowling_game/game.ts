export class Game {
    #currentScore: number = 0;
    #frames: Array<{roll1: number, roll2?: number}> = [];

    score(): number {
        return this.#currentScore;
    }

    roll(number: number) {
        const currentFrame = this.#frames[this.#frames.length - 1];
        if (currentFrame.roll2 === undefined) {
            currentFrame.roll2 = number
        } else {
            this.#frames.push({roll1: number, roll2: undefined})
        }
    }
}
