export class Game {
    rolls: number[] = []
    currentScore: number = 0

    score(): number {
        for (let i = 0; i < this.rolls.length; i++){
            this.currentScore += this.rolls[i]
        }
        return this.currentScore
    }

    roll(pins: number) {
        this.rolls.push(pins)
    }
}
