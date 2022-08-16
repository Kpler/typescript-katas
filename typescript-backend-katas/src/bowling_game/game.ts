export class Game {
  frames: number[][] = [[]];

  score(): number {
    let currentScore = 0;

    for (let frameIndex = 0; frameIndex < this.frames.length; frameIndex++) {
        const currentFrame = this.frames[frameIndex];
      for (let rollIndex = 0; rollIndex < currentFrame.length; rollIndex++) {
        // If it's a odd roll and the last rolls score is ten, then it's a spare
        if (rollIndex%2 === 1 && currentFrame[rollIndex] + currentFrame[rollIndex-1] === 10){
            currentScore += currentFrame[rollIndex+1];
        }
        currentScore += currentFrame[rollIndex];
      }
    }
    return currentScore;
  }

  // TODO: modify the roll method to update not only the first frame
  roll(pins: number) {
    const lastFrame = this.frames[this.frames.length-1]
    lastFrame.push(pins);
  }
}
