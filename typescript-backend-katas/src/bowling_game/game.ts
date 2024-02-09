export default class Game {
    #currentScore: number;
    #currentFrame: number[];
    #nextRollMultiplyBy: number;
    #nextTwoRollsMultiplyBy: number;
    #frameCount: number;

    constructor() {
        this.#currentScore = 0;
        this.#currentFrame = [];
        this.#nextRollMultiplyBy = 1;
        this.#nextTwoRollsMultiplyBy = 1;
        this.#frameCount = 1;
    }

    score() {
        return this.#currentScore;
    }

    roll(pinCount: number) {
        if(this.#isFrameFinished()) {
            this.#currentFrame = [];
            this.#frameCount++;
        }

        this.#currentScore += pinCount * this.#nextRollMultiplyBy;

        this.#nextRollMultiplyBy = this.#nextTwoRollsMultiplyBy;
        this.#nextTwoRollsMultiplyBy = 1;

        if(!this.#isGameFinished()) {
            this.#currentFrame = [...this.#currentFrame, pinCount];
            if(this.#getCurrentFrameScore() === 10) {
                this.#nextRollMultiplyBy += 1;
                if(this.#currentFrame.length === 1) {
                    this.#nextTwoRollsMultiplyBy += 1;
                }
            }
        }

    }

    #getCurrentFrameScore() {
        return this.#currentFrame.reduce((sum, count) => sum + count, 0)
    }

    #isFrameFinished() {
        return this.#currentFrame.length === 2 || this.#getCurrentFrameScore() === 10;
    }

    #isGameFinished() {
        return this.#frameCount === 10;
    }
}
