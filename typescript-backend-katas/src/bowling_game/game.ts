export class Game {
    #currentScore: number = 0;
    #frames: Array<{roll1: number, roll2?: number}> = [];

    score(): number {
        if(this.#frames.length === 0) {
            return 0;
        }
        return this.#frames.reduce((sum, currentFrame) => {
            return sum + currentFrame.roll1 + (currentFrame.roll2 ?? 0)
        }, 0);
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
