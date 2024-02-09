enum RollTypes {
    Strike,
    Spare,
    Open
}

export class Game {
    #currentScore: number = 0;
    #frames: Array<{roll1?: number, roll2?: number}> = [
        {
            roll1: undefined,
            roll2: undefined,
        }
    ];

    score(): number {
        if(this.#frames.length === 0) {
            return 0;
        }
        return this.#frames.reduce(({sum, lastRollType}, currentFrame) => {
            let currentSum
            if(lastRollType === RollTypes.Spare)
                currentSum = sum + (currentFrame.roll1 ?? 0) * 2 + (currentFrame.roll2 ?? 0)
            else
                currentSum = sum + (currentFrame.roll1 ?? 0) + (currentFrame.roll2 ?? 0)
            const rollType = (currentFrame.roll1 ?? 0) + (currentFrame.roll2 ?? 0) === 10 ? RollTypes.Spare : RollTypes.Open
            return {sum: currentSum, lastRollType: rollType}
        }, {sum: 0, lastRollType: RollTypes.Open}).sum;
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
