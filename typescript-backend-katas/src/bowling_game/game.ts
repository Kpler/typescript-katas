export class Game {
    #currentScore: number = 0;

    score(): number {
        return this.#currentScore;
    }

    roll(number: number) {
        this.#currentScore += number;
    }
}
