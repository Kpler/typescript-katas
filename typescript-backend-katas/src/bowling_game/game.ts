export class Game {
    rolls: number[] = []
    currentScore: number = 0

    score(): number {
        for (let i = 0; i < this.rolls.length; i++){
            this.currentScore += this.rolls[i]
            const isSpare = i > 0 && i % 2 != 0
                && this.rolls[i-1] + this.rolls[i-2] == 10
            console.log.("this is the score", this.currentScore)
            if (isSpare){
            console.log.("we have a spare")
                this.currentScore += this.rolls[i]
                }
        }
        return this.currentScore
    }

    roll(pins: number) {
        this.rolls.push(pins)
    }
}
