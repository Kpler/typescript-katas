export class Game {
  rolls: number[] = [];
  frames: number[][] = [[]];

  score(): number {
    let currentScore = 0;

    for (let i = 0; i < this.frames.length; i++) {
      for (let j = 0; j < this.frames[i].length; j++) {
        
        
      }
      // If it's a odd roll and the last rolls score is ten, then it's a spare
      if (i%2 === 1 && this.rolls[i] + this.rolls[i-1] === 10){
        currentScore += this.rolls[i+1];
      }

      currentScore += this.rolls[i];
    }
    return currentScore;
  }

  roll(pins: number) {
    const lastFrame = this.frames[this.frames.length-1]
    lastFrame.push(pins);
  }
}
