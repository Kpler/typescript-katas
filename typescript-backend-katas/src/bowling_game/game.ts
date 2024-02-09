enum RollTypes {
    Strike,
    Spare,
    Open
}

export class Game {
    #currentScore: number = 0;
    #frames: Array<{ roll1?: number, roll2?: number }> = [];

    score(): number {
        if (this.#frames.length === 0) {
            return 0;
        }
        return this.#frames.reduce(({sum, lastRollType}, currentFrame) => {
            const roll1ScoreFactor = lastRollType === RollTypes.Spare ? 2 : 1
            const currentSum = sum + (currentFrame.roll1 ?? 0) * roll1ScoreFactor + (currentFrame.roll2 ?? 0)
            return {sum: currentSum, lastRollType: this.#computeRollType(currentFrame)}
        }, {sum: 0, lastRollType: RollTypes.Open}).sum;
    }

    #computeRollType(currentFrame: { roll1?: number; roll2?: number }) {
        return (currentFrame.roll1 ?? 0) + (currentFrame.roll2 ?? 0) === 10
            ? RollTypes.Spare
            : RollTypes.Open
    }

    roll(number: number) {
        if(this.#frames.length === 0) {
            this.#frames.push(this.#createFrame(number));
            return;
        }

        const currentFrame = this.#frames[this.#frames.length - 1];

        if (currentFrame.roll2 === undefined) {
            currentFrame.roll2 = number;
            return;
        }

        this.#frames.push(this.#createFrame(number));
    }

    #createFrame(roll1: number) {
        return {roll1, roll2: undefined};
    }
}
