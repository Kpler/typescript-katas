export class Game {
  rolls: number[] = [];

  currentScore: number = 0;

  score(): number {
    let bonus = 0;

    for (let i = 0; i < this.rolls.length; i++) {

      // if last even pair of numbers sums to 10:
      //   ???
      if (i%2 == 1){
        if (this.rolls[i] + this.rolls[i-1] == 10) {
          this.currentScore += this.rolls[i+1];
        }
      }

      this.currentScore += this.rolls[i];
    }
    return this.currentScore;
  }

  roll(pins: number) {
    this.rolls.push(pins);
  }
}
