export class Game {
    rolls: number[] = []
    currentScore: number = 0

    score(): number {
        for (let i = 0; i < this.rolls.length; i++) {
            this.currentScore += this.rolls[i]
            if (this.isSpare(i)) {
                this.currentScore += this.rolls[i]
            }
        }
        return this.currentScore
    }

    roll(pins: number) {
        this.rolls.push(pins)
    }

    private isSpare(i: number): boolean {
        return i > 0 && i % 2 == 0
                && this.rolls[i-1] + this.rolls[i-2] == 10
    }
}
